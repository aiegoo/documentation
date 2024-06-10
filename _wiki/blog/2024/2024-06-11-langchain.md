---
layout: post
title: "locally serving llm chatbots"
name: "langchain"
tags: [llm]
tagName: gpt
permalink: 2024-06-11-langchain.html
sidebar: other_sidebar
folder: blog
collection: wiki
categories: wiki
keywords: "llm langchain chatbot gpt rag lam"
summary: "Tue, Jun 11, 24, using langchain production ready llmrag"
excerpt_separator: <!--more-->
toc: true
public: true
parent: [[Wiki-Setting-Category]] 
date: 2024-06-11T00:09:55 +0900
updated: 2024-06-11 00:09
---
* TOC
{:toc}

{{site.data.alerts.callout_warning}}This is a draft, the content is not complete and of poor quality!{{site.data.alerts.end}}

I have the chatgpt to adapt and integrate the content with respect to the visual structure and the different layers of the application roadmap, based on my roadmap architecture.

{% include image.html file="llm/langchain_stack.png" caption="highlevel overview of how ucongpt works" %}

# Concepts

In this document, we'll explore the various concepts implemented in UconSmith, particularly focusing on the edge AI and application roadmap. By the end, you'll have a comprehensive understanding of how UconSmith functions, including its architectural components and workflows.

## UconSmith Overview

UconSmith consists of several layers that facilitate AI integration and deployment, ranging from hardware protocols to advanced AI models. Here's a detailed breakdown:

### 1. UconSmith

**Purpose:** Ensures security and observability in AI applications.
- **Key Features:** 
  - Security measures for AI model deployment.
  - Monitoring and observability tools to track AI performance and integrity.

### 2. UconServe

**Purpose:** Provides deployment capabilities for AI models as REST APIs.
- **Key Features:**
  - Deployment of AI models in various environments.
  - Creation of REST APIs for model interactions.

### 3. Templates

**Purpose:** Offers reference applications for easier implementation.
- **Key Features:**
  - Ready-to-use templates to speed up the development process.
  - Standardized applications that can be customized as needed.

### 4. UconGenAI

**Purpose:** Facilitates the use of generative AI models and expert algorithms.
- **Key Features:**
  - Supports chains, agents, and retrieval strategies.
  - Integration with Python for building and running AI models.

### 5. UCONgpt Community

**Purpose:** Provides community-driven tools and models.
- **Key Features:**
  - **Model I/O:** Manages input and output for various models.
  - **Retrieval:** Retrieves information using document loaders and vector stores.
  - **Agent Tooling:** Tools for building and managing AI agents.

### 6. UCON-hqq-Core

**Purpose:** The core system for edge AI expression chains.
- **Key Features:**
  - Parallelization and batching for efficient processing.
  - Supports streaming and asynchronous operations.
  - Integration with SystemC and Verilog for hardware protocols.

## Vector Store

Vector stores are specialized databases designed to store and manage high-dimensional vectors, which are numerical representations of text created by embedding models.

### Key Components:

1. **Vector Generation:** Converts textual information into vectors.
2. **Similarity Searches:** Finds relevant information by comparing vector distances.
3. **Context Retrieval:** Enhances AI model responses with relevant documents.

## Indexing

Indexing is crucial for efficient document management and searchability.

### Steps:

1. **Ingestion:** Pulls documents into the vector store.
2. **Hashing:** Creates unique hashes to prevent duplicates.
3. **Insertion:** Adds documents to the vector store after hashing.

### Record Manager

Manages records in a database to ensure efficient document processing.

- **Namespace:** Separates records logically.
- **Keys:** Unique identifiers for records.
- **Group IDs:** Allows batch operations.
- **Timestamps:** Tracks the last update time for records.

## Query Analysis

Performs analysis on follow-up chat conversations to improve query accuracy.

### Process:

1. **Rephrasing:** Converts user queries into more suitable questions for AI models.
2. **Similarity Search:** Uses rephrased questions to find relevant information.

```python
REPHRASE_TEMPLATE = """\
Given the following conversation and a follow-up question, rephrase the follow-up \
question to be a standalone question.

Chat History:
{chat_history}
Follow Up Input: {question}
Standalone Question:"""
```

This approach ensures that the AI model receives well-formed questions, improving the quality of responses.

## Summary in Korean

### UconSmith 개요

UconSmith는 AI 통합 및 배포를 위한 여러 계층으로 구성되어 있으며, 하드웨어 프로토콜부터 고급 AI 모델까지 포괄합니다.

### 주요 구성 요소:

1. **UconSmith:** 보안 및 관찰 기능을 제공.
2. **UconServe:** REST API로 AI 모델을 배포.
3. **Templates:** 참조 애플리케이션 제공.
4. **UconGenAI:** 생성 AI 모델 및 전문가 알고리즘 지원.
5. **UCONgpt Community:** 커뮤니티 주도 도구 및 모델 제공.
6. **UCON-hqq-Core:** 엣지 AI 표현 체인의 핵심 시스템.

### 벡터 스토어

벡터 스토어는 텍스트의 수치적 표현을 저장하고 관리하는 특수 데이터베이스입니다.

### 주요 구성 요소:

1. **벡터 생성:** 텍스트 정보를 벡터로 변환.
2. **유사성 검색:** 벡터 거리를 비교하여 관련 정보 찾기.
3. **컨텍스트 검색:** 관련 문서를 통해 AI 모델 응답 향상.

### 인덱싱

효율적인 문서 관리와 검색을 위한 필수 요소입니다.

### 단계:

1. **수집:** 문서를 벡터 스토어로 가져오기.
2. **해싱:** 중복 방지를 위한 고유 해시 생성.
3. **삽입:** 해싱 후 문서를 벡터 스토어에 추가.

### 기록 관리자

효율적인 문서 처리를 위해 데이터베이스에서 기록을 관리합니다.

- **네임스페이스:** 논리적으로 기록 분리.
- **키:** 기록의 고유 식별자.
- **그룹 ID:** 배치 작업을 허용.
- **타임스탬프:** 마지막 업데이트 시간 추적.

### 쿼리 분석

후속 채팅 대화에 대한 분석을 수행하여 쿼리 정확도를 향상시킵니다.

### 프로세스:

1. **재구성:** 사용자 쿼리를 AI 모델에 더 적합한 질문으로 변환.
2. **유사성 검색:** 재구성된 질문을 사용하여 관련 정보 찾기.

이 접근 방식은 AI 모델이 잘 형성된 질문을 받도록 하여 응답의 품질을 향상시킵니다.


{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
