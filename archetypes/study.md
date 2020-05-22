---
'@context': https://schema.org
'@type': MedicalObservationalStudy

title: "{{ replace .Name "-" " " | title }}"
subtitle: ""
summary: ""
authors: []
tags: []
categories: []
date: {{ .Date }}
lastmod: {{ .Date }}
featured: false
draft: false
layout: newStudy

id: ""
name: ""
description: ""
disambiguatingDescription: ""
license: ""
datePublished: "Date"
contributor:
- '@type': Person
  name: ""
studyDesign:
  '@type': MedicalObservationalStudyDesign
  id: ""
  version: ""
  dateModified: "Date"
  url: ""
healthCondition:
- '@type': MedicalCondition
  name: ""
  code:
    '@type': MedicalCode
    termCode: ""
    codingSystem: ""
    inDefinedTermset: ""
studySubject:
- '@type': Drug
  name: ""
  code:
    '@type': MedicalCode
    termCode: ""
    codingSystem: Drug
    inDefinedTermset: ""
subjectOf:
  '@type': Event
  name: ""
  organizer:
    '@type': Organization
    name: ""
  location: ""
  startDate: "Date"
  endDate: "Date"
result:
- '@type': MedicalScholarlyArticle
  url: ""
- '@type': WebApplication
  url: ""
hasPart:
- '@type': SoftwareApplication
  name: ""
  installURL: ""
  softwareVersion: "" 
  maintainer:
    '@type': Organization
    name: ""
- '@type': SoftwareSourceCode
  codeRepository: ""
  programmingLanguage: ""
  version: ""
  maintainer:
    '@type': Organization
    name: ""
citation:
- '@type': ScholarlyArticle
  url: ""
  author:
  - '@type': Person
    name: ""
  datePublished: "Date" 
  headline: ""
  publisher:
    '@type': Organization
    name: "" 
- '@type':  ScholarlyArticle
  url: ""
  author:
  - '@type': Person
    name: ""
  datePublished: ""
  headline: ""
  publisher:
    '@type': Organization
    name: ""
---