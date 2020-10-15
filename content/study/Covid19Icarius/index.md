---
# Website information
# Study title
title: 'OHDSI COVID-19 Studyathon: International coronavirus disease (COVID) - angiotensin converting enzyme (ACE) Receptor Inhibition Utilization and Safety (ICARIUS) studies: susceptibility and severity'

tags: [Study-a-thon, COVID-19]
categories: []

# Do not fill; filled automatically
date: 2020-10-07T11:57:09+02:00
lastmod: 2020-10-07T11:57:09+02:00
featured: false

# Change to 'false' to be published
draft: false

# Study identifier, specifically created for the website.
# The identifier is the last part of the URL directing to the particular study
study_id: 'Covid19Icarius' 

# Study identifier 
study_identifier: 'EUPAS35296'

# URL to study registration site
study_registration_url: http://www.encepp.eu/encepp/viewResource.htm?id=35297

# Study description
description: 'This study will evaluate the effect of ACE inhibitor or ARB exposure on the risk of contracting COVID-19 infection and the risk of experiencing respiratory failure, pneumonia, acute kidney injury, and death in hypertensive patients following contracting COVID-19 infection. The analysis will be undertaken across a federated multi-national network of electronic health records and administrative claims from primary care and secondary care that have been mapped to the Observational Medical Outcomes Partnership Common Data Model in collaboration with the Observational Health Data Sciences and Informatics (OHDSI) and European Health Data and Evidence Network (EHDEN) initiatives. These data reflect the clinical experience of patients from six European countries (Belgium, Netherlands, Germany, France, Spain, and Estonia) the United Kingdom, the United States of America, South Korea, and Japan as data becomes available. We will use a prevalent user cohort design to estimate the relative risk of each outcome using an on-treatment analysis of monotherapy only and monotherapy or combo-therapy comparisons. In the analysis of respiratory failure, pneumonia, acute kidney injury, and death, we will conduct separate analyses assessing prevalent use of antihypertensives at the time of any diagnosis with COVID-19 or at the time of an inpatient admission with COVID-19 diagnosis. Data driven approaches will be used to identify potential covariates for inclusion in matched or stratified propensity score models identified using regularized logistic regression. Large-scale propensity score matching and stratification strategies that allow balancing on a large number of baseline potential confounders will be used in addition to negative control outcomes to allow for evaluating residual bias in the study design as a whole as a diagnostic step.'

# Start date of the study, use date format YYYY-MM-DD
start_date: 2020-03-26

# End date of the study, use date format YYYY-MM-DD
end_date: 

# Study status, choose 0, 1, 2, 3 or 4:
# 0: Complete
# 1: Design Finalized
# 2: Repo Created
# 3: Started
# 4: Results Available
study_status: [1]

# Author identifier of the authors contributing to the study
authors: [msuchard, SCYou, Conovermitch]

# Study Type, choose 0 or 1:
# 0: Clinical Application
# 1: Methods Research
study_type: [0]

# Analytics Use Case of the Study, choose 0, 1, 2 or 3:
# 0: Characterization
# 1: Population-Level Estimation
# 2: Patient-Level Prediction
# 3: Characterization and Population-Level Estimation
study_usecase: [1]

# Database identifiers of databases used for the study
databases: [HIRA, Columbia University Irving Medical Center]

# Conditions studied; if multiple conditions are being studied,
# duplicate all keys under "conditions"
conditions:
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Acute respiratory distress syndrome
  concept_id: '4195694'
  code:
    concept_code: '67782005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/67782005
  descendants_included: true
- concept_name: Acute respiratory failure
  concept_id: '319049'
  code:
    concept_code: '65710008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/65710008
  descendants_included: true
- concept_name: Acute kidney injury due to circulatory failure
  concept_id: '36716182'
  code:
    concept_code: '722095005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722095005
  descendants_included: false
- concept_name: Acute kidney injury due to hypovolemia
  concept_id: '36716183'
  code:
    concept_code: '722096006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722096006
  descendants_included: false
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: false
- concept_name: Acute kidney injury stage 1
  concept_id: '44809061'
  code:
    concept_code: '851931000000107'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851931000000107
  descendants_included: false
- concept_name: Acute kidney injury stage 2
  concept_id: '44809062'
  code:
    concept_code: '851941000000103'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851941000000103
  descendants_included: false
- concept_name: Acute kidney injury stage 3
  concept_id: '44809063'
  code:
    concept_code: '851951000000100'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851951000000100
  descendants_included: false
- concept_name: Acute nephropathy
  concept_id: '4242411'
  code:
    concept_code: '58574008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/58574008
  descendants_included: true
- concept_name: Acute kidney injury due to acute tubular necrosis due to sepsis
  concept_id: '37395517'
  code:
    concept_code: '1048491000000106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1048491000000106
  descendants_included: true
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: true
- concept_name: Clinical sepsis
  concept_id: '40487101'
  code:
    concept_code: '447931005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/447931005
  descendants_included: true
- concept_name: Menosepsis
  concept_id: '4205449'
  code:
    concept_code: '55528005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/55528005
  descendants_included: true
- concept_name: Miscarriage with septic shock
  concept_id: '4085627'
  code:
    concept_code: '18613002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/18613002
  descendants_included: true
- concept_name: Postprocedural intra-abdominal sepsis
  concept_id: '4204036'
  code:
    concept_code: '308887002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/308887002
  descendants_included: true
- concept_name: Puerperal septicemia - delivered with postnatal complication
  concept_id: '4066124'
  code:
    concept_code: '200195002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200195002
  descendants_included: true
- concept_name: Sepsis
  concept_id: '132797'
  code:
    concept_code: '91302008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/91302008
  descendants_included: true
- concept_name: Sepsis syndrome
  concept_id: '4029281'
  code:
    concept_code: '238150007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238150007
  descendants_included: true
- concept_name: Sepsis-associated encephalopathy
  concept_id: '4046106'
  code:
    concept_code: '230361008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/230361008
  descendants_included: true
- concept_name: Sepsis-associated lung injury
  concept_id: '4119941'
  code:
    concept_code: '233812001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233812001
  descendants_included: true
- concept_name: Sepsis-associated organ dysfunction
  concept_id: '4031168'
  code:
    concept_code: '238151006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238151006
  descendants_included: true
- concept_name: Septic shock
  concept_id: '196236'
  code:
    concept_code: '76571007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/76571007
  descendants_included: true
- concept_name: Systemic inflammatory response syndrome
  concept_id: '434821'
  code:
    concept_code: '238149007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238149007
  descendants_included: true
- concept_name: Transient neonatal neutropenia due to neonatal bacterial sepsis
  concept_id: '36716754'
  code:
    concept_code: '722926003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722926003
  descendants_included: true
- concept_name: Dependence on ventilator
  concept_id: '40481550'
  code:
    concept_code: '444932008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/444932008
  descendants_included: true
- concept_name: Myocardial infarction
  concept_id: '4329847'
  code:
    concept_code: '22298006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/22298006
  descendants_included: true
- concept_name: Brainstem death
  concept_id: '4048809'
  code:
    concept_code: '230802007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/230802007
  descendants_included: true
- concept_name: Cardiac arrest
  concept_id: '321042'
  code:
    concept_code: '410429000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/410429000
  descendants_included: true
- concept_name: Sudden cardiac death
  concept_id: '4317150'
  code:
    concept_code: '95281009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/95281009
  descendants_included: true
- concept_name: Cerebral artery occlusion
  concept_id: '372924'
  code:
    concept_code: '20059004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/20059004
  descendants_included: false
- concept_name: Cerebral embolism
  concept_id: '375557'
  code:
    concept_code: '75543006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/75543006
  descendants_included: false
- concept_name: Cerebral infarction
  concept_id: '443454'
  code:
    concept_code: '432504007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/432504007
  descendants_included: true
- concept_name: Cerebral thrombosis
  concept_id: '441874'
  code:
    concept_code: '71444005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/71444005
  descendants_included: false
- concept_name: Cerebral hemorrhage
  concept_id: '376713'
  code:
    concept_code: '274100004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/274100004
  descendants_included: false
- concept_name: Intracranial hemorrhage
  concept_id: '439847'
  code:
    concept_code: '1386000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1386000
  descendants_included: false
- concept_name: Spontaneous cerebellar hemorrhage
  concept_id: '43530674'
  code:
    concept_code: '142851000119103'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/142851000119103
  descendants_included: false
- concept_name: Spontaneous cerebral hemorrhage
  concept_id: '43530727'
  code:
    concept_code: '291571000119106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/291571000119106
  descendants_included: false
- concept_name: Spontaneous hemorrhage of cerebral hemisphere
  concept_id: '42535425'
  code:
    concept_code: '291531000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/291531000119108
  descendants_included: false
- concept_name: Spontaneous subarachnoid hemorrhage
  concept_id: '4148906'
  code:
    concept_code: '270907008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/270907008
  descendants_included: false
- concept_name: Subarachnoid hemorrhage
  concept_id: '432923'
  code:
    concept_code: '21454007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/21454007
  descendants_included: false
- concept_name: Heart failure
  concept_id: '316139'
  code:
    concept_code: '84114007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84114007
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Acute respiratory distress syndrome
  concept_id: '4195694'
  code:
    concept_code: '67782005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/67782005
  descendants_included: true
- concept_name: Acute respiratory failure
  concept_id: '319049'
  code:
    concept_code: '65710008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/65710008
  descendants_included: true
- concept_name: Acute kidney injury due to circulatory failure
  concept_id: '36716182'
  code:
    concept_code: '722095005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722095005
  descendants_included: false
- concept_name: Acute kidney injury due to hypovolemia
  concept_id: '36716183'
  code:
    concept_code: '722096006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722096006
  descendants_included: false
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: false
- concept_name: Acute kidney injury stage 1
  concept_id: '44809061'
  code:
    concept_code: '851931000000107'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851931000000107
  descendants_included: false
- concept_name: Acute kidney injury stage 2
  concept_id: '44809062'
  code:
    concept_code: '851941000000103'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851941000000103
  descendants_included: false
- concept_name: Acute kidney injury stage 3
  concept_id: '44809063'
  code:
    concept_code: '851951000000100'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851951000000100
  descendants_included: false
- concept_name: Acute nephropathy
  concept_id: '4242411'
  code:
    concept_code: '58574008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/58574008
  descendants_included: true
- concept_name: Acute kidney injury due to acute tubular necrosis due to sepsis
  concept_id: '37395517'
  code:
    concept_code: '1048491000000106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1048491000000106
  descendants_included: true
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: true
- concept_name: Clinical sepsis
  concept_id: '40487101'
  code:
    concept_code: '447931005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/447931005
  descendants_included: true
- concept_name: Menosepsis
  concept_id: '4205449'
  code:
    concept_code: '55528005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/55528005
  descendants_included: true
- concept_name: Miscarriage with septic shock
  concept_id: '4085627'
  code:
    concept_code: '18613002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/18613002
  descendants_included: true
- concept_name: Postprocedural intra-abdominal sepsis
  concept_id: '4204036'
  code:
    concept_code: '308887002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/308887002
  descendants_included: true
- concept_name: Puerperal septicemia - delivered with postnatal complication
  concept_id: '4066124'
  code:
    concept_code: '200195002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200195002
  descendants_included: true
- concept_name: Sepsis
  concept_id: '132797'
  code:
    concept_code: '91302008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/91302008
  descendants_included: true
- concept_name: Sepsis syndrome
  concept_id: '4029281'
  code:
    concept_code: '238150007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238150007
  descendants_included: true
- concept_name: Sepsis-associated encephalopathy
  concept_id: '4046106'
  code:
    concept_code: '230361008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/230361008
  descendants_included: true
- concept_name: Sepsis-associated lung injury
  concept_id: '4119941'
  code:
    concept_code: '233812001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233812001
  descendants_included: true
- concept_name: Sepsis-associated organ dysfunction
  concept_id: '4031168'
  code:
    concept_code: '238151006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238151006
  descendants_included: true
- concept_name: Septic shock
  concept_id: '196236'
  code:
    concept_code: '76571007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/76571007
  descendants_included: true
- concept_name: Systemic inflammatory response syndrome
  concept_id: '434821'
  code:
    concept_code: '238149007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238149007
  descendants_included: true
- concept_name: Transient neonatal neutropenia due to neonatal bacterial sepsis
  concept_id: '36716754'
  code:
    concept_code: '722926003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722926003
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '45756093'
  code:
    concept_code: U07.1
    vocabulary_id: ICD10
    concept_code_url: ''
  descendants_included: false
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '42501115'
  code:
    concept_code: U07.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Novel coronavirus infection
  concept_id: '586414'
  code:
    concept_code: U18.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Other coronavirus as the cause of diseases classified elsewhere
  concept_id: '45600471'
  code:
    concept_code: B97.29
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: false
- concept_name: Provisional assignment of new diseases or emergency use
  concept_id: '586415'
  code:
    concept_code: U18
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '45756093'
  code:
    concept_code: U07.1
    vocabulary_id: ICD10
    concept_code_url: ''
  descendants_included: false
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '42501115'
  code:
    concept_code: U07.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Novel coronavirus infection
  concept_id: '586414'
  code:
    concept_code: U18.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Other coronavirus as the cause of diseases classified elsewhere
  concept_id: '45600471'
  code:
    concept_code: B97.29
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: false
- concept_name: Provisional assignment of new diseases or emergency use
  concept_id: '586415'
  code:
    concept_code: U18
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Febrile convulsion
  concept_id: '444413'
  code:
    concept_code: '41497008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/41497008
  descendants_included: true
- concept_name: Fever
  concept_id: '437663'
  code:
    concept_code: '386661006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/386661006
  descendants_included: true
- concept_name: Cough
  concept_id: '254761'
  code:
    concept_code: '49727002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49727002
  descendants_included: true
- concept_name: Sputum finding
  concept_id: '4089228'
  code:
    concept_code: '248595008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/248595008
  descendants_included: true
- concept_name: Acute respiratory distress
  concept_id: '4191650'
  code:
    concept_code: '373895009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/373895009
  descendants_included: true
- concept_name: Dyspnea
  concept_id: '312437'
  code:
    concept_code: '267036007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/267036007
  descendants_included: true
- concept_name: Muscle pain
  concept_id: '442752'
  code:
    concept_code: '68962001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/68962001
  descendants_included: true
- concept_name: Fatigue
  concept_id: '4223659'
  code:
    concept_code: '84229001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84229001
  descendants_included: true
- concept_name: Malaise
  concept_id: '4272240'
  code:
    concept_code: '367391008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/367391008
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '1572255'
  code:
    concept_code: R53
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '439926'
  code:
    concept_code: '271795006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271795006
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '44829293'
  code:
    concept_code: '780.7'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '44823445'
  code:
    concept_code: '780.79'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '1572256'
  code:
    concept_code: R53.8
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Suspected case of COVID-19 (machine translation)
  concept_id: '710157'
  code:
    concept_code: Z03.800x001
    vocabulary_id: ICD10CN
    concept_code_url: ''
  descendants_included: false
- concept_name: Suspected coronavirus infection
  concept_id: '45763724'
  code:
    concept_code: '700217006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/700217006
  descendants_included: false
- concept_name: Myocardial infarction
  concept_id: '4329847'
  code:
    concept_code: '22298006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/22298006
  descendants_included: true
- concept_name: Brainstem death
  concept_id: '4048809'
  code:
    concept_code: '230802007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/230802007
  descendants_included: true
- concept_name: Cardiac arrest
  concept_id: '321042'
  code:
    concept_code: '410429000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/410429000
  descendants_included: true
- concept_name: Sudden cardiac death
  concept_id: '4317150'
  code:
    concept_code: '95281009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/95281009
  descendants_included: true
- concept_name: Cerebral artery occlusion
  concept_id: '372924'
  code:
    concept_code: '20059004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/20059004
  descendants_included: false
- concept_name: Cerebral embolism
  concept_id: '375557'
  code:
    concept_code: '75543006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/75543006
  descendants_included: false
- concept_name: Cerebral infarction
  concept_id: '443454'
  code:
    concept_code: '432504007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/432504007
  descendants_included: true
- concept_name: Cerebral thrombosis
  concept_id: '441874'
  code:
    concept_code: '71444005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/71444005
  descendants_included: false
- concept_name: Cerebral hemorrhage
  concept_id: '376713'
  code:
    concept_code: '274100004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/274100004
  descendants_included: false
- concept_name: Intracranial hemorrhage
  concept_id: '439847'
  code:
    concept_code: '1386000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1386000
  descendants_included: false
- concept_name: Subarachnoid hemorrhage
  concept_id: '432923'
  code:
    concept_code: '21454007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/21454007
  descendants_included: false
- concept_name: Heart failure
  concept_id: '316139'
  code:
    concept_code: '84114007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84114007
  descendants_included: true

# Study protocol
study_protocol:
  # Protocol identifier; specifically created for the website
  # The identifier is the last part of the URL directing to the particular study protocol
  protocol_id: 'Covid19Icarius/design'
  # Last modification date, use date format YYYY-MM-DD
  date_modified: 2020-05-15
  # Protocol identifier, in case protocol has an identifier elsewhere 
  protocol_identifier: 
  # Protocol license
  license: 
  # URL to the protocol
  protocol_url: https://github.com/ohdsi-studies/Covid19Icarius/blob/master/Documents/COVID19_ACE_ARB_Protocol_Version_1_2.pdf
  # Version of the protocol 
  version: 1.2

