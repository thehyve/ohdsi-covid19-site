---
# Website information
# Study title
title: 'OHDSI COVID-19 Studyathon: Hydroxychloroquine population-level effect estimation'

tags: [Study-a-thon, COVID-19]
categories: []

# Do not fill; filled automatically
date: 2020-10-07T11:57:08+02:00
lastmod: 2020-10-07T11:57:08+02:00
featured: false

# Change to 'false' to be published
draft: false

# Study identifier, specifically created for the website.
# The identifier is the last part of the URL directing to the particular study
study_id: 'Covid19EstimationHydroxychloroquine'

# Study identifier 
study_identifier: 'EUPAS34497' 

# URL to study registration site
study_registration_url: http://www.encepp.eu/encepp/viewResource.htm?id=34498 

# Study description
description: 'Many existing drugs are being considered for use in treatment and prophylaxis of COVID-19 in rapid clinical trials across the world. However, the full safety profiles of these drugs is often unknown, and the current trials are unlikely to be powered or have sufficent follow-up time to evaluate most safety outcomes. The aim of this OHDSI study is to use existing retrospective data to evaluate the safety of these drugs. Where possible, we also attempt to estimate potential efficacy, for example using prior viral infections as surrogate outcome, or where available by using COVID-19 as outcome.'

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
authors: [jenniferlane, jweave17]

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
databases: [IQVIA US Ambulatory EMR, IQVIA Australia EMR, IQVIA Disease Analyser France EMR, IQVIA Disease Analyser Germany EMR, IQVIA Hospital US Charge Master, IQVIA UK THIN IMRD EMR, Estonian Health Information System, Integrated Primary Care Information, SIDIAP]

# Conditions studied; if multiple conditions are being studied,
# duplicate all keys under "conditions"
conditions:
# Concept name
- concept_name: 'Seropositive rheumatoid arthritis'
  # Concept identifier
  concept_id: 4035611 
  # Concept code and vocabulary metadata
  code: 
    # Concept code
    concept_code: 239791005
    # Vocabulary id
    vocabulary_id: 'SNOMED'
    # URL to term in vocabulary (e.g. http://snomed.info/id/69896004)
    concept_code_url: http://snomed.info/id/239791005
# Concept name
- concept_name: 'Seronegative rheumatoid arthritis'
  # Concept identifier
  concept_id: 4083556
  # Concept code and vocabulary metadata
  code: 
    # Concept code
    concept_code: 239792003
    # Vocabulary id
    vocabulary_id: 'SNOMED'
    # URL to term in vocabulary (e.g. http://snomed.info/id/69896004)
    concept_code_url: http://snomed.info/id/239792003
# Concept name
- concept_name: 'Rheumatoid arthritis'
  # Concept identifier
  concept_id: 80809 
  # Concept code and vocabulary metadata
  code: 
    # Concept code
    concept_code: 69896004
    # Vocabulary id
    vocabulary_id: 'SNOMED'
    # URL to term in vocabulary (e.g. http://snomed.info/id/69896004)
    concept_code_url: http://snomed.info/id/69896004
# Concept name
- concept_name: 'Polyneuropathy in rheumatoid arthritis'
  # Concept identifier
  concept_id: 4102493 
  # Concept code and vocabulary metadata
  code: 
    # Concept code
    concept_code: 193180002
    # Vocabulary id
    vocabulary_id: 'SNOMED'
    # URL to term in vocabulary (e.g. http://snomed.info/id/69896004)
    concept_code_url: http://snomed.info/id/193180002
# Concept name
- concept_name: 'Myopathy due to rheumatoid arthritis'
  # Concept identifier
  concept_id: 4107913  
  # Concept code and vocabulary metadata
  code: 
    # Concept code
    concept_code: 193250002
    # Vocabulary id
    vocabulary_id: 'SNOMED'
    # URL to term in vocabulary (e.g. http://snomed.info/id/69896004)
    concept_code_url: http://snomed.info/id/193250002
# Concept name
- concept_name: 'Deformity of hand due to rheumatoid arthritis'
  # Concept identifier
  concept_id: 46273442 
  # Concept code and vocabulary metadata
  code: 
    # Concept code
    concept_code: 96531000119109
    # Vocabulary id
    vocabulary_id: 'SNOMED'
    # URL to term in vocabulary (e.g. http://snomed.info/id/69896004)
    concept_code_url: http://snomed.info/id/96531000119109
 # Concept name
 - concept_name: 'Deformity of foot due to rheumatoid arthritis'
   # Concept identifier
   concept_id: 4334806 
   # Concept code and vocabulary metadata
   code: 
     # Concept code
     concept_code: 433228003
     # Vocabulary id
     vocabulary_id: 'SNOMED'
     # URL to term in vocabulary (e.g. http://snomed.info/id/69896004)
     concept_code_url: http://snomed.info/id/433228003
 # Concept name
 - concept_name: 'Cutaneous atrophy due to rheumatoid arthritis'
   # Concept identifier
   concept_id: 4297650 
   # Concept code and vocabulary metadata
   code: 
     # Concept code
     concept_code: 402431009
     # Vocabulary id
     vocabulary_id: 'SNOMED'
     # URL to term in vocabulary (e.g. http://snomed.info/id/69896004)
     concept_code_url: http://snomed.info/id/402431009
 
