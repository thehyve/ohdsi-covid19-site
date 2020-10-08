---
# Website information
# Study title
title: 

tags: []
categories: []

# Do not fill; filled automatically
date: 2020-10-07T11:57:10+02:00
lastmod: 2020-10-07T11:57:10+02:00
featured: false

# Change to 'false' to be published
draft: true

# Study identifier, specifically created for the website.
# The identifier is the last part of the URL directing to the particular study
study_id: 

# Study identifier 
study_identifier: 

# URL to study registration site
study_registration_url: 

# Study description
description: 

# Start date of the study, use date format YYYY-MM-DD
start_date: 

# End date of the study, use date format YYYY-MM-DD
end_date: 

# Study status, choose 0, 1, 2, 3 or 4:
# 0: Complete
# 1: Design Finalized
# 2: Repo Created
# 3: Started
# 4: Results Available
study_status: []

# Author identifier of the authors contributing to the study
authors: []

# Study Type, choose 0 or 1:
# 0: Clinical Application
# 1: Methods Research
study_type: []

# Analytics Use Case of the Study, choose 0, 1, 2 or 3:
# 0: Characterization
# 1: Population-Level Estimation
# 2: Patient-Level Prediction
# 3: Characterization and Population-Level Estimation
study_usecase: []

# Database identifiers of databases used for the study
databases: []

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
  protocol_id: 
  # Last modification date, use date format YYYY-MM-DD
  date_modified: 
  # Protocol identifier, in case protocol has an identifier elsewhere 
  protocol_identifier: 
  # Protocol license
  license: 
  # URL to the protocol
  protocol_url: 
  # Version of the protocol 
  version: 

# URL to the forum thread about the study
forum_thread_url: 

# Source code used for the study; if multiple code repositories are available, 
# duplicate all keys under "source_code"
source_code:
- name:
  # URL to GitHub repository containing the source code
  code_repository_url: 
  # Last modification date, use date format YYYY-MM-DD
  date_modified: 
  # Maintainer of source code; use identifier of organization if applicable
  maintainer: 
  # Programming language used
  programming_language: 
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
- doi: 

# study results (e.g. shiny web application)
results:
# Name of the web application showing the results
- name: 
  # URL to the web application
  application_url: 

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
  event_identifier: 
  # Name of the event
  name: 
  # URL of event website
  event_url: 
  # Location of the event
  location: 
    type: 
    name: 
  # Identifier of the organizer of the event
  organizer_identifier: 
  # Start date of the event, use date format YYYY-MM-DD
  start_date: 
  # End date of the event, use date format YYYY-MM-DD
  end_date: 
  # Recording of event 
  recordedIn: 
    # URL to recording of event
    recording_url: 
    # Identifier of organizer of the event
    creator: 
    # Upload date of the recording, use date format YYYY-MM-DD
    upload_date: 

# Organization involved in the event around the study
organizations:
# Identifier of organizer of the event
- organization_identifier: 
  # URL to main organization website
  organization_url: 
  # Name of organization
  name: 
  # Other URLs linking to important organization sites (e.g. twitter)
  url: []
from_readme:
  title: 'OHDSI COVID-19 Studyathon: Alpha-1 blocker for Palliating Inflammatory injury Severity (APIS) study'
  study_usecase: [1]
  study_type: [0]
  tags: [Study-a-thon, COVID-19]
  leads: ['Aki Nishimura', 'Daniel Prieto Alhambra', 'Marc A. Suchard']
  leadForumTags: [{name: aki-nishimura, mainEntityofPage: 'https://forums.ohdsi.org/u/aki-nishimura'}, {name: Daniel_Prieto, mainEntityofPage: 'https://forums.ohdsi.org/u/daniel_prieto'}, {name: msuchard, mainEntityofPage: 'https://forums.ohdsi.org/u/msuchard'}]
  startDate: 'July 7th, 2020'
  endDate: ""
  protocol: {name: PDF, mainEntityofPage: 'https://github.com/ohdsi-studies/Covid19SusceptibilityAlphaBlockers/blob/master/Documents/alpha_blocker_study_protocol.pdf'}
  publications: []
  results: []
  authors: [aki-nishimura, Daniel_Prieto, msuchard]
  description: "This study will evaluate the association between prevalent use of alpha-1 blockers (ɑ-1B) and the risk of contracting COVID-19 infection and of subsequently requiring hospitalization and intensive services such as mechanical ventilation.\nThe analysis will be undertaken across a federated multi-national network of electronic health records and administrative claims from primary care and secondary care that have been mapped to the Observational Medical Outcomes Partnership Common Data Model in collaboration with the Observational Health Data Sciences and Informatics (OHDSI) and European Health Data and Evidence Network (EHDEN) initiatives.\nThese data reflect the clinical experience of patients from six European countries (Belgium, Netherlands, Germany, France, Spain, and Estonia) the United Kingdom, the United States of America, South Korea, and Japan as data becomes available.\nWe will use a prevalent user cohort design to estimate the relative risk of each outcome using an on-treatment analysis of monotherapy.\nData driven approaches will be used to identify potential covariates for inclusion in matched or stratified propensity score models identified using regularized logistic regression.\nLarge-scale propensity score matching and stratification strategies that allow balancing on a large number of baseline potential confounders will be used in addition to negative control outcomes to allow for evaluating residual bias in the study design as a whole as a diagnostic step.\nThis study is part of the [OHDSI 2020 COVID-19 study-a-thon](https://www.ohdsi.org/covid-19-updates/)."

---