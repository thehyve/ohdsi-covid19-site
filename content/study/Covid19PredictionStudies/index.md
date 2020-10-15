---
# Website information
# Study title
title: 'Development and validation of complex and simple patient-level prediction models for predicting various outcomes in COVID patients: a rapid network study to inform the management of COVID-19'

tags: [Study-a-thon, COVID-19]
categories: []

# Do not fill; filled automatically
date: 2020-10-07T11:57:09+02:00
lastmod: 2020-10-07T11:57:09+02:00
featured: false

# Change to 'false' to be published
draft: false

# Study identifier, specifically created for the website.
# The identifier is the last part of the URL directing to the particular study
study_id: 'Covid19PredictionStudies'

# Study identifier 
study_identifier: 

# URL to study registration site
study_registration_url: 

# Study description
description: 'The objective of this study is to develop and validate various patient-level prediction models for COVID-19 patients.'

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
authors: [jreps, RossW, Rijnbeek]

# Study Type, choose 0 or 1:
# 0: Clinical Application
# 1: Methods Research
study_type: [0]

# Analytics Use Case of the Study, choose 0, 1, 2 or 3:
# 0: Characterization
# 1: Population-Level Estimation
# 2: Patient-Level Prediction
# 3: Characterization and Population-Level Estimation
study_usecase: [2]

# Database identifiers of databases used for the study
databases: [optum]

# Conditions studied; if multiple conditions are being studied,
# duplicate all keys under "conditions"
conditions:
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '45756093'
  code:
    concept_code: U07.1
    vocabulary_id: ICD10
    concept_code_url: ''
  descendants_included: false
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '42501115'
  code:
    concept_code: U07.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Novel coronavirus infection
  concept_id: '586414'
  code:
    concept_code: U18.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Other coronavirus as the cause of diseases classified elsewhere
  concept_id: '45600471'
  code:
    concept_code: B97.29
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: false
- concept_name: Provisional assignment of new diseases or emergency use
  concept_id: '586415'
  code:
    concept_code: U18
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Febrile convulsion
  concept_id: '444413'
  code:
    concept_code: '41497008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/41497008
  descendants_included: true
- concept_name: Fever
  concept_id: '437663'
  code:
    concept_code: '386661006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/386661006
  descendants_included: true
- concept_name: Cough
  concept_id: '254761'
  code:
    concept_code: '49727002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49727002
  descendants_included: true
- concept_name: Sputum finding
  concept_id: '4089228'
  code:
    concept_code: '248595008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/248595008
  descendants_included: true
- concept_name: Acute respiratory distress
  concept_id: '4191650'
  code:
    concept_code: '373895009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/373895009
  descendants_included: true
- concept_name: Dyspnea
  concept_id: '312437'
  code:
    concept_code: '267036007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/267036007
  descendants_included: true
- concept_name: Muscle pain
  concept_id: '442752'
  code:
    concept_code: '68962001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/68962001
  descendants_included: true
- concept_name: Fatigue
  concept_id: '4223659'
  code:
    concept_code: '84229001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84229001
  descendants_included: true
- concept_name: Malaise
  concept_id: '4272240'
  code:
    concept_code: '367391008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/367391008
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '1572255'
  code:
    concept_code: R53
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '439926'
  code:
    concept_code: '271795006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271795006
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '44829293'
  code:
    concept_code: '780.7'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '44823445'
  code:
    concept_code: '780.79'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '1572256'
  code:
    concept_code: R53.8
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Suspected case of COVID-19 (machine translation)
  concept_id: '710157'
  code:
    concept_code: Z03.800x001
    vocabulary_id: ICD10CN
    concept_code_url: ''
  descendants_included: false
- concept_name: Suspected coronavirus infection
  concept_id: '45763724'
  code:
    concept_code: '700217006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/700217006
  descendants_included: false
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274061'
  code:
    concept_code: '10677711000119101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10677711000119101
  descendants_included: true
- concept_name: Influenza
  concept_id: '4266367'
  code:
    concept_code: '6142004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/6142004
  descendants_included: true
- concept_name: Influenza with CNS disorder
  concept_id: '42537960'
  code:
    concept_code: '738276008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/738276008
  descendants_included: true
- concept_name: Influenza with gastrointestinal tract involvement
  concept_id: '4112824'
  code:
    concept_code: '195929004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195929004
  descendants_included: true
- concept_name: Myocarditis due to influenza virus
  concept_id: '4299935'
  code:
    concept_code: '78046005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/78046005
  descendants_included: true
- concept_name: Otitis media due to influenza
  concept_id: '46269706'
  code:
    concept_code: '10624951000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10624951000119108
  descendants_included: true
- concept_name: Pneumonia due to Influenza A virus
  concept_id: '763011'
  code:
    concept_code: '434921000124108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/434921000124108
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '45756093'
  code:
    concept_code: U07.1
    vocabulary_id: ICD10
    concept_code_url: ''
  descendants_included: false
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '42501115'
  code:
    concept_code: U07.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Novel coronavirus infection
  concept_id: '586414'
  code:
    concept_code: U18.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Other coronavirus as the cause of diseases classified elsewhere
  concept_id: '45600471'
  code:
    concept_code: B97.29
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: false
- concept_name: Provisional assignment of new diseases or emergency use
  concept_id: '586415'
  code:
    concept_code: U18
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Febrile convulsion
  concept_id: '444413'
  code:
    concept_code: '41497008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/41497008
  descendants_included: true
- concept_name: Fever
  concept_id: '437663'
  code:
    concept_code: '386661006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/386661006
  descendants_included: true
- concept_name: Cough
  concept_id: '254761'
  code:
    concept_code: '49727002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49727002
  descendants_included: true
- concept_name: Sputum finding
  concept_id: '4089228'
  code:
    concept_code: '248595008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/248595008
  descendants_included: true
- concept_name: Acute respiratory distress
  concept_id: '4191650'
  code:
    concept_code: '373895009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/373895009
  descendants_included: true
- concept_name: Dyspnea
  concept_id: '312437'
  code:
    concept_code: '267036007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/267036007
  descendants_included: true
- concept_name: Muscle pain
  concept_id: '442752'
  code:
    concept_code: '68962001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/68962001
  descendants_included: true
- concept_name: Fatigue
  concept_id: '4223659'
  code:
    concept_code: '84229001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84229001
  descendants_included: true
- concept_name: Malaise
  concept_id: '4272240'
  code:
    concept_code: '367391008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/367391008
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '1572255'
  code:
    concept_code: R53
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '439926'
  code:
    concept_code: '271795006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271795006
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '44829293'
  code:
    concept_code: '780.7'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '44823445'
  code:
    concept_code: '780.79'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '1572256'
  code:
    concept_code: R53.8
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274061'
  code:
    concept_code: '10677711000119101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10677711000119101
  descendants_included: true
- concept_name: Influenza
  concept_id: '4266367'
  code:
    concept_code: '6142004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/6142004
  descendants_included: true
- concept_name: Influenza with CNS disorder
  concept_id: '42537960'
  code:
    concept_code: '738276008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/738276008
  descendants_included: true
- concept_name: Influenza with gastrointestinal tract involvement
  concept_id: '4112824'
  code:
    concept_code: '195929004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195929004
  descendants_included: true
- concept_name: Myocarditis due to influenza virus
  concept_id: '4299935'
  code:
    concept_code: '78046005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/78046005
  descendants_included: true
- concept_name: Otitis media due to influenza
  concept_id: '46269706'
  code:
    concept_code: '10624951000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10624951000119108
  descendants_included: true
- concept_name: Pneumonia due to Influenza A virus
  concept_id: '763011'
  code:
    concept_code: '434921000124108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/434921000124108
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Novel coronavirus infection
  concept_id: '586414'
  code:
    concept_code: U18.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Other coronavirus as the cause of diseases classified elsewhere
  concept_id: '45600471'
  code:
    concept_code: B97.29
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: false
- concept_name: Provisional assignment of new diseases or emergency use
  concept_id: '586415'
  code:
    concept_code: U18
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Febrile convulsion
  concept_id: '444413'
  code:
    concept_code: '41497008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/41497008
  descendants_included: true
- concept_name: Fever
  concept_id: '437663'
  code:
    concept_code: '386661006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/386661006
  descendants_included: true
- concept_name: Fever greater than 100.4 Fahrenheit
  concept_id: '4141062'
  code:
    concept_code: '426000000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/426000000
  descendants_included: true
- concept_name: O/E - fever
  concept_id: '4152360'
  code:
    concept_code: '271897009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271897009
  descendants_included: true
- concept_name: O/E - level of fever
  concept_id: '4039793'
  code:
    concept_code: '164299002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/164299002
  descendants_included: true
- concept_name: O/E - oral temperature
  concept_id: '4077057'
  code:
    concept_code: '275874003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/275874003
  descendants_included: true
- concept_name: O/E - rectal temperature
  concept_id: '4039791'
  code:
    concept_code: '164294007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/164294007
  descendants_included: true
- concept_name: O/E - tympanic temperature
  concept_id: '4151775'
  code:
    concept_code: '315632006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/315632006
  descendants_included: true
- concept_name: Cough
  concept_id: '254761'
  code:
    concept_code: '49727002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49727002
  descendants_included: true
- concept_name: Sputum finding
  concept_id: '4089228'
  code:
    concept_code: '248595008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/248595008
  descendants_included: true
- concept_name: Acute respiratory distress
  concept_id: '4191650'
  code:
    concept_code: '373895009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/373895009
  descendants_included: true
- concept_name: Dyspnea
  concept_id: '312437'
  code:
    concept_code: '267036007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/267036007
  descendants_included: true
- concept_name: Muscle pain
  concept_id: '442752'
  code:
    concept_code: '68962001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/68962001
  descendants_included: true
- concept_name: Fatigue
  concept_id: '4223659'
  code:
    concept_code: '84229001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84229001
  descendants_included: true
- concept_name: Malaise
  concept_id: '4272240'
  code:
    concept_code: '367391008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/367391008
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '1572255'
  code:
    concept_code: R53
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '439926'
  code:
    concept_code: '271795006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271795006
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '44829293'
  code:
    concept_code: '780.7'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '44823445'
  code:
    concept_code: '780.79'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '1572256'
  code:
    concept_code: R53.8
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Suspected case of COVID-19 (machine translation)
  concept_id: '710157'
  code:
    concept_code: Z03.800x001
    vocabulary_id: ICD10CN
    concept_code_url: ''
  descendants_included: false
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274061'
  code:
    concept_code: '10677711000119101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10677711000119101
  descendants_included: true
- concept_name: Influenza
  concept_id: '4266367'
  code:
    concept_code: '6142004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/6142004
  descendants_included: true
- concept_name: Influenza with CNS disorder
  concept_id: '42537960'
  code:
    concept_code: '738276008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/738276008
  descendants_included: true
- concept_name: Influenza with gastrointestinal tract involvement
  concept_id: '4112824'
  code:
    concept_code: '195929004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195929004
  descendants_included: true
- concept_name: Myocarditis due to influenza virus
  concept_id: '4299935'
  code:
    concept_code: '78046005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/78046005
  descendants_included: true
- concept_name: Otitis media due to influenza
  concept_id: '46269706'
  code:
    concept_code: '10624951000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10624951000119108
  descendants_included: true
- concept_name: Pneumonia due to Influenza A virus
  concept_id: '763011'
  code:
    concept_code: '434921000124108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/434921000124108
  descendants_included: true
- concept_name: Influenza A virus present
  concept_id: '45757528'
  code:
    concept_code: '181000124108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/181000124108
  descendants_included: true
- concept_name: Influenza B virus present
  concept_id: '4262075'
  code:
    concept_code: '441345003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/441345003
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Acute respiratory distress syndrome
  concept_id: '4195694'
  code:
    concept_code: '67782005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/67782005
  descendants_included: true
- concept_name: Acute respiratory failure
  concept_id: '319049'
  code:
    concept_code: '65710008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/65710008
  descendants_included: true
- concept_name: Acute kidney injury due to circulatory failure
  concept_id: '36716182'
  code:
    concept_code: '722095005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722095005
  descendants_included: false
- concept_name: Acute kidney injury due to hypovolemia
  concept_id: '36716183'
  code:
    concept_code: '722096006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722096006
  descendants_included: false
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: false
- concept_name: Acute kidney injury stage 1
  concept_id: '44809061'
  code:
    concept_code: '851931000000107'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851931000000107
  descendants_included: false
- concept_name: Acute kidney injury stage 2
  concept_id: '44809062'
  code:
    concept_code: '851941000000103'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851941000000103
  descendants_included: false
- concept_name: Acute kidney injury stage 3
  concept_id: '44809063'
  code:
    concept_code: '851951000000100'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851951000000100
  descendants_included: false
- concept_name: Acute nephropathy
  concept_id: '4242411'
  code:
    concept_code: '58574008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/58574008
  descendants_included: true
- concept_name: Acute kidney injury due to acute tubular necrosis due to sepsis
  concept_id: '37395517'
  code:
    concept_code: '1048491000000106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1048491000000106
  descendants_included: true
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: true
- concept_name: Clinical sepsis
  concept_id: '40487101'
  code:
    concept_code: '447931005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/447931005
  descendants_included: true
- concept_name: Menosepsis
  concept_id: '4205449'
  code:
    concept_code: '55528005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/55528005
  descendants_included: true
- concept_name: Miscarriage with septic shock
  concept_id: '4085627'
  code:
    concept_code: '18613002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/18613002
  descendants_included: true
- concept_name: Postprocedural intra-abdominal sepsis
  concept_id: '4204036'
  code:
    concept_code: '308887002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/308887002
  descendants_included: true
- concept_name: Puerperal septicemia - delivered with postnatal complication
  concept_id: '4066124'
  code:
    concept_code: '200195002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200195002
  descendants_included: true
- concept_name: Sepsis
  concept_id: '132797'
  code:
    concept_code: '91302008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/91302008
  descendants_included: true
- concept_name: Sepsis syndrome
  concept_id: '4029281'
  code:
    concept_code: '238150007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238150007
  descendants_included: true
- concept_name: Sepsis-associated encephalopathy
  concept_id: '4046106'
  code:
    concept_code: '230361008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/230361008
  descendants_included: true
- concept_name: Sepsis-associated lung injury
  concept_id: '4119941'
  code:
    concept_code: '233812001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233812001
  descendants_included: true
- concept_name: Sepsis-associated organ dysfunction
  concept_id: '4031168'
  code:
    concept_code: '238151006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238151006
  descendants_included: true
- concept_name: Septic shock
  concept_id: '196236'
  code:
    concept_code: '76571007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/76571007
  descendants_included: true
- concept_name: Systemic inflammatory response syndrome
  concept_id: '434821'
  code:
    concept_code: '238149007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238149007
  descendants_included: true
- concept_name: Transient neonatal neutropenia due to neonatal bacterial sepsis
  concept_id: '36716754'
  code:
    concept_code: '722926003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722926003
  descendants_included: true
- concept_name: Dependence on ventilator
  concept_id: '40481547'
  code:
    concept_code: '444932008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/444932008
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274061'
  code:
    concept_code: '10677711000119101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10677711000119101
  descendants_included: true
- concept_name: Influenza
  concept_id: '4266367'
  code:
    concept_code: '6142004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/6142004
  descendants_included: true
- concept_name: Influenza with CNS disorder
  concept_id: '42537960'
  code:
    concept_code: '738276008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/738276008
  descendants_included: true
- concept_name: Influenza with gastrointestinal tract involvement
  concept_id: '4112824'
  code:
    concept_code: '195929004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195929004
  descendants_included: true
- concept_name: Myocarditis due to influenza virus
  concept_id: '4299935'
  code:
    concept_code: '78046005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/78046005
  descendants_included: true
- concept_name: Otitis media due to influenza
  concept_id: '46269706'
  code:
    concept_code: '10624951000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10624951000119108
  descendants_included: true
- concept_name: Pneumonia due to Influenza A virus
  concept_id: '763011'
  code:
    concept_code: '434921000124108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/434921000124108
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '45756093'
  code:
    concept_code: U07.1
    vocabulary_id: ICD10
    concept_code_url: ''
  descendants_included: false
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '42501115'
  code:
    concept_code: U07.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Novel coronavirus infection
  concept_id: '586414'
  code:
    concept_code: U18.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Other coronavirus as the cause of diseases classified elsewhere
  concept_id: '45600471'
  code:
    concept_code: B97.29
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: false
- concept_name: Provisional assignment of new diseases or emergency use
  concept_id: '586415'
  code:
    concept_code: U18
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274061'
  code:
    concept_code: '10677711000119101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10677711000119101
  descendants_included: true
- concept_name: Influenza
  concept_id: '4266367'
  code:
    concept_code: '6142004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/6142004
  descendants_included: true
