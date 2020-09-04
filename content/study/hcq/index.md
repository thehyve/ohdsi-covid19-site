---
# Display Name
title: "Risk of hydroxychloroquine, alone and in combination with azithromycin: a multi-national study"
tags: []
categories: []
date: 2020-08-21T14:52:18+02:00
lastmod: 2020-08-21T14:52:18+02:00
featured: false
draft: false

id: hcq

# Analytics UseCase:
# 0: Characterization
# 1: Population-Level Estimation
# 2: Patient-Level Prediction
# 3: Characterization and Population-Level Estimation
analyticsUseCase: 1

databases: ["sidiap"]

# Study Type:
# 0: Clinical Application
# 1: Methods Research
studyType: [1, 0]

authors: ["daniel_prieto"]

#date format YYYY-MM-DD
dateCreated: 2020-04-02

description: "Retrospective, real-world, observational study to estimate the population-level effects of hydroxychloroquine among patients with rheumatoid arthritis. Designed and executed during the OHDSI community COVID-19 virtual study-a-thon (March 26-29) to inform healthcare decision-making in response to the current global pandemic."

# URL
discussionUrl: "https://forums.ohdsi.org/"

# @type: hasParts
softwareSourceCodes:
- name:
  # URL
  codeRepository: "https://github.com/ohdsi-studies/Covid19EstimationHydroxychloroquine"
  # date format YYYY-MM-DD
  dateModified: 2020-04-11
  # id from 'organizations'
  maintainer: "ohdsi:OHDSI"
  programmingLanguage: "R"
  version: "1"

# @type: hasParts
softwareApplications:
- name: "Data Quality Dashboard"
  # URL
  mainEntityofPage: "https://github.com/OHDSI/DataQualityDashboard"
  # id from 'organizations'
  maintainer: "ohdsi:OHDSI"
  version: "1"
- name: "Atlas"
  mainEntityofPage: "https://github.com/OHDSI/Atlas"
  maintainer: "ohdsi:OHDSI"
  version: "1"

healthConditions:
- name: "Disease caused by severe acute respiratory syndrome coronavirus 2"
  id: "37311061"
  code: 
    codeValue: "840539006"
    codingSystem: "SNOMED CT"
    # URL
    sameAs: "http://snomed.info/id/840539006"
- name: "Rheumatoid arthritis"
  id: "80809"
  code: 
    codeValue: "69896004"
    codingSystem: "SNOMED CT"
    # url format
    sameAs: "http://snomed.info/id/69896004"

identifier: "EUPAS34497"

# URL
mainEntityOfPage: "http://www.encepp.eu/encepp/viewResource.htm?id=34498"

# Array of URLs
publications:
- url: "https://doi.org/10.13063/2327-9214.1189"

results:
- name: "Risk of hydroxychloroquine, alone and in combination with azithromycin: a multi-national study"
  # URL
  mainEntityofPage: "https://data.ohdsi.org/Covid19EstimationHydroxychloroquine/"
- name: "Risk of hydroxychloroquine, alone and in combination with azithromycin: a multi-national study"
  # url format
  mainEntityofPage: "https://data.ohdsi.org/Covid19EstimationHydroxychloroquine/"

# Study Status: 
# 0: Complete
# 1: Design Finalized
# 2: Repo Created
# 3: Started
# 4: Results Available
studyStatus: "4"

studyDesign:
  id: "study:hcq/design"
  # date format YYYY-MM-DD
  dateModified: "2020-04-01"
  identifier: "..."
  license: ""
  # URL
  url: "https://github.com/ohdsi-studies/Covid19EstimationHydroxychloroquine/blob/master/documents/OHDSI%20COVID-19%20Studyathon_PLE_HCQ_Protocol_v1.4.pdf"
  version: "1.4"

# @type: studySubject
drugs: 
- id: 1777087
  name: "Hydroxychloroquine"
  code:
    codeValue: "5521"
    codingSystem: "RxNorm"
    # URL
    sameAs: "http://purl.bioontology.org/ontology/RXNORM/5521"
- id: 1713332
  name: "Amoxicillin"
  code:
    codeValue: "723"
    codingSystem: "RxNorm"
    sameAs: "http://purl.bioontology.org/ontology/RXNORM/723"
- id: 964339
  name: "Sulfasalazine"
  code:
    codeValue: "9524"
    codingSystem: "RxNorm"
    sameAs: "http://purl.bioontology.org/ontology/RXNORM/9524"
- id: 1734104
  name: "Azithromycin"
  code:
    codeValue: "18631"
    codingSystem: "RxNorm"
    sameAs: "http://purl.bioontology.org/ontology/RXNORM/18631"

# @type: subjectOf
event:
  id: "https://covid19.ohdsi.app/"
  name: "COVID-19 virtual study-a-thon"
  # URL
  mainEntityOfPage: "https://www.ohdsi.org/covid-19-updates/"
  # id from 'eventLocations'
  location: 
    type: "VirtualLocation"
    name: "Microsoft Teams"
  # id from 'organizations'
  organizer: "ohdsi:OHDSI"
  # date format YYYY-MM-DD
  startDate: "2020-03-26"
  # date format YYYY-MM-DD
  endDate: "2020-03-29"
  # id from 'eventRecordLocations'
  recordedIn: 
    id: "https://www.youtube.com/playlist?list=PLpzbqK7kvfeVGZiT1eKO6KxQiN7nzBFK"
    url: "https://www.youtube.com/playlist?list=PLpzbqK7kvfeVGZiT1eKO6KxQiN7nzBFK"
    creator: "ohdsi:OHDSI"
    # date format YYYY-MM-DD
    uploadDate: "2020-03-29"

organizations:
- id: "ohdsi:OHDSI"
  # URL
  mainEntityOfPage: "https://www.ohdsi.org/"
  name: "Observational Health Data Sciences and Informatics"
  url: ["https://www.youtube.com/user/OHDSIJoinTheJourney","https://twitter.com/ohdsi","https://www.linkedin.com/company/ohdsi/"]

# date format YYYY-MM-DD
endDate: 

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