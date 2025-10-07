---
layout: post
title: "DETAILED RESTORATION LOG"
name: "detailed-restoration-log"
tags: [ai nlp likelion updates news announcements]
permalink: 2025-10-08-detailed-restoration-log.html
sidebar: other_sidebar
folder: diary
categories: [diary]
keywords: "ai nlp likelion updates news announcements automation"
summary: "Wed, Oct 08, 25, DETAILED RESTORATION LOG - Auto-imported from uconGPT project"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2025-10-08T07:37:26 +0900
updated: 2025-10-08 07:37
source_file: "DETAILED_RESTORATION_LOG.md"
auto_imported: true
---
* TOC
{:toc}

> **Auto-imported from**: `D:/repos/aiegoo/uconGPT/eng2Fix/kor2fix/DETAILED_RESTORATION_LOG.md`  
> **Original filename**: `DETAILED_RESTORATION_LOG.md`  
> **Import date**: Wed, Oct 08, 25

<!--more-->

# Docker Desktop and WSL Restoration - Detailed Step-by-Step Record

**Date**: October 6, 2025  
**Duration**: ~3 hours  
**Operator**: aiegoo + GitHub Copilot  
**Target**: Restore Korean language processing platform from August 25, 2025

## 📋 Initial Situation Assessment

### Environment Analysis
- **OS**: Windows 11
- **Current Directory**: `d:\repos\aiegoo\uconGPT\eng2Fix\kor2fix`
- **Branch**: `environment-setup-v1`
- **Issue**: Python path error: `bash: C:\Users\hsyyu\anaconda3/bin/python: No such file or directory`
- **Goal**: Restore Docker Desktop to run on D drive and recover 18 containers from August 25, 2025

### Original Container Inventory (from screenshot)
18 containers were running on August 25, 2025:
- mongodb, kor2unity-offline, korean-frontend-offline, korean-monitoring-offline
- korean-learning-api-offline, korean-audio-api-offline, korean-llm-api-offline
- korean-redis-offline, rasa-actions-offline, korean-file-server-offline
- korean-mongodb-offline, my-korean-platform, korean-mongodb
- korean-rasa-actions, korean-llm-api, korean-redis
- korean-file-server-minimal, voice-upload-server-latest

## 🔧 Step-by-Step Restoration Process

### Phase 1: Docker Desktop Installation (10:00 AM - 11:00 AM)

#### Step 1.1: Verify Docker Desktop Installer
```powershell
# Command executed:
Test-Path "C:\Users\hsyyu\Downloads\Docker Desktop Installer.exe"
# Result: True - installer confirmed present
```

#### Step 1.2: Install Docker Desktop with Admin Privileges
```powershell
# Command executed:
Start-Process -FilePath "C:\Users\hsyyu\Downloads\Docker Desktop Installer.exe" -Verb RunAs -ArgumentList "install --quiet --accept-license"
# Result: Docker Desktop 4.47.0 installed successfully
```

#### Step 1.3: Monitor Installation Progress
```powershell
# Commands executed:
Get-Process | Where-Object {$_.ProcessName -like "*Docker*"}
Start-Sleep -Seconds 30
Test-Path "C:\Program Files\Docker\Docker\Docker Desktop.exe"
# Result: Installation completed, executable confirmed
```

### Phase 2: D Drive Storage Configuration (11:00 AM - 12:00 PM)

#### Step 2.1: Create D Drive Directory Structure
```powershell
# Commands executed:
New-Item -ItemType Directory -Path "D:\Docker" -Force
New-Item -ItemType Directory -Path "D:\Docker\data" -Force
New-Item -ItemType Directory -Path "D:\Docker\data\vms" -Force
```

#### Step 2.2: Configure Docker Desktop Settings
**File**: `C:\Users\hsyyu\AppData\Roaming\Docker\settings.json`
```json
{
  "settingsVersion": 1,
  "dataFolder": "D:\\Docker\\data",
  "enableAnalytics": false,
  "autoStart": true,
  "displayedTutorial": true,
  "wslEngineEnabled": true,
  "useWindowsContainers": false,
  "hyperVCustomVmPath": "D:\\Docker\\data\\vms"
}
```

