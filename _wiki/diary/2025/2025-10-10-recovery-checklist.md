---
layout: post
title: "RECOVERY CHECKLIST"
name: "recovery-checklist"
tags: [ai nlp likelion updates news announcements]
permalink: 2025-10-10-recovery-checklist.html
sidebar: other_sidebar
folder: diary
categories: [diary]
keywords: "ai nlp likelion updates news announcements automation"
summary: "Fri, Oct 10, 25, RECOVERY CHECKLIST - Auto-imported from uconGPT project"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2025-10-10T17:26:24 +0900
updated: 2025-10-10 17:26
source_file: "RECOVERY_CHECKLIST.md"
source_last_modified: "2025-10-10T17:26:24+0900"
auto_imported: true
---
* TOC
{:toc}

> **Auto-imported from**: `D:/repos/aiegoo/uconGPT/eng2Fix/kor2fix/RECOVERY_CHECKLIST.md`  
> **Original filename**: `RECOVERY_CHECKLIST.md`  
> **Import date**: Fri, Oct 10, 25

<!--more-->

# 🔄 Post-Restart Recovery Checklist
**Date:** After PC restart  
**Goal:** Resume Korean Learning TUI development  

## ✅ Immediate Recovery Steps (5 minutes)

### 1. Verify Environment
```bash
# Navigate to project
cd /mnt/d/repos/aiegoo/uconGPT/eng2Fix/kor2fix

# Check Korean API is running
curl -s -X POST http://localhost:8201/api/llm/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "안녕하세요", "context": "korean_mode"}'
```
**Expected:** Korean response from API

### 2. Test Current Working Features
```bash
# Test voice output (should work immediately)
python scripts/test_voice_with_headphones.py

# Launch working TUI (stable version)
python scripts/working_korean_tui.py
```
**Expected:** Audio through headphones, functional TUI

### 3. Launch Full Voice TUI
```bash
python scripts/korean_learning_tui_with_voice.py
```
**Expected:** TUI with voice output, text input

## 📋 Quick Status Check

### ✅ What Should Work Immediately
- [ ] Korean AI responses via API
- [ ] Voice output (TTS) through headphones  
- [ ] TUI interface with Korean text
- [ ] Vocabulary games with audio
- [ ] AI conversation in chat tab

### ❌ What Won't Work (Expected)
- [ ] Voice input (microphone) - WSL limitation
- [ ] Real-time pronunciation - needs Windows
- [ ] Voice commands - needs microphone

## 🎯 Next Development Paths

### Path A: Continue on Linux/WSL (Current)
- Improve TUI interface and features
- Add more Korean learning content
- Enhance AI conversation prompts
- Develop additional learning games

### Path B: Move to Windows (Recommended for Voice)
- Install Python 3.14 on Windows host
- Run `setup_windows.py` script
- Implement full voice input functionality
- Complete the voice learning experience

## 📁 Key Files Ready for Use

### 🎵 Working Voice Components
- `scripts/korean_learning_tui_with_voice.py` - Main TUI with voice output
- `scripts/korean_voice_utils.py` - Voice utility functions
- `scripts/test_voice_with_headphones.py` - Audio testing

### 🔧 Windows Setup (Ready)
- `requirements-windows.txt` - Python 3.14 dependencies
- `setup_windows.py` - Automated Windows setup
- `WINDOWS_SETUP_GUIDE.md` - Setup instructions
- `launch_korean_tui.bat` - Windows launcher

### 📚 Documentation
- `PROJECT_SUMMARY.md` - Complete status overview
- `VOICE_INPUT_ROADMAP.md` - Implementation plan
- `SESSION_RECOVERY.md` - Detailed recovery guide

## 🔗 GitHub Issues Created
- **Issue #86:** Voice Input Implementation
- **Issue #87:** Development Session Summary  
- **Issue #88:** Windows Setup Requirements

## 🛠️ Troubleshooting

### If Korean API is down:
```bash
docker-compose restart backend rasa-core
```

### If voice output stops working:
```bash
# Test audio system
espeak "test audio"

# Check Python audio
python -c "import subprocess; print(subprocess.run(['espeak', 'test']).returncode)"
```

### If TUI crashes:
```bash
# Use stable fallback
python scripts/working_korean_tui.py
```

## 🎓 Context Reminder
You successfully implemented voice OUTPUT for Korean learning TUI with espeak. Voice INPUT is blocked in WSL due to audio driver limitations. The solution is to continue development on Windows with proper microphone access.

The Korean Knowledge Base API provides excellent responses and the TUI framework is solid and stable.

## ⏭️ Recommended Next Action
1. **Test recovery:** Run the quick status check above
2. **Choose path:** Linux improvements OR Windows voice implementation  
3. **Continue development:** Use the roadmap and GitHub issues as guides

---
**Status:** Voice output working, ready to continue development  
**Priority:** Windows setup for complete voice functionality