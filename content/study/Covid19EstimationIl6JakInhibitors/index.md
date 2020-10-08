---
# Website information
# Study title
title: 

tags: []
categories: []

# Do not fill; filled automatically
date: 2020-10-07T11:57:09+02:00
lastmod: 2020-10-07T11:57:09+02:00
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
  title: 'OHDSI COVID-19 Studyathon: Il6 and JAK inhibitors population-level effect estimation'
  study_usecase: [1]
  study_type: [0]
  tags: [Study-a-thon, COVID-19]
  leads: ['Daniel Prieto-Alhambra']
  leadForumTags: [{name: Daniel_Prieto, mainEntityofPage: 'https://forums.ohdsi.org/u/daniel_prieto'}]
  startDate: 'March 26, 2020'
  endDate: ""
  protocol: {}
  publications: []
  results: [{name: 'Evidence Explorer', mainEntityofPage: 'https://data.ohdsi.org/Covid19EstimationIl6JakInhibitors/'}]
  authors: [Daniel_Prieto]
  description: "Many existing drugs are being considered for use in treatment and prophylaxis of COVID-19 in rapid clinical trials across the world. However, the full safety profiles of these drugs is often unknown, and the current trials are unlikely to be powered or have sufficent follow-up time to evaluate most safety outcomes. The aim of this OHDSI study is to use existing retrospective data to evaluate the safety of these drugs. Where possible, we also attempt to estimate potential efficacy, for example using prior viral infections as surrogate outcome, or where available by using COVID-19 as outcome.\nThis study is part of the OHDSI 2020 COVID-19 study-a-thon."

---