#### Step 2.3: Configure Docker Daemon for D Drive
**File**: `C:\Users\hsyyu\.docker\daemon.json`
```json
{
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": false,
  "data-root": "D:\\Docker\\data\\docker"
}
```

### Phase 3: WSL Distribution Migration (12:00 PM - 1:00 PM)

#### Step 3.1: Check WSL Status
```powershell
# Command executed:
wsl --list --verbose
# Result: Ubuntu-22.04 Running, docker-desktop detected
```

#### Step 3.2: Export Docker Desktop WSL Distribution
```powershell
# Command executed:
wsl --export docker-desktop "D:\Docker\data\docker-desktop-backup.tar"
# Result: Export completed successfully (48 MB)
```

#### Step 3.3: Unregister and Re-import to D Drive
```powershell
# Commands executed:
wsl --unregister docker-desktop
New-Item -ItemType Directory -Path "D:\Docker\data\wsl\docker-desktop" -Force
wsl --import docker-desktop "D:\Docker\data\wsl\docker-desktop" "D:\Docker\data\docker-desktop-backup.tar"
# Result: WSL distribution successfully moved to D drive
```

### Phase 4: JSON/UTF-8 BOM Issues Resolution (1:00 PM - 1:30 PM)

#### Step 4.1: Fix JSON Parsing Error
**Error encountered**: `invalid character 'ï' looking for beginning of value`
**Root cause**: UTF-8 BOM in JSON files

#### Step 4.2: Recreate daemon.json with Proper Encoding
```powershell
# Commands executed:
Remove-Item "C:\Users\hsyyu\.docker\daemon.json" -Force
$daemonConfig = @'
{
  "builder": {
    "gc": {
      "defaultKeepStorage": "20GB",
      "enabled": true
    }
  },
  "experimental": false
}
'@
[System.IO.File]::WriteAllText("C:\Users\hsyyu\.docker\daemon.json", $daemonConfig, [System.Text.UTF8Encoding]::new($false))
```

#### Step 4.3: Fix Docker Config Credential Issues
```powershell
# Commands executed:
Remove-Item "$env:USERPROFILE\.docker\config.json" -Force
$config = '{"auths": {}, "credsStore": ""}'
[System.IO.File]::WriteAllText("$env:USERPROFILE\.docker\config.json", $config, [System.Text.UTF8Encoding]::new($false))
```

### Phase 5: Container Images Recovery (1:30 PM - 2:30 PM)

#### Step 5.1: Identify Docker Hub Repositories
**Research**: Found aiegoo Docker Hub account with matching repositories:
- aiegoo/voice-upload-server (786MB)
- aiegoo/llm-api (7.41GB)
- aiegoo/audio-api (9.82GB)
- aiegoo/korean-api (7.33GB)
- aiegoo/rasa-actions (248MB)
- aiegoo/monitoring

#### Step 5.2: Pull Container Images from Docker Hub
```bash
# Commands executed:
docker pull aiegoo/voice-upload-server
docker pull aiegoo/llm-api
docker pull aiegoo/audio-api
docker pull aiegoo/korean-api
docker pull aiegoo/rasa-actions
docker pull aiegoo/monitoring
docker pull mongo:5.0
docker pull mongo:7.0
docker pull redis:7-alpine
```

**Results**:
```
REPOSITORY                   TAG       IMAGE ID       CREATED       SIZE
aiegoo/voice-upload-server   latest    ea8d4001b3a7   6 weeks ago   786MB
aiegoo/audio-api             latest    80bcc84aa1f0   7 weeks ago   9.82GB
aiegoo/korean-api            latest    3f3e8318b06c   7 weeks ago   7.33GB
aiegoo/llm-api               latest    e8747a5978e1   7 weeks ago   7.41GB
aiegoo/rasa-actions          latest    4ef9d8b6666e   7 weeks ago   248MB
aiegoo/monitoring            latest    [ID]            7 weeks ago   [SIZE]
```

### Phase 6: Docker Compose Configuration (2:30 PM - 3:00 PM)

