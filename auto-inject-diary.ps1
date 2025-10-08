#!/usr/bin/env powershell
<#
.SYNOPSIS
    Auto-inject frontmatter for markdown files from uconGPT/eng2Fix/kor2fix
    
.DESCRIPTION
    This script monitors D:\repos\aiegoo\uconGPT\eng2Fix\kor2fix for new or updated
    markdown files and automatically injects Jekyll frontmatter to make them appear
    in the "From Wiki & Diary (tagged)" section.
    
.PARAMETER SourceDir
    Source directory to monitor (default: D:\repos\aiegoo\uconGPT\eng2Fix\kor2fix)
    
.PARAMETER DestDir
    Destination directory for processed files (default: _wiki/diary/2025)
    
.PARAMETER WatchMode
    Enable file system watcher for real-time monitoring
#>

param(
    [string]$SourceDir = "D:\repos\aiegoo\uconGPT\eng2Fix\kor2fix",
    [string]$DestDir = "_wiki/diary/2025",
    [switch]$WatchMode = $false,
    [string]$Since,
    [switch]$ResetBaseline
)

# Get the documentation root directory
$DocRoot = Split-Path -Parent $MyInvocation.MyCommand.Path
$DestPath = Join-Path $DocRoot $DestDir

# Ensure destination directory exists
if (-not (Test-Path $DestPath)) {
    New-Item -ItemType Directory -Path $DestPath -Force
    Write-Host "Created destination directory: $DestPath" -ForegroundColor Green
}

# Ensure state directory exists
$StateDir = Join-Path $DocRoot "var"
if (-not (Test-Path $StateDir)) {
    New-Item -ItemType Directory -Path $StateDir -Force | Out-Null
}
$StateFile = Join-Path $StateDir "auto-import-last-run.txt"

function Get-LastRunTime {
    if (Test-Path $StateFile) {
        $raw = Get-Content $StateFile -Raw
        $parsed = [DateTime]::MinValue
        if ([DateTime]::TryParse($raw, [ref]$parsed)) {
            return $parsed
        }
    } else {
        $existing = Get-ChildItem -Path $DestPath -Filter "*.md" -File -Recurse |
            Sort-Object LastWriteTime -Descending |
            Select-Object -First 1
        if ($existing) {
            return $existing.LastWriteTime
        }
    }
    return [DateTime]::MinValue
}

function Save-LastRunTime {
    param([DateTime]$Timestamp)

    if ($Timestamp -gt $Script:LastRunTime) {
        $Script:LastRunTime = $Timestamp
        $Timestamp.ToString('o') | Set-Content -Path $StateFile
    }
}

$Script:LastRunTime = Get-LastRunTime
$Script:ProcessedMaxTime = $Script:LastRunTime
$Script:CurrentBaseline = $Script:LastRunTime

if ($ResetBaseline.IsPresent) {
    $Script:LastRunTime = [DateTime]::MinValue
    $Script:ProcessedMaxTime = $Script:LastRunTime
    $Script:CurrentBaseline = $Script:LastRunTime
    Write-Host "Baseline reset; all source files will be reconsidered." -ForegroundColor Yellow
} elseif ($Since) {
    $parsedOffset = [DateTimeOffset]::MinValue
    if (-not [DateTimeOffset]::TryParse($Since, [ref]$parsedOffset)) {
        Write-Error "Unable to parse provided -Since value '$Since'. Use an ISO timestamp like 2025-10-08T09:23:51+09:00."
        exit 1
    }
    $parsedSince = $parsedOffset.LocalDateTime
    $Script:LastRunTime = $parsedSince
    $Script:ProcessedMaxTime = $parsedSince
    $Script:CurrentBaseline = $parsedSince
    Write-Host "Baseline overridden to $($parsedOffset.ToString('yyyy-MM-dd HH:mm:ss zzz'))." -ForegroundColor Yellow
}

