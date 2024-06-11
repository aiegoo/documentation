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


## Key Concepts applicable to the bottom for the onboard expression chains;
#### Parallelization
Parallelization involves dividing a task into multiple sub-tasks that can be processed simultaneously, leveraging multi-core processors or multiple computing units. This is crucial for high-performance computing and is widely used in:

- **Voice Classification:** Speeding up feature extraction and processing by parallelizing different segments of audio data.
- **Image Classification:** Concurrently processing different parts of an image or multiple images.

**Core Technology:** Multithreading, SIMD (Single Instruction, Multiple Data) on FPGA, and GPU-based parallel processing.

#### Fallback
Fallback mechanisms ensure that when a primary process or system fails, an alternative takes over to maintain functionality. This is essential for reliability in edge AI applications.

- **Voice Classification:** If the primary model fails to classify, a simpler, more robust model can provide a less precise but still valuable output.
- **Image Classification:** Ensuring that a backup classifier steps in if the main one encounters errors.

**Core Technology:** Redundant systems, failover clustering, and robust model deployment strategies.

#### Streaming
Streaming refers to the continuous processing of data as it is received, rather than waiting for the entire dataset. This is particularly useful in real-time applications.

- **Voice Classification:** Real-time processing of audio streams for instant classification and response.
- **Image Classification:** Processing video frames on-the-fly to classify objects or activities in real-time.

**Core Technology:** Real-time processing frameworks, low-latency streaming protocols (e.g., WebRTC).

#### Batching
Batching involves processing data in chunks or batches to improve computational efficiency and throughput. This is opposed to processing one data point at a time.

- **Voice Classification:** Aggregating multiple audio samples to process them together, improving GPU/FPGA utilization.
- **Image Classification:** Grouping images for bulk processing, which can enhance throughput and reduce overhead.

**Core Technology:** Batch processing systems, micro-batching in stream processing frameworks.

#### Async (Asynchronous Processing)
Asynchronous processing allows tasks to be executed non-blocking, meaning tasks can run in the background while other processes continue.

- **Voice Classification:** Handling multiple audio inputs concurrently without waiting for each to complete before starting the next.
- **Image Classification:** Processing images asynchronously to handle multiple requests simultaneously.

**Core Technology:** Asynchronous APIs, event-driven programming, non-blocking I/O.

#### Tracing
Tracing involves monitoring and recording the execution of a program to understand its behavior, identify bottlenecks, and debug issues.

- **Voice Classification:** Monitoring the pipeline to identify latency issues or errors in real-time processing.
- **Image Classification:** Tracking the execution flow to optimize performance and debug classification models.

**Core Technology:** Distributed tracing systems (e.g., Jaeger, Zipkin), performance monitoring tools.

### Application for Voice/Image Classification at the Edge:

1. **Parallelization:** Can be implemented using FPGA's parallel processing capabilities or multi-core CPUs/GPUs. For instance, Xilinx's Vitis AI can leverage FPGA for concurrent processing of different neural network layers or data segments, making real-time voice or image classification feasible at the edge.

2. **Fallback:** Ensuring robustness in edge devices by implementing fallback mechanisms. If the primary AI model fails due to limited compute resources, a simpler model can take over. This can be implemented using frameworks like TensorFlow Lite, which supports model fallback mechanisms.

3. **Streaming:** Utilizing real-time processing frameworks such as GStreamer for continuous audio and video data processing. This is essential for applications requiring instant feedback, such as voice-activated assistants or real-time surveillance systems.

4. **Batching:** Employing batch processing techniques in frameworks like Apache Kafka Streams to handle bursts of data efficiently, making it suitable for scenarios where large volumes of audio or image data are processed periodically.

5. **Async:** Using asynchronous processing libraries in Python (e.g., asyncio) or Node.js for handling multiple classification requests simultaneously without blocking the main application flow. This enhances the responsiveness of edge AI systems.

6. **Tracing:** Implementing distributed tracing tools like Jaeger to monitor and optimize the performance of AI models deployed on edge devices. This is crucial for maintaining efficient operation and quickly identifying and resolving issues.

### Summary in Korean:

**병렬화:** 여러 작업을 동시에 처리하여 성능을 향상. 음성 및 이미지 분류에서 데이터를 병렬로 처리하여 빠른 응답 시간 제공.

**폴백:** 주요 시스템이 실패할 때 대체 시스템이 기능을 유지하도록 함. 음성 및 이미지 분류에서 주요 모델이 실패할 경우 백업 모델이 역할을 수행.

**스트리밍:** 데이터를 수신하면서 실시간으로 처리. 음성 스트림의 실시간 분류 및 영상 프레임의 즉각 처리에 유용.

**배칭:** 데이터를 일괄로 처리하여 효율성을 높임. 여러 음성 샘플이나 이미지를 한 번에 처리하여 처리량 증가.

**비동기 처리:** 비차단 방식으로 작업을 실행하여 동시 처리 가능. 여러 음성 입력이나 이미지 요청을 동시에 처리.

**추적:** 프로그램 실행을 모니터링하고 기록하여 성능 최적화 및 문제 디버깅에 도움. 실시간 처리 파이프라인의 병목 현상 식별.

이러한 기술과 방법론을 통해 엣지에서의 음성 및 이미지 분류 응용 프로그램을 최적화할 수 있습니다.

{% include image.html file="llm/soilMaturity.png" caption="highlevel overview of S-oil DT maturity level" %}
{% include image.html file="llm/ucongptRoadmap.png" caption="Component level overview" %}
{% include taglogic.html %}

{% include links.html %}

{% include commento.html %}

{{site.data.alerts.hr_shaded}}