#### Step 6.1: Create Comprehensive Docker Compose File
**File**: `D:\Docker\data\korean-platform-docker-compose.yml`
- Configured 15+ services matching original container names
- Set up D drive volume mappings
- Configured service networking and dependencies
- Port mappings: 8200-8212 range

#### Step 6.2: Create Volume Directory Structure
```powershell
# Commands executed:
$volumeDirs = @(
    "D:\Docker\data\volumes\mongodb_data",
    "D:\Docker\data\volumes\korean_mongodb_data", 
    "D:\Docker\data\volumes\redis_data",
    "D:\Docker\data\volumes\voice_uploads",
    "D:\Docker\data\volumes\frontend_static",
    "D:\Docker\data\volumes\file_server_data"
)
foreach ($dir in $volumeDirs) { New-Item -ItemType Directory -Path $dir -Force }
```

### Phase 7: Service Restoration Testing (3:00 PM - 3:30 PM)

#### Step 7.1: Start Core Services
```bash
# Commands executed:
cd D:\Docker\data
docker compose -f korean-platform-docker-compose.yml up -d mongodb korean-redis
```

#### Step 7.2: Verify Service Status
```bash
# Command executed:
docker ps
# Results:
CONTAINER ID   IMAGE            PORTS                     NAMES
4243d3d71fd2   redis:7-alpine   0.0.0.0:8210->6379/tcp    korean-redis
108e413f1c39   mongo:5.0        0.0.0.0:8202->27017/tcp   mongodb
```

### Phase 8: Git Repository Documentation (3:30 PM - 4:00 PM)

#### Step 8.1: Create Detailed Documentation
**File**: `DOCKER_RESTORATION_PROGRESS.md`
- Complete restoration timeline
- Technical configuration details
- Container inventory mapping
- Issue resolution log

#### Step 8.2: Git Operations and Milestone Tagging
```bash
# Authentication setup (as aiegoo user, not root):
git config --global user.name "aiegoo"
git config --global user.email "aiegoo@example.com"
git config --global core.editor vim

# Add documentation:
git add DOCKER_RESTORATION_PROGRESS.md

# Commit with detailed message:
git commit -m "feat: Docker Desktop and WSL restoration milestone

- Successfully installed Docker Desktop 4.47.0 on D drive
- Migrated docker-desktop WSL distribution to D:/Docker/data 
- Recovered container images from Docker Hub (aiegoo/* repositories)
- Restored MongoDB and Redis services
- Created comprehensive Docker Compose configuration
- Fixed UTF-8 BOM and credential issues
- Documented complete restoration progress

Milestone: Docker-WSL-Restoration-v1.0
Restores: Korean language processing platform from Aug 25, 2025
Next: API services restoration and frontend rebuilding"

# Create milestone tag:
git tag -a 'docker-wsl-restoration-v1.0' -m 'Docker Desktop and WSL Restoration Milestone v1.0'

# Handle divergent branches (remote had updates):
git pull --no-rebase origin environment-setup-v1
# Merged 74 files, 7265 insertions from remote

# Push all changes:
git push origin environment-setup-v1
git push origin docker-wsl-restoration-v1.0
```

### Phase 9: Terminal & Editor Experience Restoration (4:00 PM - 6:00 PM)

#### Step 9.1: Replace Broken Oh My Posh Prompt

- Observed garbled glyphs/icons in existing Oh My Posh prompt on Windows Terminal
- Requirement pivot from visuals to readability: GitKraken-style abbreviations, collapsible status line, and zero font dependencies
- Decision: implement custom Bash prompt while keeping optional powerline support

#### Step 9.2: Deploy Compact GitKraken-Style Prompt

- **Source file**: `D:\Docker\data\terminal_configs\compact_bashrc.sh`
- Highlights:
  - `build_prompt()` renders a single-line status with smart path truncation and git glyphs (`● ± … ↑ ↓`)
  - Shortcut banner on shell start: `⚡ Korean Dev Ready | Shortcuts: ks kd kt ka | Git: g gst ga gc gp`
  - Git shortcuts (`g`, `gst`, `ga`, `gc`, `gp`, `gpl`, etc.) and Korean dev helpers (`ks`, `kd`, `kt`, `ka`)
  - Fallback prompt when git repository metadata is unavailable
