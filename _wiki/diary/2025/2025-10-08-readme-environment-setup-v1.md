---
layout: post
title: "README Environment Setup V1"
name: "readme-environment-setup-v1"
tags: [ai nlp likelion updates news announcements]
permalink: 2025-10-08-readme-environment-setup-v1.html
sidebar: other_sidebar
folder: diary
categories: [diary]
keywords: "ai nlp likelion updates news announcements automation"
summary: "Wed, Oct 08, 25, README Environment Setup V1 - Auto-imported from uconGPT project"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2025-10-08T16:01:13 +0900
updated: 2025-10-08 16:01
source_file: "README-environment-setup-v1.md"
source_last_modified: "2025-10-08T16:01:13+0900"
auto_imported: true
---
* TOC
{:toc}

> **Auto-imported from**: `D:/repos/aiegoo/uconGPT/eng2Fix/kor2fix/README-environment-setup-v1.md`  
> **Original filename**: `README-environment-setup-v1.md`  
> **Import date**: Wed, Oct 08, 25

<!--more-->

# kor2Unity Project - Environment Setup v1 Branch

## Branch Information
- **Branch**: `environment-setup-v1`
- **Purpose**: Dedicated port allocation strategy and Python 3.13 compatibility
- **Date**: August 7, 2025
- **Status**: Active development with working FastAPI backend
- **Linked Issues**: [#31](https://github.com/aiegoo/kor2Unity/issues/31), [#29](https://github.com/aiegoo/kor2Unity/issues/29), [#28](https://github.com/aiegoo/kor2Unity/issues/28), [#26](https://github.com/aiegoo/kor2Unity/issues/26), [#24](https://github.com/aiegoo/kor2Unity/issues/24)

## Related GitHub Issues

- [#31 – EPIC: kor2Unity Self-hosted AI Integration Sprint](https://github.com/aiegoo/kor2Unity/issues/31)
- [#29 – Integrate Existing TUI Infrastructure with kor2Unity](https://github.com/aiegoo/kor2Unity/issues/29)
- [#28 – Conda Environment Configuration for kor2Unity Models](https://github.com/aiegoo/kor2Unity/issues/28)
- [#26 – UI Architecture Decision: TUI vs Web UI](https://github.com/aiegoo/kor2Unity/issues/26)
- [#24 – LLM Integration: Self-hosted Model Strategy](https://github.com/aiegoo/kor2Unity/issues/24)

## 🎯 Branch-Specific Features

This branch implements a **dedicated port allocation strategy** using ports **8200-8299** to avoid conflicts with typical development setups.

### 🚀 Working Components (Current State)
- **FastAPI Backend**: Running on port 8201 ✅
- **Health Monitoring**: Complete system status API ✅  
- **Port Configuration**: Full service mapping API ✅
- **Python 3.13**: Compatible minimal dependency set ✅

## 📋 Documentation Available in This Branch

### Core Documentation
- **`docs/DOCKER-SETUP.md`** - Docker Desktop installation guide for Windows/WSL
- **`docs/PORT-ALLOCATION.md`** - Complete reference for ports 8200-8299
- **`README-environment-setup-v1.md`** - This file (branch-specific info)

### Setup Scripts
- **`scripts/start-dev-stack.sh`** - Complete development stack management
- **`test_setup.py`** - Python 3.13 compatibility validation
- **`requirements.txt`** - Python 3.13 compatible dependencies
- **`requirements-actions.txt`** - Rasa Actions dependencies

### Configuration Files
- **`.env.example`** - Environment variables with dedicated ports
- **`docker-compose.yml`** - Multi-service orchestration
- **Backend API**: `backend/api/main.py` with Korean language endpoints

## 🔧 Quick Start (environment-setup-v1 branch)

### 1. Verify Current Setup
```bash
# Check you're on the right branch
git branch --show-current  # Should show: environment-setup-v1

# Check backend is running
curl http://localhost:8201/health

# View port configuration
curl http://localhost:8201/api/config
```

### 2. Development Stack Management
```bash
# Check all service status
./scripts/start-dev-stack.sh status

# Start additional services  
./scripts/start-dev-stack.sh start

# View logs
./scripts/start-dev-stack.sh logs
```

### 3. Docker Setup (if needed)
Follow the guide in this branch: **`docs/DOCKER-SETUP.md`**

## 📊 Port Allocation (environment-setup-v1)

```
8200 - Reserved (Health Monitor)
8201 - FastAPI Backend          ✅ RUNNING
8202 - MongoDB Database
8203 - Ollama LLM Service  
8204 - Rasa NLU Server
8205 - Rasa Actions Server
8206 - Frontend Development Server
8207 - Vector Store (Qdrant)
8208 - Redis Cache
8209 - Webhook Server
8210 - Unity Development Server
8211 - Unity WebGL Application
8212-8299 - Reserved for expansion
```

## 🌟 Key Achievements in This Branch

### ✅ **Conflict-Free Development**
- No interference with ports 3000, 8000, 5000, etc.
- Dedicated range prevents service conflicts
- Clean separation from system services

### ✅ **Python 3.13 Compatibility**
- Working FastAPI backend with minimal dependencies
- Advanced ML packages commented out until ecosystem matures
- Comprehensive compatibility validation

### ✅ **Production-Ready Architecture**
- Docker-ready service configuration
- Health monitoring and status APIs
- Complete environment variable management

## 🔀 Branch Context

### How to Access This Documentation
```bash
# Switch to this branch to access all documentation
git checkout environment-setup-v1

# All documentation is available:
ls docs/                    # DOCKER-SETUP.md, PORT-ALLOCATION.md
ls scripts/                 # start-dev-stack.sh
cat README-environment-setup-v1.md  # This file
```

### Integration with Other Branches
- **Master branch**: May not have these port allocation features
- **Other branches**: May use different port strategies
- **This branch**: Specifically designed for 8200-8299 dedicated ports

## 🚀 Next Steps for This Branch

1. **Complete Docker Integration**: Install Docker Desktop using `docs/DOCKER-SETUP.md`
2. **Start Full Stack**: Use `docker-compose up -d` with dedicated ports
3. **Add Ollama**: Configure LLM service on port 8203
4. **Unity Integration**: Set up WebGL frontend on ports 8206/8211

## 🎯 Branch-Specific Commands

```bash
# Verify you're on the right branch for these docs
git branch --show-current

# Access branch-specific documentation  
cat docs/DOCKER-SETUP.md
cat docs/PORT-ALLOCATION.md

# Use branch-specific scripts
./scripts/start-dev-stack.sh status

# Test branch-specific backend
curl http://localhost:8201/health | python3 -m json.tool
```

---

**Note**: This documentation is specific to the `environment-setup-v1` branch. Other branches may have different port allocation strategies or documentation structures.
