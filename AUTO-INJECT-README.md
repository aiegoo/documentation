# Auto Diary Injector Scripts

These scripts automatically monitor the `D:\repos\aiegoo\uconGPT\eng2Fix\kor2fix` directory for new or updated markdown files and inject proper Jekyll frontmatter to make them appear in the "From Wiki & Diary (tagged)" section of your news page.

## Available Scripts

### 1. PowerShell Script (Recommended for Windows)
```powershell
.\auto-inject-diary.ps1 [-SourceDir <path>] [-DestDir <path>] [-WatchMode]
```

**Features:**
- Real-time file system monitoring
- Automatic frontmatter injection
- UTF-8 encoding support
- Comprehensive error handling

**Examples:**
```powershell
# Process existing files once
.\auto-inject-diary.ps1

# Custom source and destination
.\auto-inject-diary.ps1 -SourceDir "C:\custom\path" -DestDir "_wiki\custom"

# Enable real-time monitoring
.\auto-inject-diary.ps1 -WatchMode
```

### 2. Bash Script (Cross-platform)
```bash
./auto-inject-diary.sh [source_dir] [dest_dir] [watch_mode]
```

**Requirements:**
- Linux/WSL: `inotify-tools` for file watching
- macOS: Built-in file system events

**Examples:**
```bash
# Process existing files once
./auto-inject-diary.sh

# Custom directories
./auto-inject-diary.sh "/path/to/source" "_wiki/custom" false

# Enable real-time monitoring
./auto-inject-diary.sh "" "" true
```

### 3. Batch Script (Basic Windows support)
```cmd
auto-inject-diary.bat [source_dir] [dest_dir]
```

**Examples:**
```cmd
# Process existing files
auto-inject-diary.bat

# Custom directories
auto-inject-diary.bat "C:\custom\source" "_wiki\custom"
```

## Generated Frontmatter

The scripts inject the following Jekyll frontmatter structure:

```yaml
---
layout: post
title: "Auto Generated Title"
name: "safe-filename"
tags: [ai nlp likelion updates news announcements]
permalink: 2025-10-07-safe-filename.html
sidebar: other_sidebar
folder: diary
categories: [diary]
keywords: "ai nlp likelion updates news announcements automation"
summary: "Mon, Oct 07, 25, Auto Generated Title - Auto-imported from uconGPT project"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2025-10-07T10:30:00 +0900
updated: 2025-10-07 10:30
source_file: "original-filename.md"
auto_imported: true
---
```

## File Processing Rules

### Filename Transformation
- **Original**: `My Document File.md`
- **Safe name**: `my-document-file`
- **Title**: `My Document File`
- **Permalink**: `2025-10-07-my-document-file.html`
- **Destination**: `2025-10-07-my-document-file.md`

### Tags Applied
- `ai` - AI/Machine Learning related content
- `nlp` - Natural Language Processing
- `likelion` - LikeLion project reference
- `updates` - Ensures appearance in "From Wiki & Diary (tagged)" section
- `news` - Additional tag for news categorization
- `announcements` - Additional tag for announcement categorization

### Safety Features
- **Frontmatter Detection**: Skips files that already have frontmatter
- **UTF-8 Encoding**: Preserves international characters
- **Date Prefixing**: Prevents filename conflicts
- **Backup Info**: Includes original filename and source path

## File Monitoring (PowerShell & Bash)

When enabled, the scripts monitor for:
- **New files** created in the source directory
- **Modified files** in the source directory
- **Only `.md` files** are processed

### File System Events
- Creates new diary entries automatically
- Processes files with a small delay to ensure complete writes
- Continues running until stopped with Ctrl+C

## Directory Structure

```
documentation/
├── auto-inject-diary.ps1     # PowerShell script
├── auto-inject-diary.sh      # Bash script  
├── auto-inject-diary.bat     # Batch script
├── _wiki/
│   └── diary/
│       └── 2025/             # Generated files appear here
│           ├── 2025-10-07-document1.md
│           ├── 2025-10-07-document2.md
│           └── ...
└── pages/
    └── news/
        └── news.html         # Shows "From Wiki & Diary (tagged)"
```

## Troubleshooting

### Permission Issues
```powershell
# PowerShell execution policy
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Missing Dependencies
```bash
# Linux/WSL - Install inotify-tools
sudo apt-get install inotify-tools

# macOS - No additional dependencies needed
```

### File Encoding Issues
- All scripts use UTF-8 encoding
- PowerShell script explicitly sets UTF-8 output
- Original file content is preserved exactly

### Jekyll Integration
The generated files will automatically appear in:
1. **Wiki collection** (`site.wiki`)
2. **News page** "From Wiki & Diary (tagged)" section
3. **Tag pages** for `ai`, `nlp`, `likelion`, `updates`

## Customization

### Modify Tags
Edit the `tags: [ai nlp likelion updates news announcements]` line in the scripts to change which tags are applied.

### Change Destination
Modify the `DEST_DIR` variable to change where processed files are saved.

### Adjust Frontmatter
Customize the frontmatter template in the `inject_frontmatter` function of each script.

## Examples of Use Cases

1. **Continuous Integration**: Run with watch mode during development
2. **Batch Processing**: Process historical files once
3. **Content Migration**: Move content from other projects to Jekyll
4. **Automated Publishing**: Integrate with content creation workflows