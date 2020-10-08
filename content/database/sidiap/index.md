---
# Website information
# Database name
title: "The Information System for the Development of Research in Primary Care"

# Do not fill; filled automatically
date: 2020-08-21T16:28:13+02:00
lastmod: 2020-08-21T16:28:13+02:00 
featured: false
draft: false

authors: []
tags: []
categories: []

# Database identifier, specifically created for the website.
# The identifier is the last part of the URL directing to the particular database
database_id: "ars"

# Database identifier
identifier: "SIDIAP"

# Alternative name of the database
alternate_name: "ARS"

# Description of the database
description: "Italy has a national health care system, funded by national tax but organised at a regional level: each region receives money from the central government and must pay for the healthcare of its inhabitants. Administrative data of healthcare purchased (or administered) by each region are collected with the same national data model. ARS has a copy of the administrative data of the Tuscany region. Moreover ARS has a copy of the death and birth registry and of the malformation registry, and they can be linked at an individual level with the other health data available. The core of the system is the inhabitant registry."

# Database characteristics; key words, can be multiple (e.g. "EHR data", "Primary care records")
database_characteristics: ["Primary care records","EHR data"]

# Date the database is created, use date format YYYY-MM-DD
date_created: "1996-01-01"

# Date the database is modified, use date format YYYY-MM-DD
date_modified: "2017-07-27"

# Version of the database
version: "5.4"

# URL directing to information about the database
database_url: "https://www.example.org"

# Start date of data in the database, use date format YYYY-MM-DD
start_date: "1996-01-01"

# End date of data in the databse, use date format YYYY-MM-DD
end_date: "2018-02-15"

# Database management system (e.g. "PostgreSQL)
database_system: "PostgreSQL"

# Size of the database (number of subjects)
population_size: "5000000"

# Spatial coverage of database (e.g. "Florence")
spatial_coverage: "wd:Q2044"  

# Temporal coverage of the database
temporal_coverage: ""

# Institution associated with the database
associated_institution: "Agenzia regionale di sanità della Toscana"

# Persons used in administrative_contact, principal_investigator, scientific_contact, technical_contact
# If there are multiples, duplicate all keys under "persons"
persons:
# Create an identifier for each person
- id: "JaneDoe"
  # Name of the person
  name: "Jane Doe"
  # Email address of the person
  email: "jane_doe@ars.org"
  # Telephone number of the person
  telephone: "+390000000" 

# id of person from "persons"
administrative_contact: "JaneDoe"

# id of person from "persons"
principal_investigator: "JaneDoe"

# id of person from "persons"
scientific_contact: "JaneDoe"

# id of person from "persons"
technical_contact: "JaneDoe"

# doi of publication related to the database
publication: "https://doi.org/10.13063/2327-9214.1189"
---