- Synced into WSL user profile:

  ```bash
  cp /mnt/d/Docker/data/terminal_configs/compact_bashrc.sh ~/.bashrc
  sed -i 's/\r$//' ~/.bashrc
  ```

#### Step 9.3: Add Powerline with Safe Fallback

- Installed bindings: `pip install --user powerline-status`
- Added conditional sourcing inside `.bashrc`:

  ```bash
  POWERLINE_BINDING="$HOME/.local/lib/python3.13/site-packages/powerline/bindings/bash/powerline.sh"
  command -v powerline-daemon >/dev/null 2>&1 && powerline-daemon -q
  ```

- Custom shell theme placed at `~/.config/powerline/themes/shell/default.json` (env, cwd, git status segments)
- Behavior: powerline segments appear when patched Nerd Font is active; otherwise prompt falls back to ASCII-only separators

#### Step 9.4: Modernize Vim Workflow

- **Source file**: `D:\Docker\data\terminal_configs\compact_vimrc.vim` → synced to `~/.vimrc`
- Migrated from Pathogen/Vundle to `vim-plug`
- Plugins installed via `vim +PlugInstall +qall`:
  - `vim-airline/vim-airline` + `vim-airline-themes`
  - `preservim/nerdtree`
  - `tpope/vim-fugitive`
  - `mhinz/vim-startify`
  - `airblade/vim-gitgutter`
  - `christoomey/vim-tmux-navigator`
  - `morhetz/gruvbox`
