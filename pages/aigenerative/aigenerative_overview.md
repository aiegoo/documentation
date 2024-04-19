---
title: AI how it works
keywords: ai, generative
summary: "AI is evolving at the blink of an eye"
sidebar: mydoc_sidebar
permalink: aigenerative_overview.html
simple_map: true
map_name: usermap_ai
box_number: 2
toc: true
folder: aigenerative
---

## sketch


{% include image.html file="ai/generative-AI-in-a-nutshell.png" caption="What and how AI is for developers in full cycle" %}    

{{site.data.alerts.callout_danger}}Video short-form production{{site.data.alerts.end}}

| Content                                            | Technology Stacks                                                                         |
|----------------------------------------------------|-------------------------------------------------------------------------------------------|
| Short-form video production with generative AI tools | Generative AI, Video Editing Software, Transformers (OpenAI GPT, Google BERT), Hugging Face |
| Changes in content consumption patterns               | Social Media Platforms (Facebook, Instagram, TikTok)                                      |
| Production speed and efficiency                        | Generative AI, Video Editing Software, Transformers (OpenAI GPT, Google BERT), Hugging Face |
| Personalization and customized content            | Generative AI, Transformers (OpenAI GPT, Google BERT), Hugging Face, Custom Datasets       |
| Technological advancements                             | Social Media Platforms (Facebook, Instagram, TikTok), Generative AI, Voice Cloning Tools, Background Tools (Movio, Pexels), Video Editing Software (Runway Gen2)  |

{% include tony.html content="With the combination of advanced AI capabilities from OpenAI and the expansive reach of Google's video platforms, Gen X could serve as a catalyst for further innovation and adoption in video content creation!! Sora Luminiere GenX" %}

## resource links


### model performance eval

{% include image.html file="ai/applicationMap.png" caption="Azure Monitor Dashboard" %} 

[understandingPerformance](https://humanloop.com/blog/llm-benchmarks)

[leaderboard](https://chat.lmsys.org/?leaderboard)
[leaderboardDataset](https://chat.lmsys.org/?leaderboard)

|---
|
| :-:-:
| ![modelB](./images/ai/modelB.png) | ![newplotModelB](./images/ai/newplot.png "svg working fine") |
|================================================================
|

[otherBoard](https://paperswithcode.com/sota/multi-task-language-understanding-on-mmlu) with a github demo

[humanloop](https://humanloop.com/blog/evaluating-llm-apps)


[modelPerformanceEval](https://arize.com/blog-course/f1-score/)
![F1Score](https://arize.com/wp-content/uploads/2023/03/arize-ui-f1-score.png)
[benchmarkLLM](https://arize.com/blog-course/llm-evaluation-the-definitive-guide/)

[amazonDataStream](https://aws.amazon.com/kinesis/data-streams/)
![kinesisDataStream](https://d1.awsstatic.com/amazon-managed-service-for-apache-flink/Product-Page-Diagram_Amazon-Kinesis-Data-Streams.af4c53fb334530eb3f82a0cbfa6cc611b78fbbfc.png)

[PhoenixTest](https://docs.arize.com/phoenix/notebooks)
[monitoringGenerativeApplication](https://www.linkedin.com/pulse/monitoring-generative-ai-applications-drew-robbins/)
[HF-gptBase](https://huggingface.co/rishiraj/CatPPT-base)


![evalToolArchitecture](https://deepgram.com/_next/image?url=https%3A%2F%2Fwww.datocms-assets.com%2F96965%2F1693501623-1-api-bank-s-proposed-tool-augmented-llms-paradigm.png&w=1200&q=75)
[blogLink](https://deepgram.com/learn/apibank-llm-benchmark#to-call-or-not-to-call-level1-evaluation)
[pytest](https://semaphoreci.com/community/tutorials/testing-python-applications-with-pytest)

[llmTest](https://github.com/thestriver/llm-testing-semaphore)
![example](https://semaphoreci.com/wp-content/uploads/2024/02/llm-perf-leaderboard.png)
[example](https://github.com/ray-project/llmperf)

### Fastest LLM
[togetherAI](https://www.together.ai/solutions#use-cases)

## AI docent Test Items
[ai-docent](https://docs.google.com/document/d/16GFgABbbnH7RXgL56SXNu41xRspstgtVcy0TQxmwd-A/edit?usp=sharing) use onofftony or uconcreative

[references](https://medium.com/@walotta2001/towards-realistic-benchmarking-of-llm-serving-endpoints-ba3cca28f246)

https://llm-speedtest.colearn.cloud/?source=post_page-----ba3cca28f246--------------------------------
[wiki](https://wiki.loadium.com/test-settings/what-is-tps)

https://wiki.loadium.com/test-settings/what-is-tps

```json
{
"message_is_conversation_continuation": "True", // <-
"number_of_messages_in_conversation_so_far": "1", // <-
"user_sentiment": "Aggravated", // <-
"query_type": "Hardware Issue", // <-
"response_tone": "Validating and solution-oriented", // <-
"response_requirements": "Propose options for repair or replacement.", // <-
"user_requesting_to_talk_to_human": "False", // <-
"enough_information_in_context": "True" // <-
"response": "..." // X -- benefits from GPT-4
}
```
[documnentation](https://platform.openai.com/docs/guides/latency-optimization/example)
