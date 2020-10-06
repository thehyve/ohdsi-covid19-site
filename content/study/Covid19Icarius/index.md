---
# Display Name
title: ""
tags: []
categories: []
date: 2020-09-20T20:16:53+02:00
lastmod: 2020-09-20T20:16:53+02:00
featured: false
draft: true

id: 

# Analytics UseCase:
# 0: Characterization
# 1: Population-Level Estimation
# 2: Patient-Level Prediction
# 3: Characterization and Population-Level Estimation
study_usecase: [1]

databases: []

# Study Type:
# 0: Clinical Application
# 1: Methods Research
study_type: [0]

# Author ID
authors: []

#date format YYYY-MM-DD
dateCreated:

description:  

# URL
discussionUrl: 

# @type: hasParts
softwareSourceCodes:
- name:
  # URL
  codeRepository: 
  # date format YYYY-MM-DD
  dateModified: 
  # id from 'organizations'
  maintainer: 
  programmingLanguage: ""
  version: ""

# @type: hasParts
softwareApplications:
- name:
  # URL
  mainEntityofPage:
  # id from 'organizations'
  maintainer: 
  version: ""

healthConditions:
- name: ""
  id: ""
  code: 
    codeValue: ""
    codingSystem: ""
    # URL
    sameAs: ""

identifier: 

# URL
mainEntityOfPage:

# Array of URLs
publications:
- url: ""

results:
- name:
  # URL
  mainEntityofPage:
  

# Study Status: 
# 0: Complete
# 1: Design Finalized
# 2: Repo Created
# 3: Started
# 4: Results Available
study_status: []

studyDesign:
  id: 
  # date format YYYY-MM-DD
  dateModified: 
  identifier: 
  license:
  # URL
  url: 
  version: 

# @type: studySubject
drugs: 
- id:
  name:
  code:
    id: 
    codeValue: 
    codingSystem: 
    # URL
    sameAs: 

# @type: subjectOf
event:
  id: 
  name: 
  # URL
  mainEntityOfPage:
  location:
    type:
    name:
  # id from 'organizations'
  organizer: 
  # date format YYYY-MM-DD
  startDate: 
  # date format YYYY-MM-DD
  endDate: 
  recordedIn:
    id:
    # URL
    url:
    # id from 'organizations'
    creator:
    # date format YYYY-MM-DD
    uploadDate:

organizations:
- id: 
  # URL
  mainEntityOfPage: 
  name: 
  # Array of URLs
  url: []

# date format YYYY-MM-DD
end_date: 

from_readme:
  title: 'OHDSI COVID-19 Studyathon: International coronavirus disease (COVID) - angiotensin converting enzyme (ACE) Receptor Inhibition Utilization and Safety (ICARIUS) studies: susceptibility and severity'
  study_usecase: [1]
  study_type: [0]
  tags: [Study-a-thon, COVID-19]
  leads: ['Marc A. Suchard', 'Seng Chan You', 'Mitchell M. Conover']
  leadForumTags: [{name: msuchard, mainEntityofPage: 'https://forums.ohdsi.org/u/msuchard'}, {name: SCYou, mainEntityofPage: 'https://forums.ohdsi.org/u/scyou/'}, {name: Conovermitch, mainEntityofPage: 'https://forums.ohdsi.org/u/Conovermitch'}]
  startDate: 'March 26, 2020'
  endDate: ""
  protocol: {name: PDF, mainEntityofPage: 'https://github.com/ohdsi-studies/Covid19Icarius/blob/master/Documents/COVID19_ACE_ARB_Protocol_Version_1_2.pdf'}
  publications: []
  results: [{name: 'Shiny app', mainEntityofPage: 'https://data.ohdsi.org/IcariusSusceptibility/'}]
  authors: [msuchard, SCYou, Conovermitch]
  description: "This study will evaluate the effect of ACE inhibitor or ARB exposure on the risk of contracting COVID-19 infection and the risk of experiencing respiratory failure, pneumonia, acute kidney injury, and death in hypertensive patients following contracting COVID-19 infection.  The analysis will be undertaken across a federated multi-national network of electronic health records and administrative claims from primary care and secondary care that have been mapped to the Observational Medical Outcomes Partnership Common Data Model in collaboration with the Observational Health Data Sciences and Informatics (OHDSI) and European Health Data and Evidence Network (EHDEN) initiatives.  These data reflect the clinical experience of patients from six European countries (Belgium, Netherlands, Germany, France, Spain, and Estonia) the United Kingdom, the United States of America, South Korea, and Japan as data becomes available.  We will use a prevalent user cohort design to estimate the relative risk of each outcome using an on-treatment analysis of monotherapy only and monotherapy or combo-therapy comparisons.  In the analysis of respiratory failure, pneumonia, acute kidney injury, and death, we will conduct separate analyses assessing prevalent use of antihypertensives at the time of any diagnosis with COVID-19 or at the time of an inpatient admission with COVID-19 diagnosis. Data driven approaches will be used to identify potential covariates for inclusion in matched or stratified propensity score models identified using regularized logistic regression. Large-scale propensity score matching and stratification strategies that allow balancing on a large number of baseline potential confounders will be used in addition to negative control outcomes to allow for evaluating residual bias in the study design as a whole as a diagnostic step.\nThis study is part of the [OHDSI 2020 COVID-19 study-a-thon](https://www.ohdsi.org/covid-19-updates/)."

---