- concept_name: Influenza with CNS disorder
  concept_id: '42537960'
  code:
    concept_code: '738276008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/738276008
  descendants_included: true
- concept_name: Influenza with gastrointestinal tract involvement
  concept_id: '4112824'
  code:
    concept_code: '195929004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195929004
  descendants_included: true
- concept_name: Myocarditis due to influenza virus
  concept_id: '4299935'
  code:
    concept_code: '78046005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/78046005
  descendants_included: true
- concept_name: Otitis media due to influenza
  concept_id: '46269706'
  code:
    concept_code: '10624951000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10624951000119108
  descendants_included: true
- concept_name: Pneumonia due to Influenza A virus
  concept_id: '763011'
  code:
    concept_code: '434921000124108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/434921000124108
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Respiratory failure
  concept_id: '4256228'
  code:
    concept_code: '409622000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/409622000
  descendants_included: true
- concept_name: Respiratory insufficiency
  concept_id: '318459'
  code:
    concept_code: '409623005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/409623005
  descendants_included: true
- concept_name: Malignant neoplastic disease
  concept_id: '443392'
  code:
    concept_code: '363346000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/363346000
  descendants_included: true
- concept_name: Chronic obstructive lung disease
  concept_id: '255573'
  code:
    concept_code: '13645005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/13645005
  descendants_included: true
- concept_name: Diabetes mellitus
  concept_id: '201820'
  code:
    concept_code: '73211009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/73211009
  descendants_included: true
- concept_name: Diabetic - poor control
  concept_id: '443238'
  code:
    concept_code: '268519009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/268519009
  descendants_included: true
- concept_name: Diabetic complication
  concept_id: '442793'
  code:
    concept_code: '74627003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/74627003
  descendants_included: true
- concept_name: Heart disease
  concept_id: '321588'
  code:
    concept_code: '56265001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/56265001
  descendants_included: true
- concept_name: Hyperlipidemia
  concept_id: '432867'
  code:
    concept_code: '55822004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/55822004
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Kidney disease
  concept_id: '198124'
  code:
    concept_code: '90708001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/90708001
  descendants_included: true
- concept_name: Hepatic coma
  concept_id: '377604'
  code:
    concept_code: '72836002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/72836002
  descendants_included: false
- concept_name: Hepatic encephalopathy
  concept_id: '4029488'
  code:
    concept_code: '13920009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/13920009
  descendants_included: false
- concept_name: Hepatic failure
  concept_id: '4245975'
  code:
    concept_code: '59927004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/59927004
  descendants_included: true
- concept_name: Hepatic necrosis
  concept_id: '4337543'
  code:
    concept_code: '87248009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/87248009
  descendants_included: true
- concept_name: Ascites
  concept_id: '200528'
  code:
    concept_code: '389026000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/389026000
  descendants_included: true
- concept_name: Pressure ulcer
  concept_id: '135333'
  code:
    concept_code: '399912005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/399912005
  descendants_included: true
- concept_name: Skin ulcer
  concept_id: '4262920'
  code:
    concept_code: '46742003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/46742003
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '45756093'
  code:
    concept_code: U07.1
    vocabulary_id: ICD10
    concept_code_url: ''
  descendants_included: false
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '42501115'
  code:
    concept_code: U07.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Novel coronavirus infection
  concept_id: '586414'
  code:
    concept_code: U18.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Other coronavirus as the cause of diseases classified elsewhere
  concept_id: '45600471'
  code:
    concept_code: B97.29
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: false
- concept_name: Provisional assignment of new diseases or emergency use
  concept_id: '586415'
  code:
    concept_code: U18
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Dependence on ventilator
  concept_id: '40481547'
  code:
    concept_code: '444932008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/444932008
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Acute respiratory distress syndrome
  concept_id: '4195694'
  code:
    concept_code: '67782005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/67782005
  descendants_included: true
- concept_name: Acute respiratory failure
  concept_id: '319049'
  code:
    concept_code: '65710008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/65710008
  descendants_included: true
- concept_name: Acute kidney injury due to circulatory failure
  concept_id: '36716182'
  code:
    concept_code: '722095005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722095005
  descendants_included: false
- concept_name: Acute kidney injury due to hypovolemia
  concept_id: '36716183'
  code:
    concept_code: '722096006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722096006
  descendants_included: false
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: false
- concept_name: Acute kidney injury stage 1
  concept_id: '44809061'
  code:
    concept_code: '851931000000107'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851931000000107
  descendants_included: false
- concept_name: Acute kidney injury stage 2
  concept_id: '44809062'
  code:
    concept_code: '851941000000103'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851941000000103
  descendants_included: false
- concept_name: Acute kidney injury stage 3
  concept_id: '44809063'
  code:
    concept_code: '851951000000100'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851951000000100
  descendants_included: false
- concept_name: Acute nephropathy
  concept_id: '4242411'
  code:
    concept_code: '58574008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/58574008
  descendants_included: true
- concept_name: Acute kidney injury due to acute tubular necrosis due to sepsis
  concept_id: '37395517'
  code:
    concept_code: '1048491000000106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1048491000000106
  descendants_included: true
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: true
- concept_name: Clinical sepsis
  concept_id: '40487101'
  code:
    concept_code: '447931005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/447931005
  descendants_included: true
- concept_name: Menosepsis
  concept_id: '4205449'
  code:
    concept_code: '55528005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/55528005
  descendants_included: true
- concept_name: Miscarriage with septic shock
  concept_id: '4085627'
  code:
    concept_code: '18613002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/18613002
  descendants_included: true
- concept_name: Postprocedural intra-abdominal sepsis
  concept_id: '4204036'
  code:
    concept_code: '308887002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/308887002
  descendants_included: true
- concept_name: Puerperal septicemia - delivered with postnatal complication
  concept_id: '4066124'
  code:
    concept_code: '200195002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200195002
  descendants_included: true
- concept_name: Sepsis
  concept_id: '132797'
  code:
    concept_code: '91302008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/91302008
  descendants_included: true
- concept_name: Sepsis syndrome
  concept_id: '4029281'
  code:
    concept_code: '238150007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238150007
  descendants_included: true
- concept_name: Sepsis-associated encephalopathy
  concept_id: '4046106'
  code:
    concept_code: '230361008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/230361008
  descendants_included: true
- concept_name: Sepsis-associated lung injury
  concept_id: '4119941'
  code:
    concept_code: '233812001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233812001
  descendants_included: true
- concept_name: Sepsis-associated organ dysfunction
  concept_id: '4031168'
  code:
    concept_code: '238151006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238151006
  descendants_included: true
- concept_name: Septic shock
  concept_id: '196236'
  code:
    concept_code: '76571007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/76571007
  descendants_included: true
- concept_name: Systemic inflammatory response syndrome
  concept_id: '434821'
  code:
    concept_code: '238149007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238149007
  descendants_included: true
- concept_name: Transient neonatal neutropenia due to neonatal bacterial sepsis
  concept_id: '36716754'
  code:
    concept_code: '722926003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722926003
  descendants_included: true
- concept_name: Dependence on ventilator
  concept_id: '40481547'
  code:
    concept_code: '444932008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/444932008
  descendants_included: true
- concept_name: Respiratory failure
  concept_id: '4256228'
  code:
    concept_code: '409622000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/409622000
  descendants_included: true
- concept_name: Respiratory insufficiency
  concept_id: '318459'
  code:
    concept_code: '409623005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/409623005
  descendants_included: true
- concept_name: Anemia
  concept_id: '439777'
  code:
    concept_code: '271737000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271737000
  descendants_included: true
- concept_name: Aplastic anemia
  concept_id: '137829'
  code:
    concept_code: '306058006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/306058006
  descendants_included: true
- concept_name: Sickle cell-hemoglobin C disease
  concept_id: '24006'
  code:
    concept_code: '35434009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/35434009
  descendants_included: true
- concept_name: Sickle cell trait
  concept_id: '25518'
  code:
    concept_code: '16402000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/16402000
  descendants_included: true
- concept_name: Malignant neoplastic disease
  concept_id: '443392'
  code:
    concept_code: '363346000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/363346000
  descendants_included: true
- concept_name: Chronic obstructive lung disease
  concept_id: '255573'
  code:
    concept_code: '13645005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/13645005
  descendants_included: true
- concept_name: Atherosclerosis of arteries of the extremities
  concept_id: '315558'
  code:
    concept_code: '51274000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/51274000
  descendants_included: true
- concept_name: Coronary artery disease
  concept_id: '35205164'
  code:
    concept_code: '10011078'
    vocabulary_id: MedDRA
    concept_code_url: ''
  descendants_included: true
- concept_name: Ulcer of ankle due to atherosclerosis of native artery of limb
  concept_id: '46270348'
  code:
    concept_code: '284891000119106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/284891000119106
  descendants_included: true
- concept_name: Ulcer of calf due to atherosclerosis of native artery of limb
  concept_id: '46270350'
  code:
    concept_code: '284901000119105'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/284901000119105
  descendants_included: true
- concept_name: Amnestic disorder
  concept_id: '372608'
  code:
    concept_code: '3298001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/3298001
  descendants_included: false
- concept_name: Degenerative brain disorder
  concept_id: '375239'
  code:
    concept_code: '52522001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/52522001
  descendants_included: false
- concept_name: Dementia
  concept_id: '4182210'
  code:
    concept_code: '52448006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/52448006
  descendants_included: true
- concept_name: Frontotemporal dementia
  concept_id: '4043378'
  code:
    concept_code: '230270009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/230270009
  descendants_included: false
- concept_name: Pick's disease
  concept_id: '436092'
  code:
    concept_code: '13092008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/13092008
  descendants_included: false
- concept_name: Senile degeneration of brain
  concept_id: '373179'
  code:
    concept_code: '45864009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/45864009
  descendants_included: false
- concept_name: Senility
  concept_id: '435088'
  code:
    concept_code: '271873000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271873000
  descendants_included: false
- concept_name: Diabetes mellitus
  concept_id: '201820'
  code:
    concept_code: '73211009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/73211009
  descendants_included: true
- concept_name: Diabetic - poor control
  concept_id: '443238'
  code:
    concept_code: '268519009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/268519009
  descendants_included: true
- concept_name: Diabetic complication
  concept_id: '442793'
  code:
    concept_code: '74627003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/74627003
  descendants_included: true
- concept_name: Heart disease
  concept_id: '321588'
  code:
    concept_code: '56265001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/56265001
  descendants_included: true
- concept_name: Hyperlipidemia
  concept_id: '432867'
  code:
    concept_code: '55822004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/55822004
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Kidney disease
  concept_id: '198124'
  code:
    concept_code: '90708001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/90708001
  descendants_included: true
- concept_name: Hepatic coma
  concept_id: '377604'
  code:
    concept_code: '72836002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/72836002
  descendants_included: false
- concept_name: Hepatic encephalopathy
  concept_id: '4029488'
  code:
    concept_code: '13920009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/13920009
  descendants_included: false
- concept_name: Hepatic failure
  concept_id: '4245975'
  code:
    concept_code: '59927004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/59927004
  descendants_included: true
- concept_name: Hepatic necrosis
  concept_id: '4337543'
  code:
    concept_code: '87248009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/87248009
  descendants_included: true
- concept_name: Ascites
  concept_id: '200528'
  code:
    concept_code: '389026000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/389026000
  descendants_included: true
- concept_name: Pressure ulcer
  concept_id: '135333'
  code:
    concept_code: '399912005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/399912005
  descendants_included: true
- concept_name: Skin ulcer
  concept_id: '4262920'
  code:
    concept_code: '46742003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/46742003
  descendants_included: true
- concept_name: Acute rheumatic heart disease
  concept_id: '313500'
  code:
    concept_code: '312591002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/312591002
  descendants_included: true
- concept_name: Rheumatic heart disease
  concept_id: '319825'
  code:
    concept_code: '23685000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/23685000
  descendants_included: true
- concept_name: Chronic bronchitis
  concept_id: '255841'
  code:
    concept_code: '63480004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/63480004
  descendants_included: true
- concept_name: Chronic obstructive lung disease
  concept_id: '255573'
  code:
    concept_code: '13645005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/13645005
  descendants_included: true
- concept_name: Angina pectoris
  concept_id: '321318'
  code:
    concept_code: '194828000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/194828000
  descendants_included: true
- concept_name: Coronary artery spasm
  concept_id: '4127089'
  code:
    concept_code: '23687008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/23687008
  descendants_included: true
- concept_name: Prinzmetal angina
  concept_id: '315830'
  code:
    concept_code: '87343002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/87343002
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '45756093'
  code:
    concept_code: U07.1
    vocabulary_id: ICD10
    concept_code_url: ''
  descendants_included: false
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '42501115'
  code:
    concept_code: U07.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Novel coronavirus infection
  concept_id: '586414'
  code:
    concept_code: U18.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Other coronavirus as the cause of diseases classified elsewhere
  concept_id: '45600471'
  code:
    concept_code: B97.29
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: false
- concept_name: Provisional assignment of new diseases or emergency use
  concept_id: '586415'
  code:
    concept_code: U18
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Febrile convulsion
  concept_id: '444413'
  code:
    concept_code: '41497008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/41497008
  descendants_included: true
- concept_name: Fever
  concept_id: '437663'
  code:
    concept_code: '386661006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/386661006
  descendants_included: true
- concept_name: Cough
  concept_id: '254761'
  code:
    concept_code: '49727002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49727002
  descendants_included: true
- concept_name: Sputum finding
  concept_id: '4089228'
  code:
    concept_code: '248595008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/248595008
  descendants_included: true
- concept_name: Acute respiratory distress
  concept_id: '4191650'
  code:
    concept_code: '373895009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/373895009
  descendants_included: true
- concept_name: Dyspnea
  concept_id: '312437'
  code:
    concept_code: '267036007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/267036007
  descendants_included: true
- concept_name: Muscle pain
  concept_id: '442752'
  code:
    concept_code: '68962001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/68962001
  descendants_included: true
- concept_name: Fatigue
  concept_id: '4223659'
  code:
    concept_code: '84229001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84229001
  descendants_included: true
- concept_name: Malaise
  concept_id: '4272240'
  code:
    concept_code: '367391008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/367391008
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '1572255'
  code:
    concept_code: R53
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '439926'
  code:
    concept_code: '271795006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271795006
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '44829293'
  code:
    concept_code: '780.7'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '44823445'
  code:
    concept_code: '780.79'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '1572256'
  code:
    concept_code: R53.8
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Suspected case of COVID-19 (machine translation)
  concept_id: '710157'
  code:
    concept_code: Z03.800x001
    vocabulary_id: ICD10CN
    concept_code_url: ''
  descendants_included: false
- concept_name: Suspected coronavirus infection
  concept_id: '45763724'
  code:
    concept_code: '700217006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/700217006
  descendants_included: false
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274061'
  code:
    concept_code: '10677711000119101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10677711000119101
  descendants_included: true
- concept_name: Influenza
  concept_id: '4266367'
  code:
    concept_code: '6142004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/6142004
  descendants_included: true
- concept_name: Influenza with CNS disorder
  concept_id: '42537960'
  code:
    concept_code: '738276008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/738276008
  descendants_included: true
- concept_name: Influenza with gastrointestinal tract involvement
  concept_id: '4112824'
  code:
    concept_code: '195929004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195929004
  descendants_included: true
- concept_name: Myocarditis due to influenza virus
  concept_id: '4299935'
  code:
    concept_code: '78046005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/78046005
  descendants_included: true
- concept_name: Otitis media due to influenza
  concept_id: '46269706'
  code:
    concept_code: '10624951000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10624951000119108
  descendants_included: true
- concept_name: Pneumonia due to Influenza A virus
  concept_id: '763011'
  code:
    concept_code: '434921000124108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/434921000124108
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '45756093'
  code:
    concept_code: U07.1
    vocabulary_id: ICD10
    concept_code_url: ''
  descendants_included: false
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '42501115'
  code:
    concept_code: U07.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Novel coronavirus infection
  concept_id: '586414'
  code:
    concept_code: U18.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Other coronavirus as the cause of diseases classified elsewhere
  concept_id: '45600471'
  code:
    concept_code: B97.29
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: false
- concept_name: Provisional assignment of new diseases or emergency use
  concept_id: '586415'
  code:
    concept_code: U18
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Febrile convulsion
  concept_id: '444413'
  code:
    concept_code: '41497008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/41497008
  descendants_included: true
- concept_name: Fever
  concept_id: '437663'
  code:
    concept_code: '386661006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/386661006
  descendants_included: true
- concept_name: Cough
  concept_id: '254761'
  code:
    concept_code: '49727002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49727002
  descendants_included: true
- concept_name: Sputum finding
  concept_id: '4089228'
  code:
    concept_code: '248595008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/248595008
  descendants_included: true
- concept_name: Acute respiratory distress
  concept_id: '4191650'
  code:
    concept_code: '373895009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/373895009
  descendants_included: true
