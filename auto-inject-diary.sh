#!/bin/bash

get_file_epoch() {
    local target="$1"
    if stat -c %Y "$target" >/dev/null 2>&1; then
        stat -c %Y "$target"
    else
        stat -f %m "$target"
    fi
}

format_date() {
    local epoch="$1" format="$2"
    if date -d "@${epoch}" +"%Y" >/dev/null 2>&1; then
        date -d "@${epoch}" +"${format}"
    else
        date -u -r "${epoch}" +"${format}"
    fi
}

parse_date_to_epoch() {
    local value="$1"
    if date -d "$value" +%s >/dev/null 2>&1; then
        date -d "$value" +%s
    else
        date -ujf "%Y-%m-%dT%H:%M:%S%z" "$value" +%s 2>/dev/null
    fi
}

# Auto-inject frontmatter for markdown files from uconGPT/eng2Fix/kor2fix
# This script monitors the source directory and injects Jekyll frontmatter
# to make files appear in "From Wiki & Diary (tagged)" section

# Configuration with optional flags
SOURCE_DIR="D:/repos/aiegoo/uconGPT/eng2Fix/kor2fix"
DEST_DIR="_wiki/diary/2025"
WATCH_MODE="false"
SINCE_VALUE=""
RESET_BASELINE="false"

while [[ $# -gt 0 ]]; do
    case "$1" in
        --source)
            SOURCE_DIR="$2"
            shift 2
            ;;
        --dest|--destination)
            DEST_DIR="$2"
            shift 2
            ;;
        --watch)
            WATCH_MODE="true"
            shift
            ;;
        --since)
            SINCE_VALUE="$2"
            shift 2
            ;;
        --reset-baseline)
            RESET_BASELINE="true"
            shift
            ;;
        *)
            # Preserve backward compatibility with positional args
            if [[ -z "$POS_SOURCE" ]]; then
                POS_SOURCE="$1"
            elif [[ -z "$POS_DEST" ]]; then
                POS_DEST="$1"
            elif [[ -z "$POS_WATCH" ]]; then
                POS_WATCH="$1"
            fi
            shift
            ;;
    esac
done

if [[ -n "$POS_SOURCE" ]]; then
    SOURCE_DIR="$POS_SOURCE"
fi
if [[ -n "$POS_DEST" ]]; then
    DEST_DIR="$POS_DEST"
fi
if [[ -n "$POS_WATCH" ]]; then
    WATCH_MODE="$POS_WATCH"
fi

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEST_PATH="$SCRIPT_DIR/$DEST_DIR"

STATE_DIR="$SCRIPT_DIR/var"
STATE_FILE="$STATE_DIR/auto-import-last-run.txt"

mkdir -p "$STATE_DIR"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
CYAN='\033[0;36m'
GRAY='\033[0;37m'
MAGENTA='\033[0;35m'
NC='\033[0m' # No Color

# Ensure destination directory exists
mkdir -p "$DEST_PATH"

if [[ "$RESET_BASELINE" == "true" ]]; then
    LAST_RUN_EPOCH=0
else
    if [[ -f "$STATE_FILE" ]]; then
        LAST_RUN_RAW="$(<"$STATE_FILE")"
        LAST_RUN_EPOCH=$(parse_date_to_epoch "$LAST_RUN_RAW")
    fi
fi

if [[ -z "$LAST_RUN_EPOCH" ]]; then
    LAST_RUN_EPOCH=0
fi

if [[ -n "$SINCE_VALUE" ]]; then
        since_epoch=$(parse_date_to_epoch "$SINCE_VALUE")
    if [[ -z "$since_epoch" ]]; then
        echo -e "${RED}Error: Unable to parse --since value '$SINCE_VALUE'. Use ISO format like 2025-10-08T09:23:51+09:00.${NC}" >&2
        exit 1
    fi
    LAST_RUN_EPOCH=$since_epoch
fi

if [[ "$RESET_BASELINE" == "true" ]]; then
    echo -e "${YELLOW}Baseline reset; all source files will be reconsidered.${NC}"
elif [[ -n "$SINCE_VALUE" ]]; then
    echo -e "${YELLOW}Baseline overridden to $(format_date "$LAST_RUN_EPOCH" "%Y-%m-%d %H:%M:%S %Z").${NC}"
fi