# URL to the forum thread about the study
forum_thread_url: https://forums.ohdsi.org/t/covid-19-antihypertensive-study-just-posted-to-medrxiv-congrats-to-all-involved/11149

# Source code used for the study; if multiple code repositories are available, 
# duplicate all keys under "source_code"
source_code:
- name: 'Covid19Icarius' 
  # URL to GitHub repository containing the source code
  code_repository_url: https://github.com/ohdsi-studies/Covid19Icarius
  # Last modification date, use date format YYYY-MM-DD
  date_modified: 2020-09-26
  # Maintainer of source code; use identifier of organization if applicable
  maintainer: 'OHDSI'
  # Programming language used
  programming_language: 'R'
#  # Version of the source code
#  version: 

# # Software used for the study; if multiple software applications are used
# # duplicate all keys under "software"
# software:
#  # Name of the software
# - name: 
#  # URL to source code of software
#  source_code_url: 
#  # Maintainer of source code; use identifier of organization if applicable.
#  maintainer: 
#  # Version of the software
#  version: 

# doi of publications related to the study; if multiple articles have been published,
# duplicate key under "publications"
publications:
- doi: https://doi.org/10.1101/2020.06.11.20125849 

# study results (e.g. shiny web application)
results:
# Name of the web application showing the results
- name: 'OHDSI COVID-19 Studyathon: ICARIUS - Susceptibility study'
  # URL to the web application
  application_url: https://data.ohdsi.org/IcariusSusceptibility/

