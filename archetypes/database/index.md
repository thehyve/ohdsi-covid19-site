---
# Website information
# Do not fill; filled automatically
title: "{{ replace .Name "-" " " | title }}"
authors: []
tags: []
categories: []
date: {{ .Date }}
lastmod: {{ .Date }} 
featured: false
draft: true

# Database identifier, specifically created for the website.
# The identifier is the last part of the URL directing to the particular database
database_id:

# Database characteristics; key words, can be multiple (e.g. "EHR data", "Primary care records")
database_characteristics: []

# Database management system (e.g. "PostgreSQL)
database_system:

# Database identifier
identifier:

# Size of the database (number of subjects)
population_size:

# Alternative name of the database
alternate_name:

# Date the database is created, use date format YYYY-MM-DD
date_created:

# Date the database is modified, use date format YYYY-MM-DD
date_modified:

# Description of the database
description: 

# URL directing to information about the database
database_url: 

# Start date of data in the database, use date format YYYY-MM-DD
start_date:

# End date of data in the databse, use date format YYYY-MM-DD
end_date:

# doi of publication related to the database
publication: 

# Spatial coverage of database (e.g. "Florence")
spatial_coverage:  

# Version of the database
version: 

# Temporal coverage of the database
temporal_coverage: 

# Institution associated with the database
associated_institution: 

# Persons used in administrative_contact, principal_investigator, scientific_contact, technical_contact
# If there are multiples, duplicate all keys under "persons"
persons:
# Create an identifier for each person
- id:
  # Name of the person
  name:
  # Email address of the person
  email: 
  # Telephone number of the person
  telephone: 

# id of person from "persons"
administrative_contact:

# id of person from "persons"
principal_investigator: 

# id of person from "persons"
scientific_contact: 

# id of person from "persons"
technical_contact: 

---