- concept_name: Dyspnea
  concept_id: '312437'
  code:
    concept_code: '267036007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/267036007
  descendants_included: true
- concept_name: Muscle pain
  concept_id: '442752'
  code:
    concept_code: '68962001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/68962001
  descendants_included: true
- concept_name: Fatigue
  concept_id: '4223659'
  code:
    concept_code: '84229001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84229001
  descendants_included: true
- concept_name: Malaise
  concept_id: '4272240'
  code:
    concept_code: '367391008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/367391008
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '1572255'
  code:
    concept_code: R53
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '439926'
  code:
    concept_code: '271795006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271795006
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '44829293'
  code:
    concept_code: '780.7'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '44823445'
  code:
    concept_code: '780.79'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '1572256'
  code:
    concept_code: R53.8
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274061'
  code:
    concept_code: '10677711000119101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10677711000119101
  descendants_included: true
- concept_name: Influenza
  concept_id: '4266367'
  code:
    concept_code: '6142004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/6142004
  descendants_included: true
- concept_name: Influenza with CNS disorder
  concept_id: '42537960'
  code:
    concept_code: '738276008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/738276008
  descendants_included: true
- concept_name: Influenza with gastrointestinal tract involvement
  concept_id: '4112824'
  code:
    concept_code: '195929004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195929004
  descendants_included: true
- concept_name: Myocarditis due to influenza virus
  concept_id: '4299935'
  code:
    concept_code: '78046005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/78046005
  descendants_included: true
- concept_name: Otitis media due to influenza
  concept_id: '46269706'
  code:
    concept_code: '10624951000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10624951000119108
  descendants_included: true
- concept_name: Pneumonia due to Influenza A virus
  concept_id: '763011'
  code:
    concept_code: '434921000124108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/434921000124108
  descendants_included: true
- concept_name: Diabetic complication
  concept_id: '442793'
  code:
    concept_code: '74627003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/74627003
  descendants_included: true
- concept_name: Diabetes mellitus without complication
  concept_id: '4008576'
  code:
    concept_code: '111552007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/111552007
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Novel coronavirus infection
  concept_id: '586414'
  code:
    concept_code: U18.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Other coronavirus as the cause of diseases classified elsewhere
  concept_id: '45600471'
  code:
    concept_code: B97.29
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: false
- concept_name: Provisional assignment of new diseases or emergency use
  concept_id: '586415'
  code:
    concept_code: U18
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Febrile convulsion
  concept_id: '444413'
  code:
    concept_code: '41497008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/41497008
  descendants_included: true
- concept_name: Fever
  concept_id: '437663'
  code:
    concept_code: '386661006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/386661006
  descendants_included: true
- concept_name: Fever greater than 100.4 Fahrenheit
  concept_id: '4141062'
  code:
    concept_code: '426000000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/426000000
  descendants_included: true
- concept_name: O/E - fever
  concept_id: '4152360'
  code:
    concept_code: '271897009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271897009
  descendants_included: true
- concept_name: O/E - level of fever
  concept_id: '4039793'
  code:
    concept_code: '164299002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/164299002
  descendants_included: true
- concept_name: O/E - oral temperature
  concept_id: '4077057'
  code:
    concept_code: '275874003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/275874003
  descendants_included: true
- concept_name: O/E - rectal temperature
  concept_id: '4039791'
  code:
    concept_code: '164294007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/164294007
  descendants_included: true
- concept_name: O/E - tympanic temperature
  concept_id: '4151775'
  code:
    concept_code: '315632006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/315632006
  descendants_included: true
- concept_name: Cough
  concept_id: '254761'
  code:
    concept_code: '49727002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49727002
  descendants_included: true
- concept_name: Sputum finding
  concept_id: '4089228'
  code:
    concept_code: '248595008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/248595008
  descendants_included: true
- concept_name: Acute respiratory distress
  concept_id: '4191650'
  code:
    concept_code: '373895009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/373895009
  descendants_included: true
- concept_name: Dyspnea
  concept_id: '312437'
  code:
    concept_code: '267036007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/267036007
  descendants_included: true
- concept_name: Muscle pain
  concept_id: '442752'
  code:
    concept_code: '68962001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/68962001
  descendants_included: true
- concept_name: Fatigue
  concept_id: '4223659'
  code:
    concept_code: '84229001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84229001
  descendants_included: true
- concept_name: Malaise
  concept_id: '4272240'
  code:
    concept_code: '367391008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/367391008
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '1572255'
  code:
    concept_code: R53
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '439926'
  code:
    concept_code: '271795006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271795006
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '44829293'
  code:
    concept_code: '780.7'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '44823445'
  code:
    concept_code: '780.79'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '1572256'
  code:
    concept_code: R53.8
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Suspected case of COVID-19 (machine translation)
  concept_id: '710157'
  code:
    concept_code: Z03.800x001
    vocabulary_id: ICD10CN
    concept_code_url: ''
  descendants_included: false
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274061'
  code:
    concept_code: '10677711000119101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10677711000119101
  descendants_included: true
- concept_name: Influenza
  concept_id: '4266367'
  code:
    concept_code: '6142004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/6142004
  descendants_included: true
- concept_name: Influenza with CNS disorder
  concept_id: '42537960'
  code:
    concept_code: '738276008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/738276008
  descendants_included: true
- concept_name: Influenza with gastrointestinal tract involvement
  concept_id: '4112824'
  code:
    concept_code: '195929004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195929004
  descendants_included: true
- concept_name: Myocarditis due to influenza virus
  concept_id: '4299935'
  code:
    concept_code: '78046005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/78046005
  descendants_included: true
- concept_name: Otitis media due to influenza
  concept_id: '46269706'
  code:
    concept_code: '10624951000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10624951000119108
  descendants_included: true
- concept_name: Pneumonia due to Influenza A virus
  concept_id: '763011'
  code:
    concept_code: '434921000124108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/434921000124108
  descendants_included: true
- concept_name: Influenza A virus present
  concept_id: '45757528'
  code:
    concept_code: '181000124108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/181000124108
  descendants_included: true
- concept_name: Influenza B virus present
  concept_id: '4262075'
  code:
    concept_code: '441345003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/441345003
  descendants_included: true
- concept_name: Heart murmur
  concept_id: '316822'
  code:
    concept_code: '88610006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/88610006
  descendants_included: true
- concept_name: Heart valve disorder
  concept_id: '4281749'
  code:
    concept_code: '368009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/368009
  descendants_included: true
- concept_name: Carditis due to rheumatic fever
  concept_id: '45766036'
  code:
    concept_code: '703119002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/703119002
  descendants_included: true
- concept_name: Erythema marginatum in acute rheumatic fever
  concept_id: '4064046'
  code:
    concept_code: '200951007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200951007
  descendants_included: true
- concept_name: Rheumatic fever
  concept_id: '442313'
  code:
    concept_code: '58718002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/58718002
  descendants_included: true
- concept_name: Carditis
  concept_id: '4164489'
  code:
    concept_code: '399617002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/399617002
  descendants_included: true
- concept_name: Pericarditis
  concept_id: '4138837'
  code:
    concept_code: '3238004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/3238004
  descendants_included: true
- concept_name: Heart failure
  concept_id: '316139'
  code:
    concept_code: '84114007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84114007
  descendants_included: true
- concept_name: Heart failure
  concept_id: '316139'
  code:
    concept_code: '84114007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84114007
  descendants_included: true
- concept_name: Acquired cardiac septal defect
  concept_id: '4108950'
  code:
    concept_code: '195137008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195137008
  descendants_included: true
- concept_name: Aneurysm of coronary vessels
  concept_id: '316427'
  code:
    concept_code: '50570003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/50570003
  descendants_included: true
- concept_name: Aneurysm of heart
  concept_id: '438168'
  code:
    concept_code: '65340007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/65340007
  descendants_included: true
- concept_name: Cardiomegaly
  concept_id: '314658'
  code:
    concept_code: '8186001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/8186001
  descendants_included: true
- concept_name: Mural thrombus of heart
  concept_id: '4237062'
  code:
    concept_code: '91335003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/91335003
  descendants_included: true
- concept_name: Myocardial degeneration
  concept_id: '321320'
  code:
    concept_code: '64077000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/64077000
  descendants_included: true
- concept_name: Rupture of chordae tendineae
  concept_id: '438171'
  code:
    concept_code: '274098004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/274098004
  descendants_included: true
- concept_name: Rupture of papillary muscle
  concept_id: '432937'
  code:
    concept_code: '5919001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/5919001
  descendants_included: true
- concept_name: Takotsubo cardiomyopathy
  concept_id: '40479589'
  code:
    concept_code: '441541008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/441541008
  descendants_included: true
- concept_name: Disorder of lower respiratory system
  concept_id: '4027553'
  code:
    concept_code: '128272009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/128272009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Pulmonary heart disease
  concept_id: '4167085'
  code:
    concept_code: '274096000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/274096000
  descendants_included: true
- concept_name: Pulmonary arterial hypertension
  concept_id: '4013643'
  code:
    concept_code: '11399002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/11399002
  descendants_included: true
- concept_name: Arteriovenous fistula of pulmonary vessels
  concept_id: '441593'
  code:
    concept_code: '111289009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/111289009
  descendants_included: true
- concept_name: Eisenmenger's syndrome
  concept_id: '40493243'
  code:
    concept_code: '445928005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/445928005
  descendants_included: true
- concept_name: Pulmonary artery aneurysm
  concept_id: '433783'
  code:
    concept_code: '194892009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/194892009
  descendants_included: true
- concept_name: Kyphoscoliotic heart disease
  concept_id: '317000'
  code:
    concept_code: '45650007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/45650007
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Acute respiratory distress syndrome
  concept_id: '4195694'
  code:
    concept_code: '67782005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/67782005
  descendants_included: true
- concept_name: Acute respiratory failure
  concept_id: '319049'
  code:
    concept_code: '65710008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/65710008
  descendants_included: true
- concept_name: Acute kidney injury due to circulatory failure
  concept_id: '36716182'
  code:
    concept_code: '722095005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722095005
  descendants_included: false
- concept_name: Acute kidney injury due to hypovolemia
  concept_id: '36716183'
  code:
    concept_code: '722096006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722096006
  descendants_included: false
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: false
- concept_name: Acute kidney injury stage 1
  concept_id: '44809061'
  code:
    concept_code: '851931000000107'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851931000000107
  descendants_included: false
- concept_name: Acute kidney injury stage 2
  concept_id: '44809062'
  code:
    concept_code: '851941000000103'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851941000000103
  descendants_included: false
- concept_name: Acute kidney injury stage 3
  concept_id: '44809063'
  code:
    concept_code: '851951000000100'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851951000000100
  descendants_included: false
- concept_name: Acute nephropathy
  concept_id: '4242411'
  code:
    concept_code: '58574008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/58574008
  descendants_included: true
- concept_name: Acute kidney injury due to acute tubular necrosis due to sepsis
  concept_id: '37395517'
  code:
    concept_code: '1048491000000106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1048491000000106
  descendants_included: true
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: true
- concept_name: Clinical sepsis
  concept_id: '40487101'
  code:
    concept_code: '447931005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/447931005
  descendants_included: true
- concept_name: Menosepsis
  concept_id: '4205449'
  code:
    concept_code: '55528005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/55528005
  descendants_included: true
- concept_name: Miscarriage with septic shock
  concept_id: '4085627'
  code:
    concept_code: '18613002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/18613002
  descendants_included: true
- concept_name: Postprocedural intra-abdominal sepsis
  concept_id: '4204036'
  code:
    concept_code: '308887002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/308887002
  descendants_included: true
- concept_name: Puerperal septicemia - delivered with postnatal complication
  concept_id: '4066124'
  code:
    concept_code: '200195002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200195002
  descendants_included: true
- concept_name: Sepsis
  concept_id: '132797'
  code:
    concept_code: '91302008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/91302008
  descendants_included: true
- concept_name: Sepsis syndrome
  concept_id: '4029281'
  code:
    concept_code: '238150007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238150007
  descendants_included: true
- concept_name: Sepsis-associated encephalopathy
  concept_id: '4046106'
  code:
    concept_code: '230361008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/230361008
  descendants_included: true
- concept_name: Sepsis-associated lung injury
  concept_id: '4119941'
  code:
    concept_code: '233812001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233812001
  descendants_included: true
- concept_name: Sepsis-associated organ dysfunction
  concept_id: '4031168'
  code:
    concept_code: '238151006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238151006
  descendants_included: true
- concept_name: Septic shock
  concept_id: '196236'
  code:
    concept_code: '76571007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/76571007
  descendants_included: true
- concept_name: Systemic inflammatory response syndrome
  concept_id: '434821'
  code:
    concept_code: '238149007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238149007
  descendants_included: true
- concept_name: Transient neonatal neutropenia due to neonatal bacterial sepsis
  concept_id: '36716754'
  code:
    concept_code: '722926003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722926003
  descendants_included: true
- concept_name: Dependence on ventilator
  concept_id: '40481547'
  code:
    concept_code: '444932008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/444932008
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Acute respiratory distress syndrome
  concept_id: '4195694'
  code:
    concept_code: '67782005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/67782005
  descendants_included: true
- concept_name: Acute respiratory failure
  concept_id: '319049'
  code:
    concept_code: '65710008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/65710008
  descendants_included: true
- concept_name: Acute kidney injury due to circulatory failure
  concept_id: '36716182'
  code:
    concept_code: '722095005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722095005
  descendants_included: false
- concept_name: Acute kidney injury due to hypovolemia
  concept_id: '36716183'
  code:
    concept_code: '722096006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722096006
  descendants_included: false
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: false
- concept_name: Acute kidney injury stage 1
  concept_id: '44809061'
  code:
    concept_code: '851931000000107'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851931000000107
  descendants_included: false
- concept_name: Acute kidney injury stage 2
  concept_id: '44809062'
  code:
    concept_code: '851941000000103'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851941000000103
  descendants_included: false
- concept_name: Acute kidney injury stage 3
  concept_id: '44809063'
  code:
    concept_code: '851951000000100'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851951000000100
  descendants_included: false
- concept_name: Acute nephropathy
  concept_id: '4242411'
  code:
    concept_code: '58574008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/58574008
  descendants_included: true
- concept_name: Acute kidney injury due to acute tubular necrosis due to sepsis
  concept_id: '37395517'
  code:
    concept_code: '1048491000000106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1048491000000106
  descendants_included: true
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: true
- concept_name: Clinical sepsis
  concept_id: '40487101'
  code:
    concept_code: '447931005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/447931005
  descendants_included: true
- concept_name: Menosepsis
  concept_id: '4205449'
  code:
    concept_code: '55528005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/55528005
  descendants_included: true
- concept_name: Miscarriage with septic shock
  concept_id: '4085627'
  code:
    concept_code: '18613002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/18613002
  descendants_included: true
- concept_name: Postprocedural intra-abdominal sepsis
  concept_id: '4204036'
  code:
    concept_code: '308887002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/308887002
  descendants_included: true
- concept_name: Puerperal septicemia - delivered with postnatal complication
  concept_id: '4066124'
  code:
    concept_code: '200195002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200195002
  descendants_included: true
- concept_name: Sepsis
  concept_id: '132797'
  code:
    concept_code: '91302008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/91302008
  descendants_included: true
- concept_name: Sepsis syndrome
  concept_id: '4029281'
  code:
    concept_code: '238150007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238150007
  descendants_included: true
- concept_name: Sepsis-associated encephalopathy
  concept_id: '4046106'
  code:
    concept_code: '230361008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/230361008
  descendants_included: true
- concept_name: Sepsis-associated lung injury
  concept_id: '4119941'
  code:
    concept_code: '233812001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233812001
  descendants_included: true
- concept_name: Sepsis-associated organ dysfunction
  concept_id: '4031168'
  code:
    concept_code: '238151006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238151006
  descendants_included: true
- concept_name: Septic shock
  concept_id: '196236'
  code:
    concept_code: '76571007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/76571007
  descendants_included: true
- concept_name: Systemic inflammatory response syndrome
  concept_id: '434821'
  code:
    concept_code: '238149007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238149007
  descendants_included: true
- concept_name: Transient neonatal neutropenia due to neonatal bacterial sepsis
  concept_id: '36716754'
  code:
    concept_code: '722926003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722926003
  descendants_included: true
- concept_name: Dependence on ventilator
  concept_id: '40481547'
  code:
    concept_code: '444932008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/444932008
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '45756093'
  code:
    concept_code: U07.1
    vocabulary_id: ICD10
    concept_code_url: ''
  descendants_included: false
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '42501115'
  code:
    concept_code: U07.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Novel coronavirus infection
  concept_id: '586414'
  code:
    concept_code: U18.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Other coronavirus as the cause of diseases classified elsewhere
  concept_id: '45600471'
  code:
    concept_code: B97.29
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: false
- concept_name: Provisional assignment of new diseases or emergency use
  concept_id: '586415'
  code:
    concept_code: U18
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Febrile convulsion
  concept_id: '444413'
  code:
    concept_code: '41497008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/41497008
  descendants_included: true
