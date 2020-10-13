---
# Website information
# Study title
title: 'Characterizing Health Associated Risks, and Your Baseline Disease In SARS-COV-2 (CHARYBDIS)'

tags: [OHDSI, Study-a-thon, COVID-19]
categories: []

# Do not fill; filled automatically
date: 2020-10-07T11:57:07+02:00
lastmod: 2020-10-07T11:57:07+02:00
featured: false

# Change to 'false' to be published
draft: false

# Study identifier, specifically created for the website.
# The identifier is the last part of the URL directing to the particular study
study_id: 'Covid19CharacterizationCharybdis'

# Study identifier 
study_identifier: 

# URL to study registration site
study_registration_url: 

# Study description
description: '**Objectives:**\n1) Describe the baseline demographic, clinical characteristics, treatments and outcomes of interest among individuals tested for SARS-CoV-2 and/or diagnosed with COVID-19 overall and stratified by sex, age, race and specific comorbidities;\n2) Describe characteristics and outcomes of patients diagnosed/tested positive for influenza as well as patients hospitalized with influenza between September 2017 and April 2018 compared to the COVID-19 population.'


# Start date of the study, use date format YYYY-MM-DD
start_date: 2020-04-21

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
authors: [tduarte, krfeeney, Albert_Prats]

# Study Type, choose 0 or 1:
# 0: Clinical Application
# 1: Methods Research
study_type: [0]

# Analytics Use Case of the Study, choose 0, 1, 2 or 3:
# 0: Characterization
# 1: Population-Level Estimation
# 2: Patient-Level Prediction
# 3: Characterization and Population-Level Estimation
study_usecase: [0]

# Database identifiers of databases used for the study
databases: [HIRA, STARR, CLARET, Columbia University Irving Medical Center, Veteran’s Affairs, UC Health Data Compass, University of Washington, SIDIAP]

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
  protocol_id: 'Covid19CharacterizationCharybdis/design'
  # Last modification date, use date format YYYY-MM-DD
  date_modified: 2020-06-16
  # Protocol identifier, in case protocol has an identifier elsewhere 
  protocol_identifier: 
  # Protocol license
  license: 
  # URL to the protocol
  protocol_url: https://github.com/ohdsi-studies/Covid19CharacterizationCharybdis/blob/master/documents/Protocol_COVID-19%20Charybdis%20Characterisation_V5.docx
  # Version of the protocol 
  version: 'V5.1'

# URL to the forum thread about the study
forum_thread_url: https://forums.ohdsi.org/t/charybdis-successfully-tested-ohdsi-seeking-data-partners-to-run-study/11072

# Source code used for the study; if multiple code repositories are available, 
# duplicate all keys under "source_code"
source_code:
- name: 'Covid19CharacterizationCharybdis'
  # URL to GitHub repository containing the source code
  code_repository_url: https://github.com/ohdsi-studies/Covid19CharacterizationCharybdis
  # Last modification date, use date format YYYY-MM-DD
  date_modified: 2020-10-09
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
- doi: 

# study results (e.g. shiny web application)
results:
# Name of the web application showing the results
- name: 'Shiny App: Cohort Diagnostics - COVID Targets'
  # URL to the web application
  application_url: https://data.ohdsi.org/Covid19CharacterizationCharybdisDiagCovid/
# Name of the web application showing the results
- name: 'Shiny App: Cohort Diagnostics - Influenza Targets'
  # URL to the web application
  application_url: https://data.ohdsi.org/Covid19CharacterizationCharybdisDiagInfluenza/
# Name of the web application showing the results
- name: 'Shiny App: Cohort Diagnostics - Stratum'
  # URL to the web application
  application_url: https://data.ohdsi.org/Covid19CharacterizationCharybdisDiagStrata/
# Name of the web application showing the results
- name: 'Shiny App: Cohort Diagnostics - Features'
  # URL to the web application
  application_url: https://data.ohdsi.org/Covid19CharacterizationCharybdisDiagFeature/
# Name of the web application showing the results
- name: 'Shiny App: Characterization Study'
  # URL to the web application
  application_url: https://data.ohdsi.org/Covid19CharacterizationCharybdis/

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
  # Name of the even
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
  title: 'Characterizing Health Associated Risks, and Your Baseline Disease In SARS-COV-2 (CHARYBDIS)'
  study_usecase: [0]
  study_type: [0]
  tags: [OHDSI, Study-a-thon, COVID-19]
  leads: ['Talita Duarte-Salles', 'Kristin Kostka', 'Albert Prats-Uribe']
  leadForumTags: [{name: tduarte, mainEntityofPage: 'https://forums.ohdsi.org/u/tduarte'}, {name: krfeeney, mainEntityofPage: 'https://forums.ohdsi.org/u/krfeeney'}, {name: Albert_Prats, mainEntityofPage: 'https://forums.ohdsi.org/u/Albert_Prats'}]
  startDate: 'April 21, 2020'
  endDate: 'Mid-July 2020'
  protocol: {name: 'Word Doc', mainEntityofPage: 'https://github.com/ohdsi-studies/Covid19CharacterizationCharybdis/blob/master/documents/Protocol_COVID-19%20Charybdis%20Characterisation_V5.docx'}
  publications: []
  results: [{name: 'Shiny App: Cohort Diagnostics - COVID Targets', mainEntityofPage: 'https://data.ohdsi.org/Covid19CharacterizationCharybdisDiagCovid/'}, {name: 'Shiny App: Cohort Diagnostics - Influenza Targets', mainEntityofPage: 'https://data.ohdsi.org/Covid19CharacterizationCharybdisDiagInfluenza/'}, {name: 'Shiny App: Cohort Diagnostics - Stratum', mainEntityofPage: 'https://data.ohdsi.org/Covid19CharacterizationCharybdisDiagStrata/'}, {name: 'Shiny App: Cohort Diagnostics - Features', mainEntityofPage: 'https://data.ohdsi.org/Covid19CharacterizationCharybdisDiagFeature/'}, {name: 'Shiny App: Characterization Study', mainEntityofPage: 'https://data.ohdsi.org/Covid19CharacterizationCharybdis/'}]
  authors: [tduarte, krfeeney, Albert_Prats]
  description: "**Objectives:**\n1) Describe the baseline demographic, clinical characteristics, treatments and outcomes of interest among individuals tested for SARS-CoV-2 and/or diagnosed with COVID-19 overall and stratified by sex, age, race and specific comorbidities;\n2) Describe characteristics and outcomes of patients diagnosed/tested positive for influenza as well as patients hospitalized with influenza between September 2017 and April 2018 compared to the COVID-19 population."

---
