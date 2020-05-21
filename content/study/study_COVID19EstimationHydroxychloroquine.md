---
'@context': https://schema.org
'@type': MedicalObservationalStudy

title: "Risk of hydroxychloroquine, alone and in combination with azithromycin: a multi-national study"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: 2020-05-17T17:37:27+02:00
lastmod: 2020-05-17T17:37:27+02:00
featured: false
draft: false
layout: newStudy

id: EUPAS34497
name: "Risk of hydroxychloroquine, alone and in combination with azithromycin: a multi-national study"
description: Retrospective, real-world, observational study to estimate the population-level effects of hydroxychloroquine among patients with rheumatoid arthritis. Designed and executed during the OHDSI community COVID-19 virtual study-a-thon (March 26-29) to inform healthcare decision-making in response to the current global pandemic.
disambiguatingDescription: Estimation study
license: http://www.encepp.eu/encepp_studies/index.shtml
datePublished: 02-04-2020
contributor:
- '@type': Person
  name: Jennifer Lane
- '@type': Person
  name: James Weaver
- '@type': Person
  name: Daniel Prieto-Alhambra
- '@type': Person
  name: Daniel Morales
- '@type': Person
  name: Martijn Schuemie
- '@type': Person
  name: Kristina Fister
- '@type': Person
  name: Marc Suchard
- '@type': Person
  name: Sajan Khosla
- '@type': Person
  name: Ajit Londhe
- '@type': Person
  name: Danielle Newby
- '@type': Person
  name: Haini Wen
- '@type': Person
  name: Paula Casajust
- '@type': Person
  name: Andrea Margulis
studyDesign:
  '@type': MedicalObservationalStudyDesign
  id: 
  version: v1.4
  dateModified: 01-04-2020
  url: https://github.com/ohdsi-studies/Covid19EstimationHydroxychloroquine/blob/master/documents/OHDSI%20COVID-19%20Studyathon_PLE_HCQ_Protocol_v1.4.pdf
healthCondition:
- '@type': MedicalCondition
  name: Disease caused by severe acute respiratory syndrome coronavirus 2,
  code:
    '@type': MedicalCode
    termCode: 37311061
    codingSystem: Condition
    inDefinedTermset: https://github.com/OHDSI/Vocabulary-v5.0
studySubject:
- '@type': Drug
  name: Hydroxychloroquine
  code:
    '@type': MedicalCode
    termCode: 1777087
    codingSystem: Drug
    inDefinedTermset: https://github.com/OHDSI/Vocabulary-v5.0
- '@type': Drug
  name: Sulfasalazine
  code:
    '@type': MedicalCode
    termCode: 964339
    codingSystem: Drug
    inDefinedTermset: https://github.com/OHDSI/Vocabulary-v5.0
- '@type': Drug
  name: Azithromycin
  code:
    '@type': MedicalCode
    termCode: 1734104
    codingSystem: Drug
    inDefinedTermset: https://github.com/OHDSI/Vocabulary-v5.0
- '@type': Drug
  name: Amoxicillin
  code:
    '@type': MedicalCode
    termCode: 1713332
    codingSystem: Drug
    inDefinedTermset: https://github.com/OHDSI/Vocabulary-v5.0
subjectOf:
  '@type': Event
  name: COVID-19 virtual study-a-thon
  organizer:
    '@type': Organization
    name: OHDSI
  location: Microsoft Teams
  startDate: 26-03-2020
  endDate: 29-03-2020
result:
- '@type': MedicalScholarlyArticle
  url: 
- '@type': WebApplication
  url: https://data.ohdsi.org/Covid19EstimationHydroxychloroquine/
hasPart:
- '@type': SoftwareApplication
  name: Atlas
  installURL: https://github.com/OHDSI/Atlas/wiki/Atlas-Setup-Guide
  softwareVersion: 
  maintainer:
    '@type': Organization
    name: OHDSI
- '@type': SoftwareSourceCode
  codeRepository: https://github.com/ohdsi-studies/Covid19EstimationHydroxychloroquine
  programmingLanguage: R
  version: 
  maintainer:
    '@type': Organization
    name: OHDSI
citation:
- '@type': ScholarlyArticle
  url: 
  author:
  - '@type': Person
    name: 
  - '@type': Person
    name: 
  datePublished: 
  headline: 
  publisher:
    '@type': Organization
    name: 
- '@type':  ScholarlyArticle
  url:
  author:
  - '@type': Person
    name: 
  - '@type': Person
    name: 
  datePublished: 
  headline: 
  publisher:
    '@type': Organization
    name: 
---