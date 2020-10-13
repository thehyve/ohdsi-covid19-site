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
# Concept name
- concept_name: 
  # Concept identifier
  concept_id: 
  # Concept code and vocabulary metadata
  code: 
    # Concept code
    concept_code: 
    # Vocabulary id
    vocabulary_id: 
    # URL to term in vocabulary (e.g. http://snomed.info/id/69896004)
    concept_code_url: 

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
  # Version of the source code
  version: 

# Software used for the study; if multiple software applications are used
# duplicate all keys under "software"
software:
  # Name of the software
- name: 
  # URL to source code of software
  source_code_url: 
  # Maintainer of source code; use identifier of organization if applicable.
  maintainer: 
  # Version of the software
  version: 

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
# Concept identifier
- concept_id: 
  # Concept name 
  concept_name: 
  # Concept code and vocabulary metadata
  code:
    # Concept code
    concept_code: 
    # Vocabulary id 
    vocabulary_id: 
    # URL to term in vocabulary (e.g. http://purl.bioontology.org/ontology/RXNORM/5521)
    concept_code_url: 

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
  name: 'Observational Health Data Sciences and Informatics'
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
