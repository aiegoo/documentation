---
layout: post
title: "DEVELOPMENT ISSUES"
name: "development-issues"
tags: [ai nlp likelion updates news announcements]
permalink: 2025-10-08-development-issues.html
sidebar: other_sidebar
folder: diary
categories: [diary]
keywords: "ai nlp likelion updates news announcements automation"
summary: "Wed, Oct 08, 25, DEVELOPMENT ISSUES - Auto-imported from uconGPT project"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]]
date: 2025-10-08T07:37:27 +0900
updated: 2025-10-08 07:37
source_file: "DEVELOPMENT-ISSUES.md"
auto_imported: true
---
* TOC
{:toc}

> **Auto-imported from**: `D:/repos/aiegoo/uconGPT/eng2Fix/kor2fix/DEVELOPMENT-ISSUES.md`  
> **Original filename**: `DEVELOPMENT-ISSUES.md`  
> **Import date**: Wed, Oct 08, 25

<!--more-->

# kor2Unity Development Issues

## 🎯 **Current Development Focus**
Korean language learning platform with self-hosted LLM integration

## 📋 **Open Issues Summary**

### **High Priority Issues**

#### **Issue #1: LLM Integration Strategy**
- **Status**: 🔄 In Progress
- **Priority**: High
- **Focus**: Self-hosted model integration with existing infrastructure
- **Key Decisions**: 
  - Primary environment: `minigpt4` conda environment
  - Model choice: Llama 2 7B-HF with MiniGPT-4 multimodal capabilities
  - Port allocation: Migrate Ollama service to port 8203

#### **Issue #2: UI Architecture Decision - TUI vs Web UI**
- **Status**: 🤔 Decision Required
- **Priority**: High
- **Focus**: Choose between Terminal UI and Web UI for Korean learning
- **Current Recommendation**: 
  - Phase 1: TUI MVP leveraging existing infrastructure
  - Phase 2: Web UI for broader user adoption
- **Decision Matrix Score**: Web UI (38/50) vs TUI (35/50)

#### **Issue #3: Conda Environment Configuration**
- **Status**: ⏳ Ready to Start
- **Priority**: High
- **Focus**: Activate and validate `minigpt4` environment for model deployment
- **Next Action**: `conda activate minigpt4` and environment validation

### **Infrastructure Status**

#### **✅ Completed**
- FastAPI backend foundation (`/home/hsyyu/llm_api.py`)
- Docker service orchestration (MongoDB, Ollama, backend)
- Dedicated port allocation strategy (8200-8299 range)
- Model inventory and hardware compatibility assessment

#### **🔄 In Progress**
- Conda environment activation for model integration
- TUI vs Web UI architecture decision
- Korean language learning feature specification

#### **📋 Planned**
- Model loading and inference pipeline
- Korean tokenization and prompt engineering
- Frontend interface implementation (TUI or Web)
- Integration testing and validation

## 🎛️ **Technical Architecture**

### **Current Stack**
```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Frontend      │    │   Backend       │    │   AI Models     │
│   (TUI/Web)     │────│   FastAPI       │────│   minigpt4      │
│   Port: 8200    │    │   Port: 8201    │    │   + Llama2-7B   │
└─────────────────┘    └─────────────────┘    │   Port: 8203    │
                                              └─────────────────┘
          │                       │                       │
          │                       │                       │
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│   Database      │    │   Services      │    │   Environment   │
│   MongoDB       │    │   Docker        │    │   Conda         │
│   Port: 8202    │    │   Compose       │    │   minigpt4      │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

### **Available Models**
- **Llama 2 7B-HF**: `/home/hsyyu/llama2-7b-hf/` (Machine appropriate)
- **MiniGPT-4**: `/home/hsyyu/checkpoints/` (Multimodal capabilities)
- **Model Size**: 277MB pretrained + 47MB stage2 checkpoints

### **Development Environments**
- **Primary**: `minigpt4` conda environment (recommended)
- **Fallback**: `ai-cplus-dev` conda environment
- **Future**: `llama4-env` (requires high-end hardware)

## 🚀 **Development Roadmap**

### **Week 1: Environment & Model Setup**
1. Activate `minigpt4` conda environment
2. Validate model loading and inference
3. Test Korean text processing capabilities
4. Benchmark performance on current hardware

### **Week 2: UI Decision & Implementation**
1. Finalize TUI vs Web UI architecture decision
2. Begin frontend implementation based on choice
3. Integrate Korean IME and text input handling
4. Create basic Korean learning interface

### **Week 3: Backend Integration**
1. Extend FastAPI for Korean learning endpoints
2. Implement model inference pipeline
3. Add Korean tokenization and prompt engineering
4. Create learning session management

### **Week 4: Testing & Validation**
1. Integration testing across full stack
2. Korean language learning feature validation
3. Performance optimization and tuning
4. Documentation and deployment preparation

## 📊 **Success Metrics**
- [ ] Successful conda environment activation
- [ ] Model loading and inference validation
- [ ] Korean text processing accuracy
- [ ] UI responsiveness and usability
- [ ] End-to-end learning experience testing

## 🔄 **Next Immediate Actions**
1. **Environment Activation**: `conda activate minigpt4`
2. **Model Validation**: Test model loading capabilities
3. **UI Decision**: Choose TUI vs Web UI approach
4. **Development Sprint**: Begin implementation based on decisions

---
**Last Updated**: August 7, 2025
**Repository**: aiegoo/kor2unity
**Branch**: environment-setup-v1
