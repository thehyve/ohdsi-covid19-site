---
# Website information
# Study title
title: "Risk of hydroxychloroquine, alone and in combination with azithromycin: a multi-national study"

tags: []
categories: []

# Do not fill; filled automatically
date: 2020-08-21T14:52:18+02:00
lastmod: 2020-08-21T14:52:18+02:00
featured: false
draft: false

# Study identifier, specifically created for the website.
# The identifier is the last part of the URL directing to the particular study
study_id: hcq

# // TODO
# Analytics Use Case of the Study, choose 0, 1, 2 or 3:
# 0: Characterization
# 1: Population-Level Estimation
# 2: Patient-Level Prediction
# 3: Characterization and Population-Level Estimation
study_usecase: [1]

# Database identifiers of databases used for the study
databases: ["sidiap"]

# Study Type, choose 0 or 1:
# 0: Clinical Application
# 1: Methods Research
study_type: [1]

# Author identifier of the authors contributing to the study
authors: ["daniel_prieto"]

# Start date of the study, use date format YYYY-MM-DD
start_date: 2020-04-02

# Study description
description: "Retrospective, real-world, observational study to estimate the population-level effects of hydroxychloroquine among patients with rheumatoid arthritis. Designed and executed during the OHDSI community COVID-19 virtual study-a-thon (March 26-29) to inform healthcare decision-making in response to the current global pandemic."

# URL to the forum thread about the study
forum_thread_url: "https://forums.ohdsi.org/"

# Source code used for the study; if multiple code repositories are available, 
# duplicate all keys under "source_code"
source_code:
- name:
  # URL to GitHub repository containing the source code
  code_repository_url: "https://github.com/ohdsi-studies/Covid19EstimationHydroxychloroquine"
  # Last modification date, use date format YYYY-MM-DD
  date_modified: 2020-04-11
  # Maintainer of source code; use identifier of organization if applicable
  maintainer: "ohdsi:OHDSI"
  # Programming language used
  programming_language: "R"
  # Version of the source code
  version: "1"

# Software used for the study; if multiple software applications are used
# duplicate all keys under "software"
software:
  # Name of the software
- name: "Data Quality Dashboard"
  # URL to source code of software
  source_code_url: "https://github.com/OHDSI/DataQualityDashboard"
  # Maintainer of source code; use identifier of organization if applicable.
  maintainer: "ohdsi:OHDSI"
  # Version of the software
  version: "1"
- name: "Atlas"
  source_code_url: "https://github.com/OHDSI/Atlas"
  maintainer: "ohdsi:OHDSI"
  version: "1"

# Conditions studied; if multiple conditions are being studied,
# duplicate all keys under "conditions"
conditions:
# Concept name
- concept_name: "Disease caused by severe acute respiratory syndrome coronavirus 2"
  # Concept identifier
  concept_id: "37311061"
  # Concept code and vocabulary metadata
  code: 
    # Concept code
    concept_code: "840539006"
    # Vocabulary id
    vocabulary_id: "SNOMED CT"
    # URL to term in vocabulary (e.g. http://snomed.info/id/69896004)
    concept_code_url: "http://snomed.info/id/840539006"
- concept_name: "Rheumatoid arthritis"
  concept_id: "80809"
  code: 
    concept_code: "69896004"
    vocabulary_id: "SNOMED CT"
    # url format
    concept_code_url: "http://snomed.info/id/69896004"

# Study identifier 
study_identifier: "EUPAS34497"

# URL to study registration site
study_registration_url: "http://www.encepp.eu/encepp/viewResource.htm?id=34498"

# doi of publications related to the study; if multiple articles have been published,
# duplicate key under "publications"
publications:
- doi: "https://doi.org/10.13063/2327-9214.1189"

# study results (e.g. shiny web application)
results:
# Name of the web application showing the results
- name: "Risk of hydroxychloroquine, alone and in combination with azithromycin: a multi-national study"
  # URL to the web application
  application_url: "https://data.ohdsi.org/Covid19EstimationHydroxychloroquine/"
- name: "Risk of hydroxychloroquine, alone and in combination with azithromycin: a multi-national study"
  # url format
  application_url: "https://data.ohdsi.org/Covid19EstimationHydroxychloroquine/"

# Study status, choose 0, 1, 2, 3 or 4:
# 0: Complete
# 1: Design Finalized
# 2: Repo Created
# 3: Started
# 4: Results Available
study_status: ["4"]

