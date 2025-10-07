#!/bin/bash

# Auto-inject frontmatter for markdown files from uconGPT/eng2Fix/kor2fix
# This script monitors the source directory and injects Jekyll frontmatter
# to make files appear in "From Wiki & Diary (tagged)" section

# Configuration
SOURCE_DIR="${1:-D:/repos/aiegoo/uconGPT/eng2Fix/kor2fix}"
DEST_DIR="${2:-_wiki/diary/2025}"
WATCH_MODE="${3:-false}"

# Get script directory
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
DEST_PATH="$SCRIPT_DIR/$DEST_DIR"

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
    
    # Generate dates
    date=$(date +"%Y-%m-%dT%H:%M:%S")
    updated=$(date +"%Y-%m-%d %H:%M")
    journal=$(date +"%a, %b %d, %y")
    filename_date_prefix=$(date +"%Y-%m-%d")
    
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
    
    # Create frontmatter
    cat > "$dest_file_path" << EOF
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
date: $date +0900
updated: $updated
source_file: "$filename"
auto_imported: true
---
* TOC
{:toc}

> **Auto-imported from**: \`$source_file\`  
> **Original filename**: \`$filename\`  
> **Import date**: $journal

<!--more-->

EOF

    # Append original content
    cat "$source_file" >> "$dest_file_path"
    
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
    
    echo -e "${YELLOW}Processing existing markdown files in: $source_dir${NC}"
    
    if [[ ! -d "$source_dir" ]]; then
        echo -e "${RED}Error: Source directory does not exist: $source_dir${NC}"
        return 1
    fi
    
    local processed=0
    local skipped=0
    
    # Process all .md files
    while IFS= read -r -d '' file; do
        if inject_frontmatter "$file" "$dest_dir"; then
            ((processed++))
        else
            ((skipped++))
        fi
    done < <(find "$source_dir" -maxdepth 1 -name "*.md" -type f -print0)
    
    echo -e "\n${GREEN}Processing complete!${NC}"
    echo -e "${GREEN}  Processed: $processed files${NC}"
    echo -e "${YELLOW}  Skipped: $skipped files${NC}"
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
    
    inotifywait -m -e create,modify --format '%w%f %e' "$source_dir" --include '\.md$' |
    while read file event; do
        echo -e "\n${CYAN}[$(date +%H:%M:%S)] File $event: $(basename "$file")${NC}"
        
        # Small delay to ensure file is fully written
        sleep 0.5
        
        if [[ -f "$file" ]]; then
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