if (( LAST_RUN_EPOCH == 0 )) && [[ -d "$DEST_PATH" ]]; then
    detected_epoch=0
    while IFS= read -r -d '' dest_file; do
        epoch=$(get_file_epoch "$dest_file")
        if [[ -n "$epoch" ]] && (( epoch > detected_epoch )); then
            detected_epoch=$epoch
        fi
    done < <(find "$DEST_PATH" -type f -name "*.md" -print0 2>/dev/null)
    if (( detected_epoch > 0 )); then
        LAST_RUN_EPOCH=$detected_epoch
    fi
fi

MAX_PROCESSED_EPOCH=$LAST_RUN_EPOCH
BASELINE_EPOCH=$LAST_RUN_EPOCH

save_last_run() {
    local epoch="$1"
    if [[ -z "$epoch" ]]; then
        return
    fi
    if (( epoch > MAX_PROCESSED_EPOCH )); then
        MAX_PROCESSED_EPOCH=$epoch
    fi
    if (( MAX_PROCESSED_EPOCH > LAST_RUN_EPOCH )); then
        format_date "$MAX_PROCESSED_EPOCH" "%Y-%m-%dT%H:%M:%SZ" > "$STATE_FILE"
        LAST_RUN_EPOCH=$MAX_PROCESSED_EPOCH
    fi
}

# Function to clean filename for URL-safe permalink
get_safe_filename() {
    local filename="$1"
    # Remove extension
    basename="${filename%.*}"
    # Replace spaces and special chars with hyphens, convert to lowercase
    echo "$basename" | sed 's/[^a-zA-Z0-9]/-/g' | sed 's/--*/-/g' | sed 's/^-\|-$//g' | tr '[:upper:]' '[:lower:]'
}

# Function to create title from filename
get_title_from_filename() {
    local filename="$1"
    basename="${filename%.*}"
    # Replace hyphens/underscores with spaces and title case
    echo "$basename" | sed 's/[-_]/ /g' | sed 's/\b\w/\U&/g'
}

