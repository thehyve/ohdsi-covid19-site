---
title: Estimating the effect of ACE inhibitors and Angiotensin Receptor Blockers on COVID-19 incidence and complications
summary: 'We seek to understand implications of the ACE-2 pathway, which can serve as an entry point for COVID-19 and is also upregulated by ACE inhibitors and Angiotensin Receptor Blockers. We will compare ACE and ARB vs. other anti-hypertensive drugs (calcium channel blockers, thiazide diuretics) to evaluate: 1) ‘susceptability’: amongst new users, what is the risk of Covid-19 positive? and 2) ‘severity’: amongst Covid-19 cases who are prevalent users, what is the risk of viral complication?'
tags:
- Study-a-thon
- COVID-19
- Estimation
analytics_usecases:
- Population-Level Estimation
study_type:
- Clinical Application
date: "2020-03-26T00:00:00Z"
author: SCYou

# Optional external URL for project (replaces project detail page).
external_link: ""

links:
- icon: globe
  icon_pack: fas
  name: OHDSI Forums discussion
  url: https://forums.ohdsi.org/t/ohdsi-covid-19-review-on-the-effect-of-ace-inhibitors-and-angiotensin-receptor-blockers-on-covid-19-incidence-and-complication-rate/10071
url_code: "https://github.com/ohdsi-studies/RASBlockerInCovid"
url_pdf: ""
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: example
---


{{< list_tags >}}

We seek to understand implications of the ACE-2 pathway, which can serve as an entry point for COVID-19 and is also upregulated by ACE inhibitors and Angiotensin Receptor Blockers. We will compare ACE and ARB vs. other anti-hypertensive drugs (calcium channel blockers, thiazide diuretics) to evaluate: 1) ‘susceptability’: amongst new users, what is the risk of Covid-19 positive? and 2) ‘severity’: amongst Covid-19 cases who are prevalent users, what is the risk of viral complication?

# Databases

Data source | Source population | Sample size | Data type | Longitudinal history
--------------|----------------|--------------|-----|----
South Korea: Health Insurance and Review Assessment (HIRA) |All citizens in South Korea  | ≈ 50 million|Administrative fee-for-service claims data|5-years of available look-back
Columbia University Irving Medical Center|Patients of the Columbia University Irving Medical Center|≈ 6 million|General practice electronic health records, outpatient specialist electronic health records, inpatient hospital electronic health records, hospital billing/summary|1989 (1978 for diagnoses)


# Design

```mermaid
gantt
  axisFormat %m-%Y
  title Test design
  section Primary Criteria
[OHDSI Covid19 v1] Inpatient Visit :active, index, 2019-12-01,30d
  has >=180d of prior observation :done,prior,2019-06-01, 180d
```

# Coverage

https://blogs.sciencemag.org/pipeline/archives/2020/04/11/the-latest-hydroxychloroquine-data-as-of-april-11

{{< tweet 1253784096049967107 >}}
