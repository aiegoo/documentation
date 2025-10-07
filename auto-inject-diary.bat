@echo off
setlocal enabledelayedexpansion

:: Auto-inject frontmatter for markdown files from uconGPT/eng2Fix/kor2fix
:: This script processes markdown files and injects Jekyll frontmatter

:: Configuration
set "SOURCE_DIR=%~1"
if "%SOURCE_DIR%"=="" set "SOURCE_DIR=D:\repos\aiegoo\uconGPT\eng2Fix\kor2fix"

set "DEST_DIR=%~2"
if "%DEST_DIR%"=="" set "DEST_DIR=_wiki\diary\2025"

:: Get script directory and create full destination path
set "SCRIPT_DIR=%~dp0"
set "DEST_PATH=%SCRIPT_DIR%%DEST_DIR%"

echo === Auto Diary Injector ===
echo Source: %SOURCE_DIR%
echo Destination: %DEST_PATH%
echo.

:: Ensure destination directory exists
if not exist "%DEST_PATH%" (
    mkdir "%DEST_PATH%"
    echo Created destination directory: %DEST_PATH%
)

:: Check if source directory exists
if not exist "%SOURCE_DIR%" (
    echo Error: Source directory does not exist: %SOURCE_DIR%
    pause
    exit /b 1
)

:: Get current date and time components
for /f "tokens=2-4 delims=/ " %%a in ('date /t') do (
    set "MONTH=%%a"
    set "DAY=%%b"
    set "YEAR=%%c"
)

for /f "tokens=1-2 delims=: " %%a in ('time /t') do (
    set "HOUR=%%a"
    set "MINUTE=%%b"
)

:: Format dates
set "DATE_PREFIX=%YEAR%-%MONTH%-%DAY%"
set "FULL_DATE=%YEAR%-%MONTH%-%DAY%T%HOUR%:%MINUTE%:00"
set "UPDATED_DATE=%YEAR%-%MONTH%-%DAY% %HOUR%:%MINUTE%"

:: Process all markdown files
set /a PROCESSED=0
set /a SKIPPED=0

for %%f in ("%SOURCE_DIR%\*.md") do (
    call :ProcessFile "%%f"
)

echo.
echo Processing complete!
echo   Processed: !PROCESSED! files
echo   Skipped: !SKIPPED! files
echo.
pause
exit /b 0

:ProcessFile
set "SOURCE_FILE=%~1"
set "FILENAME=%~nx1"
set "BASENAME=%~n1"

:: Create safe filename (basic cleanup)
set "SAFE_FILENAME=%BASENAME%"
set "SAFE_FILENAME=!SAFE_FILENAME: =-!"
set "SAFE_FILENAME=!SAFE_FILENAME:_=-!"

:: Create title (basic conversion)
set "TITLE=%BASENAME%"
set "TITLE=!TITLE:-= !"
set "TITLE=!TITLE:_= !"

:: Create destination filename
set "DEST_FILENAME=%DATE_PREFIX%-!SAFE_FILENAME!.md"
set "DEST_FILE=%DEST_PATH%\!DEST_FILENAME!"

:: Check if file already has frontmatter
for /f "usebackq delims=" %%l in ("%SOURCE_FILE%") do (
    if "%%l"=="---" (
        echo Warning: File !FILENAME! already has frontmatter. Skipping.
        set /a SKIPPED+=1
        goto :eof
    )
    goto :CreateFile
)

:CreateFile
:: Create frontmatter and combine with original content
(
echo ---
echo layout: post
echo title: "!TITLE!"
echo name: "!SAFE_FILENAME!"
echo tags: [ai nlp likelion updates news announcements]
echo permalink: %DATE_PREFIX%-!SAFE_FILENAME!.html
echo sidebar: other_sidebar
echo folder: diary
echo categories: [diary]
echo keywords: "ai nlp likelion updates news announcements automation"
echo summary: "!TITLE! - Auto-imported from uconGPT project"
echo excerpt_separator: ^<^!--more--^>
echo toc: true
echo public: true
echo parent: [[Wiki-Setting-Category]]
echo date: !FULL_DATE! +0900
echo updated: !UPDATED_DATE!
echo source_file: "!FILENAME!"
echo auto_imported: true
echo ---
echo * TOC
echo {:toc}
echo.
echo ^> **Auto-imported from**: `%SOURCE_FILE%`  
echo ^> **Original filename**: `!FILENAME!`  
echo ^> **Import date**: %DATE%
echo.
echo ^<^!--more--^>
echo.
type "%SOURCE_FILE%"
) > "%DEST_FILE%"

echo ✓ Processed: !FILENAME! -^> !DEST_FILENAME!
echo   Title: !TITLE!
echo   Destination: %DEST_FILE%

set /a PROCESSED+=1
goto :eof