- concept_name: Fever
  concept_id: '437663'
  code:
    concept_code: '386661006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/386661006
  descendants_included: true
- concept_name: Cough
  concept_id: '254761'
  code:
    concept_code: '49727002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49727002
  descendants_included: true
- concept_name: Sputum finding
  concept_id: '4089228'
  code:
    concept_code: '248595008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/248595008
  descendants_included: true
- concept_name: Acute respiratory distress
  concept_id: '4191650'
  code:
    concept_code: '373895009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/373895009
  descendants_included: true
- concept_name: Dyspnea
  concept_id: '312437'
  code:
    concept_code: '267036007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/267036007
  descendants_included: true
- concept_name: Muscle pain
  concept_id: '442752'
  code:
    concept_code: '68962001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/68962001
  descendants_included: true
- concept_name: Fatigue
  concept_id: '4223659'
  code:
    concept_code: '84229001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84229001
  descendants_included: true
- concept_name: Malaise
  concept_id: '4272240'
  code:
    concept_code: '367391008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/367391008
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '1572255'
  code:
    concept_code: R53
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '439926'
  code:
    concept_code: '271795006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271795006
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '44829293'
  code:
    concept_code: '780.7'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '44823445'
  code:
    concept_code: '780.79'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '1572256'
  code:
    concept_code: R53.8
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Suspected case of COVID-19 (machine translation)
  concept_id: '710157'
  code:
    concept_code: Z03.800x001
    vocabulary_id: ICD10CN
    concept_code_url: ''
  descendants_included: false
- concept_name: Suspected coronavirus infection
  concept_id: '45763724'
  code:
    concept_code: '700217006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/700217006
  descendants_included: false
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274061'
  code:
    concept_code: '10677711000119101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10677711000119101
  descendants_included: true
- concept_name: Influenza
  concept_id: '4266367'
  code:
    concept_code: '6142004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/6142004
  descendants_included: true
- concept_name: Influenza with CNS disorder
  concept_id: '42537960'
  code:
    concept_code: '738276008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/738276008
  descendants_included: true
- concept_name: Influenza with gastrointestinal tract involvement
  concept_id: '4112824'
  code:
    concept_code: '195929004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195929004
  descendants_included: true
- concept_name: Myocarditis due to influenza virus
  concept_id: '4299935'
  code:
    concept_code: '78046005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/78046005
  descendants_included: true
- concept_name: Otitis media due to influenza
  concept_id: '46269706'
  code:
    concept_code: '10624951000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10624951000119108
  descendants_included: true
- concept_name: Pneumonia due to Influenza A virus
  concept_id: '763011'
  code:
    concept_code: '434921000124108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/434921000124108
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Acute respiratory distress syndrome
  concept_id: '4195694'
  code:
    concept_code: '67782005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/67782005
  descendants_included: true
- concept_name: Acute respiratory failure
  concept_id: '319049'
  code:
    concept_code: '65710008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/65710008
  descendants_included: true
- concept_name: Acute kidney injury due to circulatory failure
  concept_id: '36716182'
  code:
    concept_code: '722095005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722095005
  descendants_included: false
- concept_name: Acute kidney injury due to hypovolemia
  concept_id: '36716183'
  code:
    concept_code: '722096006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722096006
  descendants_included: false
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: false
- concept_name: Acute kidney injury stage 1
  concept_id: '44809061'
  code:
    concept_code: '851931000000107'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851931000000107
  descendants_included: false
- concept_name: Acute kidney injury stage 2
  concept_id: '44809062'
  code:
    concept_code: '851941000000103'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851941000000103
  descendants_included: false
- concept_name: Acute kidney injury stage 3
  concept_id: '44809063'
  code:
    concept_code: '851951000000100'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851951000000100
  descendants_included: false
- concept_name: Acute nephropathy
  concept_id: '4242411'
  code:
    concept_code: '58574008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/58574008
  descendants_included: true
- concept_name: Acute kidney injury due to acute tubular necrosis due to sepsis
  concept_id: '37395517'
  code:
    concept_code: '1048491000000106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1048491000000106
  descendants_included: true
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: true
- concept_name: Clinical sepsis
  concept_id: '40487101'
  code:
    concept_code: '447931005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/447931005
  descendants_included: true
- concept_name: Menosepsis
  concept_id: '4205449'
  code:
    concept_code: '55528005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/55528005
  descendants_included: true
- concept_name: Miscarriage with septic shock
  concept_id: '4085627'
  code:
    concept_code: '18613002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/18613002
  descendants_included: true
- concept_name: Postprocedural intra-abdominal sepsis
  concept_id: '4204036'
  code:
    concept_code: '308887002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/308887002
  descendants_included: true
- concept_name: Puerperal septicemia - delivered with postnatal complication
  concept_id: '4066124'
  code:
    concept_code: '200195002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200195002
  descendants_included: true
- concept_name: Sepsis
  concept_id: '132797'
  code:
    concept_code: '91302008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/91302008
  descendants_included: true
- concept_name: Sepsis syndrome
  concept_id: '4029281'
  code:
    concept_code: '238150007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238150007
  descendants_included: true
- concept_name: Sepsis-associated encephalopathy
  concept_id: '4046106'
  code:
    concept_code: '230361008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/230361008
  descendants_included: true
- concept_name: Sepsis-associated lung injury
  concept_id: '4119941'
  code:
    concept_code: '233812001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233812001
  descendants_included: true
- concept_name: Sepsis-associated organ dysfunction
  concept_id: '4031168'
  code:
    concept_code: '238151006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238151006
  descendants_included: true
- concept_name: Septic shock
  concept_id: '196236'
  code:
    concept_code: '76571007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/76571007
  descendants_included: true
- concept_name: Systemic inflammatory response syndrome
  concept_id: '434821'
  code:
    concept_code: '238149007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238149007
  descendants_included: true
- concept_name: Transient neonatal neutropenia due to neonatal bacterial sepsis
  concept_id: '36716754'
  code:
    concept_code: '722926003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722926003
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '45756093'
  code:
    concept_code: U07.1
    vocabulary_id: ICD10
    concept_code_url: ''
  descendants_included: false
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '42501115'
  code:
    concept_code: U07.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Novel coronavirus infection
  concept_id: '586414'
  code:
    concept_code: U18.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Other coronavirus as the cause of diseases classified elsewhere
  concept_id: '45600471'
  code:
    concept_code: B97.29
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: false
- concept_name: Provisional assignment of new diseases or emergency use
  concept_id: '586415'
  code:
    concept_code: U18
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Febrile convulsion
  concept_id: '444413'
  code:
    concept_code: '41497008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/41497008
  descendants_included: true
- concept_name: Fever
  concept_id: '437663'
  code:
    concept_code: '386661006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/386661006
  descendants_included: true
- concept_name: Cough
  concept_id: '254761'
  code:
    concept_code: '49727002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49727002
  descendants_included: true
- concept_name: Sputum finding
  concept_id: '4089228'
  code:
    concept_code: '248595008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/248595008
  descendants_included: true
- concept_name: Acute respiratory distress
  concept_id: '4191650'
  code:
    concept_code: '373895009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/373895009
  descendants_included: true
- concept_name: Dyspnea
  concept_id: '312437'
  code:
    concept_code: '267036007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/267036007
  descendants_included: true
- concept_name: Muscle pain
  concept_id: '442752'
  code:
    concept_code: '68962001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/68962001
  descendants_included: true
- concept_name: Fatigue
  concept_id: '4223659'
  code:
    concept_code: '84229001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84229001
  descendants_included: true
- concept_name: Malaise
  concept_id: '4272240'
  code:
    concept_code: '367391008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/367391008
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '1572255'
  code:
    concept_code: R53
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '439926'
  code:
    concept_code: '271795006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271795006
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '44829293'
  code:
    concept_code: '780.7'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '44823445'
  code:
    concept_code: '780.79'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '1572256'
  code:
    concept_code: R53.8
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274061'
  code:
    concept_code: '10677711000119101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10677711000119101
  descendants_included: true
- concept_name: Influenza
  concept_id: '4266367'
  code:
    concept_code: '6142004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/6142004
  descendants_included: true
- concept_name: Influenza with CNS disorder
  concept_id: '42537960'
  code:
    concept_code: '738276008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/738276008
  descendants_included: true
- concept_name: Influenza with gastrointestinal tract involvement
  concept_id: '4112824'
  code:
    concept_code: '195929004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195929004
  descendants_included: true
- concept_name: Myocarditis due to influenza virus
  concept_id: '4299935'
  code:
    concept_code: '78046005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/78046005
  descendants_included: true
- concept_name: Otitis media due to influenza
  concept_id: '46269706'
  code:
    concept_code: '10624951000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10624951000119108
  descendants_included: true
- concept_name: Pneumonia due to Influenza A virus
  concept_id: '763011'
  code:
    concept_code: '434921000124108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/434921000124108
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '45756093'
  code:
    concept_code: U07.1
    vocabulary_id: ICD10
    concept_code_url: ''
  descendants_included: false
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '42501115'
  code:
    concept_code: U07.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Novel coronavirus infection
  concept_id: '586414'
  code:
    concept_code: U18.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Other coronavirus as the cause of diseases classified elsewhere
  concept_id: '45600471'
  code:
    concept_code: B97.29
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: false
- concept_name: Provisional assignment of new diseases or emergency use
  concept_id: '586415'
  code:
    concept_code: U18
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Febrile convulsion
  concept_id: '444413'
  code:
    concept_code: '41497008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/41497008
  descendants_included: true
- concept_name: Fever
  concept_id: '437663'
  code:
    concept_code: '386661006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/386661006
  descendants_included: true
- concept_name: Cough
  concept_id: '254761'
  code:
    concept_code: '49727002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49727002
  descendants_included: true
- concept_name: Sputum finding
  concept_id: '4089228'
  code:
    concept_code: '248595008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/248595008
  descendants_included: true
- concept_name: Acute respiratory distress
  concept_id: '4191650'
  code:
    concept_code: '373895009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/373895009
  descendants_included: true
- concept_name: Dyspnea
  concept_id: '312437'
  code:
    concept_code: '267036007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/267036007
  descendants_included: true
- concept_name: Muscle pain
  concept_id: '442752'
  code:
    concept_code: '68962001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/68962001
  descendants_included: true
- concept_name: Fatigue
  concept_id: '4223659'
  code:
    concept_code: '84229001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84229001
  descendants_included: true
- concept_name: Malaise
  concept_id: '4272240'
  code:
    concept_code: '367391008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/367391008
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '1572255'
  code:
    concept_code: R53
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '439926'
  code:
    concept_code: '271795006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271795006
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '44829293'
  code:
    concept_code: '780.7'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '44823445'
  code:
    concept_code: '780.79'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '1572256'
  code:
    concept_code: R53.8
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Suspected case of COVID-19 (machine translation)
  concept_id: '710157'
  code:
    concept_code: Z03.800x001
    vocabulary_id: ICD10CN
    concept_code_url: ''
  descendants_included: false
- concept_name: Suspected coronavirus infection
  concept_id: '45763724'
  code:
    concept_code: '700217006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/700217006
  descendants_included: false
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274061'
  code:
    concept_code: '10677711000119101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10677711000119101
  descendants_included: true
- concept_name: Influenza
  concept_id: '4266367'
  code:
    concept_code: '6142004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/6142004
  descendants_included: true
- concept_name: Influenza with CNS disorder
  concept_id: '42537960'
  code:
    concept_code: '738276008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/738276008
  descendants_included: true
- concept_name: Influenza with gastrointestinal tract involvement
  concept_id: '4112824'
  code:
    concept_code: '195929004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195929004
  descendants_included: true
- concept_name: Myocarditis due to influenza virus
  concept_id: '4299935'
  code:
    concept_code: '78046005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/78046005
  descendants_included: true
- concept_name: Otitis media due to influenza
  concept_id: '46269706'
  code:
    concept_code: '10624951000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10624951000119108
  descendants_included: true
- concept_name: Pneumonia due to Influenza A virus
  concept_id: '763011'
  code:
    concept_code: '434921000124108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/434921000124108
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '45756093'
  code:
    concept_code: U07.1
    vocabulary_id: ICD10
    concept_code_url: ''
  descendants_included: false
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '42501115'
  code:
    concept_code: U07.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Novel coronavirus infection
  concept_id: '586414'
  code:
    concept_code: U18.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Other coronavirus as the cause of diseases classified elsewhere
  concept_id: '45600471'
  code:
    concept_code: B97.29
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: false
- concept_name: Provisional assignment of new diseases or emergency use
  concept_id: '586415'
  code:
    concept_code: U18
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Febrile convulsion
  concept_id: '444413'
  code:
    concept_code: '41497008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/41497008
  descendants_included: true
- concept_name: Fever
  concept_id: '437663'
  code:
    concept_code: '386661006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/386661006
  descendants_included: true
- concept_name: Cough
  concept_id: '254761'
  code:
    concept_code: '49727002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49727002
  descendants_included: true
- concept_name: Sputum finding
  concept_id: '4089228'
  code:
    concept_code: '248595008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/248595008
  descendants_included: true
- concept_name: Acute respiratory distress
  concept_id: '4191650'
  code:
    concept_code: '373895009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/373895009
  descendants_included: true
- concept_name: Dyspnea
  concept_id: '312437'
  code:
    concept_code: '267036007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/267036007
  descendants_included: true
- concept_name: Muscle pain
  concept_id: '442752'
  code:
    concept_code: '68962001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/68962001
  descendants_included: true
- concept_name: Fatigue
  concept_id: '4223659'
  code:
    concept_code: '84229001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84229001
  descendants_included: true
- concept_name: Malaise
  concept_id: '4272240'
  code:
    concept_code: '367391008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/367391008
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '1572255'
  code:
    concept_code: R53
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '439926'
  code:
    concept_code: '271795006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271795006
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '44829293'
  code:
    concept_code: '780.7'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '44823445'
  code:
    concept_code: '780.79'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '1572256'
  code:
    concept_code: R53.8
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Suspected case of COVID-19 (machine translation)
  concept_id: '710157'
  code:
    concept_code: Z03.800x001
    vocabulary_id: ICD10CN
    concept_code_url: ''
  descendants_included: false
- concept_name: Suspected coronavirus infection
  concept_id: '45763724'
  code:
    concept_code: '700217006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/700217006
  descendants_included: false
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274061'
  code:
    concept_code: '10677711000119101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10677711000119101
  descendants_included: true
- concept_name: Influenza
  concept_id: '4266367'
  code:
    concept_code: '6142004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/6142004
  descendants_included: true
- concept_name: Influenza with CNS disorder
  concept_id: '42537960'
  code:
    concept_code: '738276008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/738276008
  descendants_included: true
- concept_name: Influenza with gastrointestinal tract involvement
  concept_id: '4112824'
  code:
    concept_code: '195929004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195929004
  descendants_included: true
- concept_name: Myocarditis due to influenza virus
  concept_id: '4299935'
  code:
    concept_code: '78046005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/78046005
  descendants_included: true
- concept_name: Otitis media due to influenza
  concept_id: '46269706'
  code:
    concept_code: '10624951000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10624951000119108
  descendants_included: true
- concept_name: Pneumonia due to Influenza A virus
  concept_id: '763011'
  code:
    concept_code: '434921000124108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/434921000124108
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '45756093'
  code:
    concept_code: U07.1
    vocabulary_id: ICD10
    concept_code_url: ''
  descendants_included: false
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '42501115'
  code:
    concept_code: U07.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Novel coronavirus infection
  concept_id: '586414'
  code:
    concept_code: U18.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Other coronavirus as the cause of diseases classified elsewhere
  concept_id: '45600471'
  code:
    concept_code: B97.29
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: false
- concept_name: Provisional assignment of new diseases or emergency use
  concept_id: '586415'
  code:
    concept_code: U18
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Febrile convulsion
  concept_id: '444413'
  code:
    concept_code: '41497008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/41497008
  descendants_included: true
- concept_name: Fever
  concept_id: '437663'
  code:
    concept_code: '386661006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/386661006
  descendants_included: true
- concept_name: Cough
  concept_id: '254761'
  code:
    concept_code: '49727002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49727002
  descendants_included: true
- concept_name: Sputum finding
  concept_id: '4089228'
  code:
    concept_code: '248595008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/248595008
  descendants_included: true
- concept_name: Acute respiratory distress
  concept_id: '4191650'
  code:
    concept_code: '373895009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/373895009
  descendants_included: true
- concept_name: Dyspnea
  concept_id: '312437'
  code:
    concept_code: '267036007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/267036007
  descendants_included: true
