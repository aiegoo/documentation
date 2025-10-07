# Test Script Usage

## Quick Test

To test the auto-inject scripts, you can create a sample markdown file and run the script:

### 1. Create a test markdown file
```bash
# Create test directory (if it doesn't exist)
mkdir -p "D:\repos\aiegoo\uconGPT\eng2Fix\kor2fix"

# Create a sample markdown file
echo "# Test Document

This is a test document for auto-injection.

## Content

Some sample content here." > "D:\repos\aiegoo\uconGPT\eng2Fix\kor2fix\test-document.md"
```

### 2. Run the PowerShell script
```powershell
.\auto-inject-diary.ps1
```

### 3. Check the results
The script will create a file like `_wiki\diary\2025\2025-10-07-test-document.md` with proper frontmatter that will make it appear in the "From Wiki & Diary (tagged)" section.

### 4. For real-time monitoring
```powershell
.\auto-inject-diary.ps1 -WatchMode
```

This will continue running and automatically process any new .md files added to the source directory.

## Expected Output

The processed file will have frontmatter like:
```yaml
---
layout: post
title: "Test Document"
name: "test-document"
tags: [ai nlp likelion updates news announcements]
permalink: 2025-10-07-test-document.html
sidebar: other_sidebar
folder: diary
categories: [diary]
keywords: "ai nlp likelion updates news announcements automation"
summary: "Mon, Oct 07, 25, Test Document - Auto-imported from uconGPT project"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2025-10-07T10:30:00 +0900
updated: 2025-10-07 10:30
source_file: "test-document.md"
auto_imported: true
---
```

And the original content will be preserved below the frontmatter.