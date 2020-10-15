---
# Website information
# Study title
title: 'Development and validation of complex and simple patient-level prediction models for predicting various outcomes in COVID patients: a rapid network study to inform the management of COVID-19'

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
study_id: 'Covid19PredictionStudies'

# Study identifier 
study_identifier: 

# URL to study registration site
study_registration_url: 

# Study description
description: 'The objective of this study is to develop and validate various patient-level prediction models for COVID-19 patients.'

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
study_status: [4]

# Author identifier of the authors contributing to the study
authors: [jreps, RossW, Rijnbeek]

# Study Type, choose 0 or 1:
# 0: Clinical Application
# 1: Methods Research
study_type: [0]

# Analytics Use Case of the Study, choose 0, 1, 2 or 3:
# 0: Characterization
# 1: Population-Level Estimation
# 2: Patient-Level Prediction
# 3: Characterization and Population-Level Estimation
study_usecase: [2]

# Database identifiers of databases used for the study
databases: [optum]

# Conditions studied; if multiple conditions are being studied,
# duplicate all keys under "conditions"
conditions:
# Concept name
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  # Concept identifier
  concept_id: 37311061
  # Concept code and vocabulary metadata
  code: 
    # Concept code
    concept_code: 840539006
    # Vocabulary id
    vocabulary_id: 'SNOMED'
    # URL to term in vocabulary (e.g. http://snomed.info/id/69896004)
    concept_code_url: http://snomed.info/id/840539006

# Study protocol
study_protocol:
  # Protocol identifier; specifically created for the website
  # The identifier is the last part of the URL directing to the particular study protocol
  protocol_id: 'Covid19PredictionStudies/design'
  # Last modification date, use date format YYYY-MM-DD
  date_modified: 2020-03-28
  # Protocol identifier, in case protocol has an identifier elsewhere 
  protocol_identifier: 
  # Protocol license
  license: 
  # URL to the protocol
  protocol_url: https://github.com/ohdsi-studies/Covid19PredictionStudies/blob/master/HospitalizationInSymptomaticPatients/docs/PLP_protocol_Q1%2BQ2_20200329.docx
  # Version of the protocol 
  version: 

# URL to the forum thread about the study
forum_thread_url: 

# Source code used for the study; if multiple code repositories are available, 
# duplicate all keys under "source_code"
source_code:
- name: 'Covid19PredictionStudies'
  # URL to GitHub repository containing the source code
  code_repository_url: https://github.com/ohdsi-studies/Covid19PredictionStudies
  # Last modification date, use date format YYYY-MM-DD
  date_modified: 2020-08-17
  # Maintainer of source code; use identifier of organization if applicable
  maintainer: 'OHDSI'
  # Programming language used
  programming_language: 'R' 
  # # Version of the source code
  # version: 

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
- doi: https://doi.org/10.1101/2020.06.15.20130328

# study results (e.g. shiny web application)
results:
# Name of the web application showing the results
- name: 'Can we trust the prediction model? Demonstrating the importance of external validation by investigating the COVID-19 Vulnerability (C-19) Index across an international network of observational healthcare datasets'
  # URL to the web application
  application_url: http://evidence.ohdsi.org:3838/C19validation/
# Name of the web application showing the results
- name: 'Predicting Patients Requiring Hospitalization When Initially Presenting with Flu or Flu like symptoms (To be investigated for the use on Patients, with or suspected to have, Covid-19)'
  # URL to the web application
  application_url: https://data.ohdsi.org/Covid19PredictingHospitalizationInFluPatients/
# Name of the web application showing the results
- name: 'Predicting Patients Requiring Hospitalization After Being Sent Home From An Outpatient Visit Presenting with Flu or Flu like symptoms (To be investigated for the use on Patients, with or suspected to have, Covid-19)'
  # URL to the web application
  application_url: https://data.ohdsi.org/Covid19PredictingHospitilizationAfterSentHome/
# Name of the web application showing the results
- name: 'Predicting Severely Ill Patients In Those Admitted To Hospital For Pneumonia (To be investigated for the use on Patients, with or suspected to have, Covid-19)'
  # URL to the web application
  application_url: https://data.ohdsi.org/Covid19PredictingSevereInHospResults/
- name: 'OHDSI Covid-19 Simple Models Results'
  # URL to the web application
  application_url: https://data.ohdsi.org/Covid19PredictingSimpleModels/

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
  name: 'OHDSI'
  # Other URLs linking to important organization sites (e.g. twitter)
  url: [https://www.linkedin.com/company/ohdsi/, https://twitter.com/ohdsi, https://www.youtube.com/user/OHDSIJoinTheJourney]
  
from_readme:
  title: 'Development and validation of complex and simple patient-level prediction models for predicting various outcomes in COVID patients: a rapid network study to inform the management of COVID-19'
  study_usecase: [2]
  study_type: [0]
  tags: [Study-a-thon, COVID-19]
  leads: ['Jenna Reps', 'Ross Williams', 'Peter Rijnbeek']
  leadForumTags: [{name: jreps, mainEntityofPage: 'https://forums.ohdsi.org/u/jreps'}, {name: RossW, mainEntityofPage: 'https://forums.ohdsi.org/u/RossW'}, {name: Rijnbeek, mainEntityofPage: 'https://forums.ohdsi.org/u/Rijnbeek'}]
  startDate: 'Mar 26, 2020'
  endDate: ""
  protocol: {name: 'Word docment', mainEntityofPage: 'https://github.com/ohdsi-studies/Covid19PredictionStudies/blob/master/HospitalizationInSymptomaticPatients/docs/PLP_protocol_Q1%2BQ2_20200329.docx'}
  publications: [{name: 'Simple Models](https://www.medrxiv.org/content/10.1101/2020.05.26.20112649v4) - [C19 Validation', mainEntityofPage: 'https://www.medrxiv.org/content/10.1101/2020.05.26.20112649v4) - [C19 Validation](https://www.medrxiv.org/content/10.1101/2020.06.15.20130328v1'}]
  results: [{name: 'Simple Models](http://evidence.ohdsi.org:3838/Covid19CoverPrediction/) - [C19 Validation', mainEntityofPage: 'http://evidence.ohdsi.org:3838/Covid19CoverPrediction/) - [C19 Validation](http://evidence.ohdsi.org:3838/C19validation/'}]
  authors: [jreps, RossW, Rijnbeek]
  description: 'The objective of this study is to develop and validate various patient-level prediction models for COVID-19 patients. '

---