# Drug studied; if multiple subjects are being studied,
# duplicate all keys under "study_subject"
study_subject: 
- concept_name: benazepril
  concept_id: '1335471'
  code:
    concept_code: '18867'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: captopril
  concept_id: '1340128'
  code:
    concept_code: '1998'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: cilazapril
  concept_id: '19050216'
  code:
    concept_code: '21102'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalapril
  concept_id: '1341927'
  code:
    concept_code: '3827'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalaprilat
  concept_id: '1342001'
  code:
    concept_code: '3829'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinopril
  concept_id: '1363749'
  code:
    concept_code: '50166'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinoprilat
  concept_id: '45775539'
  code:
    concept_code: '1546393'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: imidapril
  concept_id: '19122327'
  code:
    concept_code: '60245'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lisinopril
  concept_id: '1308216'
  code:
    concept_code: '29046'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexipril
  concept_id: '1310756'
  code:
    concept_code: '30131'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexiprilat
  concept_id: '45775374'
  code:
    concept_code: '1546358'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindopril
  concept_id: '1373225'
  code:
    concept_code: '54552'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindoprilat
  concept_id: '45775544'
  code:
    concept_code: '1546400'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinapril
  concept_id: '1331235'
  code:
    concept_code: '35208'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinaprilat
  concept_id: '45775375'
  code:
    concept_code: '1546359'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramipril
  concept_id: '1334456'
  code:
    concept_code: '35296'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramiprilat
  concept_id: '45775527'
  code:
    concept_code: '1546377'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spirapril
  concept_id: '19040051'
  code:
    concept_code: '36908'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolapril
  concept_id: '1342439'
  code:
    concept_code: '38454'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolaprilat
  concept_id: '45775529'
  code:
    concept_code: '1546379'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: zofenopril
  concept_id: '19102107'
  code:
    concept_code: '39990'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: azilsartan
  concept_id: '40235485'
  code:
    concept_code: '1091643'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: candesartan
  concept_id: '1351557'
  code:
    concept_code: '214354'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eprosartan
  concept_id: '1346686'
  code:
    concept_code: '83515'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: irbesartan
  concept_id: '1347384'
  code:
    concept_code: '83818'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: losartan
  concept_id: '1367500'
  code:
    concept_code: '52175'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olmesartan
  concept_id: '40226742'
  code:
    concept_code: '321064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: telmisartan
  concept_id: '1317640'
  code:
    concept_code: '73494'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: valsartan
  concept_id: '1308842'
  code:
    concept_code: '69749'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bendroflumethiazide
  concept_id: '1316354'
  code:
    concept_code: '1369'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: xipamide
  concept_id: '19010493'
  code:
    concept_code: '11371'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amlodipine
  concept_id: '1332418'
  code:
    concept_code: '17767'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: clevidipine
  concept_id: '19089969'
  code:
    concept_code: '233603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: felodipine
  concept_id: '1353776'
  code:
    concept_code: '4316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: isradipine
  concept_id: '1326012'
  code:
    concept_code: '33910'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lacidipine
  concept_id: '19004539'
  code:
    concept_code: '28382'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lercanidipine
  concept_id: '19015802'
  code:
    concept_code: '135056'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: manidipine
  concept_id: '19071995'
  code:
    concept_code: '29275'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: mepirodipine
  concept_id: '19102106'
  code:
    concept_code: '39879'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nicardipine
  concept_id: '1318137'
  code:
    concept_code: '7396'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nifedipine
  concept_id: '1318853'
  code:
    concept_code: '7417'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nilvadipine
  concept_id: '19113063'
  code:
    concept_code: '53692'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nimodipine
  concept_id: '1319133'
  code:
    concept_code: '7426'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nisoldipine
  concept_id: '1319880'
  code:
    concept_code: '7435'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nitrendipine
  concept_id: '19020061'
  code:
    concept_code: '7441'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: azilsartan
  concept_id: '40235485'
  code:
    concept_code: '1091643'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: benazepril
  concept_id: '1335471'
  code:
    concept_code: '18867'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: candesartan
  concept_id: '1351557'
  code:
    concept_code: '214354'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: captopril
  concept_id: '1340128'
  code:
    concept_code: '1998'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: cilazapril
  concept_id: '19050216'
  code:
    concept_code: '21102'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalapril
  concept_id: '1341927'
  code:
    concept_code: '3827'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalaprilat
  concept_id: '1342001'
  code:
    concept_code: '3829'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eprosartan
  concept_id: '1346686'
  code:
    concept_code: '83515'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinopril
  concept_id: '1363749'
  code:
    concept_code: '50166'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinoprilat
  concept_id: '45775539'
  code:
    concept_code: '1546393'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: imidapril
  concept_id: '19122327'
  code:
    concept_code: '60245'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: irbesartan
  concept_id: '1347384'
  code:
    concept_code: '83818'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lisinopril
  concept_id: '1308216'
  code:
    concept_code: '29046'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: losartan
  concept_id: '1367500'
  code:
    concept_code: '52175'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexipril
  concept_id: '1310756'
  code:
    concept_code: '30131'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexiprilat
  concept_id: '45775374'
  code:
    concept_code: '1546358'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olmesartan
  concept_id: '40226742'
  code:
    concept_code: '321064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindopril
  concept_id: '1373225'
  code:
    concept_code: '54552'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindoprilat
  concept_id: '45775544'
  code:
    concept_code: '1546400'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinapril
  concept_id: '1331235'
  code:
    concept_code: '35208'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinaprilat
  concept_id: '45775375'
  code:
    concept_code: '1546359'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramipril
  concept_id: '1334456'
  code:
    concept_code: '35296'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramiprilat
  concept_id: '45775527'
  code:
    concept_code: '1546377'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spirapril
  concept_id: '19040051'
  code:
    concept_code: '36908'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: telmisartan
  concept_id: '1317640'
  code:
    concept_code: '73494'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolapril
  concept_id: '1342439'
  code:
    concept_code: '38454'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolaprilat
  concept_id: '45775529'
  code:
    concept_code: '1546379'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: valsartan
  concept_id: '1308842'
  code:
    concept_code: '69749'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: zofenopril
  concept_id: '19102107'
  code:
    concept_code: '39990'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: benazepril
  concept_id: '1335471'
  code:
    concept_code: '18867'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: captopril
  concept_id: '1340128'
  code:
    concept_code: '1998'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: cilazapril
  concept_id: '19050216'
  code:
    concept_code: '21102'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalapril
  concept_id: '1341927'
  code:
    concept_code: '3827'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalaprilat
  concept_id: '1342001'
  code:
    concept_code: '3829'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinopril
  concept_id: '1363749'
  code:
    concept_code: '50166'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinoprilat
  concept_id: '45775539'
  code:
    concept_code: '1546393'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: imidapril
  concept_id: '19122327'
  code:
    concept_code: '60245'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lisinopril
  concept_id: '1308216'
  code:
    concept_code: '29046'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexipril
  concept_id: '1310756'
  code:
    concept_code: '30131'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexiprilat
  concept_id: '45775374'
  code:
    concept_code: '1546358'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindopril
  concept_id: '1373225'
  code:
    concept_code: '54552'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindoprilat
  concept_id: '45775544'
  code:
    concept_code: '1546400'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinapril
  concept_id: '1331235'
  code:
    concept_code: '35208'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinaprilat
  concept_id: '45775375'
  code:
    concept_code: '1546359'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramipril
  concept_id: '1334456'
  code:
    concept_code: '35296'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramiprilat
  concept_id: '45775527'
  code:
    concept_code: '1546377'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spirapril
  concept_id: '19040051'
  code:
    concept_code: '36908'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolapril
  concept_id: '1342439'
  code:
    concept_code: '38454'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolaprilat
  concept_id: '45775529'
  code:
    concept_code: '1546379'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: zofenopril
  concept_id: '19102107'
  code:
    concept_code: '39990'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: azilsartan
  concept_id: '40235485'
  code:
    concept_code: '1091643'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: candesartan
  concept_id: '1351557'
  code:
    concept_code: '214354'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eprosartan
  concept_id: '1346686'
  code:
    concept_code: '83515'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: irbesartan
  concept_id: '1347384'
  code:
    concept_code: '83818'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: losartan
  concept_id: '1367500'
  code:
    concept_code: '52175'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olmesartan
  concept_id: '40226742'
  code:
    concept_code: '321064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: telmisartan
  concept_id: '1317640'
  code:
    concept_code: '73494'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: valsartan
  concept_id: '1308842'
  code:
    concept_code: '69749'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bendroflumethiazide
  concept_id: '1316354'
  code:
    concept_code: '1369'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: xipamide
  concept_id: '19010493'
  code:
    concept_code: '11371'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amlodipine
  concept_id: '1332418'
  code:
    concept_code: '17767'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: clevidipine
  concept_id: '19089969'
  code:
    concept_code: '233603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: felodipine
  concept_id: '1353776'
  code:
    concept_code: '4316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: isradipine
  concept_id: '1326012'
  code:
    concept_code: '33910'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lacidipine
  concept_id: '19004539'
  code:
    concept_code: '28382'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lercanidipine
  concept_id: '19015802'
  code:
    concept_code: '135056'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: manidipine
  concept_id: '19071995'
  code:
    concept_code: '29275'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: mepirodipine
  concept_id: '19102106'
  code:
    concept_code: '39879'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nicardipine
  concept_id: '1318137'
  code:
    concept_code: '7396'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nifedipine
  concept_id: '1318853'
  code:
    concept_code: '7417'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nilvadipine
  concept_id: '19113063'
  code:
    concept_code: '53692'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nimodipine
  concept_id: '1319133'
  code:
    concept_code: '7426'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nisoldipine
  concept_id: '1319880'
  code:
    concept_code: '7435'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nitrendipine
  concept_id: '19020061'
  code:
    concept_code: '7441'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: azilsartan
  concept_id: '40235485'
  code:
    concept_code: '1091643'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: benazepril
  concept_id: '1335471'
  code:
    concept_code: '18867'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: candesartan
  concept_id: '1351557'
  code:
    concept_code: '214354'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: captopril
  concept_id: '1340128'
  code:
    concept_code: '1998'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: cilazapril
  concept_id: '19050216'
  code:
    concept_code: '21102'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalapril
  concept_id: '1341927'
  code:
    concept_code: '3827'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalaprilat
  concept_id: '1342001'
  code:
    concept_code: '3829'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eprosartan
  concept_id: '1346686'
  code:
    concept_code: '83515'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinopril
  concept_id: '1363749'
  code:
    concept_code: '50166'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinoprilat
  concept_id: '45775539'
  code:
    concept_code: '1546393'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: imidapril
  concept_id: '19122327'
  code:
    concept_code: '60245'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: irbesartan
  concept_id: '1347384'
  code:
    concept_code: '83818'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lisinopril
  concept_id: '1308216'
  code:
    concept_code: '29046'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: losartan
  concept_id: '1367500'
  code:
    concept_code: '52175'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexipril
  concept_id: '1310756'
  code:
    concept_code: '30131'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexiprilat
  concept_id: '45775374'
  code:
    concept_code: '1546358'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olmesartan
  concept_id: '40226742'
  code:
    concept_code: '321064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindopril
  concept_id: '1373225'
  code:
    concept_code: '54552'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindoprilat
  concept_id: '45775544'
  code:
    concept_code: '1546400'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinapril
  concept_id: '1331235'
  code:
    concept_code: '35208'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinaprilat
  concept_id: '45775375'
  code:
    concept_code: '1546359'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramipril
  concept_id: '1334456'
  code:
    concept_code: '35296'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramiprilat
  concept_id: '45775527'
  code:
    concept_code: '1546377'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spirapril
  concept_id: '19040051'
  code:
    concept_code: '36908'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: telmisartan
  concept_id: '1317640'
  code:
    concept_code: '73494'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolapril
  concept_id: '1342439'
  code:
    concept_code: '38454'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolaprilat
  concept_id: '45775529'
  code:
    concept_code: '1546379'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: valsartan
  concept_id: '1308842'
  code:
    concept_code: '69749'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: zofenopril
  concept_id: '19102107'
  code:
    concept_code: '39990'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: benazepril
  concept_id: '1335471'
  code:
    concept_code: '18867'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: captopril
  concept_id: '1340128'
  code:
    concept_code: '1998'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: cilazapril
  concept_id: '19050216'
  code:
    concept_code: '21102'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalapril
  concept_id: '1341927'
  code:
    concept_code: '3827'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalaprilat
  concept_id: '1342001'
  code:
    concept_code: '3829'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinopril
  concept_id: '1363749'
  code:
    concept_code: '50166'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinoprilat
  concept_id: '45775539'
  code:
    concept_code: '1546393'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: imidapril
  concept_id: '19122327'
  code:
    concept_code: '60245'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lisinopril
  concept_id: '1308216'
  code:
    concept_code: '29046'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexipril
  concept_id: '1310756'
  code:
    concept_code: '30131'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexiprilat
  concept_id: '45775374'
  code:
    concept_code: '1546358'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindopril
  concept_id: '1373225'
  code:
    concept_code: '54552'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindoprilat
  concept_id: '45775544'
  code:
    concept_code: '1546400'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinapril
  concept_id: '1331235'
  code:
    concept_code: '35208'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinaprilat
  concept_id: '45775375'
  code:
    concept_code: '1546359'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramipril
  concept_id: '1334456'
  code:
    concept_code: '35296'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramiprilat
  concept_id: '45775527'
  code:
    concept_code: '1546377'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spirapril
  concept_id: '19040051'
  code:
    concept_code: '36908'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolapril
  concept_id: '1342439'
  code:
    concept_code: '38454'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolaprilat
  concept_id: '45775529'
  code:
    concept_code: '1546379'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: zofenopril
  concept_id: '19102107'
  code:
    concept_code: '39990'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: azilsartan
  concept_id: '40235485'
  code:
    concept_code: '1091643'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: candesartan
  concept_id: '1351557'
  code:
    concept_code: '214354'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eprosartan
  concept_id: '1346686'
  code:
    concept_code: '83515'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: irbesartan
  concept_id: '1347384'
  code:
    concept_code: '83818'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: losartan
  concept_id: '1367500'
  code:
    concept_code: '52175'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olmesartan
  concept_id: '40226742'
  code:
    concept_code: '321064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: telmisartan
  concept_id: '1317640'
  code:
    concept_code: '73494'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: valsartan
  concept_id: '1308842'
  code:
    concept_code: '69749'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amlodipine
  concept_id: '1332418'
  code:
    concept_code: '17767'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: clevidipine
  concept_id: '19089969'
  code:
    concept_code: '233603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: felodipine
  concept_id: '1353776'
  code:
    concept_code: '4316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: isradipine
  concept_id: '1326012'
  code:
    concept_code: '33910'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lacidipine
  concept_id: '19004539'
  code:
    concept_code: '28382'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lercanidipine
  concept_id: '19015802'
  code:
    concept_code: '135056'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: manidipine
  concept_id: '19071995'
  code:
    concept_code: '29275'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: mepirodipine
  concept_id: '19102106'
  code:
    concept_code: '39879'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nicardipine
  concept_id: '1318137'
  code:
    concept_code: '7396'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nifedipine
  concept_id: '1318853'
  code:
    concept_code: '7417'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nilvadipine
  concept_id: '19113063'
  code:
    concept_code: '53692'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nimodipine
  concept_id: '1319133'
  code:
    concept_code: '7426'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nisoldipine
  concept_id: '1319880'
  code:
    concept_code: '7435'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nitrendipine
  concept_id: '19020061'
  code:
    concept_code: '7441'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: diltiazem
  concept_id: '1328165'
  code:
    concept_code: '3443'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: gallopamil
  concept_id: '19057715'
  code:
    concept_code: '4648'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: verapamil
  concept_id: '1307863'
  code:
    concept_code: '11170'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: acebutolol
  concept_id: '1319998'
  code:
    concept_code: '149'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: alprenolol
  concept_id: '19081284'
  code:
    concept_code: '597'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: atenolol
  concept_id: '1314002'
  code:
    concept_code: '1202'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: betaxolol
  concept_id: '1322081'
  code:
    concept_code: '1520'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bisoprolol
  concept_id: '1338005'
  code:
    concept_code: '19484'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bopindolol
  concept_id: '19018640'
  code:
    concept_code: '19605'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bupranolol
  concept_id: '19018489'
  code:
    concept_code: '1817'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carteolol
  concept_id: '950370'
  code:
    concept_code: '2116'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carvedilol
  concept_id: '1346823'
  code:
    concept_code: '20352'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: celiprolol
  concept_id: '19049145'
  code:
    concept_code: '20498'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: esmolol
  concept_id: '19063575'
  code:
    concept_code: '49737'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: labetalol
  concept_id: '1386957'
  code:
    concept_code: '6185'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: levobunolol
  concept_id: '932815'
  code:
    concept_code: '1813'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metipranolol
  concept_id: '905531'
  code:
    concept_code: '10824'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metoprolol
  concept_id: '1307046'
  code:
    concept_code: '6918'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nadolol
  concept_id: '1313200'
  code:
    concept_code: '7226'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nebivolol
  concept_id: '1314577'
  code:
    concept_code: '31555'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: oxprenolol
  concept_id: '19024904'
  code:
    concept_code: '7801'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: penbutolol
  concept_id: '1327978'
  code:
    concept_code: '7973'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: pindolol
  concept_id: '1345858'
  code:
    concept_code: '8332'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: propranolol
  concept_id: '1353766'
  code:
    concept_code: '8787'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: sotalol
  concept_id: '1370109'
  code:
    concept_code: '9947'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: talinolol
  concept_id: '19100435'
  code:
    concept_code: '37546'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: tertatolol
  concept_id: '19100451'
  code:
    concept_code: '37840'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: timolol
  concept_id: '902427'
  code:
    concept_code: '10600'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bendroflumethiazide
  concept_id: '1316354'
  code:
    concept_code: '1369'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: xipamide
  concept_id: '19010493'
  code:
    concept_code: '11371'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amiloride
  concept_id: '991382'
  code:
    concept_code: '644'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bumetanide
  concept_id: '932745'
  code:
    concept_code: '1808'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eplerenone
  concept_id: '1309799'
  code:
    concept_code: '298869'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: furosemide
  concept_id: '956874'
  code:
    concept_code: '4603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spironolactone
  concept_id: '970250'
  code:
    concept_code: '9997'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: torsemide
  concept_id: '942350'
  code:
    concept_code: '38413'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: triamterene
  concept_id: '904542'
  code:
    concept_code: '10763'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: azilsartan
  concept_id: '40235485'
  code:
    concept_code: '1091643'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: candesartan
  concept_id: '1351557'
  code:
    concept_code: '214354'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eprosartan
  concept_id: '1346686'
  code:
    concept_code: '83515'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: irbesartan
  concept_id: '1347384'
  code:
    concept_code: '83818'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: losartan
  concept_id: '1367500'
  code:
    concept_code: '52175'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olmesartan
  concept_id: '40226742'
  code:
    concept_code: '321064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: telmisartan
  concept_id: '1317640'
  code:
    concept_code: '73494'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: valsartan
  concept_id: '1308842'
  code:
    concept_code: '69749'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: benazepril
  concept_id: '1335471'
  code:
    concept_code: '18867'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: captopril
  concept_id: '1340128'
  code:
    concept_code: '1998'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: cilazapril
  concept_id: '19050216'
  code:
    concept_code: '21102'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalapril
  concept_id: '1341927'
  code:
    concept_code: '3827'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalaprilat
  concept_id: '1342001'
  code:
    concept_code: '3829'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinopril
  concept_id: '1363749'
  code:
    concept_code: '50166'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinoprilat
  concept_id: '45775539'
  code:
    concept_code: '1546393'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: imidapril
  concept_id: '19122327'
  code:
    concept_code: '60245'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lisinopril
  concept_id: '1308216'
  code:
    concept_code: '29046'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexipril
  concept_id: '1310756'
  code:
    concept_code: '30131'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexiprilat
  concept_id: '45775374'
  code:
    concept_code: '1546358'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindopril
  concept_id: '1373225'
  code:
    concept_code: '54552'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindoprilat
  concept_id: '45775544'
  code:
    concept_code: '1546400'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinapril
  concept_id: '1331235'
  code:
    concept_code: '35208'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinaprilat
  concept_id: '45775375'
  code:
    concept_code: '1546359'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramipril
  concept_id: '1334456'
  code:
    concept_code: '35296'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramiprilat
  concept_id: '45775527'
  code:
    concept_code: '1546377'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spirapril
  concept_id: '19040051'
  code:
    concept_code: '36908'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolapril
  concept_id: '1342439'
  code:
    concept_code: '38454'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolaprilat
  concept_id: '45775529'
  code:
    concept_code: '1546379'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: zofenopril
  concept_id: '19102107'
  code:
    concept_code: '39990'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amlodipine
  concept_id: '1332418'
  code:
    concept_code: '17767'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: clevidipine
  concept_id: '19089969'
  code:
    concept_code: '233603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: felodipine
  concept_id: '1353776'
  code:
    concept_code: '4316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: isradipine
  concept_id: '1326012'
  code:
    concept_code: '33910'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lacidipine
  concept_id: '19004539'
  code:
    concept_code: '28382'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lercanidipine
  concept_id: '19015802'
  code:
    concept_code: '135056'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: manidipine
  concept_id: '19071995'
  code:
    concept_code: '29275'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: mepirodipine
  concept_id: '19102106'
  code:
    concept_code: '39879'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nicardipine
  concept_id: '1318137'
  code:
    concept_code: '7396'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nifedipine
  concept_id: '1318853'
  code:
    concept_code: '7417'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nilvadipine
  concept_id: '19113063'
  code:
    concept_code: '53692'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nimodipine
  concept_id: '1319133'
  code:
    concept_code: '7426'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nisoldipine
  concept_id: '1319880'
  code:
    concept_code: '7435'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nitrendipine
  concept_id: '19020061'
  code:
    concept_code: '7441'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: diltiazem
  concept_id: '1328165'
  code:
    concept_code: '3443'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: gallopamil
  concept_id: '19057715'
  code:
    concept_code: '4648'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: verapamil
  concept_id: '1307863'
  code:
    concept_code: '11170'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: acebutolol
  concept_id: '1319998'
  code:
    concept_code: '149'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: alprenolol
  concept_id: '19081284'
  code:
    concept_code: '597'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: atenolol
  concept_id: '1314002'
  code:
    concept_code: '1202'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: betaxolol
  concept_id: '1322081'
  code:
    concept_code: '1520'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bisoprolol
  concept_id: '1338005'
  code:
    concept_code: '19484'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bopindolol
  concept_id: '19018640'
  code:
    concept_code: '19605'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bupranolol
  concept_id: '19018489'
  code:
    concept_code: '1817'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carteolol
  concept_id: '950370'
  code:
    concept_code: '2116'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carvedilol
  concept_id: '1346823'
  code:
    concept_code: '20352'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: celiprolol
  concept_id: '19049145'
  code:
    concept_code: '20498'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: esmolol
  concept_id: '19063575'
  code:
    concept_code: '49737'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: labetalol
  concept_id: '1386957'
  code:
    concept_code: '6185'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: levobunolol
  concept_id: '932815'
  code:
    concept_code: '1813'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metipranolol
  concept_id: '905531'
  code:
    concept_code: '10824'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metoprolol
  concept_id: '1307046'
  code:
    concept_code: '6918'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nadolol
  concept_id: '1313200'
  code:
    concept_code: '7226'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nebivolol
  concept_id: '1314577'
  code:
    concept_code: '31555'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: oxprenolol
  concept_id: '19024904'
  code:
    concept_code: '7801'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: penbutolol
  concept_id: '1327978'
  code:
    concept_code: '7973'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: pindolol
  concept_id: '1345858'
  code:
    concept_code: '8332'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: propranolol
  concept_id: '1353766'
  code:
    concept_code: '8787'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: sotalol
  concept_id: '1370109'
  code:
    concept_code: '9947'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: talinolol
  concept_id: '19100435'
  code:
    concept_code: '37546'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: tertatolol
  concept_id: '19100451'
  code:
    concept_code: '37840'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: timolol
  concept_id: '902427'
  code:
    concept_code: '10600'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bendroflumethiazide
  concept_id: '1316354'
  code:
    concept_code: '1369'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: xipamide
  concept_id: '19010493'
  code:
    concept_code: '11371'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amiloride
  concept_id: '991382'
  code:
    concept_code: '644'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bumetanide
  concept_id: '932745'
  code:
    concept_code: '1808'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eplerenone
  concept_id: '1309799'
  code:
    concept_code: '298869'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: furosemide
  concept_id: '956874'
  code:
    concept_code: '4603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spironolactone
  concept_id: '970250'
  code:
    concept_code: '9997'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: torsemide
  concept_id: '942350'
  code:
    concept_code: '38413'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: triamterene
  concept_id: '904542'
  code:
    concept_code: '10763'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bendroflumethiazide
  concept_id: '1316354'
  code:
    concept_code: '1369'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: xipamide
  concept_id: '19010493'
  code:
    concept_code: '11371'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: benazepril
  concept_id: '1335471'
  code:
    concept_code: '18867'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: captopril
  concept_id: '1340128'
  code:
    concept_code: '1998'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: cilazapril
  concept_id: '19050216'
  code:
    concept_code: '21102'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalapril
  concept_id: '1341927'
  code:
    concept_code: '3827'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalaprilat
  concept_id: '1342001'
  code:
    concept_code: '3829'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinopril
  concept_id: '1363749'
  code:
    concept_code: '50166'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinoprilat
  concept_id: '45775539'
  code:
    concept_code: '1546393'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: imidapril
  concept_id: '19122327'
  code:
    concept_code: '60245'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lisinopril
  concept_id: '1308216'
  code:
    concept_code: '29046'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexipril
  concept_id: '1310756'
  code:
    concept_code: '30131'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexiprilat
  concept_id: '45775374'
  code:
    concept_code: '1546358'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindopril
  concept_id: '1373225'
  code:
    concept_code: '54552'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindoprilat
  concept_id: '45775544'
  code:
    concept_code: '1546400'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinapril
  concept_id: '1331235'
  code:
    concept_code: '35208'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinaprilat
  concept_id: '45775375'
  code:
    concept_code: '1546359'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramipril
  concept_id: '1334456'
  code:
    concept_code: '35296'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramiprilat
  concept_id: '45775527'
  code:
    concept_code: '1546377'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spirapril
  concept_id: '19040051'
  code:
    concept_code: '36908'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolapril
  concept_id: '1342439'
  code:
    concept_code: '38454'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolaprilat
  concept_id: '45775529'
  code:
    concept_code: '1546379'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: zofenopril
  concept_id: '19102107'
  code:
    concept_code: '39990'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: azilsartan
  concept_id: '40235485'
  code:
    concept_code: '1091643'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: candesartan
  concept_id: '1351557'
  code:
    concept_code: '214354'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eprosartan
  concept_id: '1346686'
  code:
    concept_code: '83515'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: irbesartan
  concept_id: '1347384'
  code:
    concept_code: '83818'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: losartan
  concept_id: '1367500'
  code:
    concept_code: '52175'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olmesartan
  concept_id: '40226742'
  code:
    concept_code: '321064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: telmisartan
  concept_id: '1317640'
  code:
    concept_code: '73494'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: valsartan
  concept_id: '1308842'
  code:
    concept_code: '69749'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amlodipine
  concept_id: '1332418'
  code:
    concept_code: '17767'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: clevidipine
  concept_id: '19089969'
  code:
    concept_code: '233603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: felodipine
  concept_id: '1353776'
  code:
    concept_code: '4316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: isradipine
  concept_id: '1326012'
  code:
    concept_code: '33910'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lacidipine
  concept_id: '19004539'
  code:
    concept_code: '28382'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lercanidipine
  concept_id: '19015802'
  code:
    concept_code: '135056'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: manidipine
  concept_id: '19071995'
  code:
    concept_code: '29275'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: mepirodipine
  concept_id: '19102106'
  code:
    concept_code: '39879'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nicardipine
  concept_id: '1318137'
  code:
    concept_code: '7396'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nifedipine
  concept_id: '1318853'
  code:
    concept_code: '7417'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nilvadipine
  concept_id: '19113063'
  code:
    concept_code: '53692'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nimodipine
  concept_id: '1319133'
  code:
    concept_code: '7426'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nisoldipine
  concept_id: '1319880'
  code:
    concept_code: '7435'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nitrendipine
  concept_id: '19020061'
  code:
    concept_code: '7441'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: diltiazem
  concept_id: '1328165'
  code:
    concept_code: '3443'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: gallopamil
  concept_id: '19057715'
  code:
    concept_code: '4648'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: verapamil
  concept_id: '1307863'
  code:
    concept_code: '11170'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: acebutolol
  concept_id: '1319998'
  code:
    concept_code: '149'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: alprenolol
  concept_id: '19081284'
  code:
    concept_code: '597'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: atenolol
  concept_id: '1314002'
  code:
    concept_code: '1202'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: betaxolol
  concept_id: '1322081'
  code:
    concept_code: '1520'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bisoprolol
  concept_id: '1338005'
  code:
    concept_code: '19484'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bopindolol
  concept_id: '19018640'
  code:
    concept_code: '19605'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bupranolol
  concept_id: '19018489'
  code:
    concept_code: '1817'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carteolol
  concept_id: '950370'
  code:
    concept_code: '2116'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carvedilol
  concept_id: '1346823'
  code:
    concept_code: '20352'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: celiprolol
  concept_id: '19049145'
  code:
    concept_code: '20498'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: esmolol
  concept_id: '19063575'
  code:
    concept_code: '49737'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: labetalol
  concept_id: '1386957'
  code:
    concept_code: '6185'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: levobunolol
  concept_id: '932815'
  code:
    concept_code: '1813'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metipranolol
  concept_id: '905531'
  code:
    concept_code: '10824'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metoprolol
  concept_id: '1307046'
  code:
    concept_code: '6918'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nadolol
  concept_id: '1313200'
  code:
    concept_code: '7226'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nebivolol
  concept_id: '1314577'
  code:
    concept_code: '31555'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: oxprenolol
  concept_id: '19024904'
  code:
    concept_code: '7801'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: penbutolol
  concept_id: '1327978'
  code:
    concept_code: '7973'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: pindolol
  concept_id: '1345858'
  code:
    concept_code: '8332'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: propranolol
  concept_id: '1353766'
  code:
    concept_code: '8787'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: sotalol
  concept_id: '1370109'
  code:
    concept_code: '9947'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: talinolol
  concept_id: '19100435'
  code:
    concept_code: '37546'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: tertatolol
  concept_id: '19100451'
  code:
    concept_code: '37840'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: timolol
  concept_id: '902427'
  code:
    concept_code: '10600'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amiloride
  concept_id: '991382'
  code:
    concept_code: '644'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bumetanide
  concept_id: '932745'
  code:
    concept_code: '1808'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eplerenone
  concept_id: '1309799'
  code:
    concept_code: '298869'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: furosemide
  concept_id: '956874'
  code:
    concept_code: '4603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spironolactone
  concept_id: '970250'
  code:
    concept_code: '9997'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: torsemide
  concept_id: '942350'
  code:
    concept_code: '38413'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: triamterene
  concept_id: '904542'
  code:
    concept_code: '10763'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amlodipine
  concept_id: '1332418'
  code:
    concept_code: '17767'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: clevidipine
  concept_id: '19089969'
  code:
    concept_code: '233603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: felodipine
  concept_id: '1353776'
  code:
    concept_code: '4316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: isradipine
  concept_id: '1326012'
  code:
    concept_code: '33910'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lacidipine
  concept_id: '19004539'
  code:
    concept_code: '28382'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lercanidipine
  concept_id: '19015802'
  code:
    concept_code: '135056'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: manidipine
  concept_id: '19071995'
  code:
    concept_code: '29275'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: mepirodipine
  concept_id: '19102106'
  code:
    concept_code: '39879'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nicardipine
  concept_id: '1318137'
  code:
    concept_code: '7396'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nifedipine
  concept_id: '1318853'
  code:
    concept_code: '7417'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nilvadipine
  concept_id: '19113063'
  code:
    concept_code: '53692'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nimodipine
  concept_id: '1319133'
  code:
    concept_code: '7426'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nisoldipine
  concept_id: '1319880'
  code:
    concept_code: '7435'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nitrendipine
  concept_id: '19020061'
  code:
    concept_code: '7441'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: benazepril
  concept_id: '1335471'
  code:
    concept_code: '18867'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: captopril
  concept_id: '1340128'
  code:
    concept_code: '1998'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: cilazapril
  concept_id: '19050216'
  code:
    concept_code: '21102'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalapril
  concept_id: '1341927'
  code:
    concept_code: '3827'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalaprilat
  concept_id: '1342001'
  code:
    concept_code: '3829'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinopril
  concept_id: '1363749'
  code:
    concept_code: '50166'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinoprilat
  concept_id: '45775539'
  code:
    concept_code: '1546393'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: imidapril
  concept_id: '19122327'
  code:
    concept_code: '60245'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lisinopril
  concept_id: '1308216'
  code:
    concept_code: '29046'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexipril
  concept_id: '1310756'
  code:
    concept_code: '30131'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexiprilat
  concept_id: '45775374'
  code:
    concept_code: '1546358'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindopril
  concept_id: '1373225'
  code:
    concept_code: '54552'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindoprilat
  concept_id: '45775544'
  code:
    concept_code: '1546400'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinapril
  concept_id: '1331235'
  code:
    concept_code: '35208'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinaprilat
  concept_id: '45775375'
  code:
    concept_code: '1546359'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramipril
  concept_id: '1334456'
  code:
    concept_code: '35296'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramiprilat
  concept_id: '45775527'
  code:
    concept_code: '1546377'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spirapril
  concept_id: '19040051'
  code:
    concept_code: '36908'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolapril
  concept_id: '1342439'
  code:
    concept_code: '38454'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolaprilat
  concept_id: '45775529'
  code:
    concept_code: '1546379'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: zofenopril
  concept_id: '19102107'
  code:
    concept_code: '39990'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: azilsartan
  concept_id: '40235485'
  code:
    concept_code: '1091643'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: candesartan
  concept_id: '1351557'
  code:
    concept_code: '214354'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eprosartan
  concept_id: '1346686'
  code:
    concept_code: '83515'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: irbesartan
  concept_id: '1347384'
  code:
    concept_code: '83818'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: losartan
  concept_id: '1367500'
  code:
    concept_code: '52175'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olmesartan
  concept_id: '40226742'
  code:
    concept_code: '321064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: telmisartan
  concept_id: '1317640'
  code:
    concept_code: '73494'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: valsartan
  concept_id: '1308842'
  code:
    concept_code: '69749'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: diltiazem
  concept_id: '1328165'
  code:
    concept_code: '3443'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: gallopamil
  concept_id: '19057715'
  code:
    concept_code: '4648'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: verapamil
  concept_id: '1307863'
  code:
    concept_code: '11170'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: acebutolol
  concept_id: '1319998'
  code:
    concept_code: '149'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: alprenolol
  concept_id: '19081284'
  code:
    concept_code: '597'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: atenolol
  concept_id: '1314002'
  code:
    concept_code: '1202'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: betaxolol
  concept_id: '1322081'
  code:
    concept_code: '1520'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bisoprolol
  concept_id: '1338005'
  code:
    concept_code: '19484'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bopindolol
  concept_id: '19018640'
  code:
    concept_code: '19605'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bupranolol
  concept_id: '19018489'
  code:
    concept_code: '1817'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carteolol
  concept_id: '950370'
  code:
    concept_code: '2116'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carvedilol
  concept_id: '1346823'
  code:
    concept_code: '20352'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: celiprolol
  concept_id: '19049145'
  code:
    concept_code: '20498'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: esmolol
  concept_id: '19063575'
  code:
    concept_code: '49737'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: labetalol
  concept_id: '1386957'
  code:
    concept_code: '6185'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: levobunolol
  concept_id: '932815'
  code:
    concept_code: '1813'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metipranolol
  concept_id: '905531'
  code:
    concept_code: '10824'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metoprolol
  concept_id: '1307046'
  code:
    concept_code: '6918'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nadolol
  concept_id: '1313200'
  code:
    concept_code: '7226'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nebivolol
  concept_id: '1314577'
  code:
    concept_code: '31555'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: oxprenolol
  concept_id: '19024904'
  code:
    concept_code: '7801'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: penbutolol
  concept_id: '1327978'
  code:
    concept_code: '7973'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: pindolol
  concept_id: '1345858'
  code:
    concept_code: '8332'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: propranolol
  concept_id: '1353766'
  code:
    concept_code: '8787'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: sotalol
  concept_id: '1370109'
  code:
    concept_code: '9947'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: talinolol
  concept_id: '19100435'
  code:
    concept_code: '37546'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: tertatolol
  concept_id: '19100451'
  code:
    concept_code: '37840'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: timolol
  concept_id: '902427'
  code:
    concept_code: '10600'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bendroflumethiazide
  concept_id: '1316354'
  code:
    concept_code: '1369'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: xipamide
  concept_id: '19010493'
  code:
    concept_code: '11371'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amiloride
  concept_id: '991382'
  code:
    concept_code: '644'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bumetanide
  concept_id: '932745'
  code:
    concept_code: '1808'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eplerenone
  concept_id: '1309799'
  code:
    concept_code: '298869'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: furosemide
  concept_id: '956874'
  code:
    concept_code: '4603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spironolactone
  concept_id: '970250'
  code:
    concept_code: '9997'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: torsemide
  concept_id: '942350'
  code:
    concept_code: '38413'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: triamterene
  concept_id: '904542'
  code:
    concept_code: '10763'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: azilsartan
  concept_id: '40235485'
  code:
    concept_code: '1091643'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: benazepril
  concept_id: '1335471'
  code:
    concept_code: '18867'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: candesartan
  concept_id: '1351557'
  code:
    concept_code: '214354'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: captopril
  concept_id: '1340128'
  code:
    concept_code: '1998'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: cilazapril
  concept_id: '19050216'
  code:
    concept_code: '21102'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalapril
  concept_id: '1341927'
  code:
    concept_code: '3827'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalaprilat
  concept_id: '1342001'
  code:
    concept_code: '3829'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eprosartan
  concept_id: '1346686'
  code:
    concept_code: '83515'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinopril
  concept_id: '1363749'
  code:
    concept_code: '50166'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinoprilat
  concept_id: '45775539'
  code:
    concept_code: '1546393'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: imidapril
  concept_id: '19122327'
  code:
    concept_code: '60245'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: irbesartan
  concept_id: '1347384'
  code:
    concept_code: '83818'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lisinopril
  concept_id: '1308216'
  code:
    concept_code: '29046'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: losartan
  concept_id: '1367500'
  code:
    concept_code: '52175'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexipril
  concept_id: '1310756'
  code:
    concept_code: '30131'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexiprilat
  concept_id: '45775374'
  code:
    concept_code: '1546358'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olmesartan
  concept_id: '40226742'
  code:
    concept_code: '321064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindopril
  concept_id: '1373225'
  code:
    concept_code: '54552'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindoprilat
  concept_id: '45775544'
  code:
    concept_code: '1546400'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinapril
  concept_id: '1331235'
  code:
    concept_code: '35208'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinaprilat
  concept_id: '45775375'
  code:
    concept_code: '1546359'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramipril
  concept_id: '1334456'
  code:
    concept_code: '35296'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramiprilat
  concept_id: '45775527'
  code:
    concept_code: '1546377'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spirapril
  concept_id: '19040051'
  code:
    concept_code: '36908'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: telmisartan
  concept_id: '1317640'
  code:
    concept_code: '73494'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolapril
  concept_id: '1342439'
  code:
    concept_code: '38454'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolaprilat
  concept_id: '45775529'
  code:
    concept_code: '1546379'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: valsartan
  concept_id: '1308842'
  code:
    concept_code: '69749'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: zofenopril
  concept_id: '19102107'
  code:
    concept_code: '39990'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amlodipine
  concept_id: '1332418'
  code:
    concept_code: '17767'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: clevidipine
  concept_id: '19089969'
  code:
    concept_code: '233603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: felodipine
  concept_id: '1353776'
  code:
    concept_code: '4316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: isradipine
  concept_id: '1326012'
  code:
    concept_code: '33910'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lacidipine
  concept_id: '19004539'
  code:
    concept_code: '28382'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lercanidipine
  concept_id: '19015802'
  code:
    concept_code: '135056'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: manidipine
  concept_id: '19071995'
  code:
    concept_code: '29275'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: mepirodipine
  concept_id: '19102106'
  code:
    concept_code: '39879'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nicardipine
  concept_id: '1318137'
  code:
    concept_code: '7396'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nifedipine
  concept_id: '1318853'
  code:
    concept_code: '7417'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nilvadipine
  concept_id: '19113063'
  code:
    concept_code: '53692'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nimodipine
  concept_id: '1319133'
  code:
    concept_code: '7426'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nisoldipine
  concept_id: '1319880'
  code:
    concept_code: '7435'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nitrendipine
  concept_id: '19020061'
  code:
    concept_code: '7441'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: diltiazem
  concept_id: '1328165'
  code:
    concept_code: '3443'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: gallopamil
  concept_id: '19057715'
  code:
    concept_code: '4648'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: verapamil
  concept_id: '1307863'
  code:
    concept_code: '11170'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: acebutolol
  concept_id: '1319998'
  code:
    concept_code: '149'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: alprenolol
  concept_id: '19081284'
  code:
    concept_code: '597'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: atenolol
  concept_id: '1314002'
  code:
    concept_code: '1202'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: betaxolol
  concept_id: '1322081'
  code:
    concept_code: '1520'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bisoprolol
  concept_id: '1338005'
  code:
    concept_code: '19484'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bopindolol
  concept_id: '19018640'
  code:
    concept_code: '19605'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bupranolol
  concept_id: '19018489'
  code:
    concept_code: '1817'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carteolol
  concept_id: '950370'
  code:
    concept_code: '2116'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carvedilol
  concept_id: '1346823'
  code:
    concept_code: '20352'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: celiprolol
  concept_id: '19049145'
  code:
    concept_code: '20498'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: esmolol
  concept_id: '19063575'
  code:
    concept_code: '49737'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: labetalol
  concept_id: '1386957'
  code:
    concept_code: '6185'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: levobunolol
  concept_id: '932815'
  code:
    concept_code: '1813'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metipranolol
  concept_id: '905531'
  code:
    concept_code: '10824'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metoprolol
  concept_id: '1307046'
  code:
    concept_code: '6918'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nadolol
  concept_id: '1313200'
  code:
    concept_code: '7226'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nebivolol
  concept_id: '1314577'
  code:
    concept_code: '31555'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: oxprenolol
  concept_id: '19024904'
  code:
    concept_code: '7801'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: penbutolol
  concept_id: '1327978'
  code:
    concept_code: '7973'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: pindolol
  concept_id: '1345858'
  code:
    concept_code: '8332'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: propranolol
  concept_id: '1353766'
  code:
    concept_code: '8787'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: sotalol
  concept_id: '1370109'
  code:
    concept_code: '9947'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: talinolol
  concept_id: '19100435'
  code:
    concept_code: '37546'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: tertatolol
  concept_id: '19100451'
  code:
    concept_code: '37840'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: timolol
  concept_id: '902427'
  code:
    concept_code: '10600'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bendroflumethiazide
  concept_id: '1316354'
  code:
    concept_code: '1369'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: xipamide
  concept_id: '19010493'
  code:
    concept_code: '11371'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amiloride
  concept_id: '991382'
  code:
    concept_code: '644'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bumetanide
  concept_id: '932745'
  code:
    concept_code: '1808'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eplerenone
  concept_id: '1309799'
  code:
    concept_code: '298869'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: furosemide
  concept_id: '956874'
  code:
    concept_code: '4603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spironolactone
  concept_id: '970250'
  code:
    concept_code: '9997'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: torsemide
  concept_id: '942350'
  code:
    concept_code: '38413'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: triamterene
  concept_id: '904542'
  code:
    concept_code: '10763'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: benazepril
  concept_id: '1335471'
  code:
    concept_code: '18867'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: captopril
  concept_id: '1340128'
  code:
    concept_code: '1998'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: cilazapril
  concept_id: '19050216'
  code:
    concept_code: '21102'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalapril
  concept_id: '1341927'
  code:
    concept_code: '3827'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalaprilat
  concept_id: '1342001'
  code:
    concept_code: '3829'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinopril
  concept_id: '1363749'
  code:
    concept_code: '50166'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinoprilat
  concept_id: '45775539'
  code:
    concept_code: '1546393'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: imidapril
  concept_id: '19122327'
  code:
    concept_code: '60245'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lisinopril
  concept_id: '1308216'
  code:
    concept_code: '29046'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexipril
  concept_id: '1310756'
  code:
    concept_code: '30131'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexiprilat
  concept_id: '45775374'
  code:
    concept_code: '1546358'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindopril
  concept_id: '1373225'
  code:
    concept_code: '54552'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindoprilat
  concept_id: '45775544'
  code:
    concept_code: '1546400'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinapril
  concept_id: '1331235'
  code:
    concept_code: '35208'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinaprilat
  concept_id: '45775375'
  code:
    concept_code: '1546359'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramipril
  concept_id: '1334456'
  code:
    concept_code: '35296'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramiprilat
  concept_id: '45775527'
  code:
    concept_code: '1546377'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spirapril
  concept_id: '19040051'
  code:
    concept_code: '36908'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolapril
  concept_id: '1342439'
  code:
    concept_code: '38454'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolaprilat
  concept_id: '45775529'
  code:
    concept_code: '1546379'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: zofenopril
  concept_id: '19102107'
  code:
    concept_code: '39990'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: azilsartan
  concept_id: '40235485'
  code:
    concept_code: '1091643'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: candesartan
  concept_id: '1351557'
  code:
    concept_code: '214354'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eprosartan
  concept_id: '1346686'
  code:
    concept_code: '83515'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: irbesartan
  concept_id: '1347384'
  code:
    concept_code: '83818'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: losartan
  concept_id: '1367500'
  code:
    concept_code: '52175'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olmesartan
  concept_id: '40226742'
  code:
    concept_code: '321064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: telmisartan
  concept_id: '1317640'
  code:
    concept_code: '73494'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: valsartan
  concept_id: '1308842'
  code:
    concept_code: '69749'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amlodipine
  concept_id: '1332418'
  code:
    concept_code: '17767'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bendroflumethiazide
  concept_id: '1316354'
  code:
    concept_code: '1369'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: clevidipine
  concept_id: '19089969'
  code:
    concept_code: '233603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: felodipine
  concept_id: '1353776'
  code:
    concept_code: '4316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: isradipine
  concept_id: '1326012'
  code:
    concept_code: '33910'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lacidipine
  concept_id: '19004539'
  code:
    concept_code: '28382'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lercanidipine
  concept_id: '19015802'
  code:
    concept_code: '135056'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: manidipine
  concept_id: '19071995'
  code:
    concept_code: '29275'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: mepirodipine
  concept_id: '19102106'
  code:
    concept_code: '39879'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nicardipine
  concept_id: '1318137'
  code:
    concept_code: '7396'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nifedipine
  concept_id: '1318853'
  code:
    concept_code: '7417'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nilvadipine
  concept_id: '19113063'
  code:
    concept_code: '53692'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nimodipine
  concept_id: '1319133'
  code:
    concept_code: '7426'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nisoldipine
  concept_id: '1319880'
  code:
    concept_code: '7435'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nitrendipine
  concept_id: '19020061'
  code:
    concept_code: '7441'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: xipamide
  concept_id: '19010493'
  code:
    concept_code: '11371'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: diltiazem
  concept_id: '1328165'
  code:
    concept_code: '3443'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: gallopamil
  concept_id: '19057715'
  code:
    concept_code: '4648'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: verapamil
  concept_id: '1307863'
  code:
    concept_code: '11170'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: acebutolol
  concept_id: '1319998'
  code:
    concept_code: '149'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: alprenolol
  concept_id: '19081284'
  code:
    concept_code: '597'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: atenolol
  concept_id: '1314002'
  code:
    concept_code: '1202'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: betaxolol
  concept_id: '1322081'
  code:
    concept_code: '1520'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bisoprolol
  concept_id: '1338005'
  code:
    concept_code: '19484'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bopindolol
  concept_id: '19018640'
  code:
    concept_code: '19605'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bupranolol
  concept_id: '19018489'
  code:
    concept_code: '1817'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carteolol
  concept_id: '950370'
  code:
    concept_code: '2116'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carvedilol
  concept_id: '1346823'
  code:
    concept_code: '20352'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: celiprolol
  concept_id: '19049145'
  code:
    concept_code: '20498'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: esmolol
  concept_id: '19063575'
  code:
    concept_code: '49737'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: labetalol
  concept_id: '1386957'
  code:
    concept_code: '6185'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: levobunolol
  concept_id: '932815'
  code:
    concept_code: '1813'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metipranolol
  concept_id: '905531'
  code:
    concept_code: '10824'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metoprolol
  concept_id: '1307046'
  code:
    concept_code: '6918'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nadolol
  concept_id: '1313200'
  code:
    concept_code: '7226'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nebivolol
  concept_id: '1314577'
  code:
    concept_code: '31555'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: oxprenolol
  concept_id: '19024904'
  code:
    concept_code: '7801'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: penbutolol
  concept_id: '1327978'
  code:
    concept_code: '7973'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: pindolol
  concept_id: '1345858'
  code:
    concept_code: '8332'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: propranolol
  concept_id: '1353766'
  code:
    concept_code: '8787'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: sotalol
  concept_id: '1370109'
  code:
    concept_code: '9947'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: talinolol
  concept_id: '19100435'
  code:
    concept_code: '37546'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: tertatolol
  concept_id: '19100451'
  code:
    concept_code: '37840'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: timolol
  concept_id: '902427'
  code:
    concept_code: '10600'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bendroflumethiazide
  concept_id: '1316354'
  code:
    concept_code: '1369'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: xipamide
  concept_id: '19010493'
  code:
    concept_code: '11371'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amiloride
  concept_id: '991382'
  code:
    concept_code: '644'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bumetanide
  concept_id: '932745'
  code:
    concept_code: '1808'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eplerenone
  concept_id: '1309799'
  code:
    concept_code: '298869'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: furosemide
  concept_id: '956874'
  code:
    concept_code: '4603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spironolactone
  concept_id: '970250'
  code:
    concept_code: '9997'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: torsemide
  concept_id: '942350'
  code:
    concept_code: '38413'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: triamterene
  concept_id: '904542'
  code:
    concept_code: '10763'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: azilsartan
  concept_id: '40235485'
  code:
    concept_code: '1091643'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: candesartan
  concept_id: '1351557'
  code:
    concept_code: '214354'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eprosartan
  concept_id: '1346686'
  code:
    concept_code: '83515'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: irbesartan
  concept_id: '1347384'
  code:
    concept_code: '83818'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: losartan
  concept_id: '1367500'
  code:
    concept_code: '52175'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olmesartan
  concept_id: '40226742'
  code:
    concept_code: '321064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: telmisartan
  concept_id: '1317640'
  code:
    concept_code: '73494'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: valsartan
  concept_id: '1308842'
  code:
    concept_code: '69749'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: benazepril
  concept_id: '1335471'
  code:
    concept_code: '18867'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: captopril
  concept_id: '1340128'
  code:
    concept_code: '1998'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: cilazapril
  concept_id: '19050216'
  code:
    concept_code: '21102'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalapril
  concept_id: '1341927'
  code:
    concept_code: '3827'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalaprilat
  concept_id: '1342001'
  code:
    concept_code: '3829'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinopril
  concept_id: '1363749'
  code:
    concept_code: '50166'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinoprilat
  concept_id: '45775539'
  code:
    concept_code: '1546393'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: imidapril
  concept_id: '19122327'
  code:
    concept_code: '60245'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lisinopril
  concept_id: '1308216'
  code:
    concept_code: '29046'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexipril
  concept_id: '1310756'
  code:
    concept_code: '30131'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexiprilat
  concept_id: '45775374'
  code:
    concept_code: '1546358'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindopril
  concept_id: '1373225'
  code:
    concept_code: '54552'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindoprilat
  concept_id: '45775544'
  code:
    concept_code: '1546400'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinapril
  concept_id: '1331235'
  code:
    concept_code: '35208'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinaprilat
  concept_id: '45775375'
  code:
    concept_code: '1546359'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramipril
  concept_id: '1334456'
  code:
    concept_code: '35296'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramiprilat
  concept_id: '45775527'
  code:
    concept_code: '1546377'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spirapril
  concept_id: '19040051'
  code:
    concept_code: '36908'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolapril
  concept_id: '1342439'
  code:
    concept_code: '38454'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolaprilat
  concept_id: '45775529'
  code:
    concept_code: '1546379'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: zofenopril
  concept_id: '19102107'
  code:
    concept_code: '39990'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amlodipine
  concept_id: '1332418'
  code:
    concept_code: '17767'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: clevidipine
  concept_id: '19089969'
  code:
    concept_code: '233603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: felodipine
  concept_id: '1353776'
  code:
    concept_code: '4316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: isradipine
  concept_id: '1326012'
  code:
    concept_code: '33910'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lacidipine
  concept_id: '19004539'
  code:
    concept_code: '28382'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lercanidipine
  concept_id: '19015802'
  code:
    concept_code: '135056'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: manidipine
  concept_id: '19071995'
  code:
    concept_code: '29275'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: mepirodipine
  concept_id: '19102106'
  code:
    concept_code: '39879'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nicardipine
  concept_id: '1318137'
  code:
    concept_code: '7396'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nifedipine
  concept_id: '1318853'
  code:
    concept_code: '7417'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nilvadipine
  concept_id: '19113063'
  code:
    concept_code: '53692'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nimodipine
  concept_id: '1319133'
  code:
    concept_code: '7426'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nisoldipine
  concept_id: '1319880'
  code:
    concept_code: '7435'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nitrendipine
  concept_id: '19020061'
  code:
    concept_code: '7441'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: diltiazem
  concept_id: '1328165'
  code:
    concept_code: '3443'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: gallopamil
  concept_id: '19057715'
  code:
    concept_code: '4648'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: verapamil
  concept_id: '1307863'
  code:
    concept_code: '11170'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: acebutolol
  concept_id: '1319998'
  code:
    concept_code: '149'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: alprenolol
  concept_id: '19081284'
  code:
    concept_code: '597'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: atenolol
  concept_id: '1314002'
  code:
    concept_code: '1202'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: betaxolol
  concept_id: '1322081'
  code:
    concept_code: '1520'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bisoprolol
  concept_id: '1338005'
  code:
    concept_code: '19484'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bopindolol
  concept_id: '19018640'
  code:
    concept_code: '19605'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bupranolol
  concept_id: '19018489'
  code:
    concept_code: '1817'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carteolol
  concept_id: '950370'
  code:
    concept_code: '2116'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carvedilol
  concept_id: '1346823'
  code:
    concept_code: '20352'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: celiprolol
  concept_id: '19049145'
  code:
    concept_code: '20498'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: esmolol
  concept_id: '19063575'
  code:
    concept_code: '49737'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: labetalol
  concept_id: '1386957'
  code:
    concept_code: '6185'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: levobunolol
  concept_id: '932815'
  code:
    concept_code: '1813'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metipranolol
  concept_id: '905531'
  code:
    concept_code: '10824'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metoprolol
  concept_id: '1307046'
  code:
    concept_code: '6918'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nadolol
  concept_id: '1313200'
  code:
    concept_code: '7226'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nebivolol
  concept_id: '1314577'
  code:
    concept_code: '31555'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: oxprenolol
  concept_id: '19024904'
  code:
    concept_code: '7801'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: penbutolol
  concept_id: '1327978'
  code:
    concept_code: '7973'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: pindolol
  concept_id: '1345858'
  code:
    concept_code: '8332'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: propranolol
  concept_id: '1353766'
  code:
    concept_code: '8787'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: sotalol
  concept_id: '1370109'
  code:
    concept_code: '9947'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: talinolol
  concept_id: '19100435'
  code:
    concept_code: '37546'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: tertatolol
  concept_id: '19100451'
  code:
    concept_code: '37840'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: timolol
  concept_id: '902427'
  code:
    concept_code: '10600'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bendroflumethiazide
  concept_id: '1316354'
  code:
    concept_code: '1369'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: xipamide
  concept_id: '19010493'
  code:
    concept_code: '11371'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amiloride
  concept_id: '991382'
  code:
    concept_code: '644'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bumetanide
  concept_id: '932745'
  code:
    concept_code: '1808'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eplerenone
  concept_id: '1309799'
  code:
    concept_code: '298869'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: furosemide
  concept_id: '956874'
  code:
    concept_code: '4603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spironolactone
  concept_id: '970250'
  code:
    concept_code: '9997'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: torsemide
  concept_id: '942350'
  code:
    concept_code: '38413'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: triamterene
  concept_id: '904542'
  code:
    concept_code: '10763'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bendroflumethiazide
  concept_id: '1316354'
  code:
    concept_code: '1369'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: xipamide
  concept_id: '19010493'
  code:
    concept_code: '11371'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: benazepril
  concept_id: '1335471'
  code:
    concept_code: '18867'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: captopril
  concept_id: '1340128'
  code:
    concept_code: '1998'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: cilazapril
  concept_id: '19050216'
  code:
    concept_code: '21102'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalapril
  concept_id: '1341927'
  code:
    concept_code: '3827'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalaprilat
  concept_id: '1342001'
  code:
    concept_code: '3829'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinopril
  concept_id: '1363749'
  code:
    concept_code: '50166'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinoprilat
  concept_id: '45775539'
  code:
    concept_code: '1546393'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: imidapril
  concept_id: '19122327'
  code:
    concept_code: '60245'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lisinopril
  concept_id: '1308216'
  code:
    concept_code: '29046'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexipril
  concept_id: '1310756'
  code:
    concept_code: '30131'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexiprilat
  concept_id: '45775374'
  code:
    concept_code: '1546358'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindopril
  concept_id: '1373225'
  code:
    concept_code: '54552'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindoprilat
  concept_id: '45775544'
  code:
    concept_code: '1546400'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinapril
  concept_id: '1331235'
  code:
    concept_code: '35208'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinaprilat
  concept_id: '45775375'
  code:
    concept_code: '1546359'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramipril
  concept_id: '1334456'
  code:
    concept_code: '35296'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramiprilat
  concept_id: '45775527'
  code:
    concept_code: '1546377'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spirapril
  concept_id: '19040051'
  code:
    concept_code: '36908'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolapril
  concept_id: '1342439'
  code:
    concept_code: '38454'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolaprilat
  concept_id: '45775529'
  code:
    concept_code: '1546379'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: zofenopril
  concept_id: '19102107'
  code:
    concept_code: '39990'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: azilsartan
  concept_id: '40235485'
  code:
    concept_code: '1091643'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: candesartan
  concept_id: '1351557'
  code:
    concept_code: '214354'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eprosartan
  concept_id: '1346686'
  code:
    concept_code: '83515'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: irbesartan
  concept_id: '1347384'
  code:
    concept_code: '83818'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: losartan
  concept_id: '1367500'
  code:
    concept_code: '52175'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olmesartan
  concept_id: '40226742'
  code:
    concept_code: '321064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: telmisartan
  concept_id: '1317640'
  code:
    concept_code: '73494'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: valsartan
  concept_id: '1308842'
  code:
    concept_code: '69749'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amlodipine
  concept_id: '1332418'
  code:
    concept_code: '17767'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: clevidipine
  concept_id: '19089969'
  code:
    concept_code: '233603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: felodipine
  concept_id: '1353776'
  code:
    concept_code: '4316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: isradipine
  concept_id: '1326012'
  code:
    concept_code: '33910'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lacidipine
  concept_id: '19004539'
  code:
    concept_code: '28382'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lercanidipine
  concept_id: '19015802'
  code:
    concept_code: '135056'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: manidipine
  concept_id: '19071995'
  code:
    concept_code: '29275'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: mepirodipine
  concept_id: '19102106'
  code:
    concept_code: '39879'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nicardipine
  concept_id: '1318137'
  code:
    concept_code: '7396'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nifedipine
  concept_id: '1318853'
  code:
    concept_code: '7417'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nilvadipine
  concept_id: '19113063'
  code:
    concept_code: '53692'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nimodipine
  concept_id: '1319133'
  code:
    concept_code: '7426'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nisoldipine
  concept_id: '1319880'
  code:
    concept_code: '7435'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nitrendipine
  concept_id: '19020061'
  code:
    concept_code: '7441'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: diltiazem
  concept_id: '1328165'
  code:
    concept_code: '3443'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: gallopamil
  concept_id: '19057715'
  code:
    concept_code: '4648'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: verapamil
  concept_id: '1307863'
  code:
    concept_code: '11170'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: acebutolol
  concept_id: '1319998'
  code:
    concept_code: '149'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: alprenolol
  concept_id: '19081284'
  code:
    concept_code: '597'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: atenolol
  concept_id: '1314002'
  code:
    concept_code: '1202'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: betaxolol
  concept_id: '1322081'
  code:
    concept_code: '1520'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bisoprolol
  concept_id: '1338005'
  code:
    concept_code: '19484'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bopindolol
  concept_id: '19018640'
  code:
    concept_code: '19605'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bupranolol
  concept_id: '19018489'
  code:
    concept_code: '1817'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carteolol
  concept_id: '950370'
  code:
    concept_code: '2116'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carvedilol
  concept_id: '1346823'
  code:
    concept_code: '20352'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: celiprolol
  concept_id: '19049145'
  code:
    concept_code: '20498'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: esmolol
  concept_id: '19063575'
  code:
    concept_code: '49737'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: labetalol
  concept_id: '1386957'
  code:
    concept_code: '6185'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: levobunolol
  concept_id: '932815'
  code:
    concept_code: '1813'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metipranolol
  concept_id: '905531'
  code:
    concept_code: '10824'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metoprolol
  concept_id: '1307046'
  code:
    concept_code: '6918'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nadolol
  concept_id: '1313200'
  code:
    concept_code: '7226'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nebivolol
  concept_id: '1314577'
  code:
    concept_code: '31555'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: oxprenolol
  concept_id: '19024904'
  code:
    concept_code: '7801'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: penbutolol
  concept_id: '1327978'
  code:
    concept_code: '7973'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: pindolol
  concept_id: '1345858'
  code:
    concept_code: '8332'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: propranolol
  concept_id: '1353766'
  code:
    concept_code: '8787'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: sotalol
  concept_id: '1370109'
  code:
    concept_code: '9947'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: talinolol
  concept_id: '19100435'
  code:
    concept_code: '37546'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: tertatolol
  concept_id: '19100451'
  code:
    concept_code: '37840'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: timolol
  concept_id: '902427'
  code:
    concept_code: '10600'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amiloride
  concept_id: '991382'
  code:
    concept_code: '644'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bumetanide
  concept_id: '932745'
  code:
    concept_code: '1808'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eplerenone
  concept_id: '1309799'
  code:
    concept_code: '298869'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: furosemide
  concept_id: '956874'
  code:
    concept_code: '4603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spironolactone
  concept_id: '970250'
  code:
    concept_code: '9997'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: torsemide
  concept_id: '942350'
  code:
    concept_code: '38413'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: triamterene
  concept_id: '904542'
  code:
    concept_code: '10763'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amlodipine
  concept_id: '1332418'
  code:
    concept_code: '17767'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: clevidipine
  concept_id: '19089969'
  code:
    concept_code: '233603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: felodipine
  concept_id: '1353776'
  code:
    concept_code: '4316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: isradipine
  concept_id: '1326012'
  code:
    concept_code: '33910'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lacidipine
  concept_id: '19004539'
  code:
    concept_code: '28382'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lercanidipine
  concept_id: '19015802'
  code:
    concept_code: '135056'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: manidipine
  concept_id: '19071995'
  code:
    concept_code: '29275'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: mepirodipine
  concept_id: '19102106'
  code:
    concept_code: '39879'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nicardipine
  concept_id: '1318137'
  code:
    concept_code: '7396'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nifedipine
  concept_id: '1318853'
  code:
    concept_code: '7417'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nilvadipine
  concept_id: '19113063'
  code:
    concept_code: '53692'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nimodipine
  concept_id: '1319133'
  code:
    concept_code: '7426'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nisoldipine
  concept_id: '1319880'
  code:
    concept_code: '7435'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nitrendipine
  concept_id: '19020061'
  code:
    concept_code: '7441'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: benazepril
  concept_id: '1335471'
  code:
    concept_code: '18867'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: captopril
  concept_id: '1340128'
  code:
    concept_code: '1998'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: cilazapril
  concept_id: '19050216'
  code:
    concept_code: '21102'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalapril
  concept_id: '1341927'
  code:
    concept_code: '3827'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalaprilat
  concept_id: '1342001'
  code:
    concept_code: '3829'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinopril
  concept_id: '1363749'
  code:
    concept_code: '50166'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinoprilat
  concept_id: '45775539'
  code:
    concept_code: '1546393'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: imidapril
  concept_id: '19122327'
  code:
    concept_code: '60245'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lisinopril
  concept_id: '1308216'
  code:
    concept_code: '29046'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexipril
  concept_id: '1310756'
  code:
    concept_code: '30131'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexiprilat
  concept_id: '45775374'
  code:
    concept_code: '1546358'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindopril
  concept_id: '1373225'
  code:
    concept_code: '54552'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindoprilat
  concept_id: '45775544'
  code:
    concept_code: '1546400'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinapril
  concept_id: '1331235'
  code:
    concept_code: '35208'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinaprilat
  concept_id: '45775375'
  code:
    concept_code: '1546359'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramipril
  concept_id: '1334456'
  code:
    concept_code: '35296'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramiprilat
  concept_id: '45775527'
  code:
    concept_code: '1546377'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spirapril
  concept_id: '19040051'
  code:
    concept_code: '36908'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolapril
  concept_id: '1342439'
  code:
    concept_code: '38454'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolaprilat
  concept_id: '45775529'
  code:
    concept_code: '1546379'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: zofenopril
  concept_id: '19102107'
  code:
    concept_code: '39990'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: azilsartan
  concept_id: '40235485'
  code:
    concept_code: '1091643'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: candesartan
  concept_id: '1351557'
  code:
    concept_code: '214354'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eprosartan
  concept_id: '1346686'
  code:
    concept_code: '83515'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: irbesartan
  concept_id: '1347384'
  code:
    concept_code: '83818'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: losartan
  concept_id: '1367500'
  code:
    concept_code: '52175'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olmesartan
  concept_id: '40226742'
  code:
    concept_code: '321064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: telmisartan
  concept_id: '1317640'
  code:
    concept_code: '73494'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: valsartan
  concept_id: '1308842'
  code:
    concept_code: '69749'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: diltiazem
  concept_id: '1328165'
  code:
    concept_code: '3443'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: gallopamil
  concept_id: '19057715'
  code:
    concept_code: '4648'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: verapamil
  concept_id: '1307863'
  code:
    concept_code: '11170'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: acebutolol
  concept_id: '1319998'
  code:
    concept_code: '149'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: alprenolol
  concept_id: '19081284'
  code:
    concept_code: '597'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: atenolol
  concept_id: '1314002'
  code:
    concept_code: '1202'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: betaxolol
  concept_id: '1322081'
  code:
    concept_code: '1520'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bisoprolol
  concept_id: '1338005'
  code:
    concept_code: '19484'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bopindolol
  concept_id: '19018640'
  code:
    concept_code: '19605'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bupranolol
  concept_id: '19018489'
  code:
    concept_code: '1817'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carteolol
  concept_id: '950370'
  code:
    concept_code: '2116'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carvedilol
  concept_id: '1346823'
  code:
    concept_code: '20352'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: celiprolol
  concept_id: '19049145'
  code:
    concept_code: '20498'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: esmolol
  concept_id: '19063575'
  code:
    concept_code: '49737'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: labetalol
  concept_id: '1386957'
  code:
    concept_code: '6185'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: levobunolol
  concept_id: '932815'
  code:
    concept_code: '1813'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metipranolol
  concept_id: '905531'
  code:
    concept_code: '10824'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metoprolol
  concept_id: '1307046'
  code:
    concept_code: '6918'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nadolol
  concept_id: '1313200'
  code:
    concept_code: '7226'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nebivolol
  concept_id: '1314577'
  code:
    concept_code: '31555'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: oxprenolol
  concept_id: '19024904'
  code:
    concept_code: '7801'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: penbutolol
  concept_id: '1327978'
  code:
    concept_code: '7973'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: pindolol
  concept_id: '1345858'
  code:
    concept_code: '8332'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: propranolol
  concept_id: '1353766'
  code:
    concept_code: '8787'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: sotalol
  concept_id: '1370109'
  code:
    concept_code: '9947'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: talinolol
  concept_id: '19100435'
  code:
    concept_code: '37546'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: tertatolol
  concept_id: '19100451'
  code:
    concept_code: '37840'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: timolol
  concept_id: '902427'
  code:
    concept_code: '10600'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bendroflumethiazide
  concept_id: '1316354'
  code:
    concept_code: '1369'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: xipamide
  concept_id: '19010493'
  code:
    concept_code: '11371'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amiloride
  concept_id: '991382'
  code:
    concept_code: '644'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bumetanide
  concept_id: '932745'
  code:
    concept_code: '1808'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eplerenone
  concept_id: '1309799'
  code:
    concept_code: '298869'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: furosemide
  concept_id: '956874'
  code:
    concept_code: '4603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spironolactone
  concept_id: '970250'
  code:
    concept_code: '9997'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: torsemide
  concept_id: '942350'
  code:
    concept_code: '38413'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: triamterene
  concept_id: '904542'
  code:
    concept_code: '10763'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: azilsartan
  concept_id: '40235485'
  code:
    concept_code: '1091643'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: benazepril
  concept_id: '1335471'
  code:
    concept_code: '18867'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: candesartan
  concept_id: '1351557'
  code:
    concept_code: '214354'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: captopril
  concept_id: '1340128'
  code:
    concept_code: '1998'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: cilazapril
  concept_id: '19050216'
  code:
    concept_code: '21102'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalapril
  concept_id: '1341927'
  code:
    concept_code: '3827'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalaprilat
  concept_id: '1342001'
  code:
    concept_code: '3829'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eprosartan
  concept_id: '1346686'
  code:
    concept_code: '83515'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinopril
  concept_id: '1363749'
  code:
    concept_code: '50166'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinoprilat
  concept_id: '45775539'
  code:
    concept_code: '1546393'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: imidapril
  concept_id: '19122327'
  code:
    concept_code: '60245'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: irbesartan
  concept_id: '1347384'
  code:
    concept_code: '83818'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lisinopril
  concept_id: '1308216'
  code:
    concept_code: '29046'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: losartan
  concept_id: '1367500'
  code:
    concept_code: '52175'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexipril
  concept_id: '1310756'
  code:
    concept_code: '30131'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexiprilat
  concept_id: '45775374'
  code:
    concept_code: '1546358'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olmesartan
  concept_id: '40226742'
  code:
    concept_code: '321064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindopril
  concept_id: '1373225'
  code:
    concept_code: '54552'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindoprilat
  concept_id: '45775544'
  code:
    concept_code: '1546400'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinapril
  concept_id: '1331235'
  code:
    concept_code: '35208'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinaprilat
  concept_id: '45775375'
  code:
    concept_code: '1546359'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramipril
  concept_id: '1334456'
  code:
    concept_code: '35296'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramiprilat
  concept_id: '45775527'
  code:
    concept_code: '1546377'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spirapril
  concept_id: '19040051'
  code:
    concept_code: '36908'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: telmisartan
  concept_id: '1317640'
  code:
    concept_code: '73494'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolapril
  concept_id: '1342439'
  code:
    concept_code: '38454'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolaprilat
  concept_id: '45775529'
  code:
    concept_code: '1546379'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: valsartan
  concept_id: '1308842'
  code:
    concept_code: '69749'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: zofenopril
  concept_id: '19102107'
  code:
    concept_code: '39990'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amlodipine
  concept_id: '1332418'
  code:
    concept_code: '17767'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: clevidipine
  concept_id: '19089969'
  code:
    concept_code: '233603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: felodipine
  concept_id: '1353776'
  code:
    concept_code: '4316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: isradipine
  concept_id: '1326012'
  code:
    concept_code: '33910'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lacidipine
  concept_id: '19004539'
  code:
    concept_code: '28382'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lercanidipine
  concept_id: '19015802'
  code:
    concept_code: '135056'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: manidipine
  concept_id: '19071995'
  code:
    concept_code: '29275'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: mepirodipine
  concept_id: '19102106'
  code:
    concept_code: '39879'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nicardipine
  concept_id: '1318137'
  code:
    concept_code: '7396'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nifedipine
  concept_id: '1318853'
  code:
    concept_code: '7417'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nilvadipine
  concept_id: '19113063'
  code:
    concept_code: '53692'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nimodipine
  concept_id: '1319133'
  code:
    concept_code: '7426'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nisoldipine
  concept_id: '1319880'
  code:
    concept_code: '7435'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nitrendipine
  concept_id: '19020061'
  code:
    concept_code: '7441'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: diltiazem
  concept_id: '1328165'
  code:
    concept_code: '3443'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: gallopamil
  concept_id: '19057715'
  code:
    concept_code: '4648'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: verapamil
  concept_id: '1307863'
  code:
    concept_code: '11170'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: acebutolol
  concept_id: '1319998'
  code:
    concept_code: '149'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: alprenolol
  concept_id: '19081284'
  code:
    concept_code: '597'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: atenolol
  concept_id: '1314002'
  code:
    concept_code: '1202'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: betaxolol
  concept_id: '1322081'
  code:
    concept_code: '1520'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bisoprolol
  concept_id: '1338005'
  code:
    concept_code: '19484'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bopindolol
  concept_id: '19018640'
  code:
    concept_code: '19605'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bupranolol
  concept_id: '19018489'
  code:
    concept_code: '1817'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carteolol
  concept_id: '950370'
  code:
    concept_code: '2116'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carvedilol
  concept_id: '1346823'
  code:
    concept_code: '20352'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: celiprolol
  concept_id: '19049145'
  code:
    concept_code: '20498'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: esmolol
  concept_id: '19063575'
  code:
    concept_code: '49737'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: labetalol
  concept_id: '1386957'
  code:
    concept_code: '6185'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: levobunolol
  concept_id: '932815'
  code:
    concept_code: '1813'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metipranolol
  concept_id: '905531'
  code:
    concept_code: '10824'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metoprolol
  concept_id: '1307046'
  code:
    concept_code: '6918'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nadolol
  concept_id: '1313200'
  code:
    concept_code: '7226'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nebivolol
  concept_id: '1314577'
  code:
    concept_code: '31555'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: oxprenolol
  concept_id: '19024904'
  code:
    concept_code: '7801'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: penbutolol
  concept_id: '1327978'
  code:
    concept_code: '7973'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: pindolol
  concept_id: '1345858'
  code:
    concept_code: '8332'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: propranolol
  concept_id: '1353766'
  code:
    concept_code: '8787'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: sotalol
  concept_id: '1370109'
  code:
    concept_code: '9947'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: talinolol
  concept_id: '19100435'
  code:
    concept_code: '37546'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: tertatolol
  concept_id: '19100451'
  code:
    concept_code: '37840'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: timolol
  concept_id: '902427'
  code:
    concept_code: '10600'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bendroflumethiazide
  concept_id: '1316354'
  code:
    concept_code: '1369'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: xipamide
  concept_id: '19010493'
  code:
    concept_code: '11371'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amiloride
  concept_id: '991382'
  code:
    concept_code: '644'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bumetanide
  concept_id: '932745'
  code:
    concept_code: '1808'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eplerenone
  concept_id: '1309799'
  code:
    concept_code: '298869'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: furosemide
  concept_id: '956874'
  code:
    concept_code: '4603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spironolactone
  concept_id: '970250'
  code:
    concept_code: '9997'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: torsemide
  concept_id: '942350'
  code:
    concept_code: '38413'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: triamterene
  concept_id: '904542'
  code:
    concept_code: '10763'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amlodipine
  concept_id: '1332418'
  code:
    concept_code: '17767'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bendroflumethiazide
  concept_id: '1316354'
  code:
    concept_code: '1369'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: clevidipine
  concept_id: '19089969'
  code:
    concept_code: '233603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: felodipine
  concept_id: '1353776'
  code:
    concept_code: '4316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: isradipine
  concept_id: '1326012'
  code:
    concept_code: '33910'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lacidipine
  concept_id: '19004539'
  code:
    concept_code: '28382'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lercanidipine
  concept_id: '19015802'
  code:
    concept_code: '135056'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: manidipine
  concept_id: '19071995'
  code:
    concept_code: '29275'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: mepirodipine
  concept_id: '19102106'
  code:
    concept_code: '39879'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nicardipine
  concept_id: '1318137'
  code:
    concept_code: '7396'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nifedipine
  concept_id: '1318853'
  code:
    concept_code: '7417'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nilvadipine
  concept_id: '19113063'
  code:
    concept_code: '53692'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nimodipine
  concept_id: '1319133'
  code:
    concept_code: '7426'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nisoldipine
  concept_id: '1319880'
  code:
    concept_code: '7435'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nitrendipine
  concept_id: '19020061'
  code:
    concept_code: '7441'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: xipamide
  concept_id: '19010493'
  code:
    concept_code: '11371'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: benazepril
  concept_id: '1335471'
  code:
    concept_code: '18867'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: captopril
  concept_id: '1340128'
  code:
    concept_code: '1998'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: cilazapril
  concept_id: '19050216'
  code:
    concept_code: '21102'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalapril
  concept_id: '1341927'
  code:
    concept_code: '3827'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalaprilat
  concept_id: '1342001'
  code:
    concept_code: '3829'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinopril
  concept_id: '1363749'
  code:
    concept_code: '50166'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinoprilat
  concept_id: '45775539'
  code:
    concept_code: '1546393'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: imidapril
  concept_id: '19122327'
  code:
    concept_code: '60245'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lisinopril
  concept_id: '1308216'
  code:
    concept_code: '29046'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexipril
  concept_id: '1310756'
  code:
    concept_code: '30131'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexiprilat
  concept_id: '45775374'
  code:
    concept_code: '1546358'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindopril
  concept_id: '1373225'
  code:
    concept_code: '54552'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindoprilat
  concept_id: '45775544'
  code:
    concept_code: '1546400'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinapril
  concept_id: '1331235'
  code:
    concept_code: '35208'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinaprilat
  concept_id: '45775375'
  code:
    concept_code: '1546359'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramipril
  concept_id: '1334456'
  code:
    concept_code: '35296'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramiprilat
  concept_id: '45775527'
  code:
    concept_code: '1546377'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spirapril
  concept_id: '19040051'
  code:
    concept_code: '36908'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolapril
  concept_id: '1342439'
  code:
    concept_code: '38454'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolaprilat
  concept_id: '45775529'
  code:
    concept_code: '1546379'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: zofenopril
  concept_id: '19102107'
  code:
    concept_code: '39990'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: azilsartan
  concept_id: '40235485'
  code:
    concept_code: '1091643'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: candesartan
  concept_id: '1351557'
  code:
    concept_code: '214354'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eprosartan
  concept_id: '1346686'
  code:
    concept_code: '83515'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: irbesartan
  concept_id: '1347384'
  code:
    concept_code: '83818'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: losartan
  concept_id: '1367500'
  code:
    concept_code: '52175'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olmesartan
  concept_id: '40226742'
  code:
    concept_code: '321064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: telmisartan
  concept_id: '1317640'
  code:
    concept_code: '73494'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: valsartan
  concept_id: '1308842'
  code:
    concept_code: '69749'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: diltiazem
  concept_id: '1328165'
  code:
    concept_code: '3443'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: gallopamil
  concept_id: '19057715'
  code:
    concept_code: '4648'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: verapamil
  concept_id: '1307863'
  code:
    concept_code: '11170'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: acebutolol
  concept_id: '1319998'
  code:
    concept_code: '149'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: alprenolol
  concept_id: '19081284'
  code:
    concept_code: '597'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: atenolol
  concept_id: '1314002'
  code:
    concept_code: '1202'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: betaxolol
  concept_id: '1322081'
  code:
    concept_code: '1520'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bisoprolol
  concept_id: '1338005'
  code:
    concept_code: '19484'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bopindolol
  concept_id: '19018640'
  code:
    concept_code: '19605'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bupranolol
  concept_id: '19018489'
  code:
    concept_code: '1817'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carteolol
  concept_id: '950370'
  code:
    concept_code: '2116'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carvedilol
  concept_id: '1346823'
  code:
    concept_code: '20352'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: celiprolol
  concept_id: '19049145'
  code:
    concept_code: '20498'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: esmolol
  concept_id: '19063575'
  code:
    concept_code: '49737'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: labetalol
  concept_id: '1386957'
  code:
    concept_code: '6185'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: levobunolol
  concept_id: '932815'
  code:
    concept_code: '1813'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metipranolol
  concept_id: '905531'
  code:
    concept_code: '10824'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metoprolol
  concept_id: '1307046'
  code:
    concept_code: '6918'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nadolol
  concept_id: '1313200'
  code:
    concept_code: '7226'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nebivolol
  concept_id: '1314577'
  code:
    concept_code: '31555'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: oxprenolol
  concept_id: '19024904'
  code:
    concept_code: '7801'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: penbutolol
  concept_id: '1327978'
  code:
    concept_code: '7973'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: pindolol
  concept_id: '1345858'
  code:
    concept_code: '8332'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: propranolol
  concept_id: '1353766'
  code:
    concept_code: '8787'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: sotalol
  concept_id: '1370109'
  code:
    concept_code: '9947'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: talinolol
  concept_id: '19100435'
  code:
    concept_code: '37546'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: tertatolol
  concept_id: '19100451'
  code:
    concept_code: '37840'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: timolol
  concept_id: '902427'
  code:
    concept_code: '10600'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amiloride
  concept_id: '991382'
  code:
    concept_code: '644'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bumetanide
  concept_id: '932745'
  code:
    concept_code: '1808'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eplerenone
  concept_id: '1309799'
  code:
    concept_code: '298869'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: furosemide
  concept_id: '956874'
  code:
    concept_code: '4603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spironolactone
  concept_id: '970250'
  code:
    concept_code: '9997'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: torsemide
  concept_id: '942350'
  code:
    concept_code: '38413'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: triamterene
  concept_id: '904542'
  code:
    concept_code: '10763'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amlodipine
  concept_id: '1332418'
  code:
    concept_code: '17767'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bendroflumethiazide
  concept_id: '1316354'
  code:
    concept_code: '1369'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: clevidipine
  concept_id: '19089969'
  code:
    concept_code: '233603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: felodipine
  concept_id: '1353776'
  code:
    concept_code: '4316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: isradipine
  concept_id: '1326012'
  code:
    concept_code: '33910'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lacidipine
  concept_id: '19004539'
  code:
    concept_code: '28382'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lercanidipine
  concept_id: '19015802'
  code:
    concept_code: '135056'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: manidipine
  concept_id: '19071995'
  code:
    concept_code: '29275'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: mepirodipine
  concept_id: '19102106'
  code:
    concept_code: '39879'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nicardipine
  concept_id: '1318137'
  code:
    concept_code: '7396'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nifedipine
  concept_id: '1318853'
  code:
    concept_code: '7417'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nilvadipine
  concept_id: '19113063'
  code:
    concept_code: '53692'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nimodipine
  concept_id: '1319133'
  code:
    concept_code: '7426'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nisoldipine
  concept_id: '1319880'
  code:
    concept_code: '7435'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nitrendipine
  concept_id: '19020061'
  code:
    concept_code: '7441'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: xipamide
  concept_id: '19010493'
  code:
    concept_code: '11371'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: benazepril
  concept_id: '1335471'
  code:
    concept_code: '18867'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: captopril
  concept_id: '1340128'
  code:
    concept_code: '1998'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: cilazapril
  concept_id: '19050216'
  code:
    concept_code: '21102'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalapril
  concept_id: '1341927'
  code:
    concept_code: '3827'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enalaprilat
  concept_id: '1342001'
  code:
    concept_code: '3829'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinopril
  concept_id: '1363749'
  code:
    concept_code: '50166'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosinoprilat
  concept_id: '45775539'
  code:
    concept_code: '1546393'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: imidapril
  concept_id: '19122327'
  code:
    concept_code: '60245'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lisinopril
  concept_id: '1308216'
  code:
    concept_code: '29046'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexipril
  concept_id: '1310756'
  code:
    concept_code: '30131'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexiprilat
  concept_id: '45775374'
  code:
    concept_code: '1546358'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindopril
  concept_id: '1373225'
  code:
    concept_code: '54552'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: perindoprilat
  concept_id: '45775544'
  code:
    concept_code: '1546400'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinapril
  concept_id: '1331235'
  code:
    concept_code: '35208'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinaprilat
  concept_id: '45775375'
  code:
    concept_code: '1546359'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramipril
  concept_id: '1334456'
  code:
    concept_code: '35296'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ramiprilat
  concept_id: '45775527'
  code:
    concept_code: '1546377'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spirapril
  concept_id: '19040051'
  code:
    concept_code: '36908'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolapril
  concept_id: '1342439'
  code:
    concept_code: '38454'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolaprilat
  concept_id: '45775529'
  code:
    concept_code: '1546379'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: zofenopril
  concept_id: '19102107'
  code:
    concept_code: '39990'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: azilsartan
  concept_id: '40235485'
  code:
    concept_code: '1091643'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: candesartan
  concept_id: '1351557'
  code:
    concept_code: '214354'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eprosartan
  concept_id: '1346686'
  code:
    concept_code: '83515'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: irbesartan
  concept_id: '1347384'
  code:
    concept_code: '83818'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: losartan
  concept_id: '1367500'
  code:
    concept_code: '52175'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olmesartan
  concept_id: '40226742'
  code:
    concept_code: '321064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: telmisartan
  concept_id: '1317640'
  code:
    concept_code: '73494'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: valsartan
  concept_id: '1308842'
  code:
    concept_code: '69749'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: diltiazem
  concept_id: '1328165'
  code:
    concept_code: '3443'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: gallopamil
  concept_id: '19057715'
  code:
    concept_code: '4648'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: verapamil
  concept_id: '1307863'
  code:
    concept_code: '11170'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: acebutolol
  concept_id: '1319998'
  code:
    concept_code: '149'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: alprenolol
  concept_id: '19081284'
  code:
    concept_code: '597'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: atenolol
  concept_id: '1314002'
  code:
    concept_code: '1202'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: betaxolol
  concept_id: '1322081'
  code:
    concept_code: '1520'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bisoprolol
  concept_id: '1338005'
  code:
    concept_code: '19484'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bopindolol
  concept_id: '19018640'
  code:
    concept_code: '19605'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bupranolol
  concept_id: '19018489'
  code:
    concept_code: '1817'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carteolol
  concept_id: '950370'
  code:
    concept_code: '2116'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carvedilol
  concept_id: '1346823'
  code:
    concept_code: '20352'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: celiprolol
  concept_id: '19049145'
  code:
    concept_code: '20498'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: esmolol
  concept_id: '19063575'
  code:
    concept_code: '49737'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: labetalol
  concept_id: '1386957'
  code:
    concept_code: '6185'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: levobunolol
  concept_id: '932815'
  code:
    concept_code: '1813'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metipranolol
  concept_id: '905531'
  code:
    concept_code: '10824'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metoprolol
  concept_id: '1307046'
  code:
    concept_code: '6918'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nadolol
  concept_id: '1313200'
  code:
    concept_code: '7226'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nebivolol
  concept_id: '1314577'
  code:
    concept_code: '31555'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: oxprenolol
  concept_id: '19024904'
  code:
    concept_code: '7801'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: penbutolol
  concept_id: '1327978'
  code:
    concept_code: '7973'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: pindolol
  concept_id: '1345858'
  code:
    concept_code: '8332'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: propranolol
  concept_id: '1353766'
  code:
    concept_code: '8787'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: sotalol
  concept_id: '1370109'
  code:
    concept_code: '9947'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: talinolol
  concept_id: '19100435'
  code:
    concept_code: '37546'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: tertatolol
  concept_id: '19100451'
  code:
    concept_code: '37840'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: timolol
  concept_id: '902427'
  code:
    concept_code: '10600'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amiloride
  concept_id: '991382'
  code:
    concept_code: '644'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bumetanide
  concept_id: '932745'
  code:
    concept_code: '1808'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eplerenone
  concept_id: '1309799'
  code:
    concept_code: '298869'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: furosemide
  concept_id: '956874'
  code:
    concept_code: '4603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: spironolactone
  concept_id: '970250'
  code:
    concept_code: '9997'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: torsemide
  concept_id: '942350'
  code:
    concept_code: '38413'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: triamterene
  concept_id: '904542'
  code:
    concept_code: '10763'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amlodipine
  concept_id: '1332418'
  code:
    concept_code: '17767'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bendroflumethiazide
  concept_id: '1316354'
  code:
    concept_code: '1369'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: clevidipine
  concept_id: '19089969'
  code:
    concept_code: '233603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: felodipine
  concept_id: '1353776'
  code:
    concept_code: '4316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: isradipine
  concept_id: '1326012'
  code:
    concept_code: '33910'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lacidipine
  concept_id: '19004539'
  code:
    concept_code: '28382'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lercanidipine
  concept_id: '19015802'
  code:
    concept_code: '135056'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: manidipine
  concept_id: '19071995'
  code:
    concept_code: '29275'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: mepirodipine
  concept_id: '19102106'
  code:
    concept_code: '39879'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nicardipine
  concept_id: '1318137'
  code:
    concept_code: '7396'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nifedipine
  concept_id: '1318853'
  code:
    concept_code: '7417'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nilvadipine
  concept_id: '19113063'
  code:
    concept_code: '53692'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nimodipine
  concept_id: '1319133'
  code:
    concept_code: '7426'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nisoldipine
  concept_id: '1319880'
  code:
    concept_code: '7435'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nitrendipine
  concept_id: '19020061'
  code:
    concept_code: '7441'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: xipamide
  concept_id: '19010493'
  code:
    concept_code: '11371'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amlodipine
  concept_id: '1332418'
  code:
    concept_code: '17767'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bendroflumethiazide
  concept_id: '1316354'
  code:
    concept_code: '1369'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: clevidipine
  concept_id: '19089969'
  code:
    concept_code: '233603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: felodipine
  concept_id: '1353776'
  code:
    concept_code: '4316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: isradipine
  concept_id: '1326012'
  code:
    concept_code: '33910'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lacidipine
  concept_id: '19004539'
  code:
    concept_code: '28382'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lercanidipine
  concept_id: '19015802'
  code:
    concept_code: '135056'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: manidipine
  concept_id: '19071995'
  code:
    concept_code: '29275'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: mepirodipine
  concept_id: '19102106'
  code:
    concept_code: '39879'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nicardipine
  concept_id: '1318137'
  code:
    concept_code: '7396'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nifedipine
  concept_id: '1318853'
  code:
    concept_code: '7417'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nilvadipine
  concept_id: '19113063'
  code:
    concept_code: '53692'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nimodipine
  concept_id: '1319133'
  code:
    concept_code: '7426'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nisoldipine
  concept_id: '1319880'
  code:
    concept_code: '7435'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nitrendipine
  concept_id: '19020061'
  code:
    concept_code: '7441'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: xipamide
  concept_id: '19010493'
  code:
    concept_code: '11371'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Losartan
  concept_id: '1367500'
  code:
    concept_code: '52175'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: azilsartan
  concept_id: '40235485'
  code:
    concept_code: '1091643'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: candesartan
  concept_id: '1351557'
  code:
    concept_code: '214354'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eprosartan
  concept_id: '1346686'
  code:
    concept_code: '83515'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: irbesartan
  concept_id: '1347384'
  code:
    concept_code: '83818'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olmesartan
  concept_id: '40226742'
  code:
    concept_code: '321064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: telmisartan
  concept_id: '1317640'
  code:
    concept_code: '73494'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: valsartan
  concept_id: '1308842'
  code:
    concept_code: '69749'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Amlodipine
  concept_id: '1332418'
  code:
    concept_code: '17767'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Felodipine
  concept_id: '1353776'
  code:
    concept_code: '4316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Isradipine
  concept_id: '1326012'
  code:
    concept_code: '33910'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nicardipine
  concept_id: '1318137'
  code:
    concept_code: '7396'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nifedipine
  concept_id: '1318853'
  code:
    concept_code: '7417'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nisoldipine
  concept_id: '1319880'
  code:
    concept_code: '7435'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Captopril
  concept_id: '1340128'
  code:
    concept_code: '1998'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Enalapril
  concept_id: '1341927'
  code:
    concept_code: '3827'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Fosinopril
  concept_id: '1363749'
  code:
    concept_code: '50166'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Lisinopril
  concept_id: '1308216'
  code:
    concept_code: '29046'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Perindopril
  concept_id: '1373225'
  code:
    concept_code: '54552'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Ramipril
  concept_id: '1334456'
  code:
    concept_code: '35296'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: benazepril
  concept_id: '1335471'
  code:
    concept_code: '18867'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexipril
  concept_id: '1310756'
  code:
    concept_code: '30131'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinapril
  concept_id: '1331235'
  code:
    concept_code: '35208'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolapril
  concept_id: '1342439'
  code:
    concept_code: '38454'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Acebutolol
  concept_id: '1319998'
  code:
    concept_code: '149'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Atenolol
  concept_id: '1314002'
  code:
    concept_code: '1202'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Betaxolol
  concept_id: '1322081'
  code:
    concept_code: '1520'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Bisoprolol
  concept_id: '1338005'
  code:
    concept_code: '19484'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Labetalol
  concept_id: '1386957'
  code:
    concept_code: '6185'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Metoprolol
  concept_id: '1307046'
  code:
    concept_code: '6918'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nadolol
  concept_id: '1313200'
  code:
    concept_code: '7226'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Penbutolol
  concept_id: '1327978'
  code:
    concept_code: '7973'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Pindolol
  concept_id: '1345858'
  code:
    concept_code: '8332'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Propranolol
  concept_id: '1353766'
  code:
    concept_code: '8787'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carvedilol
  concept_id: '1346823'
  code:
    concept_code: '20352'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nebivolol
  concept_id: '1314577'
  code:
    concept_code: '31555'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Diltiazem
  concept_id: '1328165'
  code:
    concept_code: '3443'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Verapamil
  concept_id: '1307863'
  code:
    concept_code: '11170'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Amiloride
  concept_id: '991382'
  code:
    concept_code: '644'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Bumetanide
  concept_id: '932745'
  code:
    concept_code: '1808'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Furosemide
  concept_id: '956874'
  code:
    concept_code: '4603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Spironolactone
  concept_id: '970250'
  code:
    concept_code: '9997'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Triamterene
  concept_id: '904542'
  code:
    concept_code: '10763'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eplerenone
  concept_id: '1309799'
  code:
    concept_code: '298869'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: torsemide
  concept_id: '942350'
  code:
    concept_code: '38413'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Captopril
  concept_id: '1340128'
  code:
    concept_code: '1998'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Enalapril
  concept_id: '1341927'
  code:
    concept_code: '3827'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Fosinopril
  concept_id: '1363749'
  code:
    concept_code: '50166'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Lisinopril
  concept_id: '1308216'
  code:
    concept_code: '29046'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Perindopril
  concept_id: '1373225'
  code:
    concept_code: '54552'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Ramipril
  concept_id: '1334456'
  code:
    concept_code: '35296'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: benazepril
  concept_id: '1335471'
  code:
    concept_code: '18867'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexipril
  concept_id: '1310756'
  code:
    concept_code: '30131'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinapril
  concept_id: '1331235'
  code:
    concept_code: '35208'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolapril
  concept_id: '1342439'
  code:
    concept_code: '38454'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Captopril
  concept_id: '1340128'
  code:
    concept_code: '1998'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Enalapril
  concept_id: '1341927'
  code:
    concept_code: '3827'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Fosinopril
  concept_id: '1363749'
  code:
    concept_code: '50166'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Lisinopril
  concept_id: '1308216'
  code:
    concept_code: '29046'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Losartan
  concept_id: '1367500'
  code:
    concept_code: '52175'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Perindopril
  concept_id: '1373225'
  code:
    concept_code: '54552'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Ramipril
  concept_id: '1334456'
  code:
    concept_code: '35296'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: azilsartan
  concept_id: '40235485'
  code:
    concept_code: '1091643'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: benazepril
  concept_id: '1335471'
  code:
    concept_code: '18867'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: candesartan
  concept_id: '1351557'
  code:
    concept_code: '214354'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eprosartan
  concept_id: '1346686'
  code:
    concept_code: '83515'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: irbesartan
  concept_id: '1347384'
  code:
    concept_code: '83818'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexipril
  concept_id: '1310756'
  code:
    concept_code: '30131'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olmesartan
  concept_id: '40226742'
  code:
    concept_code: '321064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinapril
  concept_id: '1331235'
  code:
    concept_code: '35208'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: telmisartan
  concept_id: '1317640'
  code:
    concept_code: '73494'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolapril
  concept_id: '1342439'
  code:
    concept_code: '38454'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: valsartan
  concept_id: '1308842'
  code:
    concept_code: '69749'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Amlodipine
  concept_id: '1332418'
  code:
    concept_code: '17767'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Felodipine
  concept_id: '1353776'
  code:
    concept_code: '4316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Isradipine
  concept_id: '1326012'
  code:
    concept_code: '33910'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nicardipine
  concept_id: '1318137'
  code:
    concept_code: '7396'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nifedipine
  concept_id: '1318853'
  code:
    concept_code: '7417'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nisoldipine
  concept_id: '1319880'
  code:
    concept_code: '7435'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Acebutolol
  concept_id: '1319998'
  code:
    concept_code: '149'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Atenolol
  concept_id: '1314002'
  code:
    concept_code: '1202'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Betaxolol
  concept_id: '1322081'
  code:
    concept_code: '1520'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Bisoprolol
  concept_id: '1338005'
  code:
    concept_code: '19484'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Labetalol
  concept_id: '1386957'
  code:
    concept_code: '6185'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Metoprolol
  concept_id: '1307046'
  code:
    concept_code: '6918'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nadolol
  concept_id: '1313200'
  code:
    concept_code: '7226'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Penbutolol
  concept_id: '1327978'
  code:
    concept_code: '7973'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Pindolol
  concept_id: '1345858'
  code:
    concept_code: '8332'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Propranolol
  concept_id: '1353766'
  code:
    concept_code: '8787'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carvedilol
  concept_id: '1346823'
  code:
    concept_code: '20352'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nebivolol
  concept_id: '1314577'
  code:
    concept_code: '31555'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Diltiazem
  concept_id: '1328165'
  code:
    concept_code: '3443'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Verapamil
  concept_id: '1307863'
  code:
    concept_code: '11170'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Amiloride
  concept_id: '991382'
  code:
    concept_code: '644'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Bumetanide
  concept_id: '932745'
  code:
    concept_code: '1808'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Furosemide
  concept_id: '956874'
  code:
    concept_code: '4603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Spironolactone
  concept_id: '970250'
  code:
    concept_code: '9997'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Triamterene
  concept_id: '904542'
  code:
    concept_code: '10763'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eplerenone
  concept_id: '1309799'
  code:
    concept_code: '298869'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: torsemide
  concept_id: '942350'
  code:
    concept_code: '38413'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Captopril
  concept_id: '1340128'
  code:
    concept_code: '1998'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Enalapril
  concept_id: '1341927'
  code:
    concept_code: '3827'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Fosinopril
  concept_id: '1363749'
  code:
    concept_code: '50166'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Lisinopril
  concept_id: '1308216'
  code:
    concept_code: '29046'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Losartan
  concept_id: '1367500'
  code:
    concept_code: '52175'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Perindopril
  concept_id: '1373225'
  code:
    concept_code: '54552'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Ramipril
  concept_id: '1334456'
  code:
    concept_code: '35296'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: azilsartan
  concept_id: '40235485'
  code:
    concept_code: '1091643'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: benazepril
  concept_id: '1335471'
  code:
    concept_code: '18867'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: candesartan
  concept_id: '1351557'
  code:
    concept_code: '214354'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eprosartan
  concept_id: '1346686'
  code:
    concept_code: '83515'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: irbesartan
  concept_id: '1347384'
  code:
    concept_code: '83818'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexipril
  concept_id: '1310756'
  code:
    concept_code: '30131'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olmesartan
  concept_id: '40226742'
  code:
    concept_code: '321064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinapril
  concept_id: '1331235'
  code:
    concept_code: '35208'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: telmisartan
  concept_id: '1317640'
  code:
    concept_code: '73494'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolapril
  concept_id: '1342439'
  code:
    concept_code: '38454'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: valsartan
  concept_id: '1308842'
  code:
    concept_code: '69749'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Losartan
  concept_id: '1367500'
  code:
    concept_code: '52175'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: azilsartan
  concept_id: '40235485'
  code:
    concept_code: '1091643'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: candesartan
  concept_id: '1351557'
  code:
    concept_code: '214354'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eprosartan
  concept_id: '1346686'
  code:
    concept_code: '83515'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: irbesartan
  concept_id: '1347384'
  code:
    concept_code: '83818'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olmesartan
  concept_id: '40226742'
  code:
    concept_code: '321064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: telmisartan
  concept_id: '1317640'
  code:
    concept_code: '73494'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: valsartan
  concept_id: '1308842'
  code:
    concept_code: '69749'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Amlodipine
  concept_id: '1332418'
  code:
    concept_code: '17767'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Felodipine
  concept_id: '1353776'
  code:
    concept_code: '4316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Isradipine
  concept_id: '1326012'
  code:
    concept_code: '33910'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nicardipine
  concept_id: '1318137'
  code:
    concept_code: '7396'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nifedipine
  concept_id: '1318853'
  code:
    concept_code: '7417'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nisoldipine
  concept_id: '1319880'
  code:
    concept_code: '7435'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Captopril
  concept_id: '1340128'
  code:
    concept_code: '1998'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Enalapril
  concept_id: '1341927'
  code:
    concept_code: '3827'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Fosinopril
  concept_id: '1363749'
  code:
    concept_code: '50166'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Lisinopril
  concept_id: '1308216'
  code:
    concept_code: '29046'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Perindopril
  concept_id: '1373225'
  code:
    concept_code: '54552'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Ramipril
  concept_id: '1334456'
  code:
    concept_code: '35296'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: benazepril
  concept_id: '1335471'
  code:
    concept_code: '18867'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexipril
  concept_id: '1310756'
  code:
    concept_code: '30131'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinapril
  concept_id: '1331235'
  code:
    concept_code: '35208'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolapril
  concept_id: '1342439'
  code:
    concept_code: '38454'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Acebutolol
  concept_id: '1319998'
  code:
    concept_code: '149'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Atenolol
  concept_id: '1314002'
  code:
    concept_code: '1202'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Betaxolol
  concept_id: '1322081'
  code:
    concept_code: '1520'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Bisoprolol
  concept_id: '1338005'
  code:
    concept_code: '19484'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Labetalol
  concept_id: '1386957'
  code:
    concept_code: '6185'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Metoprolol
  concept_id: '1307046'
  code:
    concept_code: '6918'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nadolol
  concept_id: '1313200'
  code:
    concept_code: '7226'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Penbutolol
  concept_id: '1327978'
  code:
    concept_code: '7973'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Pindolol
  concept_id: '1345858'
  code:
    concept_code: '8332'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Propranolol
  concept_id: '1353766'
  code:
    concept_code: '8787'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carvedilol
  concept_id: '1346823'
  code:
    concept_code: '20352'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nebivolol
  concept_id: '1314577'
  code:
    concept_code: '31555'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Diltiazem
  concept_id: '1328165'
  code:
    concept_code: '3443'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Verapamil
  concept_id: '1307863'
  code:
    concept_code: '11170'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Amiloride
  concept_id: '991382'
  code:
    concept_code: '644'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Bumetanide
  concept_id: '932745'
  code:
    concept_code: '1808'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Furosemide
  concept_id: '956874'
  code:
    concept_code: '4603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Spironolactone
  concept_id: '970250'
  code:
    concept_code: '9997'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Triamterene
  concept_id: '904542'
  code:
    concept_code: '10763'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eplerenone
  concept_id: '1309799'
  code:
    concept_code: '298869'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: torsemide
  concept_id: '942350'
  code:
    concept_code: '38413'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Losartan
  concept_id: '1367500'
  code:
    concept_code: '52175'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: azilsartan
  concept_id: '40235485'
  code:
    concept_code: '1091643'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: candesartan
  concept_id: '1351557'
  code:
    concept_code: '214354'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eprosartan
  concept_id: '1346686'
  code:
    concept_code: '83515'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: irbesartan
  concept_id: '1347384'
  code:
    concept_code: '83818'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olmesartan
  concept_id: '40226742'
  code:
    concept_code: '321064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: telmisartan
  concept_id: '1317640'
  code:
    concept_code: '73494'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: valsartan
  concept_id: '1308842'
  code:
    concept_code: '69749'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Losartan
  concept_id: '1367500'
  code:
    concept_code: '52175'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: azilsartan
  concept_id: '40235485'
  code:
    concept_code: '1091643'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: candesartan
  concept_id: '1351557'
  code:
    concept_code: '214354'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eprosartan
  concept_id: '1346686'
  code:
    concept_code: '83515'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: irbesartan
  concept_id: '1347384'
  code:
    concept_code: '83818'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olmesartan
  concept_id: '40226742'
  code:
    concept_code: '321064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: telmisartan
  concept_id: '1317640'
  code:
    concept_code: '73494'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: valsartan
  concept_id: '1308842'
  code:
    concept_code: '69749'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Amlodipine
  concept_id: '1332418'
  code:
    concept_code: '17767'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Felodipine
  concept_id: '1353776'
  code:
    concept_code: '4316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Isradipine
  concept_id: '1326012'
  code:
    concept_code: '33910'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nicardipine
  concept_id: '1318137'
  code:
    concept_code: '7396'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nifedipine
  concept_id: '1318853'
  code:
    concept_code: '7417'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nisoldipine
  concept_id: '1319880'
  code:
    concept_code: '7435'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Captopril
  concept_id: '1340128'
  code:
    concept_code: '1998'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Enalapril
  concept_id: '1341927'
  code:
    concept_code: '3827'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Fosinopril
  concept_id: '1363749'
  code:
    concept_code: '50166'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Lisinopril
  concept_id: '1308216'
  code:
    concept_code: '29046'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Perindopril
  concept_id: '1373225'
  code:
    concept_code: '54552'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Ramipril
  concept_id: '1334456'
  code:
    concept_code: '35296'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: benazepril
  concept_id: '1335471'
  code:
    concept_code: '18867'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexipril
  concept_id: '1310756'
  code:
    concept_code: '30131'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinapril
  concept_id: '1331235'
  code:
    concept_code: '35208'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolapril
  concept_id: '1342439'
  code:
    concept_code: '38454'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Acebutolol
  concept_id: '1319998'
  code:
    concept_code: '149'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Atenolol
  concept_id: '1314002'
  code:
    concept_code: '1202'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Betaxolol
  concept_id: '1322081'
  code:
    concept_code: '1520'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Bisoprolol
  concept_id: '1338005'
  code:
    concept_code: '19484'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Labetalol
  concept_id: '1386957'
  code:
    concept_code: '6185'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Metoprolol
  concept_id: '1307046'
  code:
    concept_code: '6918'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nadolol
  concept_id: '1313200'
  code:
    concept_code: '7226'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Penbutolol
  concept_id: '1327978'
  code:
    concept_code: '7973'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Pindolol
  concept_id: '1345858'
  code:
    concept_code: '8332'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Propranolol
  concept_id: '1353766'
  code:
    concept_code: '8787'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carvedilol
  concept_id: '1346823'
  code:
    concept_code: '20352'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nebivolol
  concept_id: '1314577'
  code:
    concept_code: '31555'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Diltiazem
  concept_id: '1328165'
  code:
    concept_code: '3443'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Verapamil
  concept_id: '1307863'
  code:
    concept_code: '11170'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Amiloride
  concept_id: '991382'
  code:
    concept_code: '644'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Bumetanide
  concept_id: '932745'
  code:
    concept_code: '1808'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Furosemide
  concept_id: '956874'
  code:
    concept_code: '4603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Spironolactone
  concept_id: '970250'
  code:
    concept_code: '9997'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Triamterene
  concept_id: '904542'
  code:
    concept_code: '10763'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eplerenone
  concept_id: '1309799'
  code:
    concept_code: '298869'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: torsemide
  concept_id: '942350'
  code:
    concept_code: '38413'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Amlodipine
  concept_id: '1332418'
  code:
    concept_code: '17767'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Felodipine
  concept_id: '1353776'
  code:
    concept_code: '4316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Isradipine
  concept_id: '1326012'
  code:
    concept_code: '33910'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nicardipine
  concept_id: '1318137'
  code:
    concept_code: '7396'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nifedipine
  concept_id: '1318853'
  code:
    concept_code: '7417'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nisoldipine
  concept_id: '1319880'
  code:
    concept_code: '7435'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Losartan
  concept_id: '1367500'
  code:
    concept_code: '52175'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: azilsartan
  concept_id: '40235485'
  code:
    concept_code: '1091643'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: candesartan
  concept_id: '1351557'
  code:
    concept_code: '214354'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eprosartan
  concept_id: '1346686'
  code:
    concept_code: '83515'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: irbesartan
  concept_id: '1347384'
  code:
    concept_code: '83818'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olmesartan
  concept_id: '40226742'
  code:
    concept_code: '321064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: telmisartan
  concept_id: '1317640'
  code:
    concept_code: '73494'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: valsartan
  concept_id: '1308842'
  code:
    concept_code: '69749'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Amlodipine
  concept_id: '1332418'
  code:
    concept_code: '17767'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Felodipine
  concept_id: '1353776'
  code:
    concept_code: '4316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Isradipine
  concept_id: '1326012'
  code:
    concept_code: '33910'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nicardipine
  concept_id: '1318137'
  code:
    concept_code: '7396'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nifedipine
  concept_id: '1318853'
  code:
    concept_code: '7417'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nisoldipine
  concept_id: '1319880'
  code:
    concept_code: '7435'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Captopril
  concept_id: '1340128'
  code:
    concept_code: '1998'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Enalapril
  concept_id: '1341927'
  code:
    concept_code: '3827'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Fosinopril
  concept_id: '1363749'
  code:
    concept_code: '50166'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Lisinopril
  concept_id: '1308216'
  code:
    concept_code: '29046'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Perindopril
  concept_id: '1373225'
  code:
    concept_code: '54552'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Ramipril
  concept_id: '1334456'
  code:
    concept_code: '35296'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: benazepril
  concept_id: '1335471'
  code:
    concept_code: '18867'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexipril
  concept_id: '1310756'
  code:
    concept_code: '30131'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinapril
  concept_id: '1331235'
  code:
    concept_code: '35208'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolapril
  concept_id: '1342439'
  code:
    concept_code: '38454'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Acebutolol
  concept_id: '1319998'
  code:
    concept_code: '149'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Atenolol
  concept_id: '1314002'
  code:
    concept_code: '1202'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Betaxolol
  concept_id: '1322081'
  code:
    concept_code: '1520'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Bisoprolol
  concept_id: '1338005'
  code:
    concept_code: '19484'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Labetalol
  concept_id: '1386957'
  code:
    concept_code: '6185'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Metoprolol
  concept_id: '1307046'
  code:
    concept_code: '6918'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nadolol
  concept_id: '1313200'
  code:
    concept_code: '7226'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Penbutolol
  concept_id: '1327978'
  code:
    concept_code: '7973'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Pindolol
  concept_id: '1345858'
  code:
    concept_code: '8332'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Propranolol
  concept_id: '1353766'
  code:
    concept_code: '8787'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carvedilol
  concept_id: '1346823'
  code:
    concept_code: '20352'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nebivolol
  concept_id: '1314577'
  code:
    concept_code: '31555'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Diltiazem
  concept_id: '1328165'
  code:
    concept_code: '3443'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Verapamil
  concept_id: '1307863'
  code:
    concept_code: '11170'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Amiloride
  concept_id: '991382'
  code:
    concept_code: '644'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Bumetanide
  concept_id: '932745'
  code:
    concept_code: '1808'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Furosemide
  concept_id: '956874'
  code:
    concept_code: '4603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Spironolactone
  concept_id: '970250'
  code:
    concept_code: '9997'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Triamterene
  concept_id: '904542'
  code:
    concept_code: '10763'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eplerenone
  concept_id: '1309799'
  code:
    concept_code: '298869'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: torsemide
  concept_id: '942350'
  code:
    concept_code: '38413'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Acebutolol
  concept_id: '1319998'
  code:
    concept_code: '149'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Atenolol
  concept_id: '1314002'
  code:
    concept_code: '1202'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Betaxolol
  concept_id: '1322081'
  code:
    concept_code: '1520'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Bisoprolol
  concept_id: '1338005'
  code:
    concept_code: '19484'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Labetalol
  concept_id: '1386957'
  code:
    concept_code: '6185'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Metoprolol
  concept_id: '1307046'
  code:
    concept_code: '6918'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nadolol
  concept_id: '1313200'
  code:
    concept_code: '7226'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Penbutolol
  concept_id: '1327978'
  code:
    concept_code: '7973'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Pindolol
  concept_id: '1345858'
  code:
    concept_code: '8332'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Propranolol
  concept_id: '1353766'
  code:
    concept_code: '8787'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: carvedilol
  concept_id: '1346823'
  code:
    concept_code: '20352'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nebivolol
  concept_id: '1314577'
  code:
    concept_code: '31555'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Diltiazem
  concept_id: '1328165'
  code:
    concept_code: '3443'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Verapamil
  concept_id: '1307863'
  code:
    concept_code: '11170'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Amiloride
  concept_id: '991382'
  code:
    concept_code: '644'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Bumetanide
  concept_id: '932745'
  code:
    concept_code: '1808'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Furosemide
  concept_id: '956874'
  code:
    concept_code: '4603'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Spironolactone
  concept_id: '970250'
  code:
    concept_code: '9997'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Triamterene
  concept_id: '904542'
  code:
    concept_code: '10763'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eplerenone
  concept_id: '1309799'
  code:
    concept_code: '298869'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: torsemide
  concept_id: '942350'
  code:
    concept_code: '38413'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Amlodipine
  concept_id: '1332418'
  code:
    concept_code: '17767'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Felodipine
  concept_id: '1353776'
  code:
    concept_code: '4316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Isradipine
  concept_id: '1326012'
  code:
    concept_code: '33910'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nicardipine
  concept_id: '1318137'
  code:
    concept_code: '7396'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nifedipine
  concept_id: '1318853'
  code:
    concept_code: '7417'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nisoldipine
  concept_id: '1319880'
  code:
    concept_code: '7435'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Captopril
  concept_id: '1340128'
  code:
    concept_code: '1998'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Enalapril
  concept_id: '1341927'
  code:
    concept_code: '3827'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Fosinopril
  concept_id: '1363749'
  code:
    concept_code: '50166'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Lisinopril
  concept_id: '1308216'
  code:
    concept_code: '29046'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Perindopril
  concept_id: '1373225'
  code:
    concept_code: '54552'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Ramipril
  concept_id: '1334456'
  code:
    concept_code: '35296'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: benazepril
  concept_id: '1335471'
  code:
    concept_code: '18867'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moexipril
  concept_id: '1310756'
  code:
    concept_code: '30131'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinapril
  concept_id: '1331235'
  code:
    concept_code: '35208'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trandolapril
  concept_id: '1342439'
  code:
    concept_code: '38454'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Losartan
  concept_id: '1367500'
  code:
    concept_code: '52175'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: azilsartan
  concept_id: '40235485'
  code:
    concept_code: '1091643'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: candesartan
  concept_id: '1351557'
  code:
    concept_code: '214354'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: eprosartan
  concept_id: '1346686'
  code:
    concept_code: '83515'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: irbesartan
  concept_id: '1347384'
  code:
    concept_code: '83818'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olmesartan
  concept_id: '40226742'
  code:
    concept_code: '321064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: telmisartan
  concept_id: '1317640'
  code:
    concept_code: '73494'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: valsartan
  concept_id: '1308842'
  code:
    concept_code: '69749'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Amlodipine
  concept_id: '1332418'
  code:
    concept_code: '17767'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Chlorthalidone
  concept_id: '1395058'
  code:
    concept_code: '2409'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Felodipine
  concept_id: '1353776'
  code:
    concept_code: '4316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Hydrochlorothiazide
  concept_id: '974166'
  code:
    concept_code: '5487'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Indapamide
  concept_id: '978555'
  code:
    concept_code: '5764'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Isradipine
  concept_id: '1326012'
  code:
    concept_code: '33910'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Metolazone
  concept_id: '907013'
  code:
    concept_code: '6916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nicardipine
  concept_id: '1318137'
  code:
    concept_code: '7396'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nifedipine
  concept_id: '1318853'
  code:
    concept_code: '7417'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nisoldipine
  concept_id: '1319880'
  code:
    concept_code: '7435'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true


