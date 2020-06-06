---
# Display Name
title: "Risk of hydroxychloroquine, alone and in combination with azithromycin: a multi-national study"
tags: []
categories: []
date: 2020-05-21T14:21:00+02:00
lastmod: 2020-05-22T14:21:00+02:00
featured: false
draft: false

id: Study_HQC
identifier: EUPAS34497

# Author ID
authors:
- JenniferLane
- DanielPrietoAlhambra
- DanielMorales
- MartijnSchuemie
- JamesWeaver

# Date format
datePublished: 02-04-2020

studyType: Estimation study

studyUrl: http://www.encepp.eu/encepp/viewResource.htm?id=34498 

discussionUrl: https://forums.ohdsi.org/

description: Retrospective, real-world, observational study to estimate the population-level effects of hydroxychloroquine among patients with rheumatoid arthritis. Designed and executed during the OHDSI community COVID-19 virtual study-a-thon (March 26-29) to inform healthcare decision-making in response to the current global pandemic.

# @type: hasParts
softwareSourceCodes:
- name: RCode
  codeRepository: https://github.com/ohdsi-studies/Covid19EstimationHydroxychloroquine
  version: "..."
  programmingLanguage: R
  maintainer: OHDSI

# @type: hasParts
softwareApplications:
- name: Atlas
  installURL: https://github.com/OHDSI/Atlas/wiki/Atlas-Setup-Guide
  version: "..."
  maintainer: OHDSI

healthConditions:
- name: Disease caused by severe acute respiratory syndrome coronavirus 2
  codingSystem: Condition
  inDefinedTermset: https://github.com/OHDSI/Vocabulary-v5.0
  termCode: 37311061
  id: Covid19
  codeId: Covid19Code
- name: 
  codingSystem: 
  inDefinedTermset: https://github.com/OHDSI/Vocabulary-v5.0
  termCode: 1234567
  id: conditionPH
  codeId: codePH

# URL
license: http://www.encepp.eu/encepp_studies/index.shtml

publication:
  url: "https://pubmed.ncbi.nlm.nih.gov"

result:
  url: "https://data.ohdsi.org/Covid19EstimationHydroxychloroquine/"
  id: Shiny

studyDesign:
  url: "https://github.com/ohdsi-studies/Covid19EstimationHydroxychloroquine/blob/master/documents/OHDSI%20COVID-19%20Studyathon_PLE_HCQ_Protocol_v1.4.pdf"
  identifier: "..."
  version: 1.4
  dateModified: 01-04-2020
  id: StudydesignHQC


# Array @type: studySubject
drugs: 
- name: Amoxicillin
  inDefinedTermset: https://github.com/OHDSI/Vocabulary-v5.0
  termCode: 1713332
- name: Hydroxychloroquine
  inDefinedTermset: https://github.com/OHDSI/Vocabulary-v5.0
  termCode: 1777087
- name: Azithromycin
  inDefinedTermset: https://github.com/OHDSI/Vocabulary-v5.0
  termCode: 1734104
- name: Sulfasalazine
  inDefinedTermset: https://github.com/OHDSI/Vocabulary-v5.0
  termCode: 964339

# @type: subjectOf
event:
  name: COVID-19 virtual study-a-thon
  location: Microsoft Teams
  organizer: OHDSI
  startDate: 26-03-2020
  endDate: 29-03-2020
  id: Covid19Studyathon

citations:
- articleTitle: Article title
  url: "https://pubmed.ncbi.nlm.nih.gov"
  datePublished: 01-01-1970
  author: Author placeholder
  id: referencePH2
- articleTitle: Article title
  url: "https://pubmed.ncbi.nlm.nih.gov"
  datePublished: 01-01-1970
  author: Author placeholder
  id: referencePH

omopDatabases:
- THIN_OMOP
- CPRD_OMOP
- SIDIAP_OMOP
- IPCI_OMOP

    
sourceDatabases: 
-  CPRD
-  THIN
-  SIDIAP
-  IPCI
---