---
layout: page
title: LLM-Based Requirements Generation
description: An agentic, prompt-driven pipeline that turns unstructured app-store reviews into structured, human-like user stories.
importance: 1
category: research
related_publications: false
---

This project — my B.Sc. thesis and the basis for our [NLP4RE'26 @ REFSQ](https://nlp4re.github.io/2026/) paper, *From Reviews to Requirements: Can LLMs Generate Human-Like User Stories?* ([arXiv:2603.28163](https://arxiv.org/abs/2603.28163)) — investigates whether large language models can automatically produce well-formed software requirements directly from user feedback.

**What it does**

- Extracts structured functional requirements (user stories) from noisy, unstructured app-store reviews using an agentic, prompt-driven pipeline.
- Compares prompting strategies — zero-shot, few-shot, and chain-of-thought — for their effect on requirement completeness, consistency, and conformance to standard formats.
- Evaluates machine-generated requirements against human-written baselines with semantic-similarity and structural-validity metrics, then categorises the failure modes that emerge.

**Tech stack:** Python · Large Language Models · prompt engineering · semantic similarity metrics