# Study protocol
study_protocol:
  # Protocol identifier; specifically created for the website
  # The identifier is the last part of the URL directing to the particular study protocol
  protocol_id: Covid19EstimationHydroxychloroquine/design
  # Last modification date, use date format YYYY-MM-DD
  date_modified: 2020-04-01
  # Protocol identifier, in case protocol has an identifier elsewhere 
  protocol_identifier:  
  # Protocol license
  license: 
  # URL to the protocol
  protocol_url: https://github.com/ohdsi-studies/Covid19EstimationHydroxychloroquine/blob/master/documents/OHDSI%20COVID-19%20Studyathon_PLE_HCQ_Protocol_v1.4.pdf
  # Version of the protocol 
  version: 1.4

# URL to the forum thread about the study
forum_thread_url: 

# Source code used for the study; if multiple code repositories are available, 
# duplicate all keys under "source_code"
source_code:
- name: 'Covid19EstimationHydroxychloroquine'
  # URL to GitHub repository containing the source code
  code_repository_url: https://github.com/ohdsi-studies/Covid19EstimationHydroxychloroquine
  # Last modification date, use date format YYYY-MM-DD
  date_modified: 2020-04-11
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
- name: 'Risk of hydroxychloroquine alone and in combination with azithromycin in the treatment of rheumatoid arthritis: a multinational, retrospective study' 
  # URL to the web application
  application_url: https://data.ohdsi.org/Covid19EstimationHydroxychloroquine/

# Drug studied; if multiple subjects are being studied,
# duplicate all keys under "study_subject"
study_subject: 
# Concept identifier
- concept_id: 1777087
  # Concept name 
  concept_name: 'Hydroxychloroquine'
  # Concept code and vocabulary metadata
  code:
    # Concept code
    concept_code: 5521
    # Vocabulary id 
    vocabulary_id: 'RxNorm'
    # URL to term in vocabulary (e.g. http://purl.bioontology.org/ontology/RXNORM/5521)
    concept_code_url: 'http://purl.bioontology.org/ontology/RXNORM/5521'
# Concept identifier
- concept_id: 964339
  # Concept name 
  concept_name: 'Sulfasalazine'
  # Concept code and vocabulary metadata
  code:
    # Concept code
    concept_code: 9524
    # Vocabulary id 
    vocabulary_id: 'RxNorm'
    # URL to term in vocabulary (e.g. http://purl.bioontology.org/ontology/RXNORM/5521)
    concept_code_url: 'http://purl.bioontology.org/ontology/RXNORM/9524'
# Concept identifier
- concept_id: 1734104
  # Concept name 
  concept_name: 'Azithromycin'
  # Concept code and vocabulary metadata
  code:
    # Concept code
    concept_code: 18631
    # Vocabulary id 
    vocabulary_id: 'RxNorm'
    # URL to term in vocabulary (e.g. http://purl.bioontology.org/ontology/RXNORM/5521)
    concept_code_url: 'http://purl.bioontology.org/ontology/RXNORM/18631'
# Concept identifier
- concept_id: 1713332
  # Concept name 
  concept_name: 'Amoxicillin'
  # Concept code and vocabulary metadata
  code:
    # Concept code
    concept_code: 723
    # Vocabulary id 
    vocabulary_id: 'RxNorm'
    # URL to term in vocabulary (e.g. http://purl.bioontology.org/ontology/RXNORM/5521)
    concept_code_url: 'http://purl.bioontology.org/ontology/RXNORM/723'

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
  title: 'OHDSI COVID-19 Studyathon: Hydroxychloroquine population-level effect estimation'
  study_usecase: [1]
  study_type: [0]
  tags: [Study-a-thon, COVID-19]
  leads: ['Jennifer Lane', 'James Weaver']
  leadForumTags: [{name: jenniferlane, mainEntityofPage: 'https://forums.ohdsi.org/u/jenniferlane'}, {name: jweave17, mainEntityofPage: 'https://forums.ohdsi.org/u/jweave17'}]
  startDate: 'March 26, 2020'
  endDate: ""
  protocol: {name: 'PDF (as filed with PASS)', mainEntityofPage: 'as filed with PASS)](https://github.com/ohdsi-studies/Covid19EstimationHydroxychloroquine/blob/master/documents/OHDSI%20COVID-19%20Studyathon_PLE_HCQ_Protocol_v1.4.pdf'}
  publications: []
  results: [{name: 'Shiny app', mainEntityofPage: 'https://data.ohdsi.org/Covid19EstimationHydroxychloroquine/'}]
  authors: [jenniferlane, jweave17]
  description: "Many existing drugs are being considered for use in treatment and prophylaxis of COVID-19 in rapid clinical trials across the world. However, the full safety profiles of these drugs is often unknown, and the current trials are unlikely to be powered or have sufficent follow-up time to evaluate most safety outcomes. The aim of this OHDSI study is to use existing retrospective data to evaluate the safety of these drugs. Where possible, we also attempt to estimate potential efficacy, for example using prior viral infections as surrogate outcome, or where available by using COVID-19 as outcome.\nThis study is part of the [OHDSI 2020 COVID-19 study-a-thon](https://www.ohdsi.org/covid-19-updates/)."

---