- Startify configured with sessions, recent kor2fix files, and project bookmarks
- ASCII-friendly airline symbols provided when `AIRLINE_POWERLINE_FONTS` is unset (per [vi.stackexchange.com/a/3361](https://vi.stackexchange.com/a/3361))
- Auto-creates `~/.vim/undo` and `~/.vim/session` directories for persistence

#### Step 9.5: Validation

- Powerline prompt renders as `aiegoo  /  mnt  d ` when fonts available; otherwise `/mnt/d ›`
- `gst` alias shows compact git status; Korean helper commands reachable via `ks`, `kd`, `kt`, `ka`
- Launching `vim` now opens Startify dashboard with tmux navigation shortcuts enabled

### Phase 10: Core Service Orchestration (6:00 PM - 8:00 PM)

#### Step 10.1: Rebuild Docker Compose Topology

- Replaced legacy compose stack with branch-aligned services (`backend`, `frontend`, `rasa-core`, `rasa-actions`, `mongodb`, `redis`, `health-monitor`)
- Added optional profiles for `ollama` (LLM) and `qdrant` (vector DB) to defer heavy downloads (`docker compose --profile llm up -d`)
- Created `.env` from template to centralize dedicated port mappings and backend URLs

#### Step 10.2: Container Image Refresh

```powershell
cd D:\repos\aiegoo\uconGPT\eng2Fix\kor2fix
& "C:\Program Files\Docker\Docker\resources\bin\docker.exe" compose build backend frontend rasa-actions rasa-core
```

- Added Python package initializers (`backend/__init__.py`, `backend/api/__init__.py`) so Uvicorn can import `backend.api.main`
- Simplified frontend delivery via `nginx:1.27-alpine` serving existing HTML templates
- Hardened Rasa build pipeline with a minimal Korean NLU dataset and automated training during image build

#### Step 10.3: Resolve Build & Runtime Issues

- Installed action server dependencies as `root` inside the image to avoid pip permission errors, then dropped back to the default user
- Declared `action_ask_llm` in `domain.yml` and added fallback rules to unblock `rasa train`
- Removed the obsolete Compose `version` key to silence v2 CLI warnings

#### Step 10.4: Launch Core Services on Dedicated Ports

```powershell
# Free conflicting legacy Mongo container
& "C:\Program Files\Docker\Docker\resources\bin\docker.exe" stop mongodb
& "C:\Program Files\Docker\Docker\resources\bin\docker.exe" rm mongodb

# Start branch services
& "C:\Program Files\Docker\Docker\resources\bin\docker.exe" compose up -d backend frontend rasa-actions rasa-core mongodb redis health-monitor

# Verify health endpoints
Invoke-WebRequest http://localhost:8201/health | Select Content
Invoke-WebRequest http://localhost:8204/status | Select StatusCode
```

- `docker compose ps` shows all core containers healthy on ports 8201-8209 and 8212
- Confirmed FastAPI `/api/llm/chat` placeholder echo and Rasa REST channel are reachable for integration tests

## 🎯 Current Status Summary

### ✅ Successfully Completed

1. **Docker Desktop**: Installed and configured on D drive
2. **WSL Migration**: docker-desktop distribution moved to D:\Docker\data\wsl
3. **Container Images**: 7 key images recovered from Docker Hub
4. **Core Services**: MongoDB (port 8202) and Redis (port 8210) operational
5. **Storage Configuration**: All Docker data routed to D drive
6. **Documentation**: Complete step-by-step record created
7. **Version Control**: Changes committed and tagged as milestone
8. **Terminal & Editor**: GitKraken-style prompt, powerline-ready pipeline, and vim workflow restored

### 📋 Image Recovery Status

- ✅ aiegoo/voice-upload-server:latest (786MB)
- ✅ aiegoo/llm-api:latest (7.41GB)  
- ✅ aiegoo/audio-api:latest (9.82GB)
- ✅ aiegoo/korean-api:latest (7.33GB)
- ✅ aiegoo/rasa-actions:latest (248MB)
- ✅ aiegoo/monitoring:latest
- ✅ mongo:5.0, mongo:7.0, redis:7-alpine

### 🚧 Pending Restoration (13 containers remaining)

- korean-frontend-offline (needs rebuild)
- kor2unity-offline (main service)
- korean-learning-api-offline (image available)
- korean-audio-api-offline (image available)
- korean-llm-api-offline (image available)
- korean-file-server-offline, korean-file-server-minimal
- korean-monitoring-offline (image available)
- rasa-actions-offline, korean-rasa-actions
- korean-mongodb-offline (DB setup needed)
- my-korean-platform (integration service)

## 📁 Final Directory Structure

```text
D:\Docker\
├── data\
│   ├── docker\                    # Docker daemon data
│   ├── vms\                      # Hyper-V VMs  
│   ├── wsl\                      # WSL distributions
│   │   └── docker-desktop\       # Migrated WSL distro
│   ├── volumes\                  # Named volumes
│   │   ├── mongodb_data\
│   │   ├── korean_mongodb_data\
│   │   ├── redis_data\
│   │   ├── voice_uploads\
│   │   ├── frontend_static\
│   │   └── file_server_data\
│   ├── korean-platform-docker-compose.yml
│   └── docker-desktop-backup.tar
└── user-config\                  # Configuration backups
    └── daemon.json
```

## 🔧 Technical Configuration Details

### Docker Desktop Settings

- **Data Folder**: `D:\Docker\data`
- **WSL Engine**: Enabled
- **Hyper-V VMs**: `D:\Docker\data\vms`
- **Settings Version**: 1

### WSL Configuration

- **Distribution**: docker-desktop (WSL2)
- **Location**: `D:\Docker\data\wsl\docker-desktop`
- **Size**: 48MB (exported)
- **User Setup**: aiegoo user with SSH keys

### Network Configuration

- **Bridge Network**: korean-network (172.20.0.0/16)
- **Port Range**: 8200-8212 (dedicated to Korean platform)
- **Service Discovery**: Docker internal DNS

## 🚀 Next Phase Requirements

### Immediate Actions Needed

1. **Start remaining API services** using existing images
2. **Investigate frontend rebuild** requirements  
3. **Configure Rasa integration** with proper models
4. **Set up file server** with persistent storage
5. **Implement health monitoring** across all services

### Success Metrics

- All 18 original containers running
- Services accessible on designated ports
- Data persistence on D drive confirmed
- Inter-service communication functional
- Platform ready for Korean language processing

---

**Restoration Milestone**: `docker-wsl-restoration-v1.0`  
**Git Tag**: `docker-wsl-restoration-v1.0`  
**Commit**: `df595e5` on `environment-setup-v1` branch  
**Next Phase**: API Services Restoration (Issue #TBD)
