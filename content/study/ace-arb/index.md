---
title: Estimating the effect of ACE inhibitors and Angiotensin Receptor Blockers on COVID-19 incidence and complications
summary: "We seek to understand implications of the ACE-2 pathway, which can serve as an entry point for COVID-19 and is also upregulated by ACE inhibitors and Angiotensin Receptor Blockers. We will compare ACE and ARB vs. other anti-hypertensive drugs (calcium channel blockers, thiazide diuretics) to evaluate: 
1. ‘susceptability’: amongst new users, what is the risk of Covid-19 positive? 
2. ‘severity’: amongst Covid-19 cases who are prevalent users, what is the risk of viral complication?"
tags:
- Study-a-thon
- COVID-19
- Estimation
analytics_usecases:
- Population-Level Estimation
study_type:
- Clinical Application
date: "2020-03-26T00:00:00Z"
authors: 
- SCYou
- msuchard
- mconover

# Study tags
drug:
- name: angiotensin converting enzyme (ACE) inhibitors
  code: "XXX"
- name: angiotensin II receptor blockers (ARB)
  code: "XXX"
event:
- name: study-a-thon
  location: virtual
#dataset:
#- name: MDCD
#- name: CCAE
#- name: CPRD
#- name: DA Germany

# Optional external URL for project (replaces project detail page).
external_link: ""

links:
- icon: globe
  icon_pack: fas
  name: OHDSI Forums discussion
  url: https://forums.ohdsi.org/t/ohdsi-covid-19-review-on-the-effect-of-ace-inhibitors-and-angiotensin-receptor-blockers-on-covid-19-incidence-and-complication-rate/10071
- icon: globe
  icon_pack: fas
  name: Results explorer
  url: https://data.ohdsi.org/Covid19EstimationAceInhibitors/
url_code: "https://github.com/ohdsi-studies/Covid19EstimationRasInhibitors"
url_pdf: "https://github.com/ohdsi-studies/Covid19EstimationRasInhibitors"
url_slides: ""
url_video: ""

# Slides (optional).
#   Associate this project with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides = "example-slides"` references `content/slides/example-slides.md`.
#   Otherwise, set `slides = ""`.
slides: example
---

# Databases

Data source | Source population | Sample size | Data type | Longitudinal history
--------------|----------------|--------------|-----|----
South Korea: Health Insurance and Review Assessment (HIRA) |All citizens in South Korea  | ≈ 50 million|Administrative fee-for-service claims data|5-years of available look-back
Columbia University Irving Medical Center|Patients of the Columbia University Irving Medical Center|≈ 6 million|General practice electronic health records, outpatient specialist electronic health records, inpatient hospital electronic health records, hospital billing/summary|1989 (1978 for diagnoses)


# Design
## Cohorts
### Prevalent users of ACE inhibitors or ARBs (monotherapy), hospitalized with influenza 2014-2019
```mermaid
gantt
  %% http://atlas-covid19.ohdsi.org/#/cohortdefinition/609
  %% See https://mermaid-js.github.io/mermaid/#/gantt for docs
  axisFormat %m-%Y
  title [INFLUENZA ACE ID v1]
  section Primary Criteria
  All of [OHDSI Covid19 v1] Inpatient Visit :active, index, 2019-04-01,1d
  section Additional Criteria
  Any of [COVID19 v1] Influenza (including complications) - Conditions :active, after index, 1d
  section Inclusion Rules
  age >=18 :active,after index
  has >=180d of prior observation :active,2018-10-03, 180d
  No hospitalization for COVID19 in the 6 months preceding admission :crit,2018-10-03, 180d
  Has T/C drug drug era overlapping day -30 or a drug exposure in the last 60 days :active,2018-10-03
  Any of prior ACEi or ARB drug era :done,2018-10-03, 180d
  or ACEi or ARB drug exposure in 60 days before :done,2019-01-31,60d
  Hypertension diagnosis anytime before start-date  :active,2018-10-03, 180d
  No exposure to any other antihypertensives within 180 days before start-date :crit,2018-10-03, 180d
```


```mermaid
graph BT
    Start[Original cohorts:<br/>Target: n = 67212<br/>Comparator: n = 35379]
    Start-->Age
    Age[fa:fa-question age >=18]
    Age-->|N|C[fa:fa-ban Target: n = 50<br/>fa:fa-ban Comparator: n =40]
    Age-->|Y|D[Final cohorts:<br/>fa:fa-check Target: n = 67212<br/>fa:fa-check Comparator: n = 35379];
```

# Coverage

https://blogs.sciencemag.org/pipeline/archives/2020/04/11/the-latest-hydroxychloroquine-data-as-of-april-11

{{< tweet 1253784096049967107 >}}
