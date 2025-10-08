---
layout: post
title: "DOCKER RESTORATION PROGRESS"
name: "docker-restoration-progress"
tags: [ai nlp likelion updates news announcements]
permalink: 2025-10-08-docker-restoration-progress.html
sidebar: other_sidebar
folder: diary
categories: [diary]
keywords: "ai nlp likelion updates news announcements automation"
summary: "Wed, Oct 08, 25, DOCKER RESTORATION PROGRESS - Auto-imported from uconGPT project"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2025-10-08T16:01:13 +0900
updated: 2025-10-08 16:01
source_file: "DOCKER_RESTORATION_PROGRESS.md"
source_last_modified: "2025-10-08T16:01:13+0900"
auto_imported: true
---
* TOC
{:toc}

> **Auto-imported from**: `D:/repos/aiegoo/uconGPT/eng2Fix/kor2fix/DOCKER_RESTORATION_PROGRESS.md`  
> **Original filename**: `DOCKER_RESTORATION_PROGRESS.md`  
> **Import date**: Wed, Oct 08, 25

<!--more-->

# Docker Desktop and WSL Restoration Progress

**Date**: October 6, 2025  
**Branch**: environment-setup-v1  
**Milestone**: Docker-WSL-Restoration-v1.0  
**Linked Issues**: [#31](https://github.com/aiegoo/kor2Unity/issues/31), [#29](https://github.com/aiegoo/kor2Unity/issues/29), [#26](https://github.com/aiegoo/kor2Unity/issues/26)

## 🎯 Restoration Objective

Restore the Korean language processing platform that was running on August 25, 2025, with all services moved to D drive for optimal storage management.

## ✅ Completed Tasks

### 1. Docker Desktop Installation & Configuration
- ✅ Installed Docker Desktop 4.47.0
- ✅ Configured Docker to use D drive for data storage (`D:\Docker\data`)
- ✅ Fixed JSON parsing issues (UTF-8 BOM problems)
- ✅ WSL integration properly configured

### 2. WSL Distribution Migration
- ✅ Exported `docker-desktop` WSL distribution
- ✅ Moved WSL distribution to `D:\Docker\data\wsl\docker-desktop`
- ✅ Successfully restored WSL functionality

### 3. Container Images Recovery
Successfully pulled from Docker Hub (aiegoo repositories):
- ✅ `aiegoo/voice-upload-server:latest` (786MB)
- ✅ `aiegoo/audio-api:latest` (9.82GB)
- ✅ `aiegoo/korean-api:latest` (7.33GB)
- ✅ `aiegoo/llm-api:latest` (7.41GB)
- ✅ `aiegoo/rasa-actions:latest` (248MB)
- ✅ `aiegoo/monitoring:latest`
- ✅ `mongo:5.0` and `mongo:7.0`
- ✅ `redis:7-alpine`

### 4. Platform Services Restoration
Currently running services:
- ✅ **MongoDB** (port 8202) - Primary database
- ✅ **Redis** (port 8210) - Caching service

### 5. Docker Compose Configuration
- ✅ Created comprehensive Docker Compose file
- ✅ Configured volume mappings to D drive
- ✅ Set up service networking and dependencies

## 📋 Original Container Inventory (August 25, 2025)

Based on the screenshot from August 25, 2025, the following containers were running:

| Container Name | Status | Purpose |
|---|---|---|
| mongodb | Running | Database service |
| kor2unity-offline | Running | Main Korean Unity service |
| korean-frontend-offline | Running | Frontend application |
| korean-monitoring-offline | Running | System monitoring |
| korean-learning-api-offline | Running | Learning API service |
| korean-audio-api-offline | Running | Audio processing |
| korean-llm-api-offline | Running | LLM API service |
| korean-redis-offline | Running | Redis cache |
| rasa-actions-offline | Running | Rasa chatbot actions |
| korean-file-server-offline | Running | File server |
| korean-mongodb-offline | Running | MongoDB instance |
| my-korean-platform | Running | Platform service |
| korean-mongodb | Running | Secondary MongoDB |
| korean-rasa-actions | Running | Rasa actions |
| korean-llm-api | Running | LLM API |
| korean-redis | Running | Redis service |
| korean-file-server-minimal | Running | Minimal file server |
| voice-upload-server-latest | Running | Voice upload service |

## 🚧 Pending Restoration Tasks

### High Priority
1. **Restore remaining API services**
   - Start korean-learning-api-offline
   - Start korean-audio-api-offline  
   - Start korean-llm-api-offline

2. **Rebuild frontend services**
   - Investigate korean-frontend-offline configuration
   - Restore kor2unity-offline main service

3. **Configure Rasa services**
   - Set up rasa-actions-offline
   - Configure rasa-core-offline

### Medium Priority
4. **File server restoration**
   - Configure korean-file-server-offline
   - Set up file upload/download functionality

5. **Monitoring setup**
   - Start korean-monitoring-offline
   - Configure health checks

### Low Priority
6. **Platform integration**
   - Integrate my-korean-platform service
   - Configure inter-service communication

## 🔧 Technical Configuration

### Docker Desktop Settings
```json
{
  "settingsVersion": 1,
  "dataFolder": "D:\\Docker\\data",
  "wslEngineEnabled": true,
  "hyperVCustomVmPath": "D:\\Docker\\data\\vms"
}
```

### Storage Layout
```
D:\Docker\
├── data\
│   ├── docker\          # Docker daemon data
│   ├── vms\            # Hyper-V VMs
│   ├── wsl\            # WSL distributions
│   │   └── docker-desktop\
│   ├── volumes\        # Docker volumes
│   │   ├── mongodb_data\
│   │   ├── redis_data\
│   │   └── voice_uploads\
│   └── korean-platform-docker-compose.yml
└── user-config\        # Backup configurations
```

## 🐛 Issues Resolved

1. **UTF-8 BOM Error**: Fixed JSON parsing issues in daemon.json
2. **WSL Path Issues**: Corrected Windows/WSL path mappings
3. **Docker Credential Helper**: Resolved authentication issues
4. **Volume Permissions**: Set up proper D drive volume mappings

## 📝 Notes

- Original containers were running ~40 days ago (August 25, 2025)
- Docker Hub images are 6-7 weeks old (base versions)
- Current restoration provides base infrastructure
- Custom configurations from August may need rebuilding

## 🔄 Next Steps

See GitHub Issues for detailed restoration roadmap:
- Issue #X: API Services Restoration
- Issue #X: Frontend Services Rebuilding  
- Issue #X: Rasa Integration Setup
- Issue #X: Monitoring and Health Checks
- Issue #X: Platform Integration Testing

---

**Restoration Team**: aiegoo  
**Environment**: Windows 11 + WSL2 + Docker Desktop  
**Target Platform**: Korean Language Processing & Unity Integration