function Get-SafeFileName {
    param([string]$filename)
    
    # Remove extension and clean up filename
    $basename = [System.IO.Path]::GetFileNameWithoutExtension($filename)
    
    # Replace spaces and special characters with hyphens
    $safe = $basename -replace '[^\w\-]', '-'
    $safe = $safe -replace '-+', '-'  # Multiple hyphens to single
    $safe = $safe.Trim('-').ToLower()  # Remove leading/trailing hyphens and lowercase
    
    return $safe
}

function Get-TitleFromFilename {
    param([string]$filename)
    
    $basename = [System.IO.Path]::GetFileNameWithoutExtension($filename)
    
    # Replace hyphens and underscores with spaces and title case
    $title = $basename -replace '[-_]', ' '
    $title = (Get-Culture).TextInfo.ToTitleCase($title.ToLower())
    
    return $title
}

function Inject-Frontmatter {
    param(
        [string]$SourceFile,
        [string]$DestFile
    )
    
    try {
        # Read the original content
        $content = Get-Content $SourceFile -Raw -Encoding UTF8
        
        # Get file info
        $fileInfo = Get-Item $SourceFile
        $filename = $fileInfo.Name
        $safeFilename = Get-SafeFileName $filename
        $title = Get-TitleFromFilename $filename
        $baseline = $Script:CurrentBaseline
        if ($fileInfo.LastWriteTime -le $baseline) {
            Write-Host "Skipping $filename (no newer changes since last run)." -ForegroundColor Yellow
            return $false
        }
        
        # Generate dates based on the source file's last modification time
        $sourceDate = $fileInfo.LastWriteTime
        $date = $sourceDate.ToString('yyyy-MM-ddTHH:mm:ss')
        $updated = $sourceDate.ToString('yyyy-MM-dd HH:mm')
        $journal = $sourceDate.ToString('ddd, MMM dd, yy')
        $filenameDatePrefix = $sourceDate.ToString('yyyy-MM-dd')
        $offset = [System.TimeZoneInfo]::Local.GetUtcOffset($sourceDate)
        $sign = if ($offset.Ticks -ge 0) { '+' } else { '-' }
        $offsetString = '{0}{1:00}{2:00}' -f $sign, [Math]::Abs($offset.Hours), [Math]::Abs($offset.Minutes)
        
        # Create permalink
        $permalink = "$filenameDatePrefix-$safeFilename.html"
        
        # Create frontmatter
        $frontmatter = @"
---
layout: post
title: "$title"
name: "$safeFilename"
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
date: $date $offsetString
updated: $updated
source_file: "$filename"
source_last_modified: "$($sourceDate.ToString('o'))"
auto_imported: true
---
* TOC
{:toc}

> **Auto-imported from**: ``$SourceFile``  
> **Original filename**: ``$filename``  
> **Import date**: $journal

<!--more-->

"@

        # Check if content already has frontmatter
        if ($content -match '^---\s*\n.*?\n---\s*\n') {
            Write-Warning "File $filename already has frontmatter. Skipping to avoid overwrite."
            return $false
        }
        
    # Combine frontmatter with original content
    $newContent = $frontmatter + $content
        
    # Create destination filename with date prefix
    $destFilename = "$filenameDatePrefix-$safeFilename.md"
    $finalDestPath = Join-Path $DestFile $destFilename

    $utf8NoBom = New-Object System.Text.UTF8Encoding($false)
    [System.IO.File]::WriteAllText($finalDestPath, $newContent, $utf8NoBom)
        
        Write-Host "✓ Processed: $filename -> $destFilename" -ForegroundColor Green
        Write-Host "  Title: $title" -ForegroundColor Cyan
        Write-Host "  Permalink: $permalink" -ForegroundColor Cyan
        Write-Host "  Destination: $finalDestPath" -ForegroundColor Gray
        
        if ($sourceDate -gt $Script:ProcessedMaxTime) {
            $Script:ProcessedMaxTime = $sourceDate
        }
        Save-LastRunTime $Script:ProcessedMaxTime

        return $true
        
    } catch {
        Write-Error "Failed to process $SourceFile`: $($_.Exception.Message)"
        return $false
    }
}

