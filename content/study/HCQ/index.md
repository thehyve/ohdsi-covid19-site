---
# Display Name
# TODO: rules for what title to pick here (currently we use the protocol title)
title: "Hydroxychloroquine safety and potential efficacy as an antiviral prophylaxis in light of potential wide-spread use in COVID-19: a multinational, large-scale network cohort and self-controlled case series study"
tags: []
categories: []
date: 2020-05-21T14:21:00+02:00
lastmod: 2020-05-22T14:21:00+02:00
featured: false
draft: false

readmeurl: "https://raw.githubusercontent.com/ohdsi-studies/Covid19EstimationHydroxychloroquine2/master/README.md"

# what does this ID mean?
id: Study_HQC
# encepp ID
identifier: EUPAS34497

# Author IDs (as listed on the study design)
authors:
- DanielPrietoAlhambra
- JenniferLane
- DanielMorales
- MartijnSchuemie
- JamesWeaver
- KristinaFister
- MarcSuchard
- SajanKhosla
- AjitLondhe
- DanielleNewby
- HainiWen
- PaulaCasajust
- AndreaMargulis

# Date format
datePublished: 02-04-2020

studyType: Estimation study

# encepp URL
studyUrl: http://www.encepp.eu/encepp/viewResource.htm?id=34498

# Does each study have a specific forum thread?
discussionUrl: https://forums.ohdsi.org/

description: Retrospective, real-world, observational study to estimate the population-level effects of hydroxychloroquine among patients with rheumatoid arthritis. Designed and executed during the OHDSI community COVID-19 virtual study-a-thon (March 26-29) to inform healthcare decision-making in response to the current global pandemic.

# @type: hasParts
softwareSourceCodes:
- name: RCode
  codeRepository: https://github.com/ohdsi-studies/Covid19EstimationHydroxychloroquine
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
  url: "https://www.medrxiv.org/content/10.1101/2020.04.08.20054551v2"

# Why add id: Shiny here?
result:
  url: "https://data.ohdsi.org/Covid19EstimationHydroxychloroquine/"
  id: Shiny

# what should we fill in as identifier here?
studyDesign:
  url: "https://github.com/ohdsi-studies/Covid19EstimationHydroxychloroquine/blob/master/documents/OHDSI%20COVID-19%20Studyathon_PLE_HCQ_Protocol_v1.4.pdf"
  identifier: "..."
  version: 1.4
  dateModified: 01-04-2020
  id: StudydesignHQC

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
