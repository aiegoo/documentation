---
layout: post
title: "README TUI"
name: "readme-tui"
tags: [ai nlp likelion updates news announcements]
permalink: 2025-10-08-readme-tui.html
sidebar: other_sidebar
folder: diary
categories: [diary]
keywords: "ai nlp likelion updates news announcements automation"
summary: "Wed, Oct 08, 25, README TUI - Auto-imported from uconGPT project"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2025-10-08T07:37:33 +0900
updated: 2025-10-08 07:37
source_file: "README_TUI.md"
auto_imported: true
---
* TOC
{:toc}

> **Auto-imported from**: `D:/repos/aiegoo/uconGPT/eng2Fix/kor2fix/README_TUI.md`  
> **Original filename**: `README_TUI.md`  
> **Import date**: Wed, Oct 08, 25

<!--more-->

# Korean Learning Advanced TUI

## 🎯 Overview
Advanced Text User Interface (TUI) for Korean language learning with multi-backend AI support. Built with Python's Textual framework for a modern terminal experience.

![Korean TUI Demo](docs/screenshots/korean-tui-demo.png) *(Screenshots will be added)*

## ✨ Features
- 🎨 **Rich Terminal Interface**: Modern TUI with colors, borders, and responsive design
- 🔄 **Multi-Backend Support**: Switch between Ollama (Mistral) and self-hosted models
- 🇰🇷 **Korean Learning Focus**: Specialized prompts and learning modes
- ⌨️ **Keyboard Navigation**: Intuitive controls and shortcuts
- 📝 **Session Logging**: Track learning progress and conversations
- 🌓 **Dark/Light Mode**: Toggle interface themes

## 🚀 Quick Start

### Prerequisites
- Python 3.8+ (recommended 3.10+)
- Modern terminal with Unicode support
- At least one AI backend running (Ollama or self-hosted)

### Installation
```bash
# Clone repository
cd /home/hsyyu/repo/kor2unity

# Install dependencies
pip install textual httpx

# Run the TUI
cd scripts
python kor2unity_advanced_tui.py
```

### One-Line Start (with Ollama)
```bash
cd /home/hsyyu/repo/kor2unity/scripts && python kor2unity_advanced_tui.py
```

## 📚 Documentation
- **[Complete Setup Guide](docs/KOREAN_TUI_SETUP.md)** - Detailed installation and configuration
- **[Quick Start Guide](docs/QUICK_START.md)** - Get running in 5 minutes
- **[API Documentation](docs/API_REFERENCE.md)** - Backend endpoint details

## 🏗️ Architecture

### File Structure
```
/home/hsyyu/repo/kor2unity/
├── scripts/
│   ├── kor2unity_advanced_tui.py    # 🎯 Main TUI application
│   └── llm_api.py                   # 🔧 Self-hosted API server  
├── docs/
│   ├── KOREAN_TUI_SETUP.md          # 📖 Complete setup guide
│   ├── QUICK_START.md               # ⚡ Quick start guide
│   └── screenshots/                 # 📸 Demo images
├── logs/
│   └── korean_learning.log          # 📝 Session logs
└── requirements.txt                 # 📦 Dependencies
```

### Supported Backends
| Backend | Port | Model | Purpose |
|---------|------|-------|---------|
| **Ollama** | 11434 | Mistral | Fast general responses |
| **Self-hosted** | 8204 | Llama2+MiniGPT4 | Korean learning specialized |
| **Container** | 8203 | Ollama | Fallback option |
| **Legacy** | 8201 | Various | Compatibility |

## 🎮 Usage

### Keyboard Controls
- **Enter** → Send message
- **e** → Switch API endpoint
- **d** → Toggle dark/light mode  
- **Ctrl+E** → Scroll to bottom
- **q** → Quit application

### Learning Commands
```
# Basic Korean greetings
안녕하세요 (Hello)

# Grammar questions  
How do I conjugate verbs in Korean?

# Translation requests
Translate "I love learning Korean" to Korean

# Cultural questions
Tell me about Korean honorifics
```

## 🔧 Configuration

### API Endpoints
Edit `scripts/kor2unity_advanced_tui.py`:
```python
KOREAN_API_ENDPOINTS = {
    "ollama_primary": "http://localhost:11434/api/generate",
    "self_hosted": "http://localhost:8204/korean-learning",
    "ollama_container": "http://localhost:8203/api/generate",
    "legacy_api": "http://localhost:8201/chat"
}
```

### Environment Variables
```bash
# Optional: Set custom model
export MISTRAL_MODEL="mistral:7b"

# Optional: Set custom timeout
export OLLAMA_TIMEOUT_SECONDS="60"

# Optional: Set log level
export LOG_LEVEL="INFO"
```

## 🐛 Troubleshooting

### Common Issues
```bash
# Missing dependencies
pip install textual httpx

# Ollama not running
ollama serve

# Self-hosted API not running  
cd /home/hsyyu && python llm_api.py

# Korean fonts not displaying
sudo apt-get install fonts-noto-cjk

# Check running services
netstat -tulpn | grep -E "(8204|11434)"
```

### Health Checks
```bash
# Test Ollama
curl -X POST http://localhost:11434/api/generate -d '{"model":"mistral","prompt":"test","stream":false}'

# Test self-hosted API
curl -X POST http://localhost:8204/korean-learning -d '{"question":"test","korean_mode":true}'

# View logs
tail -f ~/repo/kor2unity/logs/korean_learning.log
```

## 🤝 Contributing

### Development Setup
```bash
# Install development dependencies
pip install -r requirements.txt
pip install pytest black flake8

# Format code
black scripts/kor2unity_advanced_tui.py

# Run tests
pytest tests/
```

### Adding New Features
1. **New endpoints**: Modify `KOREAN_API_ENDPOINTS` dict
2. **UI components**: Add to Textual `compose()` method
3. **Learning modes**: Extend `learning_mode` options
4. **Keyboard shortcuts**: Update `BINDINGS` list

## 📊 Performance

### Benchmarks
- **Startup time**: ~2-3 seconds
- **Response time**: 1-5 seconds (depends on backend)
- **Memory usage**: ~50-100 MB
- **CPU usage**: Minimal when idle

### Optimization Tips
1. Use Ollama for faster responses
2. Enable logging only when needed
3. Use modern terminal with GPU acceleration
4. Keep model files on SSD storage

## 📝 License
MIT License - See LICENSE file for details

## 🙏 Acknowledgments
- **Textual Framework** - Rich terminal interface
- **Ollama** - Local LLM serving
- **Korean Language Community** - Learning resources and feedback

---

## 📞 Support
- **Issues**: Create GitHub issue with logs and screenshots
- **Documentation**: See `docs/` directory
- **Logs**: Check `~/repo/kor2unity/logs/korean_learning.log`

**Ready to learn Korean? Start the TUI and type `안녕하세요`!** 🇰🇷