# Function to inject frontmatter
inject_frontmatter() {
    local source_file="$1"
    local dest_dir="$2"
    
    if [[ ! -f "$source_file" ]]; then
        echo -e "${RED}Error: Source file does not exist: $source_file${NC}"
        return 1
    fi
    
    # Get file info
    filename=$(basename "$source_file")
    safe_filename=$(get_safe_filename "$filename")
    title=$(get_title_from_filename "$filename")
    source_epoch=$(get_file_epoch "$source_file")

    if [[ -z "$source_epoch" ]]; then
        echo -e "${RED}Error: Unable to read timestamp for $source_file${NC}"
        return 1
    fi

    local baseline=${BASELINE_EPOCH:-$LAST_RUN_EPOCH}
    if (( source_epoch <= baseline )); then
        echo -e "${YELLOW}Skipping $filename (no newer changes since last run).${NC}"
        return 1
    fi
    
    # Generate dates from source timestamp
    date=$(format_date "$source_epoch" "%Y-%m-%dT%H:%M:%S")
    offset=$(format_date "$source_epoch" "%z")
    updated=$(format_date "$source_epoch" "%Y-%m-%d %H:%M")
    journal=$(format_date "$source_epoch" "%a, %b %d, %y")
    filename_date_prefix=$(format_date "$source_epoch" "%Y-%m-%d")
    source_last_modified=$(format_date "$source_epoch" "%Y-%m-%dT%H:%M:%S%z")
    
    # Create permalink
    permalink="${filename_date_prefix}-${safe_filename}.html"
    
    # Check if file already has frontmatter
    if head -1 "$source_file" | grep -q "^---"; then
        echo -e "${YELLOW}Warning: File $filename already has frontmatter. Skipping.${NC}"
        return 1
    fi
    
    # Create destination filename
    dest_filename="${filename_date_prefix}-${safe_filename}.md"
    dest_file_path="$dest_dir/$dest_filename"

    {
    cat << EOF
---
layout: post
title: "$title"
name: "$safe_filename"
tags: [ai nlp likelion updates news announcements]
permalink: $permalink
sidebar: other_sidebar
folder: diary
categories: [diary]
keywords: "ai nlp likelion updates news announcements automation"
summary: "$journal, $title - Auto-imported from uconGPT project"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: $date $offset
updated: $updated
source_file: "$filename"
source_last_modified: "$source_last_modified"
auto_imported: true
---
* TOC
{:toc}

> **Auto-imported from**: \`$source_file\`  
> **Original filename**: \`$filename\`  
> **Import date**: $journal

<!--more-->

EOF
    cat "$source_file"
    } > "$dest_file_path"
    save_last_run "$source_epoch"
    
    echo -e "${GREEN}✓ Processed: $filename -> $dest_filename${NC}"
    echo -e "${CYAN}  Title: $title${NC}"
    echo -e "${CYAN}  Permalink: $permalink${NC}"
    echo -e "${GRAY}  Destination: $dest_file_path${NC}"
    
    return 0
}

# Function to process existing files
process_existing_files() {
    local source_dir="$1"
    local dest_dir="$2"

    BASELINE_EPOCH=$LAST_RUN_EPOCH
    
    echo -e "${YELLOW}Processing existing markdown files in: $source_dir${NC}"
    
    if [[ ! -d "$source_dir" ]]; then
        echo -e "${RED}Error: Source directory does not exist: $source_dir${NC}"
        return 1
    fi
    
    local processed=0
    local skipped=0
    
    # Process all .md files
    while IFS= read -r -d '' file; do
        file_epoch=$(get_file_epoch "$file")
        if [[ -z "$file_epoch" ]]; then
            continue
        fi
        if (( file_epoch <= BASELINE_EPOCH )); then
            continue
        fi
        if inject_frontmatter "$file" "$dest_dir"; then
            ((processed++))
        else
            ((skipped++))
        fi
    done < <(find "$source_dir" -type f \( -iname "*.md" -o -iname "*.markdown" \) -print0)
    
    echo -e "\n${GREEN}Processing complete!${NC}"
    echo -e "${GREEN}  Processed: $processed files${NC}"
    echo -e "${YELLOW}  Skipped: $skipped files${NC}"

    if (( processed == 0 )); then
        if (( LAST_RUN_EPOCH > 0 )); then
            echo -e "${GRAY}No markdown files newer than $(format_date "$BASELINE_EPOCH" "%Y-%m-%d %H:%M:%S").${NC}"
        else
            echo -e "${GRAY}No markdown files found in source directory.${NC}"
        fi
    fi

    BASELINE_EPOCH=$LAST_RUN_EPOCH
}

# Function to start file watcher (requires inotify-tools on Linux)
start_file_watcher() {
    local source_dir="$1"
    local dest_dir="$2"
    
    if ! command -v inotifywait &> /dev/null; then
        echo -e "${RED}Error: inotifywait not found. Please install inotify-tools${NC}"
        echo -e "${GRAY}  Ubuntu/Debian: sudo apt-get install inotify-tools${NC}"
        echo -e "${GRAY}  CentOS/RHEL: sudo yum install inotify-tools${NC}"
        return 1
    fi
    
    echo -e "${YELLOW}Starting file system watcher for: $source_dir${NC}"
    echo -e "${GRAY}Press Ctrl+C to stop watching...${NC}"
    
    inotifywait -m -r -e create,modify --format '%w%f %e' "$source_dir" --include '(?i)\.(md|markdown)$' |
    while read file event; do
        echo -e "\n${CYAN}[$(date +%H:%M:%S)] File $event: $(basename "$file")${NC}"
        
        # Small delay to ensure file is fully written
        sleep 0.5
        
        if [[ -f "$file" ]]; then
            BASELINE_EPOCH=$LAST_RUN_EPOCH
            inject_frontmatter "$file" "$dest_dir"
        fi
    done
}

# Main execution
echo -e "${MAGENTA}=== Auto Diary Injector ===${NC}"
echo -e "${GRAY}Source: $SOURCE_DIR${NC}"
echo -e "${GRAY}Destination: $DEST_PATH${NC}"
echo ""

# Process existing files first
process_existing_files "$SOURCE_DIR" "$DEST_PATH"

if [[ "$WATCH_MODE" == "true" ]]; then
    echo ""
    start_file_watcher "$SOURCE_DIR" "$DEST_PATH"
else
    echo -e "\n${GRAY}To enable real-time monitoring, run with 'true' as third parameter${NC}"
    echo -e "${GRAY}Example: $0 \"$SOURCE_DIR\" \"$DEST_DIR\" true${NC}"
fi