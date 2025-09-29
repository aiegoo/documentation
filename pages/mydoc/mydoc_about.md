---
title: About the author
keywords: documentation theme, jekyll, technical writers, help authoring tools, hat replacements
last_updated: July 3, 2016
tags: [getting_started]
summary: "I have used this theme for projects that I've worked on as a professional technical writer."
sidebar: mydoc_sidebar
permalink: mydoc_about.html
folder: mydoc
---

## tonyleekorea
- [myblog](blog.naver.com/aiegoo)
![image](https://user-images.githubusercontent.com/42961200/126900686-f2804d10-59e1-4774-a092-77e786bbe3cf.png)

This is my first web page I have created, without any css, html or jquery snippets being used. It's been pride of my savvy impromptu skills of survival. 4 years ago.

- my wordpress theme customization
  - now dyfunct tonyleekorea.com has been in service for the last 2 years, with my portfolio and profile including cvs being kept with it.
  - cariana.tonyleekorea.com was a very simple shopping web app with no cart, no payment options. 
  - then I have created more extensive shopping cart from cafe24 almost 8 years ago, which is still in service, with all the frills and jingles of shopping mall site would need. [yogaman](https://yogaman.club)

- Django Commerce Theme, Oscar
  - I looked for something where a community is really active; Saleor in the beginning and then Oscar. Oscar is a complete django framework, providing a front-end, backend and blog with an admin panel for customer/product/shipping/payment management. 
  - I later customized it for my older job. www.lightup.co.kr/en is built to integrate all of the Oscar functionality with markdown editing tools. [front-end](http://www.lightup.co.kr/en) [admin](http://159.65.8.38:10088/admin)  [blog](http://159.65.8.38:10088/blog)

## my profile goal as a front-end engineer
- Profound knowledge of JavaScript (4+ years), especially React (3+years) and Typescript (3+ years).
- You have experience with testing and bundling of Javascript code
- You treat CSS as a first class citizen and have deep knowledge in CSS Frameworks and Preprocessors (e.g. Sass, SCSS)
- You are comfortable with the ins-and-outs and capable of squeezing every millisecond of performance out of the browser
- Putting code live every day is a given
- You have been part of an agile development team. You favor open communication, constant feedback and short decision paths
- You have a “never-stop-learning” attitude and a desire to develop and grow
- You are fluent in English

## AI engineer and stint at a real job application.

### AI Engineer — Portfolio and Portal
- 프로필 사이트: [pf1.eggs.or.kr](http://pf1.eggs.or.kr) — 기본 프로필, 이력, 연락처
- 포트폴리오 포털: [pf7.eggs.or.kr](http://pf7.eggs.or.kr) — 프로젝트 문서화 허브

### AI Engineer — Assignments and Deliverables
- 과제 답안 (Colab/Gist):  
  https://gist.githubusercontent.com/aiegoo/407a7a63c1a84fde581dd05d1c6820ee/raw/4fa3cbc05d8ce576fd5115ad421275773dc59f5a/code.mmd
- 발표 자료(PT):  
  https://aiegoo.github.io/kisec-final

### Focus Areas
- RAG/LLM 파이프라인 설계와 프로덕션 배포
- 음성 인식/합성(ASR/TTS) 워크로드 최적화
- 벡터DB(Chroma/FAISS) 및 검색 성능 튜닝
- 경량/반응형 프론트엔드와 API 연동

### Recent Highlights
- Zero‑shot Coqui TTS 실험 및 통합
- 한국어 데이터셋 리서치(HF/AI Hub)
- 음성 품질 분석 프레임워크 설계
- 배포 자동화(Render/Fly.io, Docker 기반)

## AI Engineer — Field Notes from Samsung SDN Summit

- 참석: Samsung SDN Summit 2025 (Seoul)  
  포커스 영역: Edge/MEC RAG, 온디바이스 LLM, Private 5G/슬라이싱, 관측성(OpenTelemetry), 멀티모달(XR/음성) 에이전트.
- 주요 인사이트
  - p95 응답 지연 2s 이하를 위한 파이프라인: 프리페치/스트리밍, 캐시, RAG 후보 축소.
  - 벡터DB(Chroma/FAISS) 엣지 배치 + 콜드스타트 완화(프리로딩/온디맨드 빌드).
  - Whisper/Coqui TTS 경량화(quantization)와 GPU 메모리 예산 관리.
  - 트레이싱: 요청→RAG→LLM→후처리 전 구간에 trace id 전파.
- 현장 데모/산출물
  - AI Tutor 에이전트 파이프라인(음성→ASR→RAG→LLM→피드백).
  - 모델 서빙 파이프라인 도식과 KPI 대시보드.
  - 모바일 반응형/접근성 수정 및 Jekyll 마크다운 파서 정리.
- 아티팩트
  - 요약/그림: [2025-09-24-38th]({{ '/2025-09-24-38th.html' | relative_url }})
  - 파이프라인 이미지:
    - <a href="{{ '/wiki-img/2025/diary/38th/overview.png' | relative_url }}" target="_blank">overview.png</a>,
      <a href="{{ '/wiki-img/2025/diary/38th/monitor.png' | relative_url }}" target="_blank">monitor.png</a>,
      <a href="{{ '/wiki-img/2025/diary/38th/pipeline.png' | relative_url }}" target="_blank">pipeline.png</a>,
      <a href="{{ '/wiki-img/2025/diary/38th/model_serving_pipeline.png' | relative_url }}" target="_blank">model_serving_pipeline.png</a>
- 액션 아이템
  - [ ] MEC 배치용 RAG 인덱스 스냅샷/롤오버 자동화
  - [ ] p95 SLA 모니터링 대시보드(OpenTelemetry + Prom/Grafana)
  - [ ] Whisper/Coqui TTS 양자화 프로파일링 및 최적 preset 문서화
  - [ ] 네트워크 슬라이싱 시나리오별 지연/손실 A/B 실험



{% include links.html content="https://aiegoo.github.io/resume" %}