function Process-ExistingFiles {
    param([string]$sourceDir, [string]$destDir)
    
    Write-Host "Processing existing markdown files in: $sourceDir" -ForegroundColor Yellow
    $Script:CurrentBaseline = $Script:LastRunTime
    
    if (-not (Test-Path $sourceDir)) {
        Write-Error "Source directory does not exist: $sourceDir"
        return
    }
    
    $markdownFiles = Get-ChildItem -Path $sourceDir -Filter "*.md" -File -Recurse |
        Where-Object { $_.LastWriteTime -gt $Script:LastRunTime } |
        Sort-Object LastWriteTime
    
    if ($markdownFiles.Count -eq 0) {
        Write-Host "No markdown files newer than $($Script:LastRunTime.ToString('g'))." -ForegroundColor Yellow
        return
    }
    
    $processed = 0
    $skipped = 0
    
    foreach ($file in $markdownFiles) {
        if (Inject-Frontmatter -SourceFile $file.FullName -DestFile $destDir) {
            $processed++
        } else {
            $skipped++
        }
    }
    
    Write-Host "`nProcessing complete!" -ForegroundColor Green
    Write-Host "  Processed: $processed files" -ForegroundColor Green
    Write-Host "  Skipped: $skipped files" -ForegroundColor Yellow
    $Script:CurrentBaseline = $Script:LastRunTime
}

function Start-FileWatcher {
    param([string]$sourceDir, [string]$destDir)
    
    Write-Host "Starting file system watcher for: $sourceDir" -ForegroundColor Yellow
    Write-Host "Press Ctrl+C to stop watching..." -ForegroundColor Gray
    
    # Create file system watcher
    $watcher = New-Object System.IO.FileSystemWatcher
    $watcher.Path = $sourceDir
    $watcher.Filter = "*.md"
    $watcher.IncludeSubdirectories = $true
    $watcher.NotifyFilter = [System.IO.NotifyFilters]::CreationTime -bor [System.IO.NotifyFilters]::LastWrite
    $watcher.EnableRaisingEvents = $true
    
    # Define event handlers
    $action = {
        $path = $Event.SourceEventArgs.FullPath
        $changeType = $Event.SourceEventArgs.ChangeType
        $filename = Split-Path $path -Leaf
        
        Write-Host "`n[$(Get-Date -Format 'HH:mm:ss')] File $changeType`: $filename" -ForegroundColor Cyan
        
        # Small delay to ensure file is fully written
        Start-Sleep -Milliseconds 500
        
        if (Test-Path $path) {
            $script:CurrentBaseline = $script:LastRunTime
            Inject-Frontmatter -SourceFile $path -DestFile $destDir
        }
    }
    
    # Register event handlers
    Register-ObjectEvent -InputObject $watcher -EventName "Created" -Action $action
    Register-ObjectEvent -InputObject $watcher -EventName "Changed" -Action $action
    
    try {
        # Keep the script running
        while ($true) {
            Start-Sleep -Seconds 1
        }
    } finally {
        # Clean up
        $watcher.EnableRaisingEvents = $false
        $watcher.Dispose()
        Get-EventSubscriber | Unregister-Event
        Write-Host "`nFile watcher stopped." -ForegroundColor Yellow
        Save-LastRunTime $Script:ProcessedMaxTime
    }
}

# Main execution
Write-Host "=== Auto Diary Injector ===" -ForegroundColor Magenta
Write-Host "Source: $SourceDir" -ForegroundColor Gray
Write-Host "Destination: $DestPath" -ForegroundColor Gray
Write-Host ""

# Process existing files first
Process-ExistingFiles -sourceDir $SourceDir -destDir $DestPath

if ($WatchMode) {
    Write-Host ""
    Start-FileWatcher -sourceDir $SourceDir -destDir $DestPath
} else {
    Save-LastRunTime $Script:ProcessedMaxTime
    Write-Host '`nTo enable real-time monitoring, run with -WatchMode switch' -ForegroundColor Gray
    Write-Host 'Example: .\auto-inject-diary.ps1 -WatchMode' -ForegroundColor Gray
}