- concept_name: Muscle pain
  concept_id: '442752'
  code:
    concept_code: '68962001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/68962001
  descendants_included: true
- concept_name: Fatigue
  concept_id: '4223659'
  code:
    concept_code: '84229001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84229001
  descendants_included: true
- concept_name: Malaise
  concept_id: '4272240'
  code:
    concept_code: '367391008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/367391008
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '1572255'
  code:
    concept_code: R53
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '439926'
  code:
    concept_code: '271795006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271795006
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '44829293'
  code:
    concept_code: '780.7'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '44823445'
  code:
    concept_code: '780.79'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '1572256'
  code:
    concept_code: R53.8
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Suspected case of COVID-19 (machine translation)
  concept_id: '710157'
  code:
    concept_code: Z03.800x001
    vocabulary_id: ICD10CN
    concept_code_url: ''
  descendants_included: false
- concept_name: Suspected coronavirus infection
  concept_id: '45763724'
  code:
    concept_code: '700217006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/700217006
  descendants_included: false
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274061'
  code:
    concept_code: '10677711000119101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10677711000119101
  descendants_included: true
- concept_name: Influenza
  concept_id: '4266367'
  code:
    concept_code: '6142004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/6142004
  descendants_included: true
- concept_name: Influenza with CNS disorder
  concept_id: '42537960'
  code:
    concept_code: '738276008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/738276008
  descendants_included: true
- concept_name: Influenza with gastrointestinal tract involvement
  concept_id: '4112824'
  code:
    concept_code: '195929004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195929004
  descendants_included: true
- concept_name: Myocarditis due to influenza virus
  concept_id: '4299935'
  code:
    concept_code: '78046005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/78046005
  descendants_included: true
- concept_name: Otitis media due to influenza
  concept_id: '46269706'
  code:
    concept_code: '10624951000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10624951000119108
  descendants_included: true
- concept_name: Pneumonia due to Influenza A virus
  concept_id: '763011'
  code:
    concept_code: '434921000124108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/434921000124108
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Acute respiratory distress syndrome
  concept_id: '4195694'
  code:
    concept_code: '67782005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/67782005
  descendants_included: true
- concept_name: Acute respiratory failure
  concept_id: '319049'
  code:
    concept_code: '65710008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/65710008
  descendants_included: true
- concept_name: Acute kidney injury due to circulatory failure
  concept_id: '36716182'
  code:
    concept_code: '722095005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722095005
  descendants_included: false
- concept_name: Acute kidney injury due to hypovolemia
  concept_id: '36716183'
  code:
    concept_code: '722096006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722096006
  descendants_included: false
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: false
- concept_name: Acute kidney injury stage 1
  concept_id: '44809061'
  code:
    concept_code: '851931000000107'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851931000000107
  descendants_included: false
- concept_name: Acute kidney injury stage 2
  concept_id: '44809062'
  code:
    concept_code: '851941000000103'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851941000000103
  descendants_included: false
- concept_name: Acute kidney injury stage 3
  concept_id: '44809063'
  code:
    concept_code: '851951000000100'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851951000000100
  descendants_included: false
- concept_name: Acute nephropathy
  concept_id: '4242411'
  code:
    concept_code: '58574008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/58574008
  descendants_included: true
- concept_name: Acute kidney injury due to acute tubular necrosis due to sepsis
  concept_id: '37395517'
  code:
    concept_code: '1048491000000106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1048491000000106
  descendants_included: true
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: true
- concept_name: Clinical sepsis
  concept_id: '40487101'
  code:
    concept_code: '447931005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/447931005
  descendants_included: true
- concept_name: Menosepsis
  concept_id: '4205449'
  code:
    concept_code: '55528005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/55528005
  descendants_included: true
- concept_name: Miscarriage with septic shock
  concept_id: '4085627'
  code:
    concept_code: '18613002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/18613002
  descendants_included: true
- concept_name: Postprocedural intra-abdominal sepsis
  concept_id: '4204036'
  code:
    concept_code: '308887002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/308887002
  descendants_included: true
- concept_name: Puerperal septicemia - delivered with postnatal complication
  concept_id: '4066124'
  code:
    concept_code: '200195002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200195002
  descendants_included: true
- concept_name: Sepsis
  concept_id: '132797'
  code:
    concept_code: '91302008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/91302008
  descendants_included: true
- concept_name: Sepsis syndrome
  concept_id: '4029281'
  code:
    concept_code: '238150007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238150007
  descendants_included: true
- concept_name: Sepsis-associated encephalopathy
  concept_id: '4046106'
  code:
    concept_code: '230361008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/230361008
  descendants_included: true
- concept_name: Sepsis-associated lung injury
  concept_id: '4119941'
  code:
    concept_code: '233812001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233812001
  descendants_included: true
- concept_name: Sepsis-associated organ dysfunction
  concept_id: '4031168'
  code:
    concept_code: '238151006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238151006
  descendants_included: true
- concept_name: Septic shock
  concept_id: '196236'
  code:
    concept_code: '76571007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/76571007
  descendants_included: true
- concept_name: Systemic inflammatory response syndrome
  concept_id: '434821'
  code:
    concept_code: '238149007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238149007
  descendants_included: true
- concept_name: Transient neonatal neutropenia due to neonatal bacterial sepsis
  concept_id: '36716754'
  code:
    concept_code: '722926003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722926003
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Acute respiratory distress syndrome
  concept_id: '4195694'
  code:
    concept_code: '67782005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/67782005
  descendants_included: true
- concept_name: Acute respiratory failure
  concept_id: '319049'
  code:
    concept_code: '65710008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/65710008
  descendants_included: true
- concept_name: Acute kidney injury due to circulatory failure
  concept_id: '36716182'
  code:
    concept_code: '722095005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722095005
  descendants_included: false
- concept_name: Acute kidney injury due to hypovolemia
  concept_id: '36716183'
  code:
    concept_code: '722096006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722096006
  descendants_included: false
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: false
- concept_name: Acute kidney injury stage 1
  concept_id: '44809061'
  code:
    concept_code: '851931000000107'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851931000000107
  descendants_included: false
- concept_name: Acute kidney injury stage 2
  concept_id: '44809062'
  code:
    concept_code: '851941000000103'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851941000000103
  descendants_included: false
- concept_name: Acute kidney injury stage 3
  concept_id: '44809063'
  code:
    concept_code: '851951000000100'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851951000000100
  descendants_included: false
- concept_name: Acute nephropathy
  concept_id: '4242411'
  code:
    concept_code: '58574008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/58574008
  descendants_included: true
- concept_name: Acute kidney injury due to acute tubular necrosis due to sepsis
  concept_id: '37395517'
  code:
    concept_code: '1048491000000106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1048491000000106
  descendants_included: true
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: true
- concept_name: Clinical sepsis
  concept_id: '40487101'
  code:
    concept_code: '447931005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/447931005
  descendants_included: true
- concept_name: Menosepsis
  concept_id: '4205449'
  code:
    concept_code: '55528005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/55528005
  descendants_included: true
- concept_name: Miscarriage with septic shock
  concept_id: '4085627'
  code:
    concept_code: '18613002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/18613002
  descendants_included: true
- concept_name: Postprocedural intra-abdominal sepsis
  concept_id: '4204036'
  code:
    concept_code: '308887002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/308887002
  descendants_included: true
- concept_name: Puerperal septicemia - delivered with postnatal complication
  concept_id: '4066124'
  code:
    concept_code: '200195002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200195002
  descendants_included: true
- concept_name: Sepsis
  concept_id: '132797'
  code:
    concept_code: '91302008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/91302008
  descendants_included: true
- concept_name: Sepsis syndrome
  concept_id: '4029281'
  code:
    concept_code: '238150007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238150007
  descendants_included: true
- concept_name: Sepsis-associated encephalopathy
  concept_id: '4046106'
  code:
    concept_code: '230361008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/230361008
  descendants_included: true
- concept_name: Sepsis-associated lung injury
  concept_id: '4119941'
  code:
    concept_code: '233812001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233812001
  descendants_included: true
- concept_name: Sepsis-associated organ dysfunction
  concept_id: '4031168'
  code:
    concept_code: '238151006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238151006
  descendants_included: true
- concept_name: Septic shock
  concept_id: '196236'
  code:
    concept_code: '76571007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/76571007
  descendants_included: true
- concept_name: Systemic inflammatory response syndrome
  concept_id: '434821'
  code:
    concept_code: '238149007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238149007
  descendants_included: true
- concept_name: Transient neonatal neutropenia due to neonatal bacterial sepsis
  concept_id: '36716754'
  code:
    concept_code: '722926003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722926003
  descendants_included: true
- concept_name: Dependence on ventilator
  concept_id: '40481547'
  code:
    concept_code: '444932008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/444932008
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '45756093'
  code:
    concept_code: U07.1
    vocabulary_id: ICD10
    concept_code_url: ''
  descendants_included: false
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '42501115'
  code:
    concept_code: U07.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Novel coronavirus infection
  concept_id: '586414'
  code:
    concept_code: U18.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Other coronavirus as the cause of diseases classified elsewhere
  concept_id: '45600471'
  code:
    concept_code: B97.29
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: false
- concept_name: Provisional assignment of new diseases or emergency use
  concept_id: '586415'
  code:
    concept_code: U18
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Febrile convulsion
  concept_id: '444413'
  code:
    concept_code: '41497008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/41497008
  descendants_included: true
- concept_name: Fever
  concept_id: '437663'
  code:
    concept_code: '386661006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/386661006
  descendants_included: true
- concept_name: Cough
  concept_id: '254761'
  code:
    concept_code: '49727002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49727002
  descendants_included: true
- concept_name: Sputum finding
  concept_id: '4089228'
  code:
    concept_code: '248595008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/248595008
  descendants_included: true
- concept_name: Acute respiratory distress
  concept_id: '4191650'
  code:
    concept_code: '373895009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/373895009
  descendants_included: true
- concept_name: Dyspnea
  concept_id: '312437'
  code:
    concept_code: '267036007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/267036007
  descendants_included: true
- concept_name: Muscle pain
  concept_id: '442752'
  code:
    concept_code: '68962001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/68962001
  descendants_included: true
- concept_name: Fatigue
  concept_id: '4223659'
  code:
    concept_code: '84229001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84229001
  descendants_included: true
- concept_name: Malaise
  concept_id: '4272240'
  code:
    concept_code: '367391008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/367391008
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '1572255'
  code:
    concept_code: R53
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '439926'
  code:
    concept_code: '271795006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271795006
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '44829293'
  code:
    concept_code: '780.7'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '44823445'
  code:
    concept_code: '780.79'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '1572256'
  code:
    concept_code: R53.8
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Suspected case of COVID-19 (machine translation)
  concept_id: '710157'
  code:
    concept_code: Z03.800x001
    vocabulary_id: ICD10CN
    concept_code_url: ''
  descendants_included: false
- concept_name: Suspected coronavirus infection
  concept_id: '45763724'
  code:
    concept_code: '700217006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/700217006
  descendants_included: false
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274061'
  code:
    concept_code: '10677711000119101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10677711000119101
  descendants_included: true
- concept_name: Influenza
  concept_id: '4266367'
  code:
    concept_code: '6142004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/6142004
  descendants_included: true
- concept_name: Influenza with CNS disorder
  concept_id: '42537960'
  code:
    concept_code: '738276008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/738276008
  descendants_included: true
- concept_name: Influenza with gastrointestinal tract involvement
  concept_id: '4112824'
  code:
    concept_code: '195929004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195929004
  descendants_included: true
- concept_name: Myocarditis due to influenza virus
  concept_id: '4299935'
  code:
    concept_code: '78046005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/78046005
  descendants_included: true
- concept_name: Otitis media due to influenza
  concept_id: '46269706'
  code:
    concept_code: '10624951000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10624951000119108
  descendants_included: true
- concept_name: Pneumonia due to Influenza A virus
  concept_id: '763011'
  code:
    concept_code: '434921000124108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/434921000124108
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Acute respiratory distress syndrome
  concept_id: '4195694'
  code:
    concept_code: '67782005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/67782005
  descendants_included: true
- concept_name: Acute respiratory failure
  concept_id: '319049'
  code:
    concept_code: '65710008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/65710008
  descendants_included: true
- concept_name: Acute kidney injury due to circulatory failure
  concept_id: '36716182'
  code:
    concept_code: '722095005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722095005
  descendants_included: false
- concept_name: Acute kidney injury due to hypovolemia
  concept_id: '36716183'
  code:
    concept_code: '722096006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722096006
  descendants_included: false
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: false
- concept_name: Acute kidney injury stage 1
  concept_id: '44809061'
  code:
    concept_code: '851931000000107'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851931000000107
  descendants_included: false
- concept_name: Acute kidney injury stage 2
  concept_id: '44809062'
  code:
    concept_code: '851941000000103'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851941000000103
  descendants_included: false
- concept_name: Acute kidney injury stage 3
  concept_id: '44809063'
  code:
    concept_code: '851951000000100'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851951000000100
  descendants_included: false
- concept_name: Acute nephropathy
  concept_id: '4242411'
  code:
    concept_code: '58574008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/58574008
  descendants_included: true
- concept_name: Acute kidney injury due to acute tubular necrosis due to sepsis
  concept_id: '37395517'
  code:
    concept_code: '1048491000000106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1048491000000106
  descendants_included: true
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: true
- concept_name: Clinical sepsis
  concept_id: '40487101'
  code:
    concept_code: '447931005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/447931005
  descendants_included: true
- concept_name: Menosepsis
  concept_id: '4205449'
  code:
    concept_code: '55528005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/55528005
  descendants_included: true
- concept_name: Miscarriage with septic shock
  concept_id: '4085627'
  code:
    concept_code: '18613002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/18613002
  descendants_included: true
- concept_name: Postprocedural intra-abdominal sepsis
  concept_id: '4204036'
  code:
    concept_code: '308887002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/308887002
  descendants_included: true
- concept_name: Puerperal septicemia - delivered with postnatal complication
  concept_id: '4066124'
  code:
    concept_code: '200195002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200195002
  descendants_included: true
- concept_name: Sepsis
  concept_id: '132797'
  code:
    concept_code: '91302008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/91302008
  descendants_included: true
- concept_name: Sepsis syndrome
  concept_id: '4029281'
  code:
    concept_code: '238150007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238150007
  descendants_included: true
- concept_name: Sepsis-associated encephalopathy
  concept_id: '4046106'
  code:
    concept_code: '230361008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/230361008
  descendants_included: true
- concept_name: Sepsis-associated lung injury
  concept_id: '4119941'
  code:
    concept_code: '233812001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233812001
  descendants_included: true
- concept_name: Sepsis-associated organ dysfunction
  concept_id: '4031168'
  code:
    concept_code: '238151006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238151006
  descendants_included: true
- concept_name: Septic shock
  concept_id: '196236'
  code:
    concept_code: '76571007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/76571007
  descendants_included: true
- concept_name: Systemic inflammatory response syndrome
  concept_id: '434821'
  code:
    concept_code: '238149007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238149007
  descendants_included: true
- concept_name: Transient neonatal neutropenia due to neonatal bacterial sepsis
  concept_id: '36716754'
  code:
    concept_code: '722926003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722926003
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Acute respiratory distress syndrome
  concept_id: '4195694'
  code:
    concept_code: '67782005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/67782005
  descendants_included: true
- concept_name: Acute respiratory failure
  concept_id: '319049'
  code:
    concept_code: '65710008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/65710008
  descendants_included: true
- concept_name: Acute kidney injury due to circulatory failure
  concept_id: '36716182'
  code:
    concept_code: '722095005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722095005
  descendants_included: false
- concept_name: Acute kidney injury due to hypovolemia
  concept_id: '36716183'
  code:
    concept_code: '722096006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722096006
  descendants_included: false
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: false
- concept_name: Acute kidney injury stage 1
  concept_id: '44809061'
  code:
    concept_code: '851931000000107'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851931000000107
  descendants_included: false
- concept_name: Acute kidney injury stage 2
  concept_id: '44809062'
  code:
    concept_code: '851941000000103'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851941000000103
  descendants_included: false
- concept_name: Acute kidney injury stage 3
  concept_id: '44809063'
  code:
    concept_code: '851951000000100'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851951000000100
  descendants_included: false
- concept_name: Acute nephropathy
  concept_id: '4242411'
  code:
    concept_code: '58574008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/58574008
  descendants_included: true
- concept_name: Acute kidney injury due to acute tubular necrosis due to sepsis
  concept_id: '37395517'
  code:
    concept_code: '1048491000000106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1048491000000106
  descendants_included: true
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: true
- concept_name: Clinical sepsis
  concept_id: '40487101'
  code:
    concept_code: '447931005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/447931005
  descendants_included: true
- concept_name: Menosepsis
  concept_id: '4205449'
  code:
    concept_code: '55528005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/55528005
  descendants_included: true
