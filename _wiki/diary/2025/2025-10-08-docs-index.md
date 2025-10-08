---
layout: post
title: "DOCS INDEX"
name: "docs-index"
tags: [ai nlp likelion updates news announcements]
permalink: 2025-10-08-docs-index.html
sidebar: other_sidebar
folder: diary
categories: [diary]
keywords: "ai nlp likelion updates news announcements automation"
summary: "Wed, Oct 08, 25, DOCS INDEX - Auto-imported from uconGPT project"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2025-10-08T14:33:51 +0900
updated: 2025-10-08 14:33
source_file: "DOCS-INDEX.md"
source_last_modified: "2025-10-08T14:33:51+0900"
auto_imported: true
---
* TOC
{:toc}

> **Auto-imported from**: `D:/repos/aiegoo/uconGPT/eng2Fix/kor2fix/DOCS-INDEX.md`  
> **Original filename**: `DOCS-INDEX.md`  
> **Import date**: Wed, Oct 08, 25

<!--more-->

# 📚 Documentation Index - environment-setup-v1 Branch

## Branch Information
- **Branch**: `environment-setup-v1`
- **Status**: ✅ Active with working backend (port 8201)
- **Focus**: Dedicated port allocation + Python 3.13 compatibility
- **Date**: August 7, 2025
- **Linked Issues**: [#31](https://github.com/aiegoo/hhi-engineroom/issues/31), [#29](https://github.com/aiegoo/hhi-engineroom/issues/29), [#28](https://github.com/aiegoo/hhi-engineroom/issues/28), [#26](https://github.com/aiegoo/hhi-engineroom/issues/26)

## 📋 Available Documentation

### 🎯 **Core Setup Guides**
| File | Purpose | Status |
|------|---------|---------|
| **[README-environment-setup-v1.md](README-environment-setup-v1.md)** | Branch overview & quick start | ✅ Available |
| **[docs/DOCKER-SETUP.md](docs/DOCKER-SETUP.md)** | Docker Desktop installation | ✅ Available |
| **[docs/PORT-ALLOCATION.md](docs/PORT-ALLOCATION.md)** | Complete port reference (8200-8299) | ✅ Available |

### 🚀 **Management Scripts**
| Script | Purpose | Status |
|--------|---------|---------|
| **[scripts/start-dev-stack.sh](scripts/start-dev-stack.sh)** | Development stack management | ✅ Executable |
| **[test_setup.py](test_setup.py)** | Python 3.13 compatibility validation | ✅ Available |

### ⚙️ **Configuration Files**  
| File | Purpose | Status |
|------|---------|---------|
| **[.env.example](.env.example)** | Environment variables (8200-8299 ports) | ✅ Available |
| **[docker-compose.yml](docker-compose.yml)** | Multi-service orchestration | ✅ Available |
| **[requirements.txt](requirements.txt)** | Python 3.13 compatible dependencies | ✅ Available |

## 🔧 Quick Access Commands

### Documentation Access
```bash
# Verify you're on the right branch
git branch --show-current  # Should show: environment-setup-v1

# View branch-specific documentation
cat README-environment-setup-v1.md
cat docs/DOCKER-SETUP.md  
cat docs/PORT-ALLOCATION.md
```

### System Status
```bash
# Check current service status
./scripts/start-dev-stack.sh status

# Test backend API
curl http://localhost:8201/health
curl http://localhost:8201/api/config
```

### Development Stack
```bash
# Start services
./scripts/start-dev-stack.sh start

# View logs
./scripts/start-dev-stack.sh logs

# Stop services
./scripts/start-dev-stack.sh stop
```

## 📊 Current Working Status

### ✅ **Confirmed Working**
- **FastAPI Backend**: Running on port 8201
- **Health Monitoring**: Complete system status API
- **Port Configuration**: Full service mapping API  
- **Python 3.13**: Compatible dependency set
- **Development Scripts**: Service management automation

### 🔄 **Ready for Setup**
- **Docker Services**: Use `docs/DOCKER-SETUP.md` guide
- **Ollama LLM**: Port 8203 allocated and ready
- **MongoDB**: Port 8202 configured
- **Frontend**: Port 8206 reserved

## 🎯 Branch-Specific Features

This `environment-setup-v1` branch provides:

1. **Conflict-Free Ports**: 8200-8299 dedicated range
2. **Python 3.13 Support**: Compatible minimal dependencies  
3. **Docker Ready**: Complete containerization setup
4. **Korean Language Focus**: Specialized API endpoints
5. **Health Monitoring**: Comprehensive system status
6. **Development Automation**: One-command stack management

## 🔀 Branch Context

### Why This Branch Exists
- **Port Conflicts**: Avoids typical development ports (3000, 8000, 5000)
- **Python 3.13**: Early adoption with compatibility focus
- **Clean Architecture**: Dedicated service isolation
- **Production Ready**: Docker + health monitoring

### How to Use This Branch
```bash
# Switch to this branch
git checkout environment-setup-v1

# Follow the documentation
cat README-environment-setup-v1.md

# Start development
./scripts/start-dev-stack.sh start
```

---

**Last Updated**: August 7, 2025 | **Branch**: environment-setup-v1 | **Backend**: ✅ Running on 8201
