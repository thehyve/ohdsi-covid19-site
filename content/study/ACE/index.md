---
# Display Name
# TODO: rules for what title to pick here (currently we use the protocol title)
title: "Association of angiotensin converting enzyme (ACE) inhibitors and angiotensin II receptor blockers (ARB) on coronavirus disease (COVID-19) incidence and complications"
tags: []
categories: []
date: 2020-06-17T17:50:47+02:00
lastmod: 2020-06-17T17:50:47+02:00
featured: false
draft: false

# what does this ID mean?
id: Study_ACE
# encepp ID
identifier: EUPAS35296

# Author IDs (as listed on the study protocol)
authors:
- SCYou

# Date format
datePublished: 02-04-2020

studyType: Estimation study

# encepp URL
studyUrl: http://www.encepp.eu/encepp/viewResource.htm?id=35297

# Does each study have a specific forum thread?
discussionUrl: https://forums.ohdsi.org/

# used encep description
description: This study will evaluate the effect of ACE inhibitor or ARB exposure on the risk of contracting COVID-19 infection and the risk of experiencing respiratory failure, pneumonia, acute kidney injury, and death in hypertensive patients following contracting COVID-19 infection. The analysis will be undertaken across a federated multi-national network of electronic health records and administrative claims from primary care and secondary care that have been mapped to the Observational Medical Outcomes Partnership Common Data Model in collaboration with the Observational Health Data Sciences and Informatics (OHDSI) and European Health Data and Evidence Network (EHDEN) initiatives.

# @type: hasParts
softwareSourceCodes:
- name: RCode
  codeRepository: https://github.com/ohdsi-studies/Covid19Icarius
  version: "3.5.0 (or newer)"
  programmingLanguage: R
  maintainer: OHDSI

# @type: hasParts
softwareApplications:
- name: Atlas
  installURL: https://github.com/OHDSI/Atlas/wiki/Atlas-Setup-Guide
  version: "2.7.7"
  maintainer: OHDSI

healthConditions:
- name: "Disease caused by severe acute respiratory syndrome coronavirus 2"
  id: "Covid19"
  code: 
  - id: "SNOMED84053900"
    codeValue: "84053900"
    codingSystem: "SNOMED CT"
    sameAs: ""
  - id: "37311061"
    codeValue: "37311061"
    codingSystem: "OMOP Standardized Vocabularies"
    equivalentClass: "Snomed84053900"
- name: ""
  id: "conditionPH"
  code:
  - id: "sourcetermPH"
    codeValue: "9876"
    codingSystem: "" 
    sameAs: ""
  - id: "conceptPH"
    codeValue: "1234567"
    codingSystem: "OMOP Standardized Vocabularies"
    equivalentClass: "sourcetermPH"

# URL
license: http://www.encepp.eu/encepp_studies/index.shtml

# should we add journal, date, etc as well?
# or will we do this at citations?
publication:
  url: "https://www.medrxiv.org/content/10.1101/2020.06.11.20125849v1.full.pdf"

# Why add id: Shiny here?
result:
  url: "https://data.ohdsi.org/IcariusSusceptibility/"
  id: Shiny

# what should we fill in as identifier here?
studyDesign:
  url: "https://github.com/ohdsi-studies/Covid19Icarius/blob/master/Documents/COVID19_ACE_ARB_Protocol_Version_1_2.pdf"
  identifier: "..."
  version: 1.2
  dateModified: 15-05-2020
  id: StudydesignACE

# Array @type: studySubject
drugs: 
- name: Amoxicillin
  code:
  - id: Rx723
    codeValue: 723
    codingSystem: RxNorm
    sameAs: http://purl.bioontology.org/ontology/RXNORM/723
    equivalentClass: 
  - id: 1713332
    codeValue: 1713332
    codingSystem: OMOP Standardized Vocabularies
    sameAs: 
    equivalentClass: Rx18631
- name: Hydroxychloroquine
  code:
  - id: Rx5521
    codeValue: 5521
    codingSystem: RxNorm
    sameAs: http://purl.bioontology.org/ontology/RXNORM/5521
    equivalentClass: 
  - id: 1777087
    codeValue: 1777087
    codingSystem: OMOP Standardized Vocabularies
    sameAs: 
    equivalentClass: Rx5521
- name: Azithromycin
  code:
  - id: Rx18631
    codeValue: 18631
    codingSystem: RxNorm
    sameAs: http://purl.bioontology.org/ontology/RXNORM/18631
    equivalentClass: 
  - id: 1734104
    codeValue: 1734104
    codingSystem: OMOP Standardized Vocabularies
    sameAs: 
    equivalentClass: Rx18631
- name: Sulfasalazine
  code:
  - id: Rx9524
    codeValue: 9524
    codingSystem: RxNorm
    sameAs: http://purl.bioontology.org/ontology/RXNORM/9524
    equivalentClass: 
  - id: 964339
    codeValue: 964339
    codingSystem: OMOP Standardized Vocabularies
    sameAs: 
    equivalentClass: Rx9524

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

databases: 
-  CPRD
-  THIN
-  SIDIAP
-  IPCI
---