- concept_name: Miscarriage with septic shock
  concept_id: '4085627'
  code:
    concept_code: '18613002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/18613002
  descendants_included: true
- concept_name: Postprocedural intra-abdominal sepsis
  concept_id: '4204036'
  code:
    concept_code: '308887002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/308887002
  descendants_included: true
- concept_name: Puerperal septicemia - delivered with postnatal complication
  concept_id: '4066124'
  code:
    concept_code: '200195002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200195002
  descendants_included: true
- concept_name: Sepsis
  concept_id: '132797'
  code:
    concept_code: '91302008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/91302008
  descendants_included: true
- concept_name: Sepsis syndrome
  concept_id: '4029281'
  code:
    concept_code: '238150007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238150007
  descendants_included: true
- concept_name: Sepsis-associated encephalopathy
  concept_id: '4046106'
  code:
    concept_code: '230361008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/230361008
  descendants_included: true
- concept_name: Sepsis-associated lung injury
  concept_id: '4119941'
  code:
    concept_code: '233812001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233812001
  descendants_included: true
- concept_name: Sepsis-associated organ dysfunction
  concept_id: '4031168'
  code:
    concept_code: '238151006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238151006
  descendants_included: true
- concept_name: Septic shock
  concept_id: '196236'
  code:
    concept_code: '76571007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/76571007
  descendants_included: true
- concept_name: Systemic inflammatory response syndrome
  concept_id: '434821'
  code:
    concept_code: '238149007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238149007
  descendants_included: true
- concept_name: Transient neonatal neutropenia due to neonatal bacterial sepsis
  concept_id: '36716754'
  code:
    concept_code: '722926003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722926003
  descendants_included: true
- concept_name: Dependence on ventilator
  concept_id: '40481547'
  code:
    concept_code: '444932008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/444932008
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Acute respiratory distress syndrome
  concept_id: '4195694'
  code:
    concept_code: '67782005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/67782005
  descendants_included: true
- concept_name: Acute respiratory failure
  concept_id: '319049'
  code:
    concept_code: '65710008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/65710008
  descendants_included: true
- concept_name: Acute kidney injury due to circulatory failure
  concept_id: '36716182'
  code:
    concept_code: '722095005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722095005
  descendants_included: false
- concept_name: Acute kidney injury due to hypovolemia
  concept_id: '36716183'
  code:
    concept_code: '722096006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722096006
  descendants_included: false
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: false
- concept_name: Acute kidney injury stage 1
  concept_id: '44809061'
  code:
    concept_code: '851931000000107'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851931000000107
  descendants_included: false
- concept_name: Acute kidney injury stage 2
  concept_id: '44809062'
  code:
    concept_code: '851941000000103'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851941000000103
  descendants_included: false
- concept_name: Acute kidney injury stage 3
  concept_id: '44809063'
  code:
    concept_code: '851951000000100'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851951000000100
  descendants_included: false
- concept_name: Acute nephropathy
  concept_id: '4242411'
  code:
    concept_code: '58574008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/58574008
  descendants_included: true
- concept_name: Acute kidney injury due to acute tubular necrosis due to sepsis
  concept_id: '37395517'
  code:
    concept_code: '1048491000000106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1048491000000106
  descendants_included: true
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: true
- concept_name: Clinical sepsis
  concept_id: '40487101'
  code:
    concept_code: '447931005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/447931005
  descendants_included: true
- concept_name: Menosepsis
  concept_id: '4205449'
  code:
    concept_code: '55528005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/55528005
  descendants_included: true
- concept_name: Miscarriage with septic shock
  concept_id: '4085627'
  code:
    concept_code: '18613002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/18613002
  descendants_included: true
- concept_name: Postprocedural intra-abdominal sepsis
  concept_id: '4204036'
  code:
    concept_code: '308887002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/308887002
  descendants_included: true
- concept_name: Puerperal septicemia - delivered with postnatal complication
  concept_id: '4066124'
  code:
    concept_code: '200195002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200195002
  descendants_included: true
- concept_name: Sepsis
  concept_id: '132797'
  code:
    concept_code: '91302008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/91302008
  descendants_included: true
- concept_name: Sepsis syndrome
  concept_id: '4029281'
  code:
    concept_code: '238150007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238150007
  descendants_included: true
- concept_name: Sepsis-associated encephalopathy
  concept_id: '4046106'
  code:
    concept_code: '230361008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/230361008
  descendants_included: true
- concept_name: Sepsis-associated lung injury
  concept_id: '4119941'
  code:
    concept_code: '233812001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233812001
  descendants_included: true
- concept_name: Sepsis-associated organ dysfunction
  concept_id: '4031168'
  code:
    concept_code: '238151006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238151006
  descendants_included: true
- concept_name: Septic shock
  concept_id: '196236'
  code:
    concept_code: '76571007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/76571007
  descendants_included: true
- concept_name: Systemic inflammatory response syndrome
  concept_id: '434821'
  code:
    concept_code: '238149007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238149007
  descendants_included: true
- concept_name: Transient neonatal neutropenia due to neonatal bacterial sepsis
  concept_id: '36716754'
  code:
    concept_code: '722926003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722926003
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Acute respiratory distress syndrome
  concept_id: '4195694'
  code:
    concept_code: '67782005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/67782005
  descendants_included: true
- concept_name: Acute respiratory failure
  concept_id: '319049'
  code:
    concept_code: '65710008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/65710008
  descendants_included: true
- concept_name: Acute kidney injury due to circulatory failure
  concept_id: '36716182'
  code:
    concept_code: '722095005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722095005
  descendants_included: false
- concept_name: Acute kidney injury due to hypovolemia
  concept_id: '36716183'
  code:
    concept_code: '722096006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722096006
  descendants_included: false
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: false
- concept_name: Acute kidney injury stage 1
  concept_id: '44809061'
  code:
    concept_code: '851931000000107'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851931000000107
  descendants_included: false
- concept_name: Acute kidney injury stage 2
  concept_id: '44809062'
  code:
    concept_code: '851941000000103'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851941000000103
  descendants_included: false
- concept_name: Acute kidney injury stage 3
  concept_id: '44809063'
  code:
    concept_code: '851951000000100'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851951000000100
  descendants_included: false
- concept_name: Acute nephropathy
  concept_id: '4242411'
  code:
    concept_code: '58574008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/58574008
  descendants_included: true
- concept_name: Acute kidney injury due to acute tubular necrosis due to sepsis
  concept_id: '37395517'
  code:
    concept_code: '1048491000000106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1048491000000106
  descendants_included: true
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: true
- concept_name: Clinical sepsis
  concept_id: '40487101'
  code:
    concept_code: '447931005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/447931005
  descendants_included: true
- concept_name: Menosepsis
  concept_id: '4205449'
  code:
    concept_code: '55528005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/55528005
  descendants_included: true
- concept_name: Miscarriage with septic shock
  concept_id: '4085627'
  code:
    concept_code: '18613002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/18613002
  descendants_included: true
- concept_name: Postprocedural intra-abdominal sepsis
  concept_id: '4204036'
  code:
    concept_code: '308887002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/308887002
  descendants_included: true
- concept_name: Puerperal septicemia - delivered with postnatal complication
  concept_id: '4066124'
  code:
    concept_code: '200195002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200195002
  descendants_included: true
- concept_name: Sepsis
  concept_id: '132797'
  code:
    concept_code: '91302008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/91302008
  descendants_included: true
- concept_name: Sepsis syndrome
  concept_id: '4029281'
  code:
    concept_code: '238150007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238150007
  descendants_included: true
- concept_name: Sepsis-associated encephalopathy
  concept_id: '4046106'
  code:
    concept_code: '230361008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/230361008
  descendants_included: true
- concept_name: Sepsis-associated lung injury
  concept_id: '4119941'
  code:
    concept_code: '233812001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233812001
  descendants_included: true
- concept_name: Sepsis-associated organ dysfunction
  concept_id: '4031168'
  code:
    concept_code: '238151006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238151006
  descendants_included: true
- concept_name: Septic shock
  concept_id: '196236'
  code:
    concept_code: '76571007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/76571007
  descendants_included: true
- concept_name: Systemic inflammatory response syndrome
  concept_id: '434821'
  code:
    concept_code: '238149007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238149007
  descendants_included: true
- concept_name: Transient neonatal neutropenia due to neonatal bacterial sepsis
  concept_id: '36716754'
  code:
    concept_code: '722926003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722926003
  descendants_included: true
- concept_name: Dependence on ventilator
  concept_id: '40481547'
  code:
    concept_code: '444932008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/444932008
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '45756093'
  code:
    concept_code: U07.1
    vocabulary_id: ICD10
    concept_code_url: ''
  descendants_included: false
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '42501115'
  code:
    concept_code: U07.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Novel coronavirus infection
  concept_id: '586414'
  code:
    concept_code: U18.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Other coronavirus as the cause of diseases classified elsewhere
  concept_id: '45600471'
  code:
    concept_code: B97.29
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: false
- concept_name: Provisional assignment of new diseases or emergency use
  concept_id: '586415'
  code:
    concept_code: U18
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Febrile convulsion
  concept_id: '444413'
  code:
    concept_code: '41497008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/41497008
  descendants_included: true
- concept_name: Fever
  concept_id: '437663'
  code:
    concept_code: '386661006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/386661006
  descendants_included: true
- concept_name: Cough
  concept_id: '254761'
  code:
    concept_code: '49727002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49727002
  descendants_included: true
- concept_name: Sputum finding
  concept_id: '4089228'
  code:
    concept_code: '248595008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/248595008
  descendants_included: true
- concept_name: Acute respiratory distress
  concept_id: '4191650'
  code:
    concept_code: '373895009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/373895009
  descendants_included: true
- concept_name: Dyspnea
  concept_id: '312437'
  code:
    concept_code: '267036007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/267036007
  descendants_included: true
- concept_name: Muscle pain
  concept_id: '442752'
  code:
    concept_code: '68962001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/68962001
  descendants_included: true
- concept_name: Fatigue
  concept_id: '4223659'
  code:
    concept_code: '84229001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84229001
  descendants_included: true
- concept_name: Malaise
  concept_id: '4272240'
  code:
    concept_code: '367391008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/367391008
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '1572255'
  code:
    concept_code: R53
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '439926'
  code:
    concept_code: '271795006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271795006
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '44829293'
  code:
    concept_code: '780.7'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '44823445'
  code:
    concept_code: '780.79'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '1572256'
  code:
    concept_code: R53.8
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Suspected case of COVID-19 (machine translation)
  concept_id: '710157'
  code:
    concept_code: Z03.800x001
    vocabulary_id: ICD10CN
    concept_code_url: ''
  descendants_included: false
- concept_name: Suspected coronavirus infection
  concept_id: '45763724'
  code:
    concept_code: '700217006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/700217006
  descendants_included: false
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274061'
  code:
    concept_code: '10677711000119101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10677711000119101
  descendants_included: true
- concept_name: Influenza
  concept_id: '4266367'
  code:
    concept_code: '6142004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/6142004
  descendants_included: true
- concept_name: Influenza with CNS disorder
  concept_id: '42537960'
  code:
    concept_code: '738276008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/738276008
  descendants_included: true
- concept_name: Influenza with gastrointestinal tract involvement
  concept_id: '4112824'
  code:
    concept_code: '195929004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195929004
  descendants_included: true
- concept_name: Myocarditis due to influenza virus
  concept_id: '4299935'
  code:
    concept_code: '78046005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/78046005
  descendants_included: true
- concept_name: Otitis media due to influenza
  concept_id: '46269706'
  code:
    concept_code: '10624951000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10624951000119108
  descendants_included: true
- concept_name: Pneumonia due to Influenza A virus
  concept_id: '763011'
  code:
    concept_code: '434921000124108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/434921000124108
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '45756093'
  code:
    concept_code: U07.1
    vocabulary_id: ICD10
    concept_code_url: ''
  descendants_included: false
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '42501115'
  code:
    concept_code: U07.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Novel coronavirus infection
  concept_id: '586414'
  code:
    concept_code: U18.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Other coronavirus as the cause of diseases classified elsewhere
  concept_id: '45600471'
  code:
    concept_code: B97.29
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: false
- concept_name: Provisional assignment of new diseases or emergency use
  concept_id: '586415'
  code:
    concept_code: U18
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Febrile convulsion
  concept_id: '444413'
  code:
    concept_code: '41497008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/41497008
  descendants_included: true
- concept_name: Fever
  concept_id: '437663'
  code:
    concept_code: '386661006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/386661006
  descendants_included: true
- concept_name: Cough
  concept_id: '254761'
  code:
    concept_code: '49727002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49727002
  descendants_included: true
- concept_name: Sputum finding
  concept_id: '4089228'
  code:
    concept_code: '248595008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/248595008
  descendants_included: true
- concept_name: Acute respiratory distress
  concept_id: '4191650'
  code:
    concept_code: '373895009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/373895009
  descendants_included: true
- concept_name: Dyspnea
  concept_id: '312437'
  code:
    concept_code: '267036007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/267036007
  descendants_included: true
- concept_name: Muscle pain
  concept_id: '442752'
  code:
    concept_code: '68962001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/68962001
  descendants_included: true
- concept_name: Fatigue
  concept_id: '4223659'
  code:
    concept_code: '84229001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84229001
  descendants_included: true
- concept_name: Malaise
  concept_id: '4272240'
  code:
    concept_code: '367391008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/367391008
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '1572255'
  code:
    concept_code: R53
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '439926'
  code:
    concept_code: '271795006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271795006
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '44829293'
  code:
    concept_code: '780.7'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '44823445'
  code:
    concept_code: '780.79'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '1572256'
  code:
    concept_code: R53.8
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Suspected case of COVID-19 (machine translation)
  concept_id: '710157'
  code:
    concept_code: Z03.800x001
    vocabulary_id: ICD10CN
    concept_code_url: ''
  descendants_included: false
- concept_name: Suspected coronavirus infection
  concept_id: '45763724'
  code:
    concept_code: '700217006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/700217006
  descendants_included: false
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274061'
  code:
    concept_code: '10677711000119101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10677711000119101
  descendants_included: true
- concept_name: Influenza
  concept_id: '4266367'
  code:
    concept_code: '6142004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/6142004
  descendants_included: true
- concept_name: Influenza with CNS disorder
  concept_id: '42537960'
  code:
    concept_code: '738276008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/738276008
  descendants_included: true
- concept_name: Influenza with gastrointestinal tract involvement
  concept_id: '4112824'
  code:
    concept_code: '195929004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195929004
  descendants_included: true
- concept_name: Myocarditis due to influenza virus
  concept_id: '4299935'
  code:
    concept_code: '78046005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/78046005
  descendants_included: true
- concept_name: Otitis media due to influenza
  concept_id: '46269706'
  code:
    concept_code: '10624951000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10624951000119108
  descendants_included: true
- concept_name: Pneumonia due to Influenza A virus
  concept_id: '763011'
  code:
    concept_code: '434921000124108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/434921000124108
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '45756093'
  code:
    concept_code: U07.1
    vocabulary_id: ICD10
    concept_code_url: ''
  descendants_included: false
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '42501115'
  code:
    concept_code: U07.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Novel coronavirus infection
  concept_id: '586414'
  code:
    concept_code: U18.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Other coronavirus as the cause of diseases classified elsewhere
  concept_id: '45600471'
  code:
    concept_code: B97.29
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: false
- concept_name: Provisional assignment of new diseases or emergency use
  concept_id: '586415'
  code:
    concept_code: U18
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Febrile convulsion
  concept_id: '444413'
  code:
    concept_code: '41497008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/41497008
  descendants_included: true
- concept_name: Fever
  concept_id: '437663'
  code:
    concept_code: '386661006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/386661006
  descendants_included: true
- concept_name: Cough
  concept_id: '254761'
  code:
    concept_code: '49727002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49727002
  descendants_included: true
- concept_name: Sputum finding
  concept_id: '4089228'
  code:
    concept_code: '248595008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/248595008
  descendants_included: true
- concept_name: Acute respiratory distress
  concept_id: '4191650'
  code:
    concept_code: '373895009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/373895009
  descendants_included: true
- concept_name: Dyspnea
  concept_id: '312437'
  code:
    concept_code: '267036007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/267036007
  descendants_included: true
- concept_name: Muscle pain
  concept_id: '442752'
  code:
    concept_code: '68962001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/68962001
  descendants_included: true
- concept_name: Fatigue
  concept_id: '4223659'
  code:
    concept_code: '84229001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84229001
  descendants_included: true
- concept_name: Malaise
  concept_id: '4272240'
  code:
    concept_code: '367391008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/367391008
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '1572255'
  code:
    concept_code: R53
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '439926'
  code:
    concept_code: '271795006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271795006
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '44829293'
  code:
    concept_code: '780.7'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '44823445'
  code:
    concept_code: '780.79'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '1572256'
  code:
    concept_code: R53.8
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Suspected case of COVID-19 (machine translation)
  concept_id: '710157'
  code:
    concept_code: Z03.800x001
    vocabulary_id: ICD10CN
    concept_code_url: ''
  descendants_included: false