# Event the study is part of, if applicable
event:
  # Identifier of event
  event_identifier: 'https://covid19.ohdsi.app/'
  # Name of the event
  name: 'OHDSI COVID-19 studyathon'
  # URL of event website
  event_url: 'OHDSI COVID-19 studyathon'
  # Location of the event
  location: 
    type: VirtualLocation
    name: 'Microsoft Teams'
  # Identifier of the organizer of the event
  organizer_identifier: 
  # Start date of the event, use date format YYYY-MM-DD
  start_date: '2020-03-26'
  # End date of the event, use date format YYYY-MM-DD
  end_date: '2020-03-29'
  # Recording of event 
  recordedIn: 
    # URL to recording of event
    recording_url: https://www.youtube.com/playlist?list=PLpzbqK7kvfeVGZiT1eKO6KxQiN7nzBFK
    # Identifier of organizer of the event
    creator: http://data.ohdsi.org/OHDSI
    # Upload date of the recording, use date format YYYY-MM-DD
    upload_date: 2020-03-29

# Organization involved in the event around the study
organizations:
# Identifier of organizer of the event
- organization_identifier: http://data.ohdsi.org/OHDSI
  # URL to main organization website
  organization_url: ttps://www.ohdsi.org/
  # Name of organization
  name: 'OHDSI'
  # Other URLs linking to important organization sites (e.g. twitter)
  url: [https://www.linkedin.com/company/ohdsi/, https://twitter.com/ohdsi, https://www.youtube.com/user/OHDSIJoinTheJourney]

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