# Study protocol
study_protocol:
  # Protocol identifier; specifically created for the website
  # The identifier is the last part of the URL directing to the particular study protocol
  protocol_id: "study:hcq/design"
  # Last modification date, use date format YYYY-MM-DD
  date_modified: "2020-04-01"
  # Protocol identifier, in case protocol has an identifier elsewhere 
  protocol_identifier: "..."
  # Protocol license
  license: ""
  # URL to the protocol
  protocol_url: "https://github.com/ohdsi-studies/Covid19EstimationHydroxychloroquine/blob/master/documents/OHDSI%20COVID-19%20Studyathon_PLE_HCQ_Protocol_v1.4.pdf"
  # Version of the protocol 
  version: "1.4"

# Drug studied. If multiple subjects are being studied,
# duplicate all keys under "study_subject"
study_subject: 
# Concept identifier
- concept_id: 1777087
  # Concept name 
  concept_name: "Hydroxychloroquine"
  # Concept code and vocabulary metadata
  code:
    id:
    # Concept code
    concept_code: "5521"
    # Vocabulary id 
    vocabulary_id: "RxNorm"
    # URL to term in vocabulary (e.g. http://purl.bioontology.org/ontology/RXNORM/5521)
    concept_code_url: "http://purl.bioontology.org/ontology/RXNORM/5521"
- concept_id: 1713332
  concept_name: "Amoxicillin"
  code:
    id:
    concept_code: "723"
    vocabulary_id: "RxNorm"
    concept_code_url: "http://purl.bioontology.org/ontology/RXNORM/723"
- concept_id: 964339
  concept_name: "Sulfasalazine"
  code:
    id:
    concept_code: "9524"
    vocabulary_id: "RxNorm"
    concept_code_url: "http://purl.bioontology.org/ontology/RXNORM/9524"
- concept_id: 1734104
  concept_name: "Azithromycin"
  code:
    id:
    concept_code: "18631"
    vocabulary_id: "RxNorm"
    concept_code_url: "http://purl.bioontology.org/ontology/RXNORM/18631"

# Event the study is part of, if applicable
event:
  # Identifier of event
  event_identifier: "https://covid19.ohdsi.app/"
  # Name of the event
  name: "COVID-19 virtual study-a-thon"
  # URL of event website
  event_url: "https://www.ohdsi.org/covid-19-updates/"
  # Location of the event
  location: 
    type: "VirtualLocation"
    name: "Microsoft Teams"
  # Identifier of the organizer of the event
  organizer_identifier: "ohdsi:OHDSI"
  # Start date of the event, use date format YYYY-MM-DD
  start_date: "2020-03-26"
  # End date of the event, use date format YYYY-MM-DD
  end_date: "2020-03-29"
  # Recording of event 
  recordedIn: 
    id: "https://www.youtube.com/playlist?list=PLpzbqK7kvfeVGZiT1eKO6KxQiN7nzBFK"
    # URL to recording of event
    recording_url: "https://www.youtube.com/playlist?list=PLpzbqK7kvfeVGZiT1eKO6KxQiN7nzBFK"
    # Identifier of organizer of the event
    creator: "ohdsi:OHDSI"
    # Upload date of the recording, use date format YYYY-MM-DD
    upload_date: "2020-03-29"

# Organization involved in the event around the study
organizations:
# Identifier of organizer of the event
- organization_identifier: "ohdsi:OHDSI"
  # URL to main organization website
  organization_url: "https://www.ohdsi.org/"
  # Name of organization
  name: "Observational Health Data Sciences and Informatics"
  # Other URLs linking to important organization sites (e.g. twitter)
  url: ["https://www.youtube.com/user/OHDSIJoinTheJourney","https://twitter.com/ohdsi","https://www.linkedin.com/company/ohdsi/"]

# End date of the study, use date format YYYY-MM-DD
end_date: 

from_readme:
  description: 
  study_usecase: []
  study_type: []
  study_status: []
  tags: []
  # study_lead: [Jennifer Lane, James Weaver]
  # study_lead_forums_tag: [jenniferlane, jweave17]
  start_date: 
  end_date: 
  # protocol: PDF (as filed with PASS)
  publications: 
  - url: ""
  results:
  - url: ""
    id: 

---