- concept_name: Suspected coronavirus infection
  concept_id: '45763724'
  code:
    concept_code: '700217006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/700217006
  descendants_included: false
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274061'
  code:
    concept_code: '10677711000119101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10677711000119101
  descendants_included: true
- concept_name: Influenza
  concept_id: '4266367'
  code:
    concept_code: '6142004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/6142004
  descendants_included: true
- concept_name: Influenza with CNS disorder
  concept_id: '42537960'
  code:
    concept_code: '738276008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/738276008
  descendants_included: true
- concept_name: Influenza with gastrointestinal tract involvement
  concept_id: '4112824'
  code:
    concept_code: '195929004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195929004
  descendants_included: true
- concept_name: Myocarditis due to influenza virus
  concept_id: '4299935'
  code:
    concept_code: '78046005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/78046005
  descendants_included: true
- concept_name: Otitis media due to influenza
  concept_id: '46269706'
  code:
    concept_code: '10624951000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10624951000119108
  descendants_included: true
- concept_name: Pneumonia due to Influenza A virus
  concept_id: '763011'
  code:
    concept_code: '434921000124108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/434921000124108
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '45756093'
  code:
    concept_code: U07.1
    vocabulary_id: ICD10
    concept_code_url: ''
  descendants_included: false
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '42501115'
  code:
    concept_code: U07.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Novel coronavirus infection
  concept_id: '586414'
  code:
    concept_code: U18.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Other coronavirus as the cause of diseases classified elsewhere
  concept_id: '45600471'
  code:
    concept_code: B97.29
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: false
- concept_name: Provisional assignment of new diseases or emergency use
  concept_id: '586415'
  code:
    concept_code: U18
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Febrile convulsion
  concept_id: '444413'
  code:
    concept_code: '41497008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/41497008
  descendants_included: true
- concept_name: Fever
  concept_id: '437663'
  code:
    concept_code: '386661006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/386661006
  descendants_included: true
- concept_name: Cough
  concept_id: '254761'
  code:
    concept_code: '49727002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49727002
  descendants_included: true
- concept_name: Sputum finding
  concept_id: '4089228'
  code:
    concept_code: '248595008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/248595008
  descendants_included: true
- concept_name: Acute respiratory distress
  concept_id: '4191650'
  code:
    concept_code: '373895009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/373895009
  descendants_included: true
- concept_name: Dyspnea
  concept_id: '312437'
  code:
    concept_code: '267036007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/267036007
  descendants_included: true
- concept_name: Muscle pain
  concept_id: '442752'
  code:
    concept_code: '68962001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/68962001
  descendants_included: true
- concept_name: Fatigue
  concept_id: '4223659'
  code:
    concept_code: '84229001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84229001
  descendants_included: true
- concept_name: Malaise
  concept_id: '4272240'
  code:
    concept_code: '367391008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/367391008
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '1572255'
  code:
    concept_code: R53
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '439926'
  code:
    concept_code: '271795006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271795006
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '44829293'
  code:
    concept_code: '780.7'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '44823445'
  code:
    concept_code: '780.79'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '1572256'
  code:
    concept_code: R53.8
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Suspected case of COVID-19 (machine translation)
  concept_id: '710157'
  code:
    concept_code: Z03.800x001
    vocabulary_id: ICD10CN
    concept_code_url: ''
  descendants_included: false
- concept_name: Suspected coronavirus infection
  concept_id: '45763724'
  code:
    concept_code: '700217006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/700217006
  descendants_included: false
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274061'
  code:
    concept_code: '10677711000119101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10677711000119101
  descendants_included: true
- concept_name: Influenza
  concept_id: '4266367'
  code:
    concept_code: '6142004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/6142004
  descendants_included: true
- concept_name: Influenza with CNS disorder
  concept_id: '42537960'
  code:
    concept_code: '738276008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/738276008
  descendants_included: true
- concept_name: Influenza with gastrointestinal tract involvement
  concept_id: '4112824'
  code:
    concept_code: '195929004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195929004
  descendants_included: true
- concept_name: Myocarditis due to influenza virus
  concept_id: '4299935'
  code:
    concept_code: '78046005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/78046005
  descendants_included: true
- concept_name: Otitis media due to influenza
  concept_id: '46269706'
  code:
    concept_code: '10624951000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10624951000119108
  descendants_included: true
- concept_name: Pneumonia due to Influenza A virus
  concept_id: '763011'
  code:
    concept_code: '434921000124108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/434921000124108
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '45756093'
  code:
    concept_code: U07.1
    vocabulary_id: ICD10
    concept_code_url: ''
  descendants_included: false
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '42501115'
  code:
    concept_code: U07.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Novel coronavirus infection
  concept_id: '586414'
  code:
    concept_code: U18.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Other coronavirus as the cause of diseases classified elsewhere
  concept_id: '45600471'
  code:
    concept_code: B97.29
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: false
- concept_name: Provisional assignment of new diseases or emergency use
  concept_id: '586415'
  code:
    concept_code: U18
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Febrile convulsion
  concept_id: '444413'
  code:
    concept_code: '41497008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/41497008
  descendants_included: true
- concept_name: Fever
  concept_id: '437663'
  code:
    concept_code: '386661006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/386661006
  descendants_included: true
- concept_name: Cough
  concept_id: '254761'
  code:
    concept_code: '49727002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49727002
  descendants_included: true
- concept_name: Sputum finding
  concept_id: '4089228'
  code:
    concept_code: '248595008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/248595008
  descendants_included: true
- concept_name: Acute respiratory distress
  concept_id: '4191650'
  code:
    concept_code: '373895009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/373895009
  descendants_included: true
- concept_name: Dyspnea
  concept_id: '312437'
  code:
    concept_code: '267036007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/267036007
  descendants_included: true
- concept_name: Muscle pain
  concept_id: '442752'
  code:
    concept_code: '68962001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/68962001
  descendants_included: true
- concept_name: Fatigue
  concept_id: '4223659'
  code:
    concept_code: '84229001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84229001
  descendants_included: true
- concept_name: Malaise
  concept_id: '4272240'
  code:
    concept_code: '367391008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/367391008
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '1572255'
  code:
    concept_code: R53
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '439926'
  code:
    concept_code: '271795006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271795006
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '44829293'
  code:
    concept_code: '780.7'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '44823445'
  code:
    concept_code: '780.79'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '1572256'
  code:
    concept_code: R53.8
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Suspected case of COVID-19 (machine translation)
  concept_id: '710157'
  code:
    concept_code: Z03.800x001
    vocabulary_id: ICD10CN
    concept_code_url: ''
  descendants_included: false
- concept_name: Suspected coronavirus infection
  concept_id: '45763724'
  code:
    concept_code: '700217006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/700217006
  descendants_included: false
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274061'
  code:
    concept_code: '10677711000119101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10677711000119101
  descendants_included: true
- concept_name: Influenza
  concept_id: '4266367'
  code:
    concept_code: '6142004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/6142004
  descendants_included: true
- concept_name: Influenza with CNS disorder
  concept_id: '42537960'
  code:
    concept_code: '738276008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/738276008
  descendants_included: true
- concept_name: Influenza with gastrointestinal tract involvement
  concept_id: '4112824'
  code:
    concept_code: '195929004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195929004
  descendants_included: true
- concept_name: Myocarditis due to influenza virus
  concept_id: '4299935'
  code:
    concept_code: '78046005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/78046005
  descendants_included: true
- concept_name: Otitis media due to influenza
  concept_id: '46269706'
  code:
    concept_code: '10624951000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10624951000119108
  descendants_included: true
- concept_name: Pneumonia due to Influenza A virus
  concept_id: '763011'
  code:
    concept_code: '434921000124108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/434921000124108
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '45756093'
  code:
    concept_code: U07.1
    vocabulary_id: ICD10
    concept_code_url: ''
  descendants_included: false
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '42501115'
  code:
    concept_code: U07.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Novel coronavirus infection
  concept_id: '586414'
  code:
    concept_code: U18.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Other coronavirus as the cause of diseases classified elsewhere
  concept_id: '45600471'
  code:
    concept_code: B97.29
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: false
- concept_name: Provisional assignment of new diseases or emergency use
  concept_id: '586415'
  code:
    concept_code: U18
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Febrile convulsion
  concept_id: '444413'
  code:
    concept_code: '41497008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/41497008
  descendants_included: true
- concept_name: Fever
  concept_id: '437663'
  code:
    concept_code: '386661006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/386661006
  descendants_included: true
- concept_name: Cough
  concept_id: '254761'
  code:
    concept_code: '49727002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49727002
  descendants_included: true
- concept_name: Sputum finding
  concept_id: '4089228'
  code:
    concept_code: '248595008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/248595008
  descendants_included: true
- concept_name: Acute respiratory distress
  concept_id: '4191650'
  code:
    concept_code: '373895009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/373895009
  descendants_included: true
- concept_name: Dyspnea
  concept_id: '312437'
  code:
    concept_code: '267036007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/267036007
  descendants_included: true
- concept_name: Muscle pain
  concept_id: '442752'
  code:
    concept_code: '68962001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/68962001
  descendants_included: true
- concept_name: Fatigue
  concept_id: '4223659'
  code:
    concept_code: '84229001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84229001
  descendants_included: true
- concept_name: Malaise
  concept_id: '4272240'
  code:
    concept_code: '367391008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/367391008
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '1572255'
  code:
    concept_code: R53
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '439926'
  code:
    concept_code: '271795006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271795006
  descendants_included: true
- concept_name: Malaise and fatigue
  concept_id: '44829293'
  code:
    concept_code: '780.7'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '44823445'
  code:
    concept_code: '780.79'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '1572256'
  code:
    concept_code: R53.8
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Suspected case of COVID-19 (machine translation)
  concept_id: '710157'
  code:
    concept_code: Z03.800x001
    vocabulary_id: ICD10CN
    concept_code_url: ''
  descendants_included: false
- concept_name: Suspected coronavirus infection
  concept_id: '45763724'
  code:
    concept_code: '700217006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/700217006
  descendants_included: false
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274061'
  code:
    concept_code: '10677711000119101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10677711000119101
  descendants_included: true
- concept_name: Influenza
  concept_id: '4266367'
  code:
    concept_code: '6142004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/6142004
  descendants_included: true
- concept_name: Influenza with CNS disorder
  concept_id: '42537960'
  code:
    concept_code: '738276008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/738276008
  descendants_included: true
- concept_name: Influenza with gastrointestinal tract involvement
  concept_id: '4112824'
  code:
    concept_code: '195929004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195929004
  descendants_included: true
- concept_name: Myocarditis due to influenza virus
  concept_id: '4299935'
  code:
    concept_code: '78046005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/78046005
  descendants_included: true
- concept_name: Otitis media due to influenza
  concept_id: '46269706'
  code:
    concept_code: '10624951000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10624951000119108
  descendants_included: true
- concept_name: Pneumonia due to Influenza A virus
  concept_id: '763011'
  code:
    concept_code: '434921000124108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/434921000124108
  descendants_included: true
- concept_name: Malignant neoplastic disease
  concept_id: '443392'
  code:
    concept_code: '363346000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/363346000
  descendants_included: true
- concept_name: Chronic obstructive lung disease
  concept_id: '255573'
  code:
    concept_code: '13645005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/13645005
  descendants_included: true
- concept_name: Diabetes mellitus
  concept_id: '201820'
  code:
    concept_code: '73211009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/73211009
  descendants_included: true
- concept_name: Diabetic - poor control
  concept_id: '443238'
  code:
    concept_code: '268519009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/268519009
  descendants_included: true
- concept_name: Diabetic complication
  concept_id: '442793'
  code:
    concept_code: '74627003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/74627003
  descendants_included: true
- concept_name: Heart disease
  concept_id: '321588'
  code:
    concept_code: '56265001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/56265001
  descendants_included: true
- concept_name: Hyperlipidemia
  concept_id: '432867'
  code:
    concept_code: '55822004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/55822004
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Kidney disease
  concept_id: '198124'
  code:
    concept_code: '90708001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/90708001
  descendants_included: true
- concept_name: Hepatic coma
  concept_id: '377604'
  code:
    concept_code: '72836002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/72836002
  descendants_included: false
- concept_name: Hepatic encephalopathy
  concept_id: '4029488'
  code:
    concept_code: '13920009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/13920009
  descendants_included: false
- concept_name: Hepatic failure
  concept_id: '4245975'
  code:
    concept_code: '59927004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/59927004
  descendants_included: true
- concept_name: Hepatic necrosis
  concept_id: '4337543'
  code:
    concept_code: '87248009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/87248009
  descendants_included: true
- concept_name: Ascites
  concept_id: '200528'
  code:
    concept_code: '389026000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/389026000
  descendants_included: true
- concept_name: Pressure ulcer
  concept_id: '135333'
  code:
    concept_code: '399912005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/399912005
  descendants_included: true
- concept_name: Skin ulcer
  concept_id: '4262920'
  code:
    concept_code: '46742003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/46742003
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Acute respiratory distress syndrome
  concept_id: '4195694'
  code:
    concept_code: '67782005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/67782005
  descendants_included: true
- concept_name: Acute respiratory failure
  concept_id: '319049'
  code:
    concept_code: '65710008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/65710008
  descendants_included: true
- concept_name: Acute kidney injury due to circulatory failure
  concept_id: '36716182'
  code:
    concept_code: '722095005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722095005
  descendants_included: false
- concept_name: Acute kidney injury due to hypovolemia
  concept_id: '36716183'
  code:
    concept_code: '722096006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722096006
  descendants_included: false
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: false
- concept_name: Acute kidney injury stage 1
  concept_id: '44809061'
  code:
    concept_code: '851931000000107'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851931000000107
  descendants_included: false
- concept_name: Acute kidney injury stage 2
  concept_id: '44809062'
  code:
    concept_code: '851941000000103'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851941000000103
  descendants_included: false
- concept_name: Acute kidney injury stage 3
  concept_id: '44809063'
  code:
    concept_code: '851951000000100'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851951000000100
  descendants_included: false
- concept_name: Acute nephropathy
  concept_id: '4242411'
  code:
    concept_code: '58574008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/58574008
  descendants_included: true
- concept_name: Acute kidney injury due to acute tubular necrosis due to sepsis
  concept_id: '37395517'
  code:
    concept_code: '1048491000000106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1048491000000106
  descendants_included: true
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: true
- concept_name: Clinical sepsis
  concept_id: '40487101'
  code:
    concept_code: '447931005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/447931005
  descendants_included: true
- concept_name: Menosepsis
  concept_id: '4205449'
  code:
    concept_code: '55528005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/55528005
  descendants_included: true
- concept_name: Miscarriage with septic shock
  concept_id: '4085627'
  code:
    concept_code: '18613002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/18613002
  descendants_included: true
- concept_name: Postprocedural intra-abdominal sepsis
  concept_id: '4204036'
  code:
    concept_code: '308887002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/308887002
  descendants_included: true
- concept_name: Puerperal septicemia - delivered with postnatal complication
  concept_id: '4066124'
  code:
    concept_code: '200195002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200195002
  descendants_included: true
- concept_name: Sepsis
  concept_id: '132797'
  code:
    concept_code: '91302008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/91302008
  descendants_included: true
- concept_name: Sepsis syndrome
  concept_id: '4029281'
  code:
    concept_code: '238150007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238150007
  descendants_included: true
- concept_name: Sepsis-associated encephalopathy
  concept_id: '4046106'
  code:
    concept_code: '230361008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/230361008
  descendants_included: true
- concept_name: Sepsis-associated lung injury
  concept_id: '4119941'
  code:
    concept_code: '233812001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233812001
  descendants_included: true
- concept_name: Sepsis-associated organ dysfunction
  concept_id: '4031168'
  code:
    concept_code: '238151006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238151006
  descendants_included: true
- concept_name: Septic shock
  concept_id: '196236'
  code:
    concept_code: '76571007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/76571007
  descendants_included: true
- concept_name: Systemic inflammatory response syndrome
  concept_id: '434821'
  code:
    concept_code: '238149007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238149007
  descendants_included: true
- concept_name: Transient neonatal neutropenia due to neonatal bacterial sepsis
  concept_id: '36716754'
  code:
    concept_code: '722926003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722926003
  descendants_included: true
- concept_name: Dependence on ventilator
  concept_id: '40481547'
  code:
    concept_code: '444932008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/444932008
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274061'
  code:
    concept_code: '10677711000119101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10677711000119101
  descendants_included: true
- concept_name: Influenza
  concept_id: '4266367'
  code:
    concept_code: '6142004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/6142004
  descendants_included: true
- concept_name: Influenza with CNS disorder
  concept_id: '42537960'
  code:
    concept_code: '738276008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/738276008
  descendants_included: true
- concept_name: Influenza with gastrointestinal tract involvement
  concept_id: '4112824'
  code:
    concept_code: '195929004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195929004
  descendants_included: true
- concept_name: Myocarditis due to influenza virus
  concept_id: '4299935'
  code:
    concept_code: '78046005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/78046005
  descendants_included: true
- concept_name: Otitis media due to influenza
  concept_id: '46269706'
  code:
    concept_code: '10624951000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10624951000119108
  descendants_included: true
- concept_name: Pneumonia due to Influenza A virus
  concept_id: '763011'
  code:
    concept_code: '434921000124108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/434921000124108
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311061'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '45756093'
  code:
    concept_code: U07.1
    vocabulary_id: ICD10
    concept_code_url: ''
  descendants_included: false
- concept_name: Emergency use of U07.1 | Disease caused by severe acute respiratory
    syndrome coronavirus 2
  concept_id: '42501115'
  code:
    concept_code: U07.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Novel coronavirus infection
  concept_id: '586414'
  code:
    concept_code: U18.1
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Other coronavirus as the cause of diseases classified elsewhere
  concept_id: '45600471'
  code:
    concept_code: B97.29
    vocabulary_id: ICD10CM
    concept_code_url: ''
  descendants_included: false
- concept_name: Provisional assignment of new diseases or emergency use
  concept_id: '586415'
  code:
    concept_code: U18
    vocabulary_id: KCD7
    concept_code_url: ''
  descendants_included: false
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274061'
  code:
    concept_code: '10677711000119101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10677711000119101
  descendants_included: true
- concept_name: Influenza
  concept_id: '4266367'
  code:
    concept_code: '6142004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/6142004
  descendants_included: true
- concept_name: Influenza with CNS disorder
  concept_id: '42537960'
  code:
    concept_code: '738276008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/738276008
  descendants_included: true
- concept_name: Influenza with gastrointestinal tract involvement
  concept_id: '4112824'
  code:
    concept_code: '195929004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195929004
  descendants_included: true
- concept_name: Myocarditis due to influenza virus
  concept_id: '4299935'
  code:
    concept_code: '78046005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/78046005
  descendants_included: true
- concept_name: Otitis media due to influenza
  concept_id: '46269706'
  code:
    concept_code: '10624951000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10624951000119108
  descendants_included: true
- concept_name: Pneumonia due to Influenza A virus
  concept_id: '763011'
  code:
    concept_code: '434921000124108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/434921000124108
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Acute respiratory distress syndrome
  concept_id: '4195694'
  code:
    concept_code: '67782005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/67782005
  descendants_included: true
- concept_name: Acute respiratory failure
  concept_id: '319049'
  code:
    concept_code: '65710008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/65710008
  descendants_included: true
- concept_name: Acute kidney injury due to circulatory failure
  concept_id: '36716182'
  code:
    concept_code: '722095005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722095005
  descendants_included: false
- concept_name: Acute kidney injury due to hypovolemia
  concept_id: '36716183'
  code:
    concept_code: '722096006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722096006
  descendants_included: false
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: false
- concept_name: Acute kidney injury stage 1
  concept_id: '44809061'
  code:
    concept_code: '851931000000107'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851931000000107
  descendants_included: false
- concept_name: Acute kidney injury stage 2
  concept_id: '44809062'
  code:
    concept_code: '851941000000103'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851941000000103
  descendants_included: false
- concept_name: Acute kidney injury stage 3
  concept_id: '44809063'
  code:
    concept_code: '851951000000100'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/851951000000100
  descendants_included: false
- concept_name: Acute nephropathy
  concept_id: '4242411'
  code:
    concept_code: '58574008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/58574008
  descendants_included: true
- concept_name: Acute kidney injury due to acute tubular necrosis due to sepsis
  concept_id: '37395517'
  code:
    concept_code: '1048491000000106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1048491000000106
  descendants_included: true
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716312'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: true
- concept_name: Clinical sepsis
  concept_id: '40487101'
  code:
    concept_code: '447931005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/447931005
  descendants_included: true
- concept_name: Menosepsis
  concept_id: '4205449'
  code:
    concept_code: '55528005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/55528005
  descendants_included: true
- concept_name: Miscarriage with septic shock
  concept_id: '4085627'
  code:
    concept_code: '18613002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/18613002
  descendants_included: true
- concept_name: Postprocedural intra-abdominal sepsis
  concept_id: '4204036'
  code:
    concept_code: '308887002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/308887002
  descendants_included: true
- concept_name: Puerperal septicemia - delivered with postnatal complication
  concept_id: '4066124'
  code:
    concept_code: '200195002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200195002
  descendants_included: true
- concept_name: Sepsis
  concept_id: '132797'
  code:
    concept_code: '91302008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/91302008
  descendants_included: true
- concept_name: Sepsis syndrome
  concept_id: '4029281'
  code:
    concept_code: '238150007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238150007
  descendants_included: true
- concept_name: Sepsis-associated encephalopathy
  concept_id: '4046106'
  code:
    concept_code: '230361008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/230361008
  descendants_included: true
- concept_name: Sepsis-associated lung injury
  concept_id: '4119941'
  code:
    concept_code: '233812001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233812001
  descendants_included: true
- concept_name: Sepsis-associated organ dysfunction
  concept_id: '4031168'
  code:
    concept_code: '238151006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238151006
  descendants_included: true
- concept_name: Septic shock
  concept_id: '196236'
  code:
    concept_code: '76571007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/76571007
  descendants_included: true
- concept_name: Systemic inflammatory response syndrome
  concept_id: '434821'
  code:
    concept_code: '238149007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/238149007
  descendants_included: true
- concept_name: Transient neonatal neutropenia due to neonatal bacterial sepsis
  concept_id: '36716754'
  code:
    concept_code: '722926003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722926003
  descendants_included: true
- concept_name: Dependence on ventilator
  concept_id: '40481547'
  code:
    concept_code: '444932008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/444932008
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Atypical pneumonia
  concept_id: '4050869'
  code:
    concept_code: '233606009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233606009
  descendants_included: true
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
  descendants_included: true
- concept_name: Acute respiratory distress syndrome
  concept_id: '4195694'
  code:
    concept_code: '67782005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/67782005
  descendants_included: true
- concept_name: Acute respiratory failure
  concept_id: '319049'
  code:
    concept_code: '65710008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/65710008
  descendants_included: true
- concept_name: Dependence on ventilator
  concept_id: '40481547'
  code:
    concept_code: '444932008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/444932008
  descendants_included: true
- concept_name: Anemia
  concept_id: '439777'
  code:
    concept_code: '271737000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271737000
  descendants_included: true
- concept_name: Aplastic anemia
  concept_id: '137829'
  code:
    concept_code: '306058006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/306058006
  descendants_included: true
- concept_name: Sickle cell-hemoglobin C disease
  concept_id: '24006'
  code:
    concept_code: '35434009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/35434009
  descendants_included: true
- concept_name: Sickle cell trait
  concept_id: '25518'
  code:
    concept_code: '16402000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/16402000
  descendants_included: true
- concept_name: Malignant neoplastic disease
  concept_id: '443392'
  code:
    concept_code: '363346000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/363346000
  descendants_included: true
- concept_name: Chronic obstructive lung disease
  concept_id: '255573'
  code:
    concept_code: '13645005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/13645005
  descendants_included: true
- concept_name: Atherosclerosis of arteries of the extremities
  concept_id: '315558'
  code:
    concept_code: '51274000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/51274000
  descendants_included: true
- concept_name: Coronary artery disease
  concept_id: '35205164'
  code:
    concept_code: '10011078'
    vocabulary_id: MedDRA
    concept_code_url: ''
  descendants_included: true
- concept_name: Ulcer of ankle due to atherosclerosis of native artery of limb
  concept_id: '46270348'
  code:
    concept_code: '284891000119106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/284891000119106
  descendants_included: true
- concept_name: Ulcer of calf due to atherosclerosis of native artery of limb
  concept_id: '46270350'
  code:
    concept_code: '284901000119105'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/284901000119105
  descendants_included: true
- concept_name: Amnestic disorder
  concept_id: '372608'
  code:
    concept_code: '3298001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/3298001
  descendants_included: false
- concept_name: Degenerative brain disorder
  concept_id: '375239'
  code:
    concept_code: '52522001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/52522001
  descendants_included: false
- concept_name: Dementia
  concept_id: '4182210'
  code:
    concept_code: '52448006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/52448006
  descendants_included: true
- concept_name: Frontotemporal dementia
  concept_id: '4043378'
  code:
    concept_code: '230270009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/230270009
  descendants_included: false
- concept_name: Pick's disease
  concept_id: '436092'
  code:
    concept_code: '13092008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/13092008
  descendants_included: false
- concept_name: Senile degeneration of brain
  concept_id: '373179'
  code:
    concept_code: '45864009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/45864009
  descendants_included: false
- concept_name: Senility
  concept_id: '435088'
  code:
    concept_code: '271873000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271873000
  descendants_included: false
- concept_name: Diabetes mellitus
  concept_id: '201820'
  code:
    concept_code: '73211009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/73211009
  descendants_included: true
- concept_name: Diabetic - poor control
  concept_id: '443238'
  code:
    concept_code: '268519009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/268519009
  descendants_included: true
- concept_name: Diabetic complication
  concept_id: '442793'
  code:
    concept_code: '74627003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/74627003
  descendants_included: true
- concept_name: Heart disease
  concept_id: '321588'
  code:
    concept_code: '56265001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/56265001
  descendants_included: true
- concept_name: Hyperlipidemia
  concept_id: '432867'
  code:
    concept_code: '55822004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/55822004
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Kidney disease
  concept_id: '198124'
  code:
    concept_code: '90708001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/90708001
  descendants_included: true
- concept_name: Hepatic coma
  concept_id: '377604'
  code:
    concept_code: '72836002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/72836002
  descendants_included: false
- concept_name: Hepatic encephalopathy
  concept_id: '4029488'
  code:
    concept_code: '13920009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/13920009
  descendants_included: false
- concept_name: Hepatic failure
  concept_id: '4245975'
  code:
    concept_code: '59927004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/59927004
  descendants_included: true
- concept_name: Hepatic necrosis
  concept_id: '4337543'
  code:
    concept_code: '87248009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/87248009
  descendants_included: true
- concept_name: Ascites
  concept_id: '200528'
  code:
    concept_code: '389026000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/389026000
  descendants_included: true
- concept_name: Pressure ulcer
  concept_id: '135333'
  code:
    concept_code: '399912005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/399912005
  descendants_included: true
- concept_name: Skin ulcer
  concept_id: '4262920'
  code:
    concept_code: '46742003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/46742003
  descendants_included: true
- concept_name: Respiratory failure
  concept_id: '4256228'
  code:
    concept_code: '409622000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/409622000
  descendants_included: true
- concept_name: Respiratory insufficiency
  concept_id: '318459'
  code:
    concept_code: '409623005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/409623005
  descendants_included: true

# Study protocol
study_protocol:
  # Protocol identifier; specifically created for the website
  # The identifier is the last part of the URL directing to the particular study protocol
  protocol_id: 'Covid19PredictionStudies/design'
  # Last modification date, use date format YYYY-MM-DD
  date_modified: 2020-03-28
  # Protocol identifier, in case protocol has an identifier elsewhere 
  protocol_identifier: 
  # Protocol license
  license: 
  # URL to the protocol
  protocol_url: https://github.com/ohdsi-studies/Covid19PredictionStudies/blob/master/HospitalizationInSymptomaticPatients/docs/PLP_protocol_Q1%2BQ2_20200329.docx
  # Version of the protocol 
  version: 

# URL to the forum thread about the study
forum_thread_url: 

# Source code used for the study; if multiple code repositories are available, 
# duplicate all keys under "source_code"
source_code:
- name: 'Covid19PredictionStudies'
  # URL to GitHub repository containing the source code
  code_repository_url: https://github.com/ohdsi-studies/Covid19PredictionStudies
  # Last modification date, use date format YYYY-MM-DD
  date_modified: 2020-08-17
  # Maintainer of source code; use identifier of organization if applicable
  maintainer: 'OHDSI'
  # Programming language used
  programming_language: 'R' 
  # # Version of the source code
  # version: 

# # Software used for the study; if multiple software applications are used
# # duplicate all keys under "software"
# software:
#  # Name of the software
# - name: 
#  # URL to source code of software
#  source_code_url: 
#  # Maintainer of source code; use identifier of organization if applicable.
#  maintainer: 
#  # Version of the software
#  version: 

# doi of publications related to the study; if multiple articles have been published,
# duplicate key under "publications"
publications:
- doi: https://doi.org/10.1101/2020.06.15.20130328

# study results (e.g. shiny web application)
results:
# Name of the web application showing the results
- name: 'Can we trust the prediction model? Demonstrating the importance of external validation by investigating the COVID-19 Vulnerability (C-19) Index across an international network of observational healthcare datasets'
  # URL to the web application
  application_url: http://evidence.ohdsi.org:3838/C19validation/
# Name of the web application showing the results
- name: 'Predicting Patients Requiring Hospitalization When Initially Presenting with Flu or Flu like symptoms (To be investigated for the use on Patients, with or suspected to have, Covid-19)'
  # URL to the web application
  application_url: https://data.ohdsi.org/Covid19PredictingHospitalizationInFluPatients/
# Name of the web application showing the results
- name: 'Predicting Patients Requiring Hospitalization After Being Sent Home From An Outpatient Visit Presenting with Flu or Flu like symptoms (To be investigated for the use on Patients, with or suspected to have, Covid-19)'
  # URL to the web application
  application_url: https://data.ohdsi.org/Covid19PredictingHospitilizationAfterSentHome/
# Name of the web application showing the results
- name: 'Predicting Severely Ill Patients In Those Admitted To Hospital For Pneumonia (To be investigated for the use on Patients, with or suspected to have, Covid-19)'
  # URL to the web application
  application_url: https://data.ohdsi.org/Covid19PredictingSevereInHospResults/
- name: 'OHDSI Covid-19 Simple Models Results'
  # URL to the web application
  application_url: https://data.ohdsi.org/Covid19PredictingSimpleModels/

## Drug studied; if multiple subjects are being studied,
## duplicate all keys under "study_subject"
#study_subject: 
## Concept identifier
#- concept_id: 
#  # Concept name 
#  concept_name: 
#  # Concept code and vocabulary metadata
#  code:
#    # Concept code
#    concept_code: 
#    # Vocabulary id 
#    vocabulary_id: 
#    # URL to term in vocabulary (e.g. http://purl.bioontology.org/ontology/RXNORM/5521)
#    concept_code_url: 

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
  name: 'OHDSI'
  # Other URLs linking to important organization sites (e.g. twitter)
  url: [https://www.linkedin.com/company/ohdsi/, https://twitter.com/ohdsi, https://www.youtube.com/user/OHDSIJoinTheJourney]
  
from_readme:
  title: 'Development and validation of complex and simple patient-level prediction models for predicting various outcomes in COVID patients: a rapid network study to inform the management of COVID-19'
  study_usecase: [2]
  study_type: [0]
  tags: [Study-a-thon, COVID-19]
  leads: ['Jenna Reps', 'Ross Williams', 'Peter Rijnbeek']
  leadForumTags: [{name: jreps, mainEntityofPage: 'https://forums.ohdsi.org/u/jreps'}, {name: RossW, mainEntityofPage: 'https://forums.ohdsi.org/u/RossW'}, {name: Rijnbeek, mainEntityofPage: 'https://forums.ohdsi.org/u/Rijnbeek'}]
  startDate: 'Mar 26, 2020'
  endDate: ""
  protocol: {name: 'Word docment', mainEntityofPage: 'https://github.com/ohdsi-studies/Covid19PredictionStudies/blob/master/HospitalizationInSymptomaticPatients/docs/PLP_protocol_Q1%2BQ2_20200329.docx'}
  publications: [{name: 'Simple Models](https://www.medrxiv.org/content/10.1101/2020.05.26.20112649v4) - [C19 Validation', mainEntityofPage: 'https://www.medrxiv.org/content/10.1101/2020.05.26.20112649v4) - [C19 Validation](https://www.medrxiv.org/content/10.1101/2020.06.15.20130328v1'}]
  results: [{name: 'Simple Models](http://evidence.ohdsi.org:3838/Covid19CoverPrediction/) - [C19 Validation', mainEntityofPage: 'http://evidence.ohdsi.org:3838/Covid19CoverPrediction/) - [C19 Validation](http://evidence.ohdsi.org:3838/C19validation/'}]
  authors: [jreps, RossW, Rijnbeek]
  description: 'The objective of this study is to develop and validate various patient-level prediction models for COVID-19 patients. '

---
