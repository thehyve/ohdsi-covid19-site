---
# Website information
# Study title
title: 'Characterizing Health Associated Risks, and Your Baseline Disease In SARS-COV-2 (CHARYBDIS)'

tags: [OHDSI, Study-a-thon, COVID-19]
categories: []

# Do not fill; filled automatically
date: 2020-10-07T11:57:07+02:00
lastmod: 2020-10-07T11:57:07+02:00
featured: false

# Change to 'false' to be published
draft: false

# Study identifier, specifically created for the website.
# The identifier is the last part of the URL directing to the particular study
study_id: 'Covid19CharacterizationCharybdis'

# Study identifier 
study_identifier: 

# URL to study registration site
study_registration_url: 

# Study description
description: 'Objectives: 
Describe the baseline demographic, clinical characteristics, treatments and outcomes of interest among individuals tested for SARS-CoV-2 and/or diagnosed with COVID-19 overall and stratified by sex, age, race and specific comorbidities; Describe characteristics and outcomes of patients diagnosed/tested positive for influenza as well as patients hospitalized with influenza between September 2017 and April 2018 compared to the COVID-19 population.'


# Start date of the study, use date format YYYY-MM-DD
start_date: 2020-04-21

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
authors: [tduarte, krfeeney, Albert_Prats]

# Study Type, choose 0 or 1:
# 0: Clinical Application
# 1: Methods Research
study_type: [0]

# Analytics Use Case of the Study, choose 0, 1, 2 or 3:
# 0: Characterization
# 1: Population-Level Estimation
# 2: Patient-Level Prediction
# 3: Characterization and Population-Level Estimation
study_usecase: [0]

# Database identifiers of databases used for the study
databases: [HIRA, STARR, CLARET, Columbia University Irving Medical Center, Veteran’s Affairs, UC Health Data Compass, University of Washington, SIDIAP]

# Conditions studied; if multiple conditions are being studied,
# duplicate all keys under "conditions"
conditions:
- concept_name: Diabetes mellitus
  concept_id: '201820'
  code:
    concept_code: '73211009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/73211009
  descendants_included: true
- concept_name: Complication due to diabetes mellitus
  concept_id: '442793'
  code:
    concept_code: '74627003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/74627003
  descendants_included: true
- concept_name: Diabetic - poor control
  concept_id: '443238'
  code:
    concept_code: '268519009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/268519009
  descendants_included: true
- concept_name: Hypertensive disorder
  concept_id: '316866'
  code:
    concept_code: '38341003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38341003
  descendants_included: true
- concept_name: Pulmonary hypertension
  concept_id: '4322024'
  code:
    concept_code: '70995007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/70995007
  descendants_included: true
- concept_name: Hypertensive complication
  concept_id: '42709890.0'
  code:
    concept_code: '449759005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/449759005
  descendants_included: true
- concept_name: Aneurysm of renal artery
  concept_id: '194385'
  code:
    concept_code: '36184004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/36184004
  descendants_included: true
- concept_name: Chronic kidney disease
  concept_id: '46271020.0'
  code:
    concept_code: '709044004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/709044004
  descendants_included: true
- concept_name: Kidney disorder due to diabetes mellitus
  concept_id: '192279'
  code:
    concept_code: '127013003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/127013003
  descendants_included: true
- concept_name: Glomerulonephritis
  concept_id: '4263367'
  code:
    concept_code: '36171008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/36171008
  descendants_included: true
- concept_name: Glomerulosclerosis
  concept_id: '261071'
  code:
    concept_code: '197661001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/197661001
  descendants_included: true
- concept_name: Hypertensive renal disease
  concept_id: '201313'
  code:
    concept_code: '38481006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38481006
  descendants_included: true
- concept_name: Interstitial nephritis
  concept_id: '4103224'
  code:
    concept_code: '28689008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/28689008
  descendants_included: true
- concept_name: Nephritis
  concept_id: '193253'
  code:
    concept_code: '52845002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/52845002
  descendants_included: false
- concept_name: Nephrotic syndrome
  concept_id: '195314'
  code:
    concept_code: '52254009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/52254009
  descendants_included: true
- concept_name: Renal failure syndrome
  concept_id: '192359'
  code:
    concept_code: '42399005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/42399005
  descendants_included: true
- concept_name: Anemia in chronic kidney disease
  concept_id: '45768810.0'
  code:
    concept_code: '707323002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/707323002
  descendants_included: true
- concept_name: Complication of dialysis
  concept_id: '4027133'
  code:
    concept_code: '19765000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/19765000
  descendants_included: true
- concept_name: Chronic kidney disease stage 5
  concept_id: '443611'
  code:
    concept_code: '433146000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/433146000
  descendants_included: true
- concept_name: End-stage renal disease
  concept_id: '193782'
  code:
    concept_code: '46177005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/46177005
  descendants_included: true
- concept_name: Hypertensive renal failure
  concept_id: '443919'
  code:
    concept_code: '49220004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49220004
  descendants_included: true
- concept_name: Complication of dialysis
  concept_id: '4027133'
  code:
    concept_code: '19765000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/19765000
  descendants_included: true
- concept_name: Heart disease
  concept_id: '321588'
  code:
    concept_code: '56265001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/56265001
  descendants_included: true
- concept_name: Arteriosclerosis of coronary artery bypass graft
  concept_id: '443563'
  code:
    concept_code: '429673002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/429673002
  descendants_included: true
- concept_name: Malignant neoplastic disease
  concept_id: '443392'
  code:
    concept_code: '363346000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/363346000
  descendants_included: true
- concept_name: Human immunodeficiency virus carrier
  concept_id: '44783360.0'
  code:
    concept_code: '699433000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/699433000
  descendants_included: true
- concept_name: Human immunodeficiency virus infection
  concept_id: '439727'
  code:
    concept_code: '86406008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/86406008
  descendants_included: true
- concept_name: Hepatitis C antibody test positive
  concept_id: '4196134'
  code:
    concept_code: '314706002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/314706002
  descendants_included: true
- concept_name: Hepatitis C antigen positive
  concept_id: '44806380.0'
  code:
    concept_code: '812181000000106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/812181000000106
  descendants_included: true
- concept_name: Hepatitis C carrier
  concept_id: '4340380'
  code:
    concept_code: '235872006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/235872006
  descendants_included: true
- concept_name: Hepatitis C viral ribonucleic acid polymerase chain reaction positive
  concept_id: '44813290.0'
  code:
    concept_code: '760421000000100'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/760421000000100
  descendants_included: true
- concept_name: Viral hepatitis C
  concept_id: '197494'
  code:
    concept_code: '50711007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/50711007
  descendants_included: true
- concept_name: Viral hepatitis C with coma
  concept_id: '439672'
  code:
    concept_code: '186628001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186628001
  descendants_included: true
- concept_name: Lymphedema associated with obesity
  concept_id: '45766200.0'
  code:
    concept_code: '703316004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/703316004
  descendants_included: true
- concept_name: Obesity
  concept_id: '433736'
  code:
    concept_code: '414916001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/414916001
  descendants_included: true
- concept_name: Obesity associated disorder
  concept_id: '4176962'
  code:
    concept_code: '363247006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/363247006
  descendants_included: true
- concept_name: Pulmonary hypertension with extreme obesity
  concept_id: '4081038'
  code:
    concept_code: '276792008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/276792008
  descendants_included: true
- concept_name: Aggression due to dementia
  concept_id: '37312040.0'
  code:
    concept_code: '788861009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/788861009
  descendants_included: true
- concept_name: Agitation due to dementia
  concept_id: '37312040.0'
  code:
    concept_code: '788862002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/788862002
  descendants_included: true
- concept_name: Amyotrophic lateral sclerosis with dementia
  concept_id: '4041685'
  code:
    concept_code: '230258005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/230258005
  descendants_included: true
- concept_name: Anxiety due to dementia
  concept_id: '37312030.0'
  code:
    concept_code: '788866004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/788866004
  descendants_included: true
- concept_name: Apathetic behaviour due to dementia
  concept_id: '37312030.0'
  code:
    concept_code: '788867008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/788867008
  descendants_included: true
- concept_name: Behavioral and psychological symptoms of dementia
  concept_id: '35608580.0'
  code:
    concept_code: '10171000132106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10171000132106
  descendants_included: true
- concept_name: Cerebral degeneration presenting primarily with dementia
  concept_id: '4092747'
  code:
    concept_code: '279982005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/279982005
  descendants_included: true
- concept_name: Dementia
  concept_id: '4182210'
  code:
    concept_code: '52448006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/52448006
  descendants_included: true
- concept_name: Disinhibited behaviour due to dementia
  concept_id: '37311670.0'
  code:
    concept_code: '789170003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/789170003
  descendants_included: true
- concept_name: Frontotemporal dementia
  concept_id: '4043378'
  code:
    concept_code: '230270009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/230270009
  descendants_included: true
- concept_name: Frontotemporal dementia with parkinsonism-17
  concept_id: '45765480.0'
  code:
    concept_code: '702429008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/702429008
  descendants_included: true
- concept_name: GRN-related frontotemporal dementia
  concept_id: '45765480.0'
  code:
    concept_code: '702426001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/702426001
  descendants_included: true
- concept_name: Psychological symptom due to dementia
  concept_id: '37311890.0'
  code:
    concept_code: '789011007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/789011007
  descendants_included: true
- concept_name: Wandering due to dementia
  concept_id: '37312580.0'
  code:
    concept_code: '789062005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/789062005
  descendants_included: true
- concept_name: Gestational diabetes mellitus
  concept_id: '4024659'
  code:
    concept_code: '11687002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/11687002
  descendants_included: true
- concept_name: Gestational diabetes mellitus uncontrolled
  concept_id: '43020790.0'
  code:
    concept_code: '472699005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/472699005
  descendants_included: true
- concept_name: Abnormal glucose tolerance in mother complicating pregnancy, childbirth
    AND/OR puerperium
  concept_id: '438480'
  code:
    concept_code: '39763004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/39763004
  descendants_included: true
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274060.0'
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
  concept_id: '42537960.0'
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
  concept_id: '46269710.0'
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
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274060.0'
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
  concept_id: '42537960.0'
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
  concept_id: '46269710.0'
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
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274060.0'
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
  concept_id: '42537960.0'
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
  concept_id: '46269710.0'
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
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274060.0'
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
  concept_id: '42537960.0'
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
  concept_id: '46269710.0'
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
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274060.0'
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
  concept_id: '42537960.0'
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
  concept_id: '46269710.0'
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
- concept_name: Dependence on ventilator
  concept_id: '40481550.0'
  code:
    concept_code: '444932008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/444932008
  descendants_included: true
- concept_name: Encephalitis due to influenza
  concept_id: '4146943'
  code:
    concept_code: '309789002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309789002
  descendants_included: true
- concept_name: Encephalopathy due to Influenza A virus
  concept_id: '46274060.0'
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
  concept_id: '42537960.0'
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
  concept_id: '46269710.0'
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
- concept_name: Dependence on ventilator
  concept_id: '40481550.0'
  code:
    concept_code: '444932008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/444932008
  descendants_included: true
- concept_name: Respiratory tuberculosis
  concept_id: '45771090.0'
  code:
    concept_code: '700272008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/700272008
  descendants_included: true
- concept_name: Pleurisy without effusion or active tuberculosis
  concept_id: '4112923'
  code:
    concept_code: '196076002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/196076002
  descendants_included: true
- concept_name: Tuberculous pleurisy, confirmed bacteriologically and histologically
  concept_id: '4090539'
  code:
    concept_code: '186200004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186200004
  descendants_included: true
- concept_name: Tuberculous pleurisy in primary progressive tuberculosis
  concept_id: '258675'
  code:
    concept_code: '186172004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186172004
  descendants_included: true
- concept_name: Primary tuberculosis
  concept_id: '432541'
  code:
    concept_code: '63309002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/63309002
  descendants_included: true
- concept_name: Tuberculosis
  concept_id: '434557'
  code:
    concept_code: '56717001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/56717001
  descendants_included: false
- concept_name: Type 1 diabetes mellitus
  concept_id: '201254'
  code:
    concept_code: '46635009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/46635009
  descendants_included: true
- concept_name: Disorder due to type 1 diabetes mellitus
  concept_id: '435216'
  code:
    concept_code: '420868002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/420868002
  descendants_included: true
- concept_name: Type 1 diabetes mellitus uncontrolled
  concept_id: '40484650.0'
  code:
    concept_code: '444073006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/444073006
  descendants_included: true
- concept_name: Cutaneous atrophy due to rheumatoid arthritis
  concept_id: '4297650'
  code:
    concept_code: '402431009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/402431009
  descendants_included: true
- concept_name: Deformity of foot due to rheumatoid arthritis
  concept_id: '4334806'
  code:
    concept_code: '433228003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/433228003
  descendants_included: true
- concept_name: Deformity of hand due to rheumatoid arthritis
  concept_id: '46273440.0'
  code:
    concept_code: '96531000119109'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/96531000119109
  descendants_included: true
- concept_name: Myopathy due to rheumatoid arthritis
  concept_id: '4107913'
  code:
    concept_code: '193250002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/193250002
  descendants_included: true
- concept_name: Polyneuropathy in rheumatoid arthritis
  concept_id: '4102493'
  code:
    concept_code: '193180002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/193180002
  descendants_included: true
- concept_name: Rheumatoid arthritis
  concept_id: '80809'
  code:
    concept_code: '69896004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/69896004
  descendants_included: true
- concept_name: Seronegative rheumatoid arthritis
  concept_id: '4083556'
  code:
    concept_code: '239792003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/239792003
  descendants_included: true
- concept_name: Seropositive rheumatoid arthritis
  concept_id: '4035611'
  code:
    concept_code: '239791005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/239791005
  descendants_included: true
- concept_name: Acrodermatitis continua
  concept_id: '75614'
  code:
    concept_code: '200976008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200976008
  descendants_included: true
- concept_name: Psoriasis
  concept_id: '140168'
  code:
    concept_code: '9014002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/9014002
  descendants_included: true
- concept_name: Psoriasis with arthropathy
  concept_id: '81931'
  code:
    concept_code: '33339001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/33339001
  descendants_included: true
- concept_name: Multiple sclerosis
  concept_id: '374919'
  code:
    concept_code: '24700007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/24700007
  descendants_included: true
- concept_name: Endocarditis due to systemic lupus erythematosus
  concept_id: '46273370.0'
  code:
    concept_code: '72181000119109'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/72181000119109
  descendants_included: true
- concept_name: Renal tubulo-interstitial disorder in systemic lupus erythematosus
  concept_id: '4145240'
  code:
    concept_code: '307755009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/307755009
  descendants_included: true
- concept_name: Systemic lupus erythematosus
  concept_id: '257628'
  code:
    concept_code: '55464009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/55464009
  descendants_included: true
- concept_name: Addison's disease
  concept_id: '443394'
  code:
    concept_code: '363732003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/363732003
  descendants_included: true
- concept_name: Graves' disease
  concept_id: '4232076'
  code:
    concept_code: '353295004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/353295004
  descendants_included: true
- concept_name: Sj?gren's syndrome
  concept_id: '254443'
  code:
    concept_code: '83901003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/83901003
  descendants_included: true
- concept_name: Hashimoto thyroiditis
  concept_id: '135215'
  code:
    concept_code: '21983002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/21983002
  descendants_included: true
- concept_name: Myasthenia gravis
  concept_id: '76685'
  code:
    concept_code: '91637004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/91637004
  descendants_included: true
- concept_name: Myasthenic syndrome due to another disorder
  concept_id: '432893'
  code:
    concept_code: '193209005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/193209005
  descendants_included: true
- concept_name: Vasculitis
  concept_id: '4137275'
  code:
    concept_code: '31996006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/31996006
  descendants_included: true
- concept_name: Pernicious anemia
  concept_id: '432295'
  code:
    concept_code: '84027009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84027009
  descendants_included: true
- concept_name: Celiac disease
  concept_id: '194992'
  code:
    concept_code: '396331005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/396331005
  descendants_included: true
- concept_name: Ischemic nephropathy
  concept_id: '46272240.0'
  code:
    concept_code: '710565001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/710565001
  descendants_included: true
- concept_name: Linear scleroderma
  concept_id: '4331739'
  code:
    concept_code: '22784002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/22784002
  descendants_included: true
- concept_name: Localized scleroderma
  concept_id: '441928'
  code:
    concept_code: '201048007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/201048007
  descendants_included: true
- concept_name: Lung disease with systemic sclerosis
  concept_id: '255304'
  code:
    concept_code: '196133001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/196133001
  descendants_included: true
- concept_name: Myopathy due to systemic sclerosis
  concept_id: '4105026'
  code:
    concept_code: '193252005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/193252005
  descendants_included: true
- concept_name: Polyneuropathy due to systemic sclerosis
  concept_id: '46270480.0'
  code:
    concept_code: '322461000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/322461000119108
  descendants_included: true
- concept_name: Systemic sclerosis
  concept_id: '134442'
  code:
    concept_code: '89155008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/89155008
  descendants_included: true
- concept_name: Systemic sclerosis induced by drugs and chemicals
  concept_id: '4063582'
  code:
    concept_code: '201443009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/201443009
  descendants_included: true
- concept_name: Sarcoidosis
  concept_id: '438688'
  code:
    concept_code: '31541009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/31541009
  descendants_included: true
- concept_name: Sarcoid arthropathy
  concept_id: '4262578'
  code:
    concept_code: '361197009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/361197009
  descendants_included: true
- concept_name: Sarcoid iridocyclitis
  concept_id: '45772120.0'
  code:
    concept_code: '352941000119102'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/352941000119102
  descendants_included: true
- concept_name: Multiple cranial nerve palsies in sarcoidosis
  concept_id: '4105005'
  code:
    concept_code: '193101001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/193101001
  descendants_included: true
- concept_name: Complication due to ulcerative colitis
  concept_id: '46273480.0'
  code:
    concept_code: '1092851000119103'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1092851000119103
  descendants_included: true
- concept_name: Ulcerative colitis
  concept_id: '81893'
  code:
    concept_code: '64766004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/64766004
  descendants_included: true
- concept_name: Rectal hemorrhage due to ulcerative colitis
  concept_id: '46273480.0'
  code:
    concept_code: '1092881000119105'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1092881000119105
  descendants_included: true
- concept_name: Intestinal obstruction due to ulcerative colitis
  concept_id: '46274080.0'
  code:
    concept_code: '1092871000119107'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1092871000119107
  descendants_included: true
- concept_name: Fistula of intestine due to ulcerative colitis
  concept_id: '46269950.0'
  code:
    concept_code: '1092861000119101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1092861000119101
  descendants_included: true
- concept_name: Arthropathy in ulcerative colitis
  concept_id: '4116142'
  code:
    concept_code: '201727001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/201727001
  descendants_included: true
- concept_name: Crohn's disease
  concept_id: '201606'
  code:
    concept_code: '34000006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/34000006
  descendants_included: true
- concept_name: Complication due to Crohn's disease
  concept_id: '46269890.0'
  code:
    concept_code: '1085911000119103'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1085911000119103
  descendants_included: true
- concept_name: Chronic obstructive lung disease
  concept_id: '255573'
  code:
    concept_code: '13645005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/13645005
  descendants_included: true
- concept_name: Emphysematous bronchitis
  concept_id: '258780'
  code:
    concept_code: '185086009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/185086009
  descendants_included: true
- concept_name: Asthma
  concept_id: '317009'
  code:
    concept_code: '195967001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195967001
  descendants_included: true
- concept_name: Eosinophilic asthma
  concept_id: '4279553'
  code:
    concept_code: '367542003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/367542003
  descendants_included: true
- concept_name: Asthma
  concept_id: '317009'
  code:
    concept_code: '195967001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195967001
  descendants_included: true
- concept_name: Eosinophilic asthma
  concept_id: '4279553'
  code:
    concept_code: '367542003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/367542003
  descendants_included: true
- concept_name: Chronic obstructive lung disease
  concept_id: '255573'
  code:
    concept_code: '13645005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/13645005
  descendants_included: true
- concept_name: Emphysematous bronchitis
  concept_id: '258780'
  code:
    concept_code: '185086009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/185086009
  descendants_included: true
- concept_name: Chronic obstructive lung disease
  concept_id: '255573'
  code:
    concept_code: '13645005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/13645005
  descendants_included: true
- concept_name: Emphysematous bronchitis
  concept_id: '258780'
  code:
    concept_code: '185086009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/185086009
  descendants_included: true
- concept_name: Asthma
  concept_id: '317009'
  code:
    concept_code: '195967001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195967001
  descendants_included: true
- concept_name: Eosinophilic asthma
  concept_id: '4279553'
  code:
    concept_code: '367542003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/367542003
  descendants_included: true
- concept_name: Asthma
  concept_id: '317009'
  code:
    concept_code: '195967001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195967001
  descendants_included: true
- concept_name: Eosinophilic asthma
  concept_id: '4279553'
  code:
    concept_code: '367542003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/367542003
  descendants_included: true
- concept_name: Anemia in chronic kidney disease
  concept_id: '45768810.0'
  code:
    concept_code: '707323002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/707323002
  descendants_included: true
- concept_name: Aneurysm of renal artery
  concept_id: '194385'
  code:
    concept_code: '36184004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/36184004
  descendants_included: true
- concept_name: Chronic kidney disease
  concept_id: '46271020.0'
  code:
    concept_code: '709044004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/709044004
  descendants_included: true
- concept_name: Glomerulonephritis
  concept_id: '4263367'
  code:
    concept_code: '36171008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/36171008
  descendants_included: true
- concept_name: Glomerulosclerosis
  concept_id: '261071'
  code:
    concept_code: '197661001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/197661001
  descendants_included: true
- concept_name: Hypertensive renal disease
  concept_id: '201313'
  code:
    concept_code: '38481006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38481006
  descendants_included: true
- concept_name: Interstitial nephritis
  concept_id: '4103224'
  code:
    concept_code: '28689008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/28689008
  descendants_included: true
- concept_name: Kidney disorder due to diabetes mellitus
  concept_id: '192279'
  code:
    concept_code: '127013003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/127013003
  descendants_included: true
- concept_name: Nephritis
  concept_id: '193253'
  code:
    concept_code: '52845002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/52845002
  descendants_included: false
- concept_name: Nephrotic syndrome
  concept_id: '195314'
  code:
    concept_code: '52254009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/52254009
  descendants_included: true
- concept_name: Renal failure syndrome
  concept_id: '192359'
  code:
    concept_code: '42399005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/42399005
  descendants_included: true
- concept_name: Cerebral artery occlusion
  concept_id: '372924'
  code:
    concept_code: '20059004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/20059004
  descendants_included: false
- concept_name: Cerebral embolism
  concept_id: '375557'
  code:
    concept_code: '75543006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/75543006
  descendants_included: false
- concept_name: Cerebral hemorrhage
  concept_id: '376713'
  code:
    concept_code: '274100004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/274100004
  descendants_included: false
- concept_name: Cerebral infarction
  concept_id: '443454'
  code:
    concept_code: '432504007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/432504007
  descendants_included: true
- concept_name: Cerebral thrombosis
  concept_id: '441874'
  code:
    concept_code: '71444005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/71444005
  descendants_included: false
- concept_name: Intracranial hemorrhage
  concept_id: '439847'
  code:
    concept_code: '1386000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1386000
  descendants_included: true
- concept_name: Spontaneous cerebral hemorrhage
  concept_id: '43530730.0'
  code:
    concept_code: '291571000119106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/291571000119106
  descendants_included: false
- concept_name: Spontaneous subarachnoid hemorrhage
  concept_id: '4148906'
  code:
    concept_code: '270907008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/270907008
  descendants_included: false
- concept_name: Subarachnoid hemorrhage
  concept_id: '432923'
  code:
    concept_code: '21454007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/21454007
  descendants_included: false
- concept_name: Human immunodeficiency virus carrier
  concept_id: '44783360.0'
  code:
    concept_code: '699433000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/699433000
  descendants_included: true
- concept_name: Human immunodeficiency virus infection
  concept_id: '439727'
  code:
    concept_code: '86406008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/86406008
  descendants_included: true
- concept_name: Malignant neoplastic disease
  concept_id: '443392'
  code:
    concept_code: '363346000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/363346000
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
- concept_name: Heart failure
  concept_id: '316139'
  code:
    concept_code: '84114007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84114007
  descendants_included: true
- concept_name: Bradycardia
  concept_id: '4169095'
  code:
    concept_code: '48867003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/48867003
  descendants_included: false
- concept_name: Cardiac arrhythmia
  concept_id: '44784220.0'
  code:
    concept_code: '698247007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/698247007
  descendants_included: true
- concept_name: Arteriosclerosis of coronary artery bypass graft
  concept_id: '443563'
  code:
    concept_code: '429673002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/429673002
  descendants_included: true
- concept_name: Heart disease
  concept_id: '321588'
  code:
    concept_code: '56265001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/56265001
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311060.0'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311060.0'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311060.0'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311060.0'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311060.0'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Disease caused by severe acute respiratory syndrome coronavirus 2
  concept_id: '37311060.0'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311060.0'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Dependence on ventilator
  concept_id: '40481550.0'
  code:
    concept_code: '444932008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/444932008
  descendants_included: true
- concept_name: Disease caused by 2019-nCoV
  concept_id: '37311060.0'
  code:
    concept_code: '840539006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/840539006
  descendants_included: true
- concept_name: Disease due to Coronaviridae
  concept_id: '4100065'
  code:
    concept_code: '27619001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27619001
  descendants_included: true
- concept_name: Coronavirus infection
  concept_id: '439676'
  code:
    concept_code: '186747009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186747009
  descendants_included: true
- concept_name: Dependence on ventilator
  concept_id: '40481550.0'
  code:
    concept_code: '444932008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/444932008
  descendants_included: true
- concept_name: Dependence on ventilator
  concept_id: '40481550.0'
  code:
    concept_code: '444932008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/444932008
  descendants_included: true
- concept_name: Dependence on ventilator
  concept_id: '40481550.0'
  code:
    concept_code: '444932008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/444932008
  descendants_included: true
- concept_name: Eclampsia
  concept_id: '443700'
  code:
    concept_code: '15938005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/15938005
  descendants_included: true
- concept_name: Pre-eclampsia
  concept_id: '439393'
  code:
    concept_code: '398254007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/398254007
  descendants_included: true
- concept_name: Pre-eclampsia or eclampsia with pre-existing hypertension
  concept_id: '141084'
  code:
    concept_code: '198997005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/198997005
  descendants_included: true
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
  concept_id: '44829290.0'
  code:
    concept_code: '780.7'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '44823450.0'
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
- concept_name: Sensory disorder of smell and/or taste
  concept_id: '43530710.0'
  code:
    concept_code: '2611000119103'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/2611000119103
  descendants_included: true
- concept_name: Loss of sense of smell
  concept_id: '4185711'
  code:
    concept_code: '44169009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/44169009
  descendants_included: true
- concept_name: Taste sense altered
  concept_id: '436235'
  code:
    concept_code: '271801002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271801002
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
- concept_name: Acute nephropathy
  concept_id: '4242411'
  code:
    concept_code: '58574008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/58574008
  descendants_included: true
- concept_name: Anemia in chronic kidney disease stage 5
  concept_id: '37395650.0'
  code:
    concept_code: '691411000119101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/691411000119101
  descendants_included: true
- concept_name: Chronic kidney disease stage 5
  concept_id: '443611'
  code:
    concept_code: '433146000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/433146000
  descendants_included: true
- concept_name: End-stage renal disease
  concept_id: '193782'
  code:
    concept_code: '46177005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/46177005
  descendants_included: true
- concept_name: Disorder related to renal transplantation
  concept_id: '4324887'
  code:
    concept_code: '429451003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/429451003
  descendants_included: true
- concept_name: Transplanted kidney present
  concept_id: '42539500.0'
  code:
    concept_code: '737295003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/737295003
  descendants_included: true
- concept_name: Acute kidney injury due to acute tubular necrosis due to sepsis
  concept_id: '37395520.0'
  code:
    concept_code: '1048491000000106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1048491000000106
  descendants_included: true
- concept_name: Acute kidney injury due to sepsis
  concept_id: '36716310.0'
  code:
    concept_code: '722278006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722278006
  descendants_included: true
- concept_name: Clinical sepsis
  concept_id: '40487100.0'
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
  concept_id: '36716750.0'
  code:
    concept_code: '722926003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/722926003
  descendants_included: true
- concept_name: Embolism from thrombosis of vein of lower extremity
  concept_id: '40481090.0'
  code:
    concept_code: '444816006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/444816006
  descendants_included: true
- concept_name: Pulmonary embolism
  concept_id: '440417'
  code:
    concept_code: '59282003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/59282003
  descendants_included: true
- concept_name: Pulmonary infarction
  concept_id: '254662'
  code:
    concept_code: '64662007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/64662007
  descendants_included: true
- concept_name: Venous embolism
  concept_id: '318775'
  code:
    concept_code: '234049002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/234049002
  descendants_included: true
- concept_name: Venous thrombosis
  concept_id: '444247'
  code:
    concept_code: '111293003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/111293003
  descendants_included: true
- concept_name: Saddle embolus of pulmonary artery
  concept_id: '36713110.0'
  code:
    concept_code: '328511000119109'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/328511000119109
  descendants_included: true
- concept_name: Saddle embolus of pulmonary artery with acute cor pulmonale
  concept_id: '35615060.0'
  code:
    concept_code: '15964701000119109'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/15964701000119109
  descendants_included: true
- concept_name: Pulmonary embolism
  concept_id: '440417'
  code:
    concept_code: '59282003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/59282003
  descendants_included: true
- concept_name: Pulmonary infarction
  concept_id: '254662'
  code:
    concept_code: '64662007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/64662007
  descendants_included: true
- concept_name: Saddle embolus of pulmonary artery
  concept_id: '36713110.0'
  code:
    concept_code: '328511000119109'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/328511000119109
  descendants_included: true
- concept_name: Saddle embolus of pulmonary artery with acute cor pulmonale
  concept_id: '35615060.0'
  code:
    concept_code: '15964701000119109'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/15964701000119109
  descendants_included: true
- concept_name: Venous thrombosis
  concept_id: '444247'
  code:
    concept_code: '111293003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/111293003
  descendants_included: true
- concept_name: Embolism from thrombosis of vein of lower extremity
  concept_id: '40481090.0'
  code:
    concept_code: '444816006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/444816006
  descendants_included: true
- concept_name: Heart failure
  concept_id: '316139'
  code:
    concept_code: '84114007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84114007
  descendants_included: true
- concept_name: Cardiac arrhythmia
  concept_id: '44784220.0'
  code:
    concept_code: '698247007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/698247007
  descendants_included: true
- concept_name: Bradycardia
  concept_id: '4169095'
  code:
    concept_code: '48867003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/48867003
  descendants_included: false
- concept_name: Ventricular tachycardia
  concept_id: '4103295'
  code:
    concept_code: '25569003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/25569003
  descendants_included: true
- concept_name: Heart block
  concept_id: '320425'
  code:
    concept_code: '233916004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233916004
  descendants_included: true
- concept_name: Sinus node dysfunction
  concept_id: '317302'
  code:
    concept_code: '60423000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/60423000
  descendants_included: true
- concept_name: Atrioventricular conduction disorder
  concept_id: '4305210'
  code:
    concept_code: '418341009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/418341009
  descendants_included: true
- concept_name: Bradycardia
  concept_id: '4169095'
  code:
    concept_code: '48867003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/48867003
  descendants_included: false
- concept_name: Atrial fibrillation
  concept_id: '313217'
  code:
    concept_code: '49436004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49436004
  descendants_included: true
- concept_name: Atrial flutter
  concept_id: '314665'
  code:
    concept_code: '5370000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/5370000
  descendants_included: true
- concept_name: Supraventricular arrhythmia
  concept_id: '4248028'
  code:
    concept_code: '72654001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/72654001
  descendants_included: true
- concept_name: Ventricular arrhythmia
  concept_id: '4185572'
  code:
    concept_code: '44103008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/44103008
  descendants_included: true
- concept_name: Cardiac arrest
  concept_id: '321042'
  code:
    concept_code: '410429000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/410429000
  descendants_included: true
- concept_name: Ventricular tachycardia
  concept_id: '4103295'
  code:
    concept_code: '25569003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/25569003
  descendants_included: true
- concept_name: Stillbirth
  concept_id: '443213'
  code:
    concept_code: '237364002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237364002
  descendants_included: true
- concept_name: Livebirth
  concept_id: '4092289'
  code:
    concept_code: '281050002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/281050002
  descendants_included: true
- concept_name: Multiple birth
  concept_id: '4163851'
  code:
    concept_code: '45384004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/45384004
  descendants_included: true
- concept_name: Livebirth
  concept_id: '4092289'
  code:
    concept_code: '281050002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/281050002
  descendants_included: true
- concept_name: Multiple birth
  concept_id: '4163851'
  code:
    concept_code: '45384004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/45384004
  descendants_included: true
- concept_name: Baby birth weight equal to 50%-74%
  concept_id: '4014461'
  code:
    concept_code: '169864006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/169864006
  descendants_included: true
- concept_name: Baby birth weight less than 751gm
  concept_id: '4151169'
  code:
    concept_code: '310491007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310491007
  descendants_included: true
- concept_name: Baby premature 24-26 weeks
  concept_id: '4149449'
  code:
    concept_code: '310523002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310523002
  descendants_included: true
- concept_name: Baby premature 26-28 weeks
  concept_id: '4149457'
  code:
    concept_code: '310548004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310548004
  descendants_included: true
- concept_name: Baby premature 36-38 weeks
  concept_id: '4014299'
  code:
    concept_code: '169849006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/169849006
  descendants_included: true
- concept_name: Baby premature 36 weeks
  concept_id: '4149451'
  code:
    concept_code: '310530008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310530008
  descendants_included: true
- concept_name: Baby premature 37 weeks
  concept_id: '4150406'
  code:
    concept_code: '310529003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310529003
  descendants_included: true
- concept_name: Baby premature 38 weeks
  concept_id: '4150405'
  code:
    concept_code: '310528006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310528006
  descendants_included: true
- concept_name: Baby premature 39 weeks
  concept_id: '4150404'
  code:
    concept_code: '310527001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310527001
  descendants_included: true
- concept_name: Disorder relating to short gestation AND/OR low birthweight
  concept_id: '4195545'
  code:
    concept_code: '67645006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/67645006
  descendants_included: true
- concept_name: Fetal or neonatal effect of abruptio placentae
  concept_id: '4148097'
  code:
    concept_code: '268803008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/268803008
  descendants_included: true
- concept_name: Fetal or neonatal effect of maternal premature rupture of membrane
  concept_id: '4118056'
  code:
    concept_code: '206037001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206037001
  descendants_included: true
- concept_name: Light-for-dates with signs of fetal malnutrition
  concept_id: '72726'
  code:
    concept_code: '64177003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/64177003
  descendants_included: true
- concept_name: Low birth weight infant
  concept_id: '4171115'
  code:
    concept_code: '276610007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/276610007
  descendants_included: true
- concept_name: Neonatal jaundice associated with preterm delivery
  concept_id: '440847'
  code:
    concept_code: '73749009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/73749009
  descendants_included: true
- concept_name: Premature delivery
  concept_id: '4086393'
  code:
    concept_code: '282020008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/282020008
  descendants_included: true
- concept_name: Premature infant 28-37 weeks
  concept_id: '4147874'
  code:
    concept_code: '310661005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310661005
  descendants_included: true
- concept_name: Premature pregnancy delivered
  concept_id: '4175637'
  code:
    concept_code: '49550006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49550006
  descendants_included: true
- concept_name: Premature rupture of membranes, labor delayed by therapy
  concept_id: '4064709'
  code:
    concept_code: '199661007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/199661007
  descendants_included: true
- concept_name: Premature separation of placenta with coagulation defect
  concept_id: '4058403'
  code:
    concept_code: '198912003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/198912003
  descendants_included: true
- concept_name: Preterm labor in second trimester with preterm delivery in second
    trimester
  concept_id: '45757180.0'
  code:
    concept_code: '10761141000119107'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10761141000119107
  descendants_included: true
- concept_name: Preterm labor in third trimester with preterm delivery in third trimester
  concept_id: '45757180.0'
  code:
    concept_code: '10761191000119104'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10761191000119104
  descendants_included: true
- concept_name: Preterm labor with preterm delivery
  concept_id: '36712700.0'
  code:
    concept_code: '10761241000119104'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10761241000119104
  descendants_included: true
- concept_name: Sclerema neonatorum
  concept_id: '136530'
  code:
    concept_code: '206539008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206539008
  descendants_included: true
- concept_name: Livebirth
  concept_id: '4092289'
  code:
    concept_code: '281050002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/281050002
  descendants_included: true
- concept_name: Multiple birth
  concept_id: '4163851'
  code:
    concept_code: '45384004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/45384004
  descendants_included: true
- concept_name: Postmature infancy
  concept_id: '437369'
  code:
    concept_code: '16207008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/16207008
  descendants_included: true
- concept_name: Postmaturity of fetus
  concept_id: '440833'
  code:
    concept_code: '433145001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/433145001
  descendants_included: true
- concept_name: Post-term infant, not heavy-for-dates
  concept_id: '441128'
  code:
    concept_code: '79995002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/79995002
  descendants_included: true
- concept_name: Post-term pregnancy
  concept_id: '432695'
  code:
    concept_code: '90968009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/90968009
  descendants_included: true
- concept_name: Post-term pregnancy - delivered
  concept_id: '439894'
  code:
    concept_code: '199063009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/199063009
  descendants_included: true
- concept_name: Livebirth
  concept_id: '4092289'
  code:
    concept_code: '281050002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/281050002
  descendants_included: true
- concept_name: Multiple birth
  concept_id: '4163851'
  code:
    concept_code: '45384004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/45384004
  descendants_included: true
- concept_name: Postmature infancy
  concept_id: '437369'
  code:
    concept_code: '16207008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/16207008
  descendants_included: true
- concept_name: Postmaturity of fetus
  concept_id: '440833'
  code:
    concept_code: '433145001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/433145001
  descendants_included: true
- concept_name: Post-term infant, not heavy-for-dates
  concept_id: '441128'
  code:
    concept_code: '79995002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/79995002
  descendants_included: true
- concept_name: Post-term pregnancy
  concept_id: '432695'
  code:
    concept_code: '90968009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/90968009
  descendants_included: true
- concept_name: Post-term pregnancy - delivered
  concept_id: '439894'
  code:
    concept_code: '199063009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/199063009
  descendants_included: true
- concept_name: Baby birth weight equal to 50%-74%
  concept_id: '4014461'
  code:
    concept_code: '169864006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/169864006
  descendants_included: true
- concept_name: Baby birth weight less than 751gm
  concept_id: '4151169'
  code:
    concept_code: '310491007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310491007
  descendants_included: true
- concept_name: Baby premature 24-26 weeks
  concept_id: '4149449'
  code:
    concept_code: '310523002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310523002
  descendants_included: true
- concept_name: Baby premature 26-28 weeks
  concept_id: '4149457'
  code:
    concept_code: '310548004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310548004
  descendants_included: true
- concept_name: Baby premature 36-38 weeks
  concept_id: '4014299'
  code:
    concept_code: '169849006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/169849006
  descendants_included: true
- concept_name: Baby premature 36 weeks
  concept_id: '4149451'
  code:
    concept_code: '310530008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310530008
  descendants_included: true
- concept_name: Baby premature 37 weeks
  concept_id: '4150406'
  code:
    concept_code: '310529003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310529003
  descendants_included: true
- concept_name: Baby premature 38 weeks
  concept_id: '4150405'
  code:
    concept_code: '310528006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310528006
  descendants_included: true
- concept_name: Baby premature 39 weeks
  concept_id: '4150404'
  code:
    concept_code: '310527001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310527001
  descendants_included: true
- concept_name: Disorder relating to short gestation AND/OR low birthweight
  concept_id: '4195545'
  code:
    concept_code: '67645006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/67645006
  descendants_included: true
- concept_name: Fetal or neonatal effect of abruptio placentae
  concept_id: '4148097'
  code:
    concept_code: '268803008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/268803008
  descendants_included: true
- concept_name: Fetal or neonatal effect of maternal premature rupture of membrane
  concept_id: '4118056'
  code:
    concept_code: '206037001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206037001
  descendants_included: true
- concept_name: Light-for-dates with signs of fetal malnutrition
  concept_id: '72726'
  code:
    concept_code: '64177003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/64177003
  descendants_included: true
- concept_name: Low birth weight infant
  concept_id: '4171115'
  code:
    concept_code: '276610007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/276610007
  descendants_included: true
- concept_name: Neonatal jaundice associated with preterm delivery
  concept_id: '440847'
  code:
    concept_code: '73749009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/73749009
  descendants_included: true
- concept_name: Premature delivery
  concept_id: '4086393'
  code:
    concept_code: '282020008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/282020008
  descendants_included: true
- concept_name: Premature infant 28-37 weeks
  concept_id: '4147874'
  code:
    concept_code: '310661005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310661005
  descendants_included: true
- concept_name: Premature pregnancy delivered
  concept_id: '4175637'
  code:
    concept_code: '49550006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49550006
  descendants_included: true
- concept_name: Premature rupture of membranes, labor delayed by therapy
  concept_id: '4064709'
  code:
    concept_code: '199661007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/199661007
  descendants_included: true
- concept_name: Premature separation of placenta with coagulation defect
  concept_id: '4058403'
  code:
    concept_code: '198912003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/198912003
  descendants_included: true
- concept_name: Preterm labor in second trimester with preterm delivery in second
    trimester
  concept_id: '45757180.0'
  code:
    concept_code: '10761141000119107'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10761141000119107
  descendants_included: true
- concept_name: Preterm labor in third trimester with preterm delivery in third trimester
  concept_id: '45757180.0'
  code:
    concept_code: '10761191000119104'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10761191000119104
  descendants_included: true
- concept_name: Preterm labor with preterm delivery
  concept_id: '36712700.0'
  code:
    concept_code: '10761241000119104'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10761241000119104
  descendants_included: true
- concept_name: Sclerema neonatorum
  concept_id: '136530'
  code:
    concept_code: '206539008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206539008
  descendants_included: true
- concept_name: Biochemical pregnancy
  concept_id: '4028644'
  code:
    concept_code: '237243004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237243004
  descendants_included: true
- concept_name: Failed attempted termination of pregnancy with complication
  concept_id: '194694'
  code:
    concept_code: '59919008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/59919008
  descendants_included: true
- concept_name: Fetal death, affecting management of mother
  concept_id: '75605'
  code:
    concept_code: '14022007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/14022007
  descendants_included: true
- concept_name: Miscarriage
  concept_id: '4067106'
  code:
    concept_code: '17369002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/17369002
  descendants_included: true
- concept_name: Readmission for retained products of conception, legal termination
    of pregnancy
  concept_id: '4113503'
  code:
    concept_code: '198862007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/198862007
  descendants_included: true
- concept_name: Readmission for retained products of conception, spontaneous abortion
  concept_id: '4114280'
  code:
    concept_code: '198861000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/198861000
  descendants_included: true
- concept_name: Retained products after miscarriage
  concept_id: '4170121'
  code:
    concept_code: '275425008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/275425008
  descendants_included: true
- concept_name: Termination of pregnancy
  concept_id: '4240605'
  code:
    concept_code: '57797005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/57797005
  descendants_included: true
- concept_name: Fetal or neonatal effect of maternal premature rupture of membrane
  concept_id: '4118056'
  code:
    concept_code: '206037001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206037001
  descendants_included: true
- concept_name: Premature rupture of membranes
  concept_id: '194702'
  code:
    concept_code: '44223004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/44223004
  descendants_included: true
- concept_name: Fetal growth restriction
  concept_id: '80204'
  code:
    concept_code: '22033007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/22033007
  descendants_included: true
- concept_name: Intrauterine growth restriction, metaphyseal dysplasia, adrenal hypoplasia
    congenita, and genital anomaly syndrome
  concept_id: '45765450.0'
  code:
    concept_code: '702384004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/702384004
  descendants_included: true
- concept_name: Poor fetal growth affecting management
  concept_id: '72693'
  code:
    concept_code: '397949005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/397949005
  descendants_included: true
- concept_name: Asthma
  concept_id: '317009'
  code:
    concept_code: '195967001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195967001
  descendants_included: true
- concept_name: Eosinophilic asthma
  concept_id: '4279553'
  code:
    concept_code: '367542003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/367542003
  descendants_included: true
- concept_name: Chronic obstructive lung disease
  concept_id: '255573'
  code:
    concept_code: '13645005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/13645005
  descendants_included: true
- concept_name: Emphysematous bronchitis
  concept_id: '258780'
  code:
    concept_code: '185086009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/185086009
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
- concept_name: Dependence on ventilator
  concept_id: '40481550.0'
  code:
    concept_code: '444932008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/444932008
  descendants_included: true
- concept_name: Dependence on ventilator
  concept_id: '40481550.0'
  code:
    concept_code: '444932008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/444932008
  descendants_included: true
- concept_name: Complication of dialysis
  concept_id: '4027133'
  code:
    concept_code: '19765000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/19765000
  descendants_included: true
- concept_name: Angina pectoris
  concept_id: '321318'
  code:
    concept_code: '194828000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/194828000
  descendants_included: true
- concept_name: Chest pain
  concept_id: '77670'
  code:
    concept_code: '29857009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/29857009
  descendants_included: false
- concept_name: Angina pectoris
  concept_id: '321318'
  code:
    concept_code: '194828000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/194828000
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
- concept_name: Acute pancreatitis
  concept_id: '199074'
  code:
    concept_code: '197456007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/197456007
  descendants_included: true
- concept_name: Infected pancreatic necrosis
  concept_id: '4340497'
  code:
    concept_code: '235960001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/235960001
  descendants_included: true
- concept_name: Myocardial infarction
  concept_id: '4329847'
  code:
    concept_code: '22298006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/22298006
  descendants_included: true
- concept_name: Brainstem death
  concept_id: '4048809'
  code:
    concept_code: '230802007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/230802007
  descendants_included: true
- concept_name: Cardiac arrest
  concept_id: '321042'
  code:
    concept_code: '410429000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/410429000
  descendants_included: true
- concept_name: Sudden cardiac death
  concept_id: '4317150'
  code:
    concept_code: '95281009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/95281009
  descendants_included: true
- concept_name: Cerebral artery occlusion
  concept_id: '372924'
  code:
    concept_code: '20059004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/20059004
  descendants_included: false
- concept_name: Cerebral embolism
  concept_id: '375557'
  code:
    concept_code: '75543006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/75543006
  descendants_included: false
- concept_name: Cerebral infarction
  concept_id: '443454'
  code:
    concept_code: '432504007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/432504007
  descendants_included: true
- concept_name: Cerebral thrombosis
  concept_id: '441874'
  code:
    concept_code: '71444005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/71444005
  descendants_included: false
- concept_name: Heart failure
  concept_id: '316139'
  code:
    concept_code: '84114007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84114007
  descendants_included: true
- concept_name: Cerebral hemorrhage
  concept_id: '376713'
  code:
    concept_code: '274100004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/274100004
  descendants_included: false
- concept_name: Intracranial hemorrhage
  concept_id: '439847'
  code:
    concept_code: '1386000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1386000
  descendants_included: false
- concept_name: Spontaneous cerebellar hemorrhage
  concept_id: '43530670.0'
  code:
    concept_code: '142851000119103'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/142851000119103
  descendants_included: false
- concept_name: Spontaneous cerebral hemorrhage
  concept_id: '43530730.0'
  code:
    concept_code: '291571000119106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/291571000119106
  descendants_included: false
- concept_name: Spontaneous hemorrhage of cerebral hemisphere
  concept_id: '42535430.0'
  code:
    concept_code: '291531000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/291531000119108
  descendants_included: false
- concept_name: Spontaneous subarachnoid hemorrhage
  concept_id: '4148906'
  code:
    concept_code: '270907008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/270907008
  descendants_included: false
- concept_name: Subarachnoid hemorrhage
  concept_id: '432923'
  code:
    concept_code: '21454007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/21454007
  descendants_included: false
- concept_name: Acute gastrojejunal ulcer without hemorrhage AND without perforation
  concept_id: '4147683'
  code:
    concept_code: '30514008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/30514008
  descendants_included: false
- concept_name: Angiodysplasia of duodenum
  concept_id: '40482690.0'
  code:
    concept_code: '442267002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/442267002
  descendants_included: true
- concept_name: Bleeding esophageal varices
  concept_id: '28779'
  code:
    concept_code: '17709002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/17709002
  descendants_included: true
- concept_name: Dieulafoy's vascular malformation
  concept_id: '198798'
  code:
    concept_code: '109558001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/109558001
  descendants_included: true
- concept_name: Ulcer of duodenum
  concept_id: '4198381'
  code:
    concept_code: '51868009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/51868009
  descendants_included: true
- concept_name: Esophageal varices with bleeding, associated with another disorder
  concept_id: '4112183'
  code:
    concept_code: '195475003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/195475003
  descendants_included: true
- concept_name: Gastric ulcer
  concept_id: '4265600'
  code:
    concept_code: '397825006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/397825006
  descendants_included: true
- concept_name: Gastrointestinal hemorrhage
  concept_id: '192671'
  code:
    concept_code: '74474003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/74474003
  descendants_included: true
- concept_name: Peptic ulcer
  concept_id: '4027663'
  code:
    concept_code: '13200003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/13200003
  descendants_included: true
- concept_name: Myocardial infarction
  concept_id: '4329847'
  code:
    concept_code: '22298006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/22298006
  descendants_included: true
- concept_name: Brainstem death
  concept_id: '4048809'
  code:
    concept_code: '230802007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/230802007
  descendants_included: true
- concept_name: Cardiac arrest
  concept_id: '321042'
  code:
    concept_code: '410429000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/410429000
  descendants_included: true
- concept_name: Sudden cardiac death
  concept_id: '4317150'
  code:
    concept_code: '95281009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/95281009
  descendants_included: true
- concept_name: Heart failure
  concept_id: '316139'
  code:
    concept_code: '84114007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84114007
  descendants_included: true
- concept_name: Cerebral artery occlusion
  concept_id: '372924'
  code:
    concept_code: '20059004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/20059004
  descendants_included: false
- concept_name: Cerebral embolism
  concept_id: '375557'
  code:
    concept_code: '75543006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/75543006
  descendants_included: false
- concept_name: Cerebral infarction
  concept_id: '443454'
  code:
    concept_code: '432504007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/432504007
  descendants_included: true
- concept_name: Cerebral thrombosis
  concept_id: '441874'
  code:
    concept_code: '71444005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/71444005
  descendants_included: false
- concept_name: Cerebral hemorrhage
  concept_id: '376713'
  code:
    concept_code: '274100004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/274100004
  descendants_included: false
- concept_name: Intracranial hemorrhage
  concept_id: '439847'
  code:
    concept_code: '1386000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1386000
  descendants_included: false
- concept_name: Spontaneous cerebellar hemorrhage
  concept_id: '43530670.0'
  code:
    concept_code: '142851000119103'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/142851000119103
  descendants_included: false
- concept_name: Spontaneous cerebral hemorrhage
  concept_id: '43530730.0'
  code:
    concept_code: '291571000119106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/291571000119106
  descendants_included: false
- concept_name: Spontaneous hemorrhage of cerebral hemisphere
  concept_id: '42535430.0'
  code:
    concept_code: '291531000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/291531000119108
  descendants_included: false
- concept_name: Spontaneous subarachnoid hemorrhage
  concept_id: '4148906'
  code:
    concept_code: '270907008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/270907008
  descendants_included: false
- concept_name: Subarachnoid hemorrhage
  concept_id: '432923'
  code:
    concept_code: '21454007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/21454007
  descendants_included: false
- concept_name: Transient cerebral ischemia
  concept_id: '373503'
  code:
    concept_code: '266257000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/266257000
  descendants_included: true
- concept_name: Cerebral artery occlusion
  concept_id: '372924'
  code:
    concept_code: '20059004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/20059004
  descendants_included: false
- concept_name: Cerebral embolism
  concept_id: '375557'
  code:
    concept_code: '75543006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/75543006
  descendants_included: false
- concept_name: Cerebral hemorrhage
  concept_id: '376713'
  code:
    concept_code: '274100004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/274100004
  descendants_included: true
- concept_name: Cerebral infarction
  concept_id: '443454'
  code:
    concept_code: '432504007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/432504007
  descendants_included: true
- concept_name: Cerebral thrombosis
  concept_id: '441874'
  code:
    concept_code: '71444005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/71444005
  descendants_included: false
- concept_name: Intracranial hemorrhage
  concept_id: '439847'
  code:
    concept_code: '1386000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1386000
  descendants_included: true
- concept_name: Subarachnoid hemorrhage
  concept_id: '432923'
  code:
    concept_code: '21454007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/21454007
  descendants_included: false
- concept_name: Spontaneous subarachnoid hemorrhage
  concept_id: '4148906'
  code:
    concept_code: '270907008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/270907008
  descendants_included: false
- concept_name: Spontaneous cerebral hemorrhage
  concept_id: '43530730.0'
  code:
    concept_code: '291571000119106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/291571000119106
  descendants_included: false
- concept_name: Spontaneous intracranial hemorrhage
  concept_id: '42538060.0'
  code:
    concept_code: '738779002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/738779002
  descendants_included: false
- concept_name: Cerebral artery occlusion
  concept_id: '372924'
  code:
    concept_code: '20059004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/20059004
  descendants_included: false
- concept_name: Cerebral embolism
  concept_id: '375557'
  code:
    concept_code: '75543006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/75543006
  descendants_included: false
- concept_name: Cerebral infarction
  concept_id: '443454'
  code:
    concept_code: '432504007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/432504007
  descendants_included: true
- concept_name: Cerebral thrombosis
  concept_id: '441874'
  code:
    concept_code: '71444005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/71444005
  descendants_included: false
- concept_name: Cerebral hemorrhage
  concept_id: '376713'
  code:
    concept_code: '274100004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/274100004
  descendants_included: false
- concept_name: Intracranial hemorrhage
  concept_id: '439847'
  code:
    concept_code: '1386000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1386000
  descendants_included: false
- concept_name: Subarachnoid hemorrhage
  concept_id: '432923'
  code:
    concept_code: '21454007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/21454007
  descendants_included: false
- concept_name: Spontaneous cerebral hemorrhage
  concept_id: '43530730.0'
  code:
    concept_code: '291571000119106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/291571000119106
  descendants_included: false
- concept_name: Spontaneous subarachnoid hemorrhage
  concept_id: '4148906'
  code:
    concept_code: '270907008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/270907008
  descendants_included: false
- concept_name: Spontaneous cerebellar hemorrhage
  concept_id: '43530670.0'
  code:
    concept_code: '142851000119103'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/142851000119103
  descendants_included: false
- concept_name: Spontaneous hemorrhage of cerebral hemisphere
  concept_id: '42535430.0'
  code:
    concept_code: '291531000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/291531000119108
  descendants_included: false
- concept_name: Myocardial infarction
  concept_id: '4329847'
  code:
    concept_code: '22298006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/22298006
  descendants_included: true
- concept_name: Bleeding
  concept_id: '437312'
  code:
    concept_code: '131148009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/131148009
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
- concept_name: Bipolar disorder
  concept_id: '436665'
  code:
    concept_code: '13746004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/13746004
  descendants_included: true
- concept_name: Mania
  concept_id: '4333677'
  code:
    concept_code: '231494001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/231494001
  descendants_included: true
- concept_name: Recurrent manic episodes
  concept_id: '437249'
  code:
    concept_code: '191590005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/191590005
  descendants_included: true
- concept_name: Delusional disorder
  concept_id: '432590'
  code:
    concept_code: '48500005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/48500005
  descendants_included: true
- concept_name: Psychotic disorder
  concept_id: '436073'
  code:
    concept_code: '69322001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/69322001
  descendants_included: true
- concept_name: Schizophrenia
  concept_id: '435783'
  code:
    concept_code: '58214004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/58214004
  descendants_included: true
- concept_name: Depressive disorder
  concept_id: '440383'
  code:
    concept_code: '35489007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/35489007
  descendants_included: true
- concept_name: Delusional disorder
  concept_id: '432590'
  code:
    concept_code: '48500005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/48500005
  descendants_included: true
- concept_name: Psychotic disorder
  concept_id: '436073'
  code:
    concept_code: '69322001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/69322001
  descendants_included: true
- concept_name: Schizophrenia
  concept_id: '435783'
  code:
    concept_code: '58214004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/58214004
  descendants_included: true
- concept_name: Hallucinations
  concept_id: '433031'
  code:
    concept_code: '7011001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/7011001
  descendants_included: true
- concept_name: Recurrent major depressive episodes, severe, with psychosis
  concept_id: '434911'
  code:
    concept_code: '191613003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/191613003
  descendants_included: true
- concept_name: Bipolar affective disorder, currently manic, severe, with psychosis
  concept_id: '439256'
  code:
    concept_code: '191623007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/191623007
  descendants_included: true
- concept_name: Mixed bipolar affective disorder, severe, with psychosis
  concept_id: '439246'
  code:
    concept_code: '191641004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/191641004
  descendants_included: false
- concept_name: Single manic episode, severe, with psychosis
  concept_id: '439262'
  code:
    concept_code: '191586008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/191586008
  descendants_included: true
- concept_name: Recurrent manic episodes, severe, with psychosis
  concept_id: '437532'
  code:
    concept_code: '191595000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/191595000
  descendants_included: true
- concept_name: Single major depressive episode, severe, with psychosis
  concept_id: '439259'
  code:
    concept_code: '191604000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/191604000
  descendants_included: true
- concept_name: Self inflicted injury
  concept_id: '439235'
  code:
    concept_code: '276853009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/276853009
  descendants_included: true
- concept_name: Self-administered poisoning
  concept_id: '4181216'
  code:
    concept_code: '363293009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/363293009
  descendants_included: true
- concept_name: Suicidal deliberate poisoning
  concept_id: '444362'
  code:
    concept_code: '86849004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/86849004
  descendants_included: true
- concept_name: Suicidal thoughts
  concept_id: '4273391'
  code:
    concept_code: '6471006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/6471006
  descendants_included: true
- concept_name: Acute febrile mucocutaneous lymph node syndrome
  concept_id: '314381'
  code:
    concept_code: '75053002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/75053002
  descendants_included: true
- concept_name: Toxic shock syndrome
  concept_id: '201214'
  code:
    concept_code: '18504008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/18504008
  descendants_included: true
- concept_name: Baby birth weight equal to 50%-74%
  concept_id: '4014461'
  code:
    concept_code: '169864006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/169864006
  descendants_included: true
- concept_name: Baby birth weight less than 751gm
  concept_id: '4151169'
  code:
    concept_code: '310491007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310491007
  descendants_included: true
- concept_name: Baby premature 24-26 weeks
  concept_id: '4149449'
  code:
    concept_code: '310523002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310523002
  descendants_included: true
- concept_name: Baby premature 26-28 weeks
  concept_id: '4149457'
  code:
    concept_code: '310548004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310548004
  descendants_included: true
- concept_name: Baby premature 36-38 weeks
  concept_id: '4014299'
  code:
    concept_code: '169849006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/169849006
  descendants_included: true
- concept_name: Baby premature 36 weeks
  concept_id: '4149451'
  code:
    concept_code: '310530008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310530008
  descendants_included: true
- concept_name: Baby premature 37 weeks
  concept_id: '4150406'
  code:
    concept_code: '310529003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310529003
  descendants_included: true
- concept_name: Baby premature 38 weeks
  concept_id: '4150405'
  code:
    concept_code: '310528006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310528006
  descendants_included: true
- concept_name: Baby premature 39 weeks
  concept_id: '4150404'
  code:
    concept_code: '310527001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310527001
  descendants_included: true
- concept_name: Biochemical pregnancy
  concept_id: '4028644'
  code:
    concept_code: '237243004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237243004
  descendants_included: true
- concept_name: Birth
  concept_id: '4216316'
  code:
    concept_code: '3950001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/3950001
  descendants_included: true
- concept_name: Deliveries by cesarean
  concept_id: '193277'
  code:
    concept_code: '200144004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200144004
  descendants_included: true
- concept_name: Delivery AND/OR maternal condition affecting management
  concept_id: '444113'
  code:
    concept_code: '106008001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/106008001
  descendants_included: true
- concept_name: Delivery normal
  concept_id: '441641'
  code:
    concept_code: '48782003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/48782003
  descendants_included: true
- concept_name: Disorder relating to short gestation AND/OR low birthweight
  concept_id: '4195545'
  code:
    concept_code: '67645006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/67645006
  descendants_included: true
- concept_name: Failed attempted termination of pregnancy with complication
  concept_id: '194694'
  code:
    concept_code: '59919008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/59919008
  descendants_included: true
- concept_name: Fetal death, affecting management of mother
  concept_id: '75605'
  code:
    concept_code: '14022007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/14022007
  descendants_included: true
- concept_name: Fetal or neonatal effect of abruptio placentae
  concept_id: '4148097'
  code:
    concept_code: '268803008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/268803008
  descendants_included: true
- concept_name: Fetal or neonatal effect of maternal premature rupture of membrane
  concept_id: '4118056'
  code:
    concept_code: '206037001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206037001
  descendants_included: true
- concept_name: Light-for-dates with signs of fetal malnutrition
  concept_id: '72726'
  code:
    concept_code: '64177003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/64177003
  descendants_included: true
- concept_name: Low birth weight infant
  concept_id: '4171115'
  code:
    concept_code: '276610007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/276610007
  descendants_included: true
- concept_name: Mother delivered
  concept_id: '433260'
  code:
    concept_code: '289256000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/289256000
  descendants_included: true
- concept_name: Neonatal jaundice associated with preterm delivery
  concept_id: '440847'
  code:
    concept_code: '73749009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/73749009
  descendants_included: true
- concept_name: Postmature infancy
  concept_id: '437369'
  code:
    concept_code: '16207008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/16207008
  descendants_included: true
- concept_name: Postmaturity of fetus
  concept_id: '440833'
  code:
    concept_code: '433145001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/433145001
  descendants_included: true
- concept_name: Post-term infant, not heavy-for-dates
  concept_id: '441128'
  code:
    concept_code: '79995002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/79995002
  descendants_included: true
- concept_name: Post-term pregnancy
  concept_id: '432695'
  code:
    concept_code: '90968009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/90968009
  descendants_included: true
- concept_name: Pregnancy with abortive outcome
  concept_id: '40539860.0'
  code:
    concept_code: '363681007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/363681007
  descendants_included: true
- concept_name: Premature delivery
  concept_id: '4086393'
  code:
    concept_code: '282020008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/282020008
  descendants_included: true
- concept_name: Premature infant 28-37 weeks
  concept_id: '4147874'
  code:
    concept_code: '310661005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310661005
  descendants_included: true
- concept_name: Premature rupture of membranes, labor delayed by therapy
  concept_id: '4064709'
  code:
    concept_code: '199661007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/199661007
  descendants_included: true
- concept_name: Premature separation of placenta with coagulation defect
  concept_id: '4058403'
  code:
    concept_code: '198912003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/198912003
  descendants_included: true
- concept_name: Preterm labor with preterm delivery
  concept_id: '36712700.0'
  code:
    concept_code: '10761241000119104'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10761241000119104
  descendants_included: true
- concept_name: Retained products after miscarriage
  concept_id: '4170121'
  code:
    concept_code: '275425008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/275425008
  descendants_included: true
- concept_name: Sclerema neonatorum
  concept_id: '136530'
  code:
    concept_code: '206539008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206539008
  descendants_included: true
- concept_name: Abdominal pain in pregnancy
  concept_id: '4149783'
  code:
    concept_code: '309737007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309737007
  descendants_included: true
- concept_name: Abnormal biochemical finding on antenatal screening of mother
  concept_id: '4060034'
  code:
    concept_code: '199734003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/199734003
  descendants_included: true
- concept_name: Abnormal chromosomal and genetic finding on antenatal screening of
    mother
  concept_id: '4064724'
  code:
    concept_code: '199738000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/199738000
  descendants_included: true
- concept_name: Abnormal fetal heart beat noted before labor in liveborn infant
  concept_id: '137974'
  code:
    concept_code: '655007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/655007
  descendants_included: true
- concept_name: Abnormal fetal heart rate
  concept_id: '314099'
  code:
    concept_code: '312668007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/312668007
  descendants_included: true
- concept_name: Abnormal glucose tolerance test
  concept_id: '440216'
  code:
    concept_code: '274858002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/274858002
  descendants_included: true
- concept_name: Abnormal hematologic finding on antenatal screening of mother
  concept_id: '4061847'
  code:
    concept_code: '199733009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/199733009
  descendants_included: true
- concept_name: Abnormal pregnancy
  concept_id: '4007285'
  code:
    concept_code: '11082009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/11082009
  descendants_included: true
- concept_name: Abnormal radiological finding on antenatal screening of mother
  concept_id: '4064723'
  code:
    concept_code: '199737005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/199737005
  descendants_included: true
- concept_name: Abscess of nipple - obstetric
  concept_id: '4034155'
  code:
    concept_code: '237354006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237354006
  descendants_included: true
- concept_name: Advanced maternal age gravida
  concept_id: '441092'
  code:
    concept_code: '416413003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/416413003
  descendants_included: true
- concept_name: Alpha-fetoprotein equivocal
  concept_id: '4041176'
  code:
    concept_code: '166559004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/166559004
  descendants_included: true
- concept_name: Alpha-fetoprotein low
  concept_id: '4041177'
  code:
    concept_code: '166562001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/166562001
  descendants_included: true
- concept_name: Alpha-fetoprotein normal
  concept_id: '4042555'
  code:
    concept_code: '166558007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/166558007
  descendants_included: true
- concept_name: Alpha-fetoprotein raised
  concept_id: '4042557'
  code:
    concept_code: '166561008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/166561008
  descendants_included: true
- concept_name: Amniotic fetal cell abnormal
  concept_id: '4056119'
  code:
    concept_code: '168117003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/168117003
  descendants_included: true
- concept_name: 'Amniotic fetal cell study: NAD'
  concept_id: '4056118'
  code:
    concept_code: '168116007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/168116007
  descendants_included: true
- concept_name: Amniotic fluid AFP abnormal
  concept_id: '4057159'
  code:
    concept_code: '168109006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/168109006
  descendants_included: true
- concept_name: 'Amniotic fluid chemistry: NAD'
  concept_id: '4056114'
  code:
    concept_code: '168100005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/168100005
  descendants_included: true
- concept_name: Amniotic fluid examination abnormal
  concept_id: '433880'
  code:
    concept_code: '410037001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/410037001
  descendants_included: true
- concept_name: Amniotic fluid microscopy -NAD
  concept_id: '4043930'
  code:
    concept_code: '168095008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/168095008
  descendants_included: true
- concept_name: A/N amniocentesis - abnormal
  concept_id: '4060259'
  code:
    concept_code: '169653006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/169653006
  descendants_included: true
- concept_name: A/N amniocentesis - normal
  concept_id: '4061530'
  code:
    concept_code: '169652001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/169652001
  descendants_included: true
- concept_name: 'Antenatal care: grand multiparity'
  concept_id: '439656'
  code:
    concept_code: '169581008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/169581008
  descendants_included: true
- concept_name: 'Antenatal care: poor antenatal attender'
  concept_id: '4060245'
  code:
    concept_code: '169593004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/169593004
  descendants_included: true
- concept_name: 'Antenatal care: poor home conditions'
  concept_id: '4060098'
  code:
    concept_code: '169592009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/169592009
  descendants_included: true
- concept_name: 'Antenatal care: recurrent aborter'
  concept_id: '4060240'
  code:
    concept_code: '169580009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/169580009
  descendants_included: true
- concept_name: Antenatal data - finding
  concept_id: '4181975'
  code:
    concept_code: '366345005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/366345005
  descendants_included: true
- concept_name: Antenatal scan unable to confirm pregnancy
  concept_id: '4152443'
  code:
    concept_code: '370381000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/370381000
  descendants_included: true
- concept_name: Antenatal ultrasound confirms ectopic pregnancy
  concept_id: '4152444'
  code:
    concept_code: '370382007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/370382007
  descendants_included: true
- concept_name: Antenatal ultrasound confirms intrauterine pregnancy
  concept_id: '4152445'
  code:
    concept_code: '370383002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/370383002
  descendants_included: true
- concept_name: Antenatal ultrasound scan abnormal
  concept_id: '4061157'
  code:
    concept_code: '169665005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/169665005
  descendants_included: true
- concept_name: Antenatal ultrasound scan normal and possibly inconsistent with estimated
    date of delivery
  concept_id: '4310443'
  code:
    concept_code: '423269002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/423269002
  descendants_included: true
- concept_name: Antepartum deep vein thrombosis
  concept_id: '435887'
  code:
    concept_code: '49956009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49956009
  descendants_included: true
- concept_name: A/N U/S scan normal and appropriate for dates
  concept_id: '4060264'
  code:
    concept_code: '169663003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/169663003
  descendants_included: true
- concept_name: Baby overdue
  concept_id: '4090719'
  code:
    concept_code: '249122000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/249122000
  descendants_included: true
- concept_name: Biochemical pregnancy
  concept_id: '4028644'
  code:
    concept_code: '237243004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237243004
  descendants_included: true
- concept_name: Birth details - finding
  concept_id: '4182460'
  code:
    concept_code: '366343003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/366343003
  descendants_included: true
- concept_name: Birth examination abnormal - for observation
  concept_id: '4014612'
  code:
    concept_code: '170103007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/170103007
  descendants_included: true
- concept_name: Birth examination abnormal - on treatment
  concept_id: '4014740'
  code:
    concept_code: '170105000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/170105000
  descendants_included: true
- concept_name: Birth examination abnormal - referred
  concept_id: '4016487'
  code:
    concept_code: '170104001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/170104001
  descendants_included: true
- concept_name: Bladder injury - obstetric
  concept_id: '4034150'
  code:
    concept_code: '237330001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237330001
  descendants_included: true
- concept_name: Breast engorgement in pregnancy, the puerperium or lactation
  concept_id: '443330'
  code:
    concept_code: '200416006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200416006
  descendants_included: true
- concept_name: Breast engorgement in pregnancy, the puerperium or lactation - delivered
  concept_id: '77624'
  code:
    concept_code: '200418007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200418007
  descendants_included: true
- concept_name: Breast engorgement in pregnancy, the puerperium or lactation - delivered
    with postnatal complication
  concept_id: '81086'
  code:
    concept_code: '200419004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200419004
  descendants_included: true
- concept_name: Breast engorgement in pregnancy, the puerperium or lactation with
    antenatal complication
  concept_id: '73282'
  code:
    concept_code: '200420005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200420005
  descendants_included: true
- concept_name: Breastfeeding painful
  concept_id: '4066258'
  code:
    concept_code: '200430001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200430001
  descendants_included: true
- concept_name: Breast lump in pregnancy
  concept_id: '45757110.0'
  code:
    concept_code: '10750111000119108'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10750111000119108
  descendants_included: true
- concept_name: Cardiac arrest in fetus OR newborn
  concept_id: '317669'
  code:
    concept_code: '179924009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/179924009
  descendants_included: true
- concept_name: Central nervous system complications of anesthesia during labor and
    delivery
  concept_id: '4065094'
  code:
    concept_code: '200078007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200078007
  descendants_included: true
- concept_name: Cerebral edema due to birth injury
  concept_id: '4048139'
  code:
    concept_code: '206238001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206238001
  descendants_included: true
- concept_name: Cervical effacement finding
  concept_id: '4132566'
  code:
    concept_code: '127376007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/127376007
  descendants_included: true
- concept_name: Cervical observation during pregnancy and labor
  concept_id: '197043'
  code:
    concept_code: '249020006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/249020006
  descendants_included: true
- concept_name: Cervix central
  concept_id: '4127841'
  code:
    concept_code: '289783000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/289783000
  descendants_included: true
- concept_name: Chorioamnionitis
  concept_id: '4021397'
  code:
    concept_code: '11612004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/11612004
  descendants_included: true
- concept_name: Clinical sign related to pregnancy
  concept_id: '4024006'
  code:
    concept_code: '106111002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/106111002
  descendants_included: true
- concept_name: Complete illegal termination of pregnancy with genital tract or pelvic
    infection
  concept_id: '195870'
  code:
    concept_code: '198756005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/198756005
  descendants_included: true
- concept_name: Complication of pregnancy, childbirth and/or the puerperium
  concept_id: '435875'
  code:
    concept_code: '198609003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/198609003
  descendants_included: true
- concept_name: Complications of attempted introduction of embryo in embryo transfer
  concept_id: '4309151'
  code:
    concept_code: '213203004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/213203004
  descendants_included: true
- concept_name: Concealed pregnancy
  concept_id: '4129020'
  code:
    concept_code: '237233002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237233002
  descendants_included: true
- concept_name: Concern about body image related to pregnancy
  concept_id: '37110280.0'
  code:
    concept_code: '724483001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/724483001
  descendants_included: true
- concept_name: Condition of amniotic fluid - finding
  concept_id: '4182769'
  code:
    concept_code: '366334007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/366334007
  descendants_included: true
- concept_name: Condition of fetal membrane
  concept_id: '4008239'
  code:
    concept_code: '112074005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/112074005
  descendants_included: true
- concept_name: Conditions involving the integument AND/OR temperature regulation
    of fetus OR newborn
  concept_id: '441964'
  code:
    concept_code: '40504002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/40504002
  descendants_included: true
- concept_name: Congenital abnormality of uterus in pregnancy, childbirth and the
    puerperium
  concept_id: '4145939'
  code:
    concept_code: '267212003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/267212003
  descendants_included: true
- concept_name: Congenital cardiac failure
  concept_id: '4071869'
  code:
    concept_code: '206586007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206586007
  descendants_included: true
- concept_name: Congenital fecaliths causing obstruction
  concept_id: '4071195'
  code:
    concept_code: '206529002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206529002
  descendants_included: true
- concept_name: Congenital hepatic fibrosis
  concept_id: '4194229'
  code:
    concept_code: '79607001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/79607001
  descendants_included: true
- concept_name: Congenital infectious disease
  concept_id: '4220675'
  code:
    concept_code: '82353009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/82353009
  descendants_included: true
- concept_name: Congenital or acquired abnormality of vagina in pregnancy, childbirth
    and the puerperium
  concept_id: '200791'
  code:
    concept_code: '267238003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/267238003
  descendants_included: true
- concept_name: Congenital renal failure
  concept_id: '4149398'
  code:
    concept_code: '268854008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/268854008
  descendants_included: true
- concept_name: Congenital viral hepatitis
  concept_id: '4048592'
  code:
    concept_code: '206372007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206372007
  descendants_included: true
- concept_name: Cracked nipple in pregnancy, the puerperium or lactation
  concept_id: '443243'
  code:
    concept_code: '267291006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/267291006
  descendants_included: true
- concept_name: Cracked nipple in pregnancy, the puerperium or lactation - delivered
  concept_id: '434715'
  code:
    concept_code: '200411001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200411001
  descendants_included: true
- concept_name: Cracked nipple in pregnancy, the puerperium or lactation - delivered
    with postnatal complication
  concept_id: '440481'
  code:
    concept_code: '200412008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200412008
  descendants_included: true
- concept_name: Cracked nipple in pregnancy, the puerperium or lactation with antenatal
    complication
  concept_id: '437062'
  code:
    concept_code: '200413003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200413003
  descendants_included: true
- concept_name: Cracked nipple in pregnancy, the puerperium or lactation with postnatal
    complication
  concept_id: '432396'
  code:
    concept_code: '200414009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200414009
  descendants_included: true
- concept_name: Craniopagus
  concept_id: '4252738'
  code:
    concept_code: '74516008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/74516008
  descendants_included: true
- concept_name: Cystocele affecting obstetric care
  concept_id: '4127549'
  code:
    concept_code: '237204003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237204003
  descendants_included: true
- concept_name: Cystocele - baby delivered
  concept_id: '4028634'
  code:
    concept_code: '237207005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237207005
  descendants_included: true
- concept_name: Cystocele - delivered with postpartum complication
  concept_id: '4129700'
  code:
    concept_code: '237203009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237203009
  descendants_included: true
- concept_name: Cystocele in pregnancy, childbirth and the puerperium
  concept_id: '4028636'
  code:
    concept_code: '237210003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237210003
  descendants_included: true
- concept_name: Decreased lactation
  concept_id: '4062551'
  code:
    concept_code: '199004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/199004
  descendants_included: true
- concept_name: Delivery finding
  concept_id: '4038495'
  code:
    concept_code: '118215003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/118215003
  descendants_included: true
- concept_name: Determination of outcome, satisfactory to patient
  concept_id: '4243314'
  code:
    concept_code: '38520008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38520008
  descendants_included: true
- concept_name: Diabetes mellitus during pregnancy, childbirth and the puerperium
  concept_id: '4058243'
  code:
    concept_code: '199223000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/199223000
  descendants_included: true
- concept_name: Diethylstilbestrol poisoning
  concept_id: '434482'
  code:
    concept_code: '66698002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/66698002
  descendants_included: true
- concept_name: Disease of nervous system complicating pregnancy, childbirth and puerperium
  concept_id: '4063155'
  code:
    concept_code: '199297006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/199297006
  descendants_included: true
- concept_name: Disorder of digestive system specific to fetus OR newborn
  concept_id: '200524'
  code:
    concept_code: '42357009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/42357009
  descendants_included: true
- concept_name: Disorder of lactation
  concept_id: '80471'
  code:
    concept_code: '35046003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/35046003
  descendants_included: true
- concept_name: Disorder of pregnancy
  concept_id: '439658'
  code:
    concept_code: '173300003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/173300003
  descendants_included: true
- concept_name: Disorder relating to short gestation AND/OR low birthweight
  concept_id: '4195545'
  code:
    concept_code: '67645006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/67645006
  descendants_included: true
- concept_name: Disproportion - major pelvic abnormality
  concept_id: '201091'
  code:
    concept_code: '199398004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/199398004
  descendants_included: true
- concept_name: Down's screening blood test abnormal
  concept_id: '4149463'
  code:
    concept_code: '310580002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310580002
  descendants_included: true
- concept_name: Down's screening blood test normal
  concept_id: '4149462'
  code:
    concept_code: '310579000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/310579000
  descendants_included: true
- concept_name: Drug dependence during pregnancy, childbirth and the puerperium
  concept_id: '443250'
  code:
    concept_code: '267206008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/267206008
  descendants_included: true
- concept_name: Early stage of pregnancy
  concept_id: '4193062'
  code:
    concept_code: '314204000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/314204000
  descendants_included: true
- concept_name: 'ECG: no ectopic beats'
  concept_id: '4064450'
  code:
    concept_code: '164882007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/164882007
  descendants_included: true
- concept_name: Embryonic cyst of cervix
  concept_id: '4108901'
  code:
    concept_code: '253833001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/253833001
  descendants_included: true
- concept_name: Embryonic cyst of vagina
  concept_id: '4265609'
  code:
    concept_code: '61476004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/61476004
  descendants_included: true
- concept_name: Erythroderma neonatorum
  concept_id: '4345685'
  code:
    concept_code: '240302002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/240302002
  descendants_included: true
- concept_name: Estimated date of delivery - finding
  concept_id: '4182148'
  code:
    concept_code: '366322004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/366322004
  descendants_included: true
- concept_name: Eye damage due to birth trauma
  concept_id: '4070533'
  code:
    concept_code: '206241005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206241005
  descendants_included: true
- concept_name: Fertilization in vivo
  concept_id: '4100327'
  code:
    concept_code: '27574007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/27574007
  descendants_included: true
- concept_name: Fetal disorder
  concept_id: '4323285'
  code:
    concept_code: '70591005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/70591005
  descendants_included: true
- concept_name: Fetal hydrocephalus suspected
  concept_id: '4127418'
  code:
    concept_code: '237153007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237153007
  descendants_included: true
- concept_name: Fetal movements felt
  concept_id: '4145315'
  code:
    concept_code: '268470003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/268470003
  descendants_included: true
- concept_name: Fetal movements seen
  concept_id: '4015303'
  code:
    concept_code: '169731002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/169731002
  descendants_included: true
- concept_name: Fetal or neonatal effect of alcohol transmitted via placenta and/or
    breast milk
  concept_id: '433309'
  code:
    concept_code: '36558000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/36558000
  descendants_included: true
- concept_name: Fetal or neonatal effect of anti-infective agent transmitted via placenta
    and/or breast milk
  concept_id: '432429'
  code:
    concept_code: '64415008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/64415008
  descendants_included: true
- concept_name: Fetal or neonatal effect of hallucinogenic agent transmitted via placenta
    and/or breast milk
  concept_id: '436218'
  code:
    concept_code: '111460005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/111460005
  descendants_included: true
- concept_name: Fetal or neonatal effect of maternal anesthetic and analgesic agents
    during labor and delivery
  concept_id: '4070421'
  code:
    concept_code: '206124001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206124001
  descendants_included: true
- concept_name: Fetal or neonatal effect of maternal complication of pregnancy
  concept_id: '4118054'
  code:
    concept_code: '206035009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206035009
  descendants_included: true
- concept_name: Fetal or neonatal effect of maternal medical problem
  concept_id: '434744'
  code:
    concept_code: '206002004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206002004
  descendants_included: true
- concept_name: Fetal or neonatal effect of medicinal agent transmitted via placenta
    and/or breast milk
  concept_id: '441127'
  code:
    concept_code: '7072000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/7072000
  descendants_included: true
- concept_name: Fetal or neonatal effect of narcotic transmitted via placenta and/or
    breast milk
  concept_id: '436517'
  code:
    concept_code: '78302009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/78302009
  descendants_included: true
- concept_name: Fetal or neonatal effect of noxious influences transmitted via placenta
    or breast milk
  concept_id: '440829'
  code:
    concept_code: '206153000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206153000
  descendants_included: true
- concept_name: Fetal or neonatal effect of toxic substance transmitted via placenta
    and/or breast milk
  concept_id: '442148'
  code:
    concept_code: '89873008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/89873008
  descendants_included: true
- concept_name: Fetal OR neonatal hemorrhage
  concept_id: '432734'
  code:
    concept_code: '111467008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/111467008
  descendants_included: true
- concept_name: Fetal size accords with dates
  concept_id: '4015304'
  code:
    concept_code: '169732009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/169732009
  descendants_included: true
- concept_name: Fetal size does not accord with dates
  concept_id: '4014437'
  code:
    concept_code: '169733004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/169733004
  descendants_included: true
- concept_name: Fetal spina bifida suspected
  concept_id: '4129553'
  code:
    concept_code: '237152002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237152002
  descendants_included: true
- concept_name: Fetoplacental hormones abnormal
  concept_id: '4042411'
  code:
    concept_code: '166424001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/166424001
  descendants_included: true
- concept_name: Fetoplacental hormones normal
  concept_id: '4042923'
  code:
    concept_code: '166425000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/166425000
  descendants_included: true
- concept_name: Finding of arrangement of fetus
  concept_id: '4154314'
  code:
    concept_code: '28487002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/28487002
  descendants_included: true
- concept_name: Finding of cervical cerclage suture
  concept_id: '4127854'
  code:
    concept_code: '289827009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/289827009
  descendants_included: true
- concept_name: Finding of cervical dilatation
  concept_id: '4124636'
  code:
    concept_code: '289761004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/289761004
  descendants_included: true
- concept_name: Finding of gestational sac
  concept_id: '4104311'
  code:
    concept_code: '300571009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/300571009
  descendants_included: true
- concept_name: Finding of gravid uterus
  concept_id: '195877'
  code:
    concept_code: '289675001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/289675001
  descendants_included: true
- concept_name: Finding of involution of uterus
  concept_id: '4124634'
  code:
    concept_code: '289750007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/289750007
  descendants_included: true
- concept_name: Finding of length of gestation
  concept_id: '432441'
  code:
    concept_code: '366323009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/366323009
  descendants_included: true
- concept_name: Finding of neonate
  concept_id: '439156'
  code:
    concept_code: '118188004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/118188004
  descendants_included: true
- concept_name: Finding of passing of operculum
  concept_id: '4124479'
  code:
    concept_code: '289573002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/289573002
  descendants_included: true
- concept_name: Finding of position of pregnancy
  concept_id: '4199274'
  code:
    concept_code: '301801008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/301801008
  descendants_included: true
- concept_name: Finding of quantity of pregnancy
  concept_id: '4128832'
  code:
    concept_code: '289204008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/289204008
  descendants_included: true
- concept_name: Finding of sex of baby
  concept_id: '4199558'
  code:
    concept_code: '302081005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/302081005
  descendants_included: true
- concept_name: Finding of thickness of cervix
  concept_id: '4124637'
  code:
    concept_code: '289766009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/289766009
  descendants_included: true
- concept_name: Finding of viability of pregnancy
  concept_id: '4126258'
  code:
    concept_code: '289208006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/289208006
  descendants_included: true
- concept_name: Flaccid uterus after delivery
  concept_id: '4096531'
  code:
    concept_code: '249202006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/249202006
  descendants_included: true
- concept_name: Floppy infant syndrome
  concept_id: '4140071'
  code:
    concept_code: '33010005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/33010005
  descendants_included: true
- concept_name: Gestation results in multiple offspring
  concept_id: '42594970.0'
  code:
    concept_code: '29671000009104'
    vocabulary_id: SNOMED Veterinary
    concept_code_url: ''
  descendants_included: true
- concept_name: Glucose tolerance test normal
  concept_id: '4055678'
  code:
    concept_code: '166926006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/166926006
  descendants_included: true
- concept_name: Harlequin ichthyosis
  concept_id: '4006949'
  code:
    concept_code: '205548006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/205548006
  descendants_included: true
- concept_name: Heart murmur in mother in childbirth
  concept_id: '45757130.0'
  code:
    concept_code: '10755951000119102'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10755951000119102
  descendants_included: true
- concept_name: Hemolytic disease of fetus OR newborn due to isoimmunization
  concept_id: '440218'
  code:
    concept_code: '387705004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/387705004
  descendants_included: true
- concept_name: High risk infant
  concept_id: '4016061'
  code:
    concept_code: '169948004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/169948004
  descendants_included: true
- concept_name: History of recurrent miscarriage - delivered
  concept_id: '441630'
  code:
    concept_code: '199087006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/199087006
  descendants_included: true
- concept_name: History of recurrent miscarriage - not delivered
  concept_id: '4062565'
  code:
    concept_code: '199088001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/199088001
  descendants_included: true
- concept_name: HPL - Human placental lactogen abnormal
  concept_id: '4041368'
  code:
    concept_code: '166428003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/166428003
  descendants_included: true
- concept_name: Human placental lactogen level normal
  concept_id: '4041367'
  code:
    concept_code: '166427008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/166427008
  descendants_included: true
- concept_name: Impacted twins
  concept_id: '4049777'
  code:
    concept_code: '20949003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/20949003
  descendants_included: true
- concept_name: Impaired glucose tolerance
  concept_id: '4311629'
  code:
    concept_code: '9414007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/9414007
  descendants_included: true
- concept_name: Infection - perineal wound
  concept_id: '4028781'
  code:
    concept_code: '237339000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237339000
  descendants_included: true
- concept_name: Infections of urethra in pregnancy
  concept_id: '4060312'
  code:
    concept_code: '199206009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/199206009
  descendants_included: true
- concept_name: Intrauterine hypoxia AND/OR birth asphyxia
  concept_id: '4311540'
  code:
    concept_code: '85425003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/85425003
  descendants_included: true
- concept_name: Iron deficiency anemia of pregnancy
  concept_id: '4058246'
  code:
    concept_code: '199248002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/199248002
  descendants_included: true
- concept_name: IVF - in-vitro fertilization pregnancy
  concept_id: '36712670.0'
  code:
    concept_code: '10231000132102'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10231000132102
  descendants_included: true
- concept_name: Klumpke-D?jerine paralysis
  concept_id: '4221837'
  code:
    concept_code: '83886009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/83886009
  descendants_included: true
- concept_name: Laceration of perineum
  concept_id: '4152967'
  code:
    concept_code: '283380005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/283380005
  descendants_included: true
- concept_name: Lactation established
  concept_id: '4021675'
  code:
    concept_code: '225604004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/225604004
  descendants_included: true
- concept_name: Late onset antenatal care
  concept_id: '4061791'
  code:
    concept_code: '169594005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/169594005
  descendants_included: true
- concept_name: Lochia finding
  concept_id: '4096534'
  code:
    concept_code: '249211006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/249211006
  descendants_included: true
- concept_name: Low back pain in pregnancy
  concept_id: '45769910.0'
  code:
    concept_code: '9121000119106'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/9121000119106
  descendants_included: true
- concept_name: Low risk pregnancy
  concept_id: '4129022'
  code:
    concept_code: '237239003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237239003
  descendants_included: true
- concept_name: Lymphadenopathy due to congenital toxoplasmosis
  concept_id: '4106176'
  code:
    concept_code: '281898005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/281898005
  descendants_included: true
- concept_name: Massive aspiration syndrome
  concept_id: '4010041'
  code:
    concept_code: '10269001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10269001
  descendants_included: true
- concept_name: Maternity pad damp with liquor
  concept_id: '4126725'
  code:
    concept_code: '289606001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/289606001
  descendants_included: true
- concept_name: Maternity pad soaked with liquor
  concept_id: '4129174'
  code:
    concept_code: '289608000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/289608000
  descendants_included: true
- concept_name: Maternity pad wet with liquor
  concept_id: '4127049'
  code:
    concept_code: '289607005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/289607005
  descendants_included: true
- concept_name: Membrane at cervical os
  concept_id: '4091197'
  code:
    concept_code: '249207000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/249207000
  descendants_included: true
- concept_name: Mendelson's syndrome resulting from a procedure
  concept_id: '4188630'
  code:
    concept_code: '47386001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/47386001
  descendants_included: true
- concept_name: Mental disorders during pregnancy, childbirth and the puerperium
  concept_id: '4060424'
  code:
    concept_code: '199257008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/199257008
  descendants_included: true
- concept_name: Monoamniotic twins
  concept_id: '4252093'
  code:
    concept_code: '73621009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/73621009
  descendants_included: true
- concept_name: Monozygotic twins
  concept_id: '4330861'
  code:
    concept_code: '2256007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/2256007
  descendants_included: true
- concept_name: Mother less than 20 years old
  concept_id: '4014316'
  code:
    concept_code: '169943008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/169943008
  descendants_included: true
- concept_name: Multiparous
  concept_id: '4102166'
  code:
    concept_code: '28079008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/28079008
  descendants_included: true
- concept_name: Multiple conception
  concept_id: '4142637'
  code:
    concept_code: '33340004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/33340004
  descendants_included: true
- concept_name: Neonatal Abstinence Syndrome
  concept_id: '4212326'
  code:
    concept_code: '414819007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/414819007
  descendants_included: true
- concept_name: Neonatal acrocyanosis
  concept_id: '4071721'
  code:
    concept_code: '206324006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206324006
  descendants_included: true
- concept_name: Neonatal aspiration of blood
  concept_id: '252442'
  code:
    concept_code: '206294001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206294001
  descendants_included: true
- concept_name: Neonatal aspiration syndromes
  concept_id: '434154'
  code:
    concept_code: '276533002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/276533002
  descendants_included: true
- concept_name: Neonatal candidiasis
  concept_id: '440840'
  code:
    concept_code: '414821002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/414821002
  descendants_included: true
- concept_name: Neonatal cardiac failure
  concept_id: '4172864'
  code:
    concept_code: '276514007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/276514007
  descendants_included: true
- concept_name: Neonatal cerebral ischemia
  concept_id: '4049043'
  code:
    concept_code: '206576006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206576006
  descendants_included: true
- concept_name: Neonatal conjunctivitis
  concept_id: '4143745'
  code:
    concept_code: '34298002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/34298002
  descendants_included: true
- concept_name: Neonatal dacryocystitis
  concept_id: '4129185'
  code:
    concept_code: '23735003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/23735003
  descendants_included: true
- concept_name: Neonatal dehydration
  concept_id: '4302027'
  code:
    concept_code: '78812008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/78812008
  descendants_included: true
- concept_name: Neonatal diabetes mellitus
  concept_id: '193323'
  code:
    concept_code: '49817004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49817004
  descendants_included: true
- concept_name: Neonatal dysrhythmia
  concept_id: '4173170'
  code:
    concept_code: '276513001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/276513001
  descendants_included: true
- concept_name: Neonatal hypertension
  concept_id: '4071202'
  code:
    concept_code: '206596003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206596003
  descendants_included: true
- concept_name: Neonatal hypocalcemia
  concept_id: '4150930'
  code:
    concept_code: '268846006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/268846006
  descendants_included: true
- concept_name: Neonatal hypoglycemia
  concept_id: '23034'
  code:
    concept_code: '52767006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/52767006
  descendants_included: true
- concept_name: Neonatal hypomagnesemia
  concept_id: '4337102'
  code:
    concept_code: '87898000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/87898000
  descendants_included: true
- concept_name: Neonatal hypotension
  concept_id: '4172867'
  code:
    concept_code: '276519002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/276519002
  descendants_included: true
- concept_name: Neonatal hypoxemia
  concept_id: '443618'
  code:
    concept_code: '431335002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/431335002
  descendants_included: true
- concept_name: Neonatal infection of the eye
  concept_id: '4174302'
  code:
    concept_code: '276675009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/276675009
  descendants_included: true
- concept_name: Neonatal infective mastitis
  concept_id: '76221'
  code:
    concept_code: '3468005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/3468005
  descendants_included: true
- concept_name: Neonatal myasthenia gravis
  concept_id: '81400'
  code:
    concept_code: '82178003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/82178003
  descendants_included: true
- concept_name: Neonatal polycythemia
  concept_id: '439140'
  code:
    concept_code: '32984002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/32984002
  descendants_included: true
- concept_name: Neonatal respiratory arrest
  concept_id: '318856'
  code:
    concept_code: '95634003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/95634003
  descendants_included: true
- concept_name: Neonatal skin infection
  concept_id: '4048751'
  code:
    concept_code: '206554002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206554002
  descendants_included: true
- concept_name: Neonatal thyrotoxicosis
  concept_id: '137099'
  code:
    concept_code: '13795004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/13795004
  descendants_included: true
- concept_name: Neonatal urinary tract infection
  concept_id: '4047937'
  code:
    concept_code: '12301009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/12301009
  descendants_included: true
- concept_name: Neonatal withdrawal symptoms from maternal use of drugs of addiction
  concept_id: '4048755'
  code:
    concept_code: '206572008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206572008
  descendants_included: true
- concept_name: Neoplasm of uncertain behavior of placenta
  concept_id: '194598'
  code:
    concept_code: '95005005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/95005005
  descendants_included: true
- concept_name: Nitrazine yellow test for detection of rupture of amniotic membrane
    negative
  concept_id: '40480440.0'
  code:
    concept_code: '441727001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/441727001
  descendants_included: true
- concept_name: No liquor observed vaginally
  concept_id: '4124478'
  code:
    concept_code: '289572007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/289572007
  descendants_included: true
- concept_name: Nonreassuring fetal status
  concept_id: '4305304'
  code:
    concept_code: '130955003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/130955003
  descendants_included: true
- concept_name: Number of previous induced termination of pregnancy
  concept_id: '4021781'
  code:
    concept_code: '106109006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/106109006
  descendants_included: true
- concept_name: Obstetrical tetanus
  concept_id: '4091321'
  code:
    concept_code: '186378005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186378005
  descendants_included: true
- concept_name: Obstetric cerebral venous thrombosis
  concept_id: '4061473'
  code:
    concept_code: '200258006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200258006
  descendants_included: true
- concept_name: Obstetric disorders of breast and lactation
  concept_id: '4129186'
  code:
    concept_code: '237353000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237353000
  descendants_included: true
- concept_name: Obstetric investigative finding
  concept_id: '4090071'
  code:
    concept_code: '251665008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/251665008
  descendants_included: true
- concept_name: Obstetric pelvic finding
  concept_id: '4095947'
  code:
    concept_code: '248994003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/248994003
  descendants_included: true
- concept_name: Obstetric spinal and epidural anesthesia-induced headache
  concept_id: '4062124'
  code:
    concept_code: '200071001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200071001
  descendants_included: true
- concept_name: O/E - fetal heart 100-120
  concept_id: '4039090'
  code:
    concept_code: '163547007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/163547007
  descendants_included: true
- concept_name: O/E - fetal heart 120-160
  concept_id: '4038571'
  code:
    concept_code: '163548002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/163548002
  descendants_included: true
- concept_name: O/E - fetal heart 160-180
  concept_id: '4038572'
  code:
    concept_code: '163549005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/163549005
  descendants_included: true
- concept_name: O/E - fetal movements seen
  concept_id: '4039610'
  code:
    concept_code: '163537009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/163537009
  descendants_included: true
- concept_name: O/E - fetus
  concept_id: '4207166'
  code:
    concept_code: '309670007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/309670007
  descendants_included: true
- concept_name: O/E - vaginal examination - cervical ripeness
  concept_id: '4038763'
  code:
    concept_code: '163559006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/163559006
  descendants_included: true
- concept_name: O/E - VE for pelvic assessment
  concept_id: '4038573'
  code:
    concept_code: '163555000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/163555000
  descendants_included: true
- concept_name: Omphalitis
  concept_id: '4034650'
  code:
    concept_code: '239095007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/239095007
  descendants_included: true
- concept_name: On examination - vaginal examination - descent of presenting part
  concept_id: '4153591'
  code:
    concept_code: '268955008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/268955008
  descendants_included: true
- concept_name: Pain in round ligament in pregnancy
  concept_id: '45757160.0'
  code:
    concept_code: '10760581000119104'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10760581000119104
  descendants_included: true
- concept_name: Partially effaced cervix
  concept_id: '4080867'
  code:
    concept_code: '278058008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/278058008
  descendants_included: true
- concept_name: Passage of meconium
  concept_id: '195075'
  code:
    concept_code: '249529000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/249529000
  descendants_included: true
- concept_name: Pelvic hematoma
  concept_id: '4131053'
  code:
    concept_code: '264558008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/264558008
  descendants_included: true
- concept_name: Perinatal atelectasis
  concept_id: '260212'
  code:
    concept_code: '54959009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/54959009
  descendants_included: true
- concept_name: Perinatal disorder
  concept_id: '4187201'
  code:
    concept_code: '415073005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/415073005
  descendants_included: true
- concept_name: Perinatal hemoptysis
  concept_id: '4048152'
  code:
    concept_code: '206304007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206304007
  descendants_included: true
- concept_name: Perinatal jaundice due to hepatocellular damage
  concept_id: '195064'
  code:
    concept_code: '10877007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10877007
  descendants_included: true
- concept_name: Perinatal period
  concept_id: '4162557'
  code:
    concept_code: '373663005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/373663005
  descendants_included: true
- concept_name: Phlegmasia alba dolens - obstetric
  concept_id: '4089917'
  code:
    concept_code: '280966008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/280966008
  descendants_included: true
- concept_name: Physical abuse complicating childbirth
  concept_id: '45757140.0'
  code:
    concept_code: '10756261000119102'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10756261000119102
  descendants_included: true
- concept_name: Physical abuse complicating pregnancy
  concept_id: '45757140.0'
  code:
    concept_code: '10756301000119105'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10756301000119105
  descendants_included: true
- concept_name: Placental fragments at cervical os
  concept_id: '4096532'
  code:
    concept_code: '249206009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/249206009
  descendants_included: true
- concept_name: Placental fragments in uterus
  concept_id: '4090740'
  code:
    concept_code: '249205008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/249205008
  descendants_included: true
- concept_name: Polyp of cervix in pregnancy, childbirth and the puerperium
  concept_id: '4028624'
  code:
    concept_code: '237191007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237191007
  descendants_included: true
- concept_name: Possible pregnancy
  concept_id: '4012558'
  code:
    concept_code: '102874004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/102874004
  descendants_included: true
- concept_name: Postmaturity of fetus
  concept_id: '440833'
  code:
    concept_code: '433145001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/433145001
  descendants_included: true
- concept_name: Post-term infant, not heavy-for-dates
  concept_id: '441128'
  code:
    concept_code: '79995002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/79995002
  descendants_included: true
- concept_name: Precipitate labor
  concept_id: '433542'
  code:
    concept_code: '51920004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/51920004
  descendants_included: true
- concept_name: Pre-existing secondary hypertension complicating pregnancy, childbirth
    and puerperium
  concept_id: '4057979'
  code:
    concept_code: '199008003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/199008003
  descendants_included: true
- concept_name: Pre-existing type 1 diabetes mellitus
  concept_id: '4063042'
  code:
    concept_code: '199229001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/199229001
  descendants_included: true
- concept_name: Pre-existing type 2 diabetes mellitus
  concept_id: '4063043'
  code:
    concept_code: '199230006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/199230006
  descendants_included: true
- concept_name: Pregnancy insufficiently advanced for reliable antenatal screening
  concept_id: '37208880.0'
  code:
    concept_code: '1109951000000101'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1109951000000101
  descendants_included: true
- concept_name: Pregnancy resulting from assisted conception
  concept_id: '44806660.0'
  code:
    concept_code: '813541000000100'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/813541000000100
  descendants_included: true
- concept_name: Pregnancy test equivocal
  concept_id: '4094911'
  code:
    concept_code: '250426008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/250426008
  descendants_included: true
- concept_name: Pregnancy test positive
  concept_id: '4094910'
  code:
    concept_code: '250423000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/250423000
  descendants_included: true
- concept_name: Pregnancy too advanced for reliable antenatal screening
  concept_id: '37208880.0'
  code:
    concept_code: '1109971000000105'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/1109971000000105
  descendants_included: true
- concept_name: Pregnancy with history of c section antepartum
  concept_id: '3171301'
  code:
    concept_code: '27190001000004100'
    vocabulary_id: Nebraska Lexicon
    concept_code_url: ''
  descendants_included: true
- concept_name: Pregnancy with poor reproductive history
  concept_id: '3188475'
  code:
    concept_code: '27200001000004100'
    vocabulary_id: Nebraska Lexicon
    concept_code_url: ''
  descendants_included: true
- concept_name: Pregnancy with uncertain dates
  concept_id: '4034085'
  code:
    concept_code: '237238006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237238006
  descendants_included: true
- concept_name: Pregnant
  concept_id: '4299535'
  code:
    concept_code: '77386006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/77386006
  descendants_included: true
- concept_name: Pregnant - planned
  concept_id: '4059984'
  code:
    concept_code: '169565003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/169565003
  descendants_included: true
- concept_name: Prenatal finding
  concept_id: '4040733'
  code:
    concept_code: '118189007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/118189007
  descendants_included: true
- concept_name: Presentation of pregnancy
  concept_id: '4089558'
  code:
    concept_code: '248985009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/248985009
  descendants_included: true
- concept_name: Primigravida
  concept_id: '4133029'
  code:
    concept_code: '127364007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/127364007
  descendants_included: true
- concept_name: Products of conception at uterine os cervix
  concept_id: '4088432'
  code:
    concept_code: '248937008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/248937008
  descendants_included: true
- concept_name: Products of conception in vagina
  concept_id: '4095809'
  code:
    concept_code: '248896000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/248896000
  descendants_included: true
- concept_name: Psychological abuse complicating pregnancy
  concept_id: '45757170.0'
  code:
    concept_code: '10760981000119107'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10760981000119107
  descendants_included: true
- concept_name: Questionable if pregnancy was planned
  concept_id: '4061423'
  code:
    concept_code: '169569009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/169569009
  descendants_included: true
- concept_name: Reduced fetal movement
  concept_id: '77619'
  code:
    concept_code: '276369006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/276369006
  descendants_included: true
- concept_name: Respiratory condition of fetus OR newborn
  concept_id: '319138'
  code:
    concept_code: '17849001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/17849001
  descendants_included: true
- concept_name: Retained intrauterine contraceptive device in pregnancy
  concept_id: '4061848'
  code:
    concept_code: '199742002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/199742002
  descendants_included: true
- concept_name: Retracted nipple in pregnancy, the puerperium or lactation
  concept_id: '437061'
  code:
    concept_code: '200402001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200402001
  descendants_included: true
- concept_name: Ripe cervix
  concept_id: '4129345'
  code:
    concept_code: '289765008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/289765008
  descendants_included: true
- concept_name: Salpingo-oophoritis following abortive pregnancy
  concept_id: '4113995'
  code:
    concept_code: '198824009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/198824009
  descendants_included: true
- concept_name: Scalp bruising due to birth trauma
  concept_id: '4047853'
  code:
    concept_code: '206204009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206204009
  descendants_included: true
- concept_name: Septic thrombophlebitis
  concept_id: '4235812'
  code:
    concept_code: '439731006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/439731006
  descendants_included: true
- concept_name: Sexual abuse complicating childbirth
  concept_id: '45757170.0'
  code:
    concept_code: '10761021000119102'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10761021000119102
  descendants_included: true
- concept_name: Sexual abuse complicating pregnancy
  concept_id: '45757170.0'
  code:
    concept_code: '10761061000119107'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/10761061000119107
  descendants_included: true
- concept_name: Spinal and epidural anesthesia-induced headache during labor and delivery
  concept_id: '4065627'
  code:
    concept_code: '200076006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200076006
  descendants_included: true
- concept_name: Spinal and epidural anesthesia-induced headache during the puerperium
  concept_id: '4065625'
  code:
    concept_code: '200073003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/200073003
  descendants_included: true
- concept_name: Spotting per vagina in pregnancy
  concept_id: '198212'
  code:
    concept_code: '284075002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/284075002
  descendants_included: true
- concept_name: Subcutaneous fat necrosis due to birth injury
  concept_id: '4047868'
  code:
    concept_code: '206254003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206254003
  descendants_included: true
- concept_name: Subluxation of symphysis pubis in pregnancy, childbirth and the puerperium
  concept_id: '4063159'
  code:
    concept_code: '199308008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/199308008
  descendants_included: true
- concept_name: Superfetation
  concept_id: '4238119'
  code:
    concept_code: '91271004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/91271004
  descendants_included: true
- concept_name: Suspected fetal anencephaly
  concept_id: '43530880.0'
  code:
    concept_code: '609416008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/609416008
  descendants_included: true
- concept_name: Suspected fetal damage from disease in the mother
  concept_id: '43530890.0'
  code:
    concept_code: '609420007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/609420007
  descendants_included: true
- concept_name: Suspected fetal damage from maternal alcohol
  concept_id: '43530880.0'
  code:
    concept_code: '609418009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/609418009
  descendants_included: true
- concept_name: Suspected fetal damage from radiation
  concept_id: '43530890.0'
  code:
    concept_code: '609422004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/609422004
  descendants_included: true
- concept_name: Teenage pregnancy
  concept_id: '4129023'
  code:
    concept_code: '237240001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237240001
  descendants_included: true
- concept_name: Tentorial tear due to birth trauma
  concept_id: '4071588'
  code:
    concept_code: '206192007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206192007
  descendants_included: true
- concept_name: Thyroid dysfunction during pregnancy, childbirth and the puerperium
  concept_id: '139895'
  code:
    concept_code: '199235001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/199235001
  descendants_included: true
- concept_name: Torticollis due to birth injury
  concept_id: '4047866'
  code:
    concept_code: '206250007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/206250007
  descendants_included: true
- concept_name: Transient neonatal disorder of coagulation
  concept_id: '433604'
  code:
    concept_code: '32605001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/32605001
  descendants_included: true
- concept_name: Transient neonatal hypertyrosinemia
  concept_id: '4327033'
  code:
    concept_code: '75387001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/75387001
  descendants_included: true
- concept_name: Transient neonatal neutropenia
  concept_id: '439149'
  code:
    concept_code: '55444004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/55444004
  descendants_included: true
- concept_name: Transient neonatal thrombocytopenia
  concept_id: '435076'
  code:
    concept_code: '23205009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/23205009
  descendants_included: true
- concept_name: Transitory neonatal electrolyte disturbance
  concept_id: '436234'
  code:
    concept_code: '12901004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/12901004
  descendants_included: true
- concept_name: Tumor of uterine body in pregnancy, childbirth and the puerperium
  concept_id: '4145940'
  code:
    concept_code: '267219007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/267219007
  descendants_included: true
- concept_name: Tumultuous uterine contraction
  concept_id: '4219108'
  code:
    concept_code: '72417002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/72417002
  descendants_included: true
- concept_name: Ultrasound scan - multiple fetus
  concept_id: '4157006'
  code:
    concept_code: '370386005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/370386005
  descendants_included: true
- concept_name: Undelivered in utero fetal death
  concept_id: '4241830'
  code:
    concept_code: '59291004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/59291004
  descendants_included: true
- concept_name: Undiagnosed pregnancy
  concept_id: '4028642'
  code:
    concept_code: '237234008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237234008
  descendants_included: true
- concept_name: Uneffaced cervix
  concept_id: '4080866'
  code:
    concept_code: '278056007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/278056007
  descendants_included: true
- concept_name: US obstetric scan abnormal
  concept_id: '4060623'
  code:
    concept_code: '169222003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/169222003
  descendants_included: true
- concept_name: US obstetric scan normal
  concept_id: '4060622'
  code:
    concept_code: '169221005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/169221005
  descendants_included: true
- concept_name: Uterine fibroid affecting obstetric care
  concept_id: '4129703'
  code:
    concept_code: '237216009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237216009
  descendants_included: true
- concept_name: Uterine fibroid - baby delivered
  concept_id: '4034079'
  code:
    concept_code: '237215008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237215008
  descendants_included: true
- concept_name: Uterine fibroid complicating antenatal care, baby not yet delivered
  concept_id: '4129015'
  code:
    concept_code: '237213001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237213001
  descendants_included: true
- concept_name: Uterine fibroids in pregnancy, childbirth and the puerperium
  concept_id: '4129016'
  code:
    concept_code: '237217000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237217000
  descendants_included: true
- concept_name: Uterine membrane finding
  concept_id: '4193463'
  code:
    concept_code: '313130001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/313130001
  descendants_included: true
- concept_name: Uterine or cervical spasm
  concept_id: '4129043'
  code:
    concept_code: '237317002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237317002
  descendants_included: true
- concept_name: Vaginal muscle tear
  concept_id: '4170459'
  code:
    concept_code: '275430007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/275430007
  descendants_included: true
- concept_name: Vaginal show
  concept_id: '4145316'
  code:
    concept_code: '268471004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/268471004
  descendants_included: true
- concept_name: Vascular lesion of cord
  concept_id: '315881'
  code:
    concept_code: '7870007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/7870007
  descendants_included: true
- concept_name: Vulval abnormality in pregnancy, childbirth and the puerperium
  concept_id: '4129689'
  code:
    concept_code: '237155000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/237155000
  descendants_included: true
- concept_name: Xiphopagus
  concept_id: '4085140'
  code:
    concept_code: '24297000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/24297000
  descendants_included: true
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
  concept_id: '44829290.0'
  code:
    concept_code: '780.7'
    vocabulary_id: ICD9CM
    concept_code_url: ''
  descendants_included: true
- concept_name: Other malaise and fatigue
  concept_id: '44823450.0'
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
- concept_name: Loss of sense of smell
  concept_id: '4185711'
  code:
    concept_code: '44169009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/44169009
  descendants_included: true
- concept_name: Sensory disorder of smell and/or taste
  concept_id: '43530710.0'
  code:
    concept_code: '2611000119103'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/2611000119103
  descendants_included: true
- concept_name: Taste sense altered
  concept_id: '436235'
  code:
    concept_code: '271801002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/271801002
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
- concept_name: Aneurysm of renal artery
  concept_id: '194385'
  code:
    concept_code: '36184004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/36184004
  descendants_included: true
- concept_name: Chronic kidney disease
  concept_id: '46271020.0'
  code:
    concept_code: '709044004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/709044004
  descendants_included: true
- concept_name: Disorder of kidney due to diabetes mellitus
  concept_id: '192279'
  code:
    concept_code: '127013003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/127013003
  descendants_included: true
- concept_name: Glomerulonephritis
  concept_id: '4263367'
  code:
    concept_code: '36171008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/36171008
  descendants_included: true
- concept_name: Glomerulosclerosis
  concept_id: '261071'
  code:
    concept_code: '197661001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/197661001
  descendants_included: true
- concept_name: Hypertensive renal disease
  concept_id: '201313'
  code:
    concept_code: '38481006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/38481006
  descendants_included: true
- concept_name: Interstitial nephritis
  concept_id: '4103224'
  code:
    concept_code: '28689008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/28689008
  descendants_included: true
- concept_name: Nephritis
  concept_id: '193253'
  code:
    concept_code: '52845002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/52845002
  descendants_included: false
- concept_name: Nephrotic syndrome
  concept_id: '195314'
  code:
    concept_code: '52254009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/52254009
  descendants_included: true
- concept_name: Renal failure syndrome
  concept_id: '192359'
  code:
    concept_code: '42399005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/42399005
  descendants_included: true
- concept_name: Anemia in chronic kidney disease
  concept_id: '45768810.0'
  code:
    concept_code: '707323002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/707323002
  descendants_included: true
- concept_name: Chronic kidney disease stage 5
  concept_id: '443611'
  code:
    concept_code: '433146000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/433146000
  descendants_included: true
- concept_name: End-stage renal disease
  concept_id: '193782'
  code:
    concept_code: '46177005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/46177005
  descendants_included: true
- concept_name: Hypertensive renal failure
  concept_id: '443919'
  code:
    concept_code: '49220004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49220004
  descendants_included: true
- concept_name: Human immunodeficiency virus carrier
  concept_id: '44783360.0'
  code:
    concept_code: '699433000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/699433000
  descendants_included: true
- concept_name: Human immunodeficiency virus infection
  concept_id: '439727'
  code:
    concept_code: '86406008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/86406008
  descendants_included: true
- concept_name: Respiratory tuberculosis
  concept_id: '45771090.0'
  code:
    concept_code: '700272008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/700272008
  descendants_included: true
- concept_name: Pleurisy without effusion or active tuberculosis
  concept_id: '4112923'
  code:
    concept_code: '196076002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/196076002
  descendants_included: true
- concept_name: Tuberculous pleurisy, confirmed bacteriologically and histologically
  concept_id: '4090539'
  code:
    concept_code: '186200004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186200004
  descendants_included: true
- concept_name: Tuberculous pleurisy in primary progressive tuberculosis
  concept_id: '258675'
  code:
    concept_code: '186172004'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/186172004
  descendants_included: true
- concept_name: Primary tuberculosis
  concept_id: '432541'
  code:
    concept_code: '63309002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/63309002
  descendants_included: true
- concept_name: Tuberculosis
  concept_id: '434557'
  code:
    concept_code: '56717001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/56717001
  descendants_included: false

# Study protocol
study_protocol:
  # Protocol identifier; specifically created for the website
  # The identifier is the last part of the URL directing to the particular study protocol
  protocol_id: 'Covid19CharacterizationCharybdis/design'
  # Last modification date, use date format YYYY-MM-DD
  date_modified: 2020-06-16
  # Protocol identifier, in case protocol has an identifier elsewhere 
  protocol_identifier: 
  # Protocol license
  license: 
  # URL to the protocol
  protocol_url: https://github.com/ohdsi-studies/Covid19CharacterizationCharybdis/blob/master/documents/Protocol_COVID-19%20Charybdis%20Characterisation_V5.docx
  # Version of the protocol 
  version: 'V5.1'

# URL to the forum thread about the study
forum_thread_url: https://forums.ohdsi.org/t/charybdis-successfully-tested-ohdsi-seeking-data-partners-to-run-study/11072

# Source code used for the study; if multiple code repositories are available, 
# duplicate all keys under "source_code"
source_code:
- name: 'Covid19CharacterizationCharybdis'
  # URL to GitHub repository containing the source code
  code_repository_url: https://github.com/ohdsi-studies/Covid19CharacterizationCharybdis
  # Last modification date, use date format YYYY-MM-DD
  date_modified: 2020-10-09
  # Maintainer of source code; use identifier of organization if applicable
  maintainer: 'OHDSI'
  # Programming language used
  programming_language: 'R'
#  # Version of the source code
#  version: 

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
- doi: 

# study results (e.g. shiny web application)
results:
# Name of the web application showing the results
- name: 'Shiny App: Cohort Diagnostics - COVID Targets'
  # URL to the web application
  application_url: https://data.ohdsi.org/Covid19CharacterizationCharybdisDiagCovid/
# Name of the web application showing the results
- name: 'Shiny App: Cohort Diagnostics - Influenza Targets'
  # URL to the web application
  application_url: https://data.ohdsi.org/Covid19CharacterizationCharybdisDiagInfluenza/
# Name of the web application showing the results
- name: 'Shiny App: Cohort Diagnostics - Stratum'
  # URL to the web application
  application_url: https://data.ohdsi.org/Covid19CharacterizationCharybdisDiagStrata/
# Name of the web application showing the results
- name: 'Shiny App: Cohort Diagnostics - Features'
  # URL to the web application
  application_url: https://data.ohdsi.org/Covid19CharacterizationCharybdisDiagFeature/
# Name of the web application showing the results
- name: 'Shiny App: Characterization Study'
  # URL to the web application
  application_url: https://data.ohdsi.org/Covid19CharacterizationCharybdis/

# Drug studied; if multiple subjects are being studied,
# duplicate all keys under "study_subject"
study_subject: 
- concept_name: abacavir
  concept_id: '1736971'
  code:
    concept_code: '190521'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Amprenavir
  concept_id: '1789428'
  code:
    concept_code: '228656'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Atazanavir
  concept_id: '1727223'
  code:
    concept_code: '343047'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bictegravir
  concept_id: '964008'
  code:
    concept_code: '1999660'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: cobicistat
  concept_id: '42874220.0'
  code:
    concept_code: '1306284'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: darunavir
  concept_id: '1756831'
  code:
    concept_code: '460132'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Delavirdine
  concept_id: '1747157'
  code:
    concept_code: '83816'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Didanosine
  concept_id: '1724869'
  code:
    concept_code: '3364'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: dolutegravir
  concept_id: '43560390.0'
  code:
    concept_code: '1433868'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: DORAVIRINE
  concept_id: '35200450.0'
  code:
    concept_code: '2055755'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: efavirenz
  concept_id: '1738135'
  code:
    concept_code: '195085'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: elvitegravir
  concept_id: '42874210.0'
  code:
    concept_code: '1306286'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: emtricitabine
  concept_id: '1703069'
  code:
    concept_code: '276237'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: enfuvirtide
  concept_id: '1717002'
  code:
    concept_code: '139896'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: etravirine
  concept_id: '1758536'
  code:
    concept_code: '475969'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fosamprenavir
  concept_id: '1736829'
  code:
    concept_code: '358262'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ibalizumab
  concept_id: '42544020.0'
  code:
    concept_code: '2043283'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Indinavir
  concept_id: '1711523'
  code:
    concept_code: '114289'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Lamivudine
  concept_id: '1704183'
  code:
    concept_code: '68244'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: lopinavir
  concept_id: '1738170'
  code:
    concept_code: '195088'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: maraviroc
  concept_id: '1787101'
  code:
    concept_code: '620216'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nelfinavir
  concept_id: '1715472'
  code:
    concept_code: '134527'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nevirapine
  concept_id: '1769389'
  code:
    concept_code: '53654'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: raltegravir
  concept_id: '1712889'
  code:
    concept_code: '719872'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Rilpivirine
  concept_id: '40238930.0'
  code:
    concept_code: '1102270'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Ritonavir
  concept_id: '1748921'
  code:
    concept_code: '85762'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Saquinavir
  concept_id: '1746244'
  code:
    concept_code: '83395'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Stavudine
  concept_id: '1781406'
  code:
    concept_code: '59763'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: tenofovir disoproxil
  concept_id: '1710281'
  code:
    concept_code: '300195'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: tipranavir
  concept_id: '1736999'
  code:
    concept_code: '190548'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Zalcitabine
  concept_id: '1724827'
  code:
    concept_code: '3363'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Zidovudine
  concept_id: '1710612'
  code:
    concept_code: '11413'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bedaquiline
  concept_id: '43012520.0'
  code:
    concept_code: '1364504'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Streptomycin
  concept_id: '1836191'
  code:
    concept_code: '10109'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: isoniazid
  concept_id: '1782521'
  code:
    concept_code: '6038'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Rifampin
  concept_id: '1763204'
  code:
    concept_code: '9384'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Ethambutol
  concept_id: '1749301'
  code:
    concept_code: '4110'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Pyrazinamide
  concept_id: '1759455'
  code:
    concept_code: '8987'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Rifabutin
  concept_id: '1777417'
  code:
    concept_code: '55672'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: rifapentine
  concept_id: '19035950.0'
  code:
    concept_code: '35617'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Cycloserine
  concept_id: '1710446'
  code:
    concept_code: '3007'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Ethionamide
  concept_id: '1750074'
  code:
    concept_code: '4127'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: aminosalicylic acid
  concept_id: '1726228'
  code:
    concept_code: '7833'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: terizidone
  concept_id: '19078420.0'
  code:
    concept_code: '57047'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Prothionamide
  concept_id: '19135810.0'
  code:
    concept_code: '8871'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: aminosalicylate
  concept_id: '19010340.0'
  code:
    concept_code: '113374'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Capreomycin
  concept_id: '19026710.0'
  code:
    concept_code: '78903'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Levofloxacin
  concept_id: '1742253'
  code:
    concept_code: '82122'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: moxifloxacin
  concept_id: '1716903'
  code:
    concept_code: '139462'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: linezolid
  concept_id: '1736887'
  code:
    concept_code: '190376'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Clofazimine
  concept_id: '1798476'
  code:
    concept_code: '2592'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Delamanid
  concept_id: '36879080.0'
  code:
    concept_code: OMOP994306
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Cilastatin
  concept_id: '1797258'
  code:
    concept_code: '2540'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Imipenem
  concept_id: '1778262'
  code:
    concept_code: '5690'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: meropenem
  concept_id: '1709170'
  code:
    concept_code: '29561'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Amikacin
  concept_id: '1790868'
  code:
    concept_code: '641'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Fenoterol / Ipratropium Dry Powder Inhaler
  concept_id: '43134420.0'
  code:
    concept_code: OMOP443574
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Fenoterol / Ipratropium Inhalant Powder
  concept_id: '40727830.0'
  code:
    concept_code: OMOP4729268
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Fenoterol / Ipratropium Inhalation Solution
  concept_id: '36811740.0'
  code:
    concept_code: OMOP4825769
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol / Ipratropium Inhalant Powder
  concept_id: '40727740.0'
  code:
    concept_code: OMOP4729368
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol / Ipratropium Inhalation Solution
  concept_id: '1356123'
  code:
    concept_code: '2108259'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol / Ipratropium Injectable Solution
  concept_id: '44186990.0'
  code:
    concept_code: OMOP3063714
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / formoterol Dry Powder Inhaler
  concept_id: '41048760.0'
  code:
    concept_code: OMOP2246722
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / formoterol Inhalant Powder
  concept_id: '40754970.0'
  code:
    concept_code: OMOP4702057
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / formoterol Inhalant Solution
  concept_id: '21089510.0'
  code:
    concept_code: OMOP357047
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol / Beclomethasone Dry Powder Inhaler
  concept_id: '42483140.0'
  code:
    concept_code: OMOP418868
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol / Beclomethasone Inhalation Powder
  concept_id: '36812530.0'
  code:
    concept_code: OMOP4826562
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol / glycopyrronium Dry Powder Inhaler
  concept_id: '36421290.0'
  code:
    concept_code: OMOP4763575
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol / glycopyrronium Inhalant Powder
  concept_id: '40745350.0'
  code:
    concept_code: OMOP4711820
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol / glycopyrronium Inhalant Solution
  concept_id: '36787950.0'
  code:
    concept_code: OMOP4776216
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol Dry Powder Inhaler
  concept_id: '21158940.0'
  code:
    concept_code: OMOP286058
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol Inhalant Powder
  concept_id: '36894460.0'
  code:
    concept_code: OMOP1002030
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol Inhalant Solution
  concept_id: '21090040.0'
  code:
    concept_code: OMOP286036
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / formoterol Dry Powder Inhaler
  concept_id: '42479680.0'
  code:
    concept_code: OMOP419122
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / formoterol Inhalation Powder
  concept_id: '35133500.0'
  code:
    concept_code: OMOP4790710
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / formoterol Inhalation Solution
  concept_id: '783228'
  code:
    concept_code: OMOP4831059
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / formoterol Metered Dose Inhaler
  concept_id: '40142910.0'
  code:
    concept_code: '745797'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / salmeterol Inhalant Powder
  concept_id: '36787270.0'
  code:
    concept_code: OMOP4775534
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / umeclidinium / vilanterol Dry Powder Inhaler
  concept_id: '792484'
  code:
    concept_code: '1945037'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / umeclidinium / vilanterol Inhalant Powder
  concept_id: '40755790.0'
  code:
    concept_code: OMOP4701920
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol / vilanterol Dry Powder Inhaler
  concept_id: '37592050.0'
  code:
    concept_code: OMOP4781501
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol Dry Powder Inhaler
  concept_id: '43532280.0'
  code:
    concept_code: '1424887'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol Inhalant Powder
  concept_id: '43291090.0'
  code:
    concept_code: OMOP557209
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol Inhalant Solution
  concept_id: '41267400.0'
  code:
    concept_code: OMOP2465363
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol Nasal Spray
  concept_id: '42935520.0'
  code:
    concept_code: OMOP4662232
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: umeclidinium / umeclidinium / vilanterol / vilanterol Dry Powder Inhaler
  concept_id: '36421520.0'
  code:
    concept_code: OMOP4763797
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: umeclidinium / umeclidinium / vilanterol / vilanterol Dry Powder Inhaler
  concept_id: '37592340.0'
  code:
    concept_code: OMOP4781790
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: umeclidinium / vilanterol Dry Powder Inhaler
  concept_id: '44785910.0'
  code:
    concept_code: '1487517'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: umeclidinium / vilanterol Inhalant Powder
  concept_id: '43263900.0'
  code:
    concept_code: OMOP557201
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: umeclidinium / vilanterol Inhalant Solution
  concept_id: '41267170.0'
  code:
    concept_code: OMOP2465128
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Glycopyrrolate / indacaterol Dry Powder Inhaler
  concept_id: '42481320.0'
  code:
    concept_code: OMOP418727
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Glycopyrrolate / indacaterol Metered Dose Inhaler
  concept_id: '44094570.0'
  code:
    concept_code: OMOP1089199
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium / indacaterol Dry Powder Inhaler
  concept_id: '43145870.0'
  code:
    concept_code: OMOP448437
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium / indacaterol Inhalant Powder
  concept_id: '43259950.0'
  code:
    concept_code: OMOP573715
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium / indacaterol Inhalation Powder
  concept_id: '1356196'
  code:
    concept_code: '2108413'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium / indacaterol Metered Dose Inhaler
  concept_id: '35145840.0'
  code:
    concept_code: OMOP4802923
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Ipratropium
  concept_id: '1112921'
  code:
    concept_code: '7213'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: tiotropium
  concept_id: '1106776'
  code:
    concept_code: '69120'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Anticholinergics
  concept_id: '21603290.0'
  code:
    concept_code: R03BB
    vocabulary_id: ATC
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol / Beclomethasone Dry Powder Inhaler
  concept_id: '42483140.0'
  code:
    concept_code: OMOP418868
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol / Beclomethasone Inhalation Powder
  concept_id: '36812530.0'
  code:
    concept_code: OMOP4826562
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol / Ipratropium Inhalant Powder
  concept_id: '40727740.0'
  code:
    concept_code: OMOP4729368
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol / Ipratropium Inhalation Solution
  concept_id: '1356123'
  code:
    concept_code: '2108259'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol / Ipratropium Metered Dose Inhaler
  concept_id: '40142670.0'
  code:
    concept_code: '745734'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol Dry Powder Inhaler
  concept_id: '46234460.0'
  code:
    concept_code: '1649559'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol Inhalation Powder
  concept_id: '1356111'
  code:
    concept_code: '2108233'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol Inhalation Solution
  concept_id: '1356108'
  code:
    concept_code: '2108226'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol Metered Dose Inhaler
  concept_id: '40142700.0'
  code:
    concept_code: '745678'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Anticholinergics
  concept_id: '21603290.0'
  code:
    concept_code: R03BB
    vocabulary_id: ATC
    concept_code_url: ''
  descendants_included: true
- concept_name: Ascorbic Acid / Benzoate / Epinephrine / Potassium / Sodium Inhalant
    Solution
  concept_id: '41143400.0'
  code:
    concept_code: OMOP2341357
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol / glycopyrronium Dry Powder Inhaler
  concept_id: '36421290.0'
  code:
    concept_code: OMOP4763575
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol / glycopyrronium Inhalant Powder
  concept_id: '40745350.0'
  code:
    concept_code: OMOP4711820
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol / glycopyrronium Inhalant Solution
  concept_id: '36787950.0'
  code:
    concept_code: OMOP4776216
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol Dry Powder Inhaler
  concept_id: '21158940.0'
  code:
    concept_code: OMOP286058
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol Inhalant Powder
  concept_id: '36894460.0'
  code:
    concept_code: OMOP1002030
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol Inhalant Solution
  concept_id: '21090040.0'
  code:
    concept_code: OMOP286036
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone Inhalant Powder
  concept_id: '36883710.0'
  code:
    concept_code: OMOP1004751
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone Inhalation Solution
  concept_id: '35130060.0'
  code:
    concept_code: OMOP4787320
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone Metered Dose Inhaler
  concept_id: '40142780.0'
  code:
    concept_code: '746190'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / formoterol Dry Powder Inhaler
  concept_id: '42479680.0'
  code:
    concept_code: OMOP419122
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / formoterol Inhalation Powder
  concept_id: '35133500.0'
  code:
    concept_code: OMOP4790710
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / formoterol Inhalation Solution
  concept_id: '783228'
  code:
    concept_code: OMOP4831059
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / formoterol Metered Dose Inhaler
  concept_id: '40142910.0'
  code:
    concept_code: '745797'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / salmeterol Inhalant Powder
  concept_id: '36787270.0'
  code:
    concept_code: OMOP4775534
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide Inhalation Powder
  concept_id: '1356143'
  code:
    concept_code: '2108302'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide Inhalation Solution
  concept_id: '35135830.0'
  code:
    concept_code: OMOP4793016
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide Inhalation Suspension
  concept_id: '1356140'
  code:
    concept_code: '2108295'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide Metered Dose Inhaler
  concept_id: '44120750.0'
  code:
    concept_code: OMOP1115385
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Butanilicaine / Epinephrine Metered Dose Inhaler
  concept_id: '41205830.0'
  code:
    concept_code: OMOP2403794
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Butanilicaine / Norepinephrine Metered Dose Inhaler
  concept_id: '40924270.0'
  code:
    concept_code: OMOP2122233
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Carbuterol Inhalant Solution
  concept_id: '40986620.0'
  code:
    concept_code: OMOP2184583
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Cromoglycate / Isoproterenol Dry Powder Inhaler
  concept_id: '40830670.0'
  code:
    concept_code: OMOP2028628
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Cromoglycate / reproterol Dry Powder Inhaler
  concept_id: '41205660.0'
  code:
    concept_code: OMOP2403625
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Cromoglycate / reproterol Inhalant Solution
  concept_id: '40861870.0'
  code:
    concept_code: OMOP2059828
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Cromoglycate Inhalant Powder
  concept_id: '43274340.0'
  code:
    concept_code: OMOP551853
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Cromoglycate Inhalant Solution
  concept_id: '43263320.0'
  code:
    concept_code: OMOP551855
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Cromolyn / reproterol Inhalant Solution
  concept_id: '43621600.0'
  code:
    concept_code: OMOP956780
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Cromolyn Inhalation Powder
  concept_id: '1356154'
  code:
    concept_code: '2108327'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Cromolyn Inhalation Solution
  concept_id: '1356147'
  code:
    concept_code: '2108316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Cromolyn Metered Dose Inhaler
  concept_id: '40143110.0'
  code:
    concept_code: '746181'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Epinephrine / Theophylline Inhalant Solution
  concept_id: '41080210.0'
  code:
    concept_code: OMOP2278167
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Epinephrine / ethaverine / homatropine / polidocanol Inhalant Solution
  concept_id: '41174340.0'
  code:
    concept_code: OMOP2372306
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Epinephrine / hypophysis extract Inhalant Solution
  concept_id: '41111520.0'
  code:
    concept_code: OMOP2309478
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Epinephrine Inhalation Powder
  concept_id: '1356173'
  code:
    concept_code: '2108366'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Epinephrine Inhalation Solution
  concept_id: '1356180'
  code:
    concept_code: '2108382'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Epinephrine Metered Dose Inhaler
  concept_id: '40144090.0'
  code:
    concept_code: '746206'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Fenoterol / Ipratropium Dry Powder Inhaler
  concept_id: '43134420.0'
  code:
    concept_code: OMOP443574
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Fenoterol / Ipratropium Inhalant Powder
  concept_id: '40727830.0'
  code:
    concept_code: OMOP4729268
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Fenoterol / Ipratropium Inhalation Solution
  concept_id: '36811740.0'
  code:
    concept_code: OMOP4825769
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Fenoterol Dry Powder Inhaler
  concept_id: '40861770.0'
  code:
    concept_code: OMOP2059730
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Fenoterol Inhalant Powder
  concept_id: '40727840.0'
  code:
    concept_code: OMOP4729263
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Fenoterol Inhalation Solution
  concept_id: '35150380.0'
  code:
    concept_code: OMOP4807426
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Fenoterol Metered Dose Inhaler
  concept_id: '44081620.0'
  code:
    concept_code: OMOP1076250
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Isoetharine Inhalation Solution
  concept_id: '1356217'
  code:
    concept_code: '2108457'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Isoetharine Metered Dose Inhaler
  concept_id: '1356215'
  code:
    concept_code: '2108453'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Isoproterenol Inhalation Solution
  concept_id: '1356101'
  code:
    concept_code: '2108199'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Isoproterenol Metered Dose Inhaler
  concept_id: '42800910.0'
  code:
    concept_code: '1299671'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Mometasone Dry Powder Inhaler
  concept_id: '40143330.0'
  code:
    concept_code: '746792'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Mometasone Inhalant Powder
  concept_id: '36894460.0'
  code:
    concept_code: OMOP994725
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Mometasone Metered Dose Inhaler
  concept_id: '44817880.0'
  code:
    concept_code: '1536141'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nedocromil Metered Dose Inhaler
  concept_id: '40143340.0'
  code:
    concept_code: '748721'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Procaterol Dry Powder Inhaler
  concept_id: '42941600.0'
  code:
    concept_code: OMOP4668248
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Procaterol Inhalation Powder
  concept_id: '35146680.0'
  code:
    concept_code: OMOP4803760
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Procaterol Inhalation Solution
  concept_id: '35160200.0'
  code:
    concept_code: OMOP4817177
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Procaterol Metered Dose Inhaler
  concept_id: '44029690.0'
  code:
    concept_code: OMOP1024319
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Terbutaline Dry Powder Inhaler
  concept_id: '42481920.0'
  code:
    concept_code: OMOP418565
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Terbutaline Inhalation Powder
  concept_id: '36813480.0'
  code:
    concept_code: OMOP4827512
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Terbutaline Inhalation Solution
  concept_id: '36812410.0'
  code:
    concept_code: OMOP4826446
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Terbutaline Metered Dose Inhaler
  concept_id: '1356244'
  code:
    concept_code: '2108534'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Triamcinolone Metered Dose Inhaler
  concept_id: '40143710.0'
  code:
    concept_code: '746202'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: aclidinium / formoterol Dry Powder Inhaler
  concept_id: '21150790.0'
  code:
    concept_code: OMOP365897
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: aclidinium / formoterol Inhalant Powder
  concept_id: '44082130.0'
  code:
    concept_code: OMOP1076758
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: aclidinium / formoterol Inhalant Solution
  concept_id: '41206080.0'
  code:
    concept_code: OMOP2404045
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: bitolterol Inhalation Solution
  concept_id: '1356138'
  code:
    concept_code: '2108291'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bitolterol Metered Dose Inhaler
  concept_id: '1356136'
  code:
    concept_code: '2108287'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ciclesonide Metered Dose Inhaler
  concept_id: '40152660.0'
  code:
    concept_code: '799033'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: flunisolide Metered Dose Inhaler
  concept_id: '40156380.0'
  code:
    concept_code: '828926'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / formoterol Dry Powder Inhaler
  concept_id: '41048760.0'
  code:
    concept_code: OMOP2246722
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / formoterol Inhalant Powder
  concept_id: '40754970.0'
  code:
    concept_code: OMOP4702057
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / formoterol Inhalant Solution
  concept_id: '21089510.0'
  code:
    concept_code: OMOP357047
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / salmeterol Dry Powder Inhaler
  concept_id: '40144020.0'
  code:
    concept_code: '746717'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / salmeterol Inhalant Powder
  concept_id: '36882730.0'
  code:
    concept_code: OMOP994600
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / salmeterol Inhalant Solution
  concept_id: '42482740.0'
  code:
    concept_code: OMOP419713
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / salmeterol Metered Dose Inhaler
  concept_id: '40144020.0'
  code:
    concept_code: '744485'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol / vilanterol Dry Powder Inhaler
  concept_id: '37592050.0'
  code:
    concept_code: OMOP4781501
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol Dry Powder Inhaler
  concept_id: '43532280.0'
  code:
    concept_code: '1424887'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol Inhalant Powder
  concept_id: '43291090.0'
  code:
    concept_code: OMOP557209
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol Inhalant Solution
  concept_id: '41267400.0'
  code:
    concept_code: OMOP2465363
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone Dry Powder Inhaler
  concept_id: '40144040.0'
  code:
    concept_code: '746765'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone Inhalation Powder
  concept_id: '35147990.0'
  code:
    concept_code: OMOP4805056
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone Inhalation Solution
  concept_id: '35149210.0'
  code:
    concept_code: OMOP4806270
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone Metered Dose Inhaler
  concept_id: '40144040.0'
  code:
    concept_code: '746403'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: formoterol / Mometasone Metered Dose Inhaler
  concept_id: '40223710.0'
  code:
    concept_code: '998040'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: formoterol / glycopyrronium Metered Dose Inhaler
  concept_id: '42629520.0'
  code:
    concept_code: '1790637'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: formoterol Dry Powder Inhaler
  concept_id: '42480850.0'
  code:
    concept_code: OMOP419273
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: formoterol Inhalation Powder
  concept_id: '1356191'
  code:
    concept_code: '2108402'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: formoterol Inhalation Solution
  concept_id: '1356187'
  code:
    concept_code: '2108395'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: formoterol Metered Dose Inhaler
  concept_id: '44107470.0'
  code:
    concept_code: OMOP1102102
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium / indacaterol Dry Powder Inhaler
  concept_id: '43145870.0'
  code:
    concept_code: OMOP448437
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium / indacaterol Inhalant Powder
  concept_id: '43259950.0'
  code:
    concept_code: OMOP573715
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium / indacaterol Inhalation Powder
  concept_id: '1356196'
  code:
    concept_code: '2108413'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium / indacaterol Metered Dose Inhaler
  concept_id: '35145840.0'
  code:
    concept_code: OMOP4802923
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: indacaterol Dry Powder Inhaler
  concept_id: '42479570.0'
  code:
    concept_code: OMOP418726
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: indacaterol Inhalation Powder
  concept_id: '1356211'
  code:
    concept_code: '2108445'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indacaterol Metered Dose Inhaler
  concept_id: '44055850.0'
  code:
    concept_code: OMOP1050478
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: metaproterenol Gas for Inhalation
  concept_id: '44081470.0'
  code:
    concept_code: OMOP1076098
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: metaproterenol Inhalation Solution
  concept_id: '1356120'
  code:
    concept_code: '2108252'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metaproterenol Metered Dose Inhaler
  concept_id: '40182260.0'
  code:
    concept_code: '979330'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olodaterol Inhalant Powder
  concept_id: '40746100.0'
  code:
    concept_code: OMOP4711602
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: olodaterol Inhalant Solution
  concept_id: '21174570.0'
  code:
    concept_code: OMOP275394
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: olodaterol Metered Dose Inhaler
  concept_id: '45775120.0'
  code:
    concept_code: '1546062'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: pirbuterol Dry Powder Inhaler
  concept_id: '41205380.0'
  code:
    concept_code: OMOP2403340
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: pirbuterol Metered Dose Inhaler
  concept_id: '40152690.0'
  code:
    concept_code: '801916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: salmeterol Dry Powder Inhaler
  concept_id: '40167700.0'
  code:
    concept_code: '866043'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: salmeterol Inhalation Powder
  concept_id: '35158800.0'
  code:
    concept_code: OMOP4815788
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: salmeterol Inhalation Solution
  concept_id: '783089'
  code:
    concept_code: OMOP4830921
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: salmeterol Metered Dose Inhaler
  concept_id: '1356189'
  code:
    concept_code: '2108399'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: trimetoquinol hydrochloride hydrate Inhalation Solution
  concept_id: '35152710.0'
  code:
    concept_code: OMOP4809745
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol / Beclomethasone Dry Powder Inhaler
  concept_id: '42483140.0'
  code:
    concept_code: OMOP418868
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol / Beclomethasone Inhalation Powder
  concept_id: '36812530.0'
  code:
    concept_code: OMOP4826562
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol / Ipratropium Inhalant Powder
  concept_id: '40727740.0'
  code:
    concept_code: OMOP4729368
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol / Ipratropium Inhalation Solution
  concept_id: '1356123'
  code:
    concept_code: '2108259'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol / Ipratropium Metered Dose Inhaler
  concept_id: '40142670.0'
  code:
    concept_code: '745734'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol Dry Powder Inhaler
  concept_id: '46234460.0'
  code:
    concept_code: '1649559'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol Inhalation Powder
  concept_id: '1356111'
  code:
    concept_code: '2108233'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol Inhalation Solution
  concept_id: '1356108'
  code:
    concept_code: '2108226'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol Metered Dose Inhaler
  concept_id: '40142700.0'
  code:
    concept_code: '745678'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol / glycopyrronium Dry Powder Inhaler
  concept_id: '36421290.0'
  code:
    concept_code: OMOP4763575
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol / glycopyrronium Inhalant Powder
  concept_id: '40745350.0'
  code:
    concept_code: OMOP4711820
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol / glycopyrronium Inhalant Solution
  concept_id: '36787950.0'
  code:
    concept_code: OMOP4776216
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol Dry Powder Inhaler
  concept_id: '21158940.0'
  code:
    concept_code: OMOP286058
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol Inhalant Powder
  concept_id: '36894460.0'
  code:
    concept_code: OMOP1002030
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol Inhalant Solution
  concept_id: '21090040.0'
  code:
    concept_code: OMOP286036
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone Inhalant Powder
  concept_id: '36883710.0'
  code:
    concept_code: OMOP1004751
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone Inhalation Solution
  concept_id: '35130060.0'
  code:
    concept_code: OMOP4787320
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone Metered Dose Inhaler
  concept_id: '40142780.0'
  code:
    concept_code: '746190'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / formoterol Dry Powder Inhaler
  concept_id: '42479680.0'
  code:
    concept_code: OMOP419122
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / formoterol Inhalation Powder
  concept_id: '35133500.0'
  code:
    concept_code: OMOP4790710
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / formoterol Inhalation Solution
  concept_id: '783228'
  code:
    concept_code: OMOP4831059
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / formoterol Metered Dose Inhaler
  concept_id: '40142910.0'
  code:
    concept_code: '745797'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / salmeterol Inhalant Powder
  concept_id: '36787270.0'
  code:
    concept_code: OMOP4775534
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide Inhalation Powder
  concept_id: '1356143'
  code:
    concept_code: '2108302'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide Inhalation Solution
  concept_id: '35135830.0'
  code:
    concept_code: OMOP4793016
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide Inhalation Suspension
  concept_id: '1356140'
  code:
    concept_code: '2108295'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide Metered Dose Inhaler
  concept_id: '44120750.0'
  code:
    concept_code: OMOP1115385
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Butanilicaine / Epinephrine Metered Dose Inhaler
  concept_id: '41205830.0'
  code:
    concept_code: OMOP2403794
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Butanilicaine / Norepinephrine Metered Dose Inhaler
  concept_id: '40924270.0'
  code:
    concept_code: OMOP2122233
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Carbuterol Inhalant Solution
  concept_id: '40986620.0'
  code:
    concept_code: OMOP2184583
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Cromoglycate / Isoproterenol Dry Powder Inhaler
  concept_id: '40830670.0'
  code:
    concept_code: OMOP2028628
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Cromoglycate / reproterol Dry Powder Inhaler
  concept_id: '41205660.0'
  code:
    concept_code: OMOP2403625
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Cromoglycate / reproterol Inhalant Solution
  concept_id: '40861870.0'
  code:
    concept_code: OMOP2059828
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Cromoglycate Inhalant Powder
  concept_id: '43274340.0'
  code:
    concept_code: OMOP551853
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Cromoglycate Inhalant Solution
  concept_id: '43263320.0'
  code:
    concept_code: OMOP551855
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Cromolyn / reproterol Inhalant Solution
  concept_id: '43621600.0'
  code:
    concept_code: OMOP956780
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Cromolyn Inhalation Powder
  concept_id: '1356154'
  code:
    concept_code: '2108327'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Cromolyn Inhalation Solution
  concept_id: '1356147'
  code:
    concept_code: '2108316'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Cromolyn Metered Dose Inhaler
  concept_id: '40143110.0'
  code:
    concept_code: '746181'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Fenoterol / Ipratropium Dry Powder Inhaler
  concept_id: '43134420.0'
  code:
    concept_code: OMOP443574
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Fenoterol / Ipratropium Inhalant Powder
  concept_id: '40727830.0'
  code:
    concept_code: OMOP4729268
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Fenoterol / Ipratropium Inhalation Solution
  concept_id: '36811740.0'
  code:
    concept_code: OMOP4825769
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Fenoterol Dry Powder Inhaler
  concept_id: '40861770.0'
  code:
    concept_code: OMOP2059730
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Fenoterol Inhalant Powder
  concept_id: '40727840.0'
  code:
    concept_code: OMOP4729263
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Fenoterol Inhalation Solution
  concept_id: '35150380.0'
  code:
    concept_code: OMOP4807426
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Fenoterol Metered Dose Inhaler
  concept_id: '44081620.0'
  code:
    concept_code: OMOP1076250
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Ipratropium Inhalation Powder
  concept_id: '36811490.0'
  code:
    concept_code: OMOP4825521
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Ipratropium Inhalation Solution
  concept_id: '1356213'
  code:
    concept_code: '2108449'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Ipratropium Metered Dose Inhaler
  concept_id: '40143210.0'
  code:
    concept_code: '746447'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Isoetharine Inhalation Solution
  concept_id: '1356217'
  code:
    concept_code: '2108457'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Isoetharine Metered Dose Inhaler
  concept_id: '1356215'
  code:
    concept_code: '2108453'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Isoproterenol Inhalation Solution
  concept_id: '1356101'
  code:
    concept_code: '2108199'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Isoproterenol Metered Dose Inhaler
  concept_id: '42800910.0'
  code:
    concept_code: '1299671'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Mometasone Dry Powder Inhaler
  concept_id: '40143330.0'
  code:
    concept_code: '746792'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Mometasone Inhalant Powder
  concept_id: '36894460.0'
  code:
    concept_code: OMOP994725
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Mometasone Metered Dose Inhaler
  concept_id: '44817880.0'
  code:
    concept_code: '1536141'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nedocromil Metered Dose Inhaler
  concept_id: '40143340.0'
  code:
    concept_code: '748721'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Procaterol Dry Powder Inhaler
  concept_id: '42941600.0'
  code:
    concept_code: OMOP4668248
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Procaterol Inhalation Powder
  concept_id: '35146680.0'
  code:
    concept_code: OMOP4803760
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Procaterol Inhalation Solution
  concept_id: '35160200.0'
  code:
    concept_code: OMOP4817177
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Procaterol Metered Dose Inhaler
  concept_id: '44029690.0'
  code:
    concept_code: OMOP1024319
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Terbutaline Dry Powder Inhaler
  concept_id: '42481920.0'
  code:
    concept_code: OMOP418565
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Terbutaline Inhalation Powder
  concept_id: '36813480.0'
  code:
    concept_code: OMOP4827512
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Terbutaline Inhalation Solution
  concept_id: '36812410.0'
  code:
    concept_code: OMOP4826446
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Terbutaline Metered Dose Inhaler
  concept_id: '1356244'
  code:
    concept_code: '2108534'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: aclidinium / formoterol Dry Powder Inhaler
  concept_id: '21150790.0'
  code:
    concept_code: OMOP365897
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: aclidinium / formoterol Inhalant Powder
  concept_id: '44082130.0'
  code:
    concept_code: OMOP1076758
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: aclidinium / formoterol Inhalant Solution
  concept_id: '41206080.0'
  code:
    concept_code: OMOP2404045
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: aclidinium Dry Powder Inhaler
  concept_id: '42873410.0'
  code:
    concept_code: '1303101'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: aclidinium Inhalant Powder
  concept_id: '44069320.0'
  code:
    concept_code: OMOP1063955
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: aclidinium Inhalant Solution
  concept_id: '41236950.0'
  code:
    concept_code: OMOP2434915
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: bitolterol Inhalation Solution
  concept_id: '1356138'
  code:
    concept_code: '2108291'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: bitolterol Metered Dose Inhaler
  concept_id: '1356136'
  code:
    concept_code: '2108287'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ciclesonide Metered Dose Inhaler
  concept_id: '40152660.0'
  code:
    concept_code: '799033'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: flunisolide Metered Dose Inhaler
  concept_id: '40156380.0'
  code:
    concept_code: '828926'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / formoterol Dry Powder Inhaler
  concept_id: '41048760.0'
  code:
    concept_code: OMOP2246722
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / formoterol Inhalant Powder
  concept_id: '40754970.0'
  code:
    concept_code: OMOP4702057
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / formoterol Inhalant Solution
  concept_id: '21089510.0'
  code:
    concept_code: OMOP357047
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / salmeterol Dry Powder Inhaler
  concept_id: '40144020.0'
  code:
    concept_code: '746717'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / salmeterol Inhalant Powder
  concept_id: '36882730.0'
  code:
    concept_code: OMOP994600
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / salmeterol Inhalant Solution
  concept_id: '42482740.0'
  code:
    concept_code: OMOP419713
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / salmeterol Metered Dose Inhaler
  concept_id: '40144020.0'
  code:
    concept_code: '744485'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / umeclidinium / vilanterol Dry Powder Inhaler
  concept_id: '792484'
  code:
    concept_code: '1945037'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / umeclidinium / vilanterol Inhalant Powder
  concept_id: '40755790.0'
  code:
    concept_code: OMOP4701920
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol / vilanterol Dry Powder Inhaler
  concept_id: '37592050.0'
  code:
    concept_code: OMOP4781501
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol Dry Powder Inhaler
  concept_id: '43532280.0'
  code:
    concept_code: '1424887'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol Inhalant Powder
  concept_id: '43291090.0'
  code:
    concept_code: OMOP557209
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol Inhalant Solution
  concept_id: '41267400.0'
  code:
    concept_code: OMOP2465363
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone Dry Powder Inhaler
  concept_id: '40144040.0'
  code:
    concept_code: '746765'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone Inhalation Powder
  concept_id: '35147990.0'
  code:
    concept_code: OMOP4805056
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone Inhalation Solution
  concept_id: '35149210.0'
  code:
    concept_code: OMOP4806270
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone Metered Dose Inhaler
  concept_id: '40144040.0'
  code:
    concept_code: '746403'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: formoterol / Mometasone Metered Dose Inhaler
  concept_id: '40223710.0'
  code:
    concept_code: '998040'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: formoterol / glycopyrronium Metered Dose Inhaler
  concept_id: '42629520.0'
  code:
    concept_code: '1790637'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: formoterol Dry Powder Inhaler
  concept_id: '42480850.0'
  code:
    concept_code: OMOP419273
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: formoterol Inhalation Powder
  concept_id: '1356191'
  code:
    concept_code: '2108402'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: formoterol Inhalation Solution
  concept_id: '1356187'
  code:
    concept_code: '2108395'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: formoterol Metered Dose Inhaler
  concept_id: '44107470.0'
  code:
    concept_code: OMOP1102102
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium / indacaterol Dry Powder Inhaler
  concept_id: '43145870.0'
  code:
    concept_code: OMOP448437
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium / indacaterol Inhalant Powder
  concept_id: '43259950.0'
  code:
    concept_code: OMOP573715
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium / indacaterol Inhalation Powder
  concept_id: '1356196'
  code:
    concept_code: '2108413'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium / indacaterol Metered Dose Inhaler
  concept_id: '35145840.0'
  code:
    concept_code: OMOP4802923
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium Inhalant Powder
  concept_id: '43292580.0'
  code:
    concept_code: OMOP573663
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium Inhalation Powder
  concept_id: '1356199'
  code:
    concept_code: '2108419'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indacaterol Dry Powder Inhaler
  concept_id: '42479570.0'
  code:
    concept_code: OMOP418726
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: indacaterol Inhalation Powder
  concept_id: '1356211'
  code:
    concept_code: '2108445'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indacaterol Metered Dose Inhaler
  concept_id: '44055850.0'
  code:
    concept_code: OMOP1050478
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: metaproterenol Gas for Inhalation
  concept_id: '44081470.0'
  code:
    concept_code: OMOP1076098
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: metaproterenol Inhalation Solution
  concept_id: '1356120'
  code:
    concept_code: '2108252'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: metaproterenol Metered Dose Inhaler
  concept_id: '40182260.0'
  code:
    concept_code: '979330'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olodaterol / tiotropium Inhalant Powder
  concept_id: '40746090.0'
  code:
    concept_code: OMOP4711610
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: olodaterol / tiotropium Inhalant Solution
  concept_id: '21026290.0'
  code:
    concept_code: OMOP256714
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: olodaterol / tiotropium Metered Dose Inhaler
  concept_id: '46275340.0'
  code:
    concept_code: '1658459'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: olodaterol Inhalant Powder
  concept_id: '40746100.0'
  code:
    concept_code: OMOP4711602
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: olodaterol Inhalant Solution
  concept_id: '21174570.0'
  code:
    concept_code: OMOP275394
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: olodaterol Metered Dose Inhaler
  concept_id: '45775120.0'
  code:
    concept_code: '1546062'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: oxitropium Dry Powder Inhaler
  concept_id: '40861610.0'
  code:
    concept_code: OMOP2059572
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: oxitropium Inhalation Powder
  concept_id: '36810760.0'
  code:
    concept_code: OMOP4824799
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: oxitropium Inhalation Solution
  concept_id: '35147090.0'
  code:
    concept_code: OMOP4804165
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: pirbuterol Dry Powder Inhaler
  concept_id: '41205380.0'
  code:
    concept_code: OMOP2403340
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: pirbuterol Metered Dose Inhaler
  concept_id: '40152690.0'
  code:
    concept_code: '801916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: salmeterol Dry Powder Inhaler
  concept_id: '40167700.0'
  code:
    concept_code: '866043'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: salmeterol Inhalation Powder
  concept_id: '35158800.0'
  code:
    concept_code: OMOP4815788
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: salmeterol Inhalation Solution
  concept_id: '783089'
  code:
    concept_code: OMOP4830921
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: salmeterol Metered Dose Inhaler
  concept_id: '1356189'
  code:
    concept_code: '2108399'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: tiotropium Dry Powder Inhaler
  concept_id: '42482080.0'
  code:
    concept_code: OMOP419850
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: tiotropium Inhalant Solution
  concept_id: '42482610.0'
  code:
    concept_code: OMOP419849
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: tiotropium Inhalation Powder
  concept_id: '1356250'
  code:
    concept_code: '2108544'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: tiotropium Metered Dose Inhaler
  concept_id: '45774770.0'
  code:
    concept_code: '1552001'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: umeclidinium / umeclidinium / vilanterol / vilanterol Dry Powder Inhaler
  concept_id: '36421520.0'
  code:
    concept_code: OMOP4763797
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: umeclidinium / umeclidinium / vilanterol / vilanterol Dry Powder Inhaler
  concept_id: '37592340.0'
  code:
    concept_code: OMOP4781790
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: umeclidinium / vilanterol Dry Powder Inhaler
  concept_id: '44785910.0'
  code:
    concept_code: '1487517'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: umeclidinium / vilanterol Inhalant Powder
  concept_id: '43263900.0'
  code:
    concept_code: OMOP557201
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: umeclidinium / vilanterol Inhalant Solution
  concept_id: '41267170.0'
  code:
    concept_code: OMOP2465128
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: umeclidinium Dry Powder Inhaler
  concept_id: '45774870.0'
  code:
    concept_code: '1539250'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: umeclidinium Inhalant Powder
  concept_id: '43285710.0'
  code:
    concept_code: OMOP557191
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: umeclidinium Inhalant Solution
  concept_id: '41142750.0'
  code:
    concept_code: OMOP2340712
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: ibudilast
  concept_id: '43009090.0'
  code:
    concept_code: OMOP4700517
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: montelukast
  concept_id: '1154161'
  code:
    concept_code: '88249'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: pranlukast hydrate
  concept_id: '43009070.0'
  code:
    concept_code: OMOP4700491
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: zafirlukast
  concept_id: '1111706'
  code:
    concept_code: '114970'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: umeclidinium Dry Powder Inhaler
  concept_id: '45774870.0'
  code:
    concept_code: '1539250'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: aclidinium Dry Powder Inhaler
  concept_id: '42873410.0'
  code:
    concept_code: '1303101'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: tiotropium Inhalation Powder
  concept_id: '1356250'
  code:
    concept_code: '2108544'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: aclidinium Inhalant Powder
  concept_id: '44069320.0'
  code:
    concept_code: OMOP1063955
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: aclidinium Inhalant Solution
  concept_id: '41236950.0'
  code:
    concept_code: OMOP2434915
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: tiotropium Dry Powder Inhaler
  concept_id: '42482080.0'
  code:
    concept_code: OMOP419850
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: tiotropium Inhalant Solution
  concept_id: '42482610.0'
  code:
    concept_code: OMOP419849
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: tiotropium Metered Dose Inhaler
  concept_id: '45774770.0'
  code:
    concept_code: '1552001'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium Dry Powder Inhaler
  concept_id: '43179060.0'
  code:
    concept_code: OMOP448423
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium Inhalant Powder
  concept_id: '43292580.0'
  code:
    concept_code: OMOP573663
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium Inhalation Powder
  concept_id: '1356199'
  code:
    concept_code: '2108419'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium Inhalation Solution
  concept_id: '1356202'
  code:
    concept_code: '2108425'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium Metered Dose Inhaler
  concept_id: '35149220.0'
  code:
    concept_code: OMOP4806281
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: umeclidinium Inhalant Powder
  concept_id: '43285710.0'
  code:
    concept_code: OMOP557191
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: umeclidinium Inhalant Solution
  concept_id: '41142750.0'
  code:
    concept_code: OMOP2340712
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Ipratropium Dry Powder Inhaler
  concept_id: '42483250.0'
  code:
    concept_code: OMOP419928
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Ipratropium Gas for Inhalation
  concept_id: '44081550.0'
  code:
    concept_code: OMOP1076180
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Ipratropium Inhalation Powder
  concept_id: '36811490.0'
  code:
    concept_code: OMOP4825521
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Ipratropium Inhalation Solution
  concept_id: '1356213'
  code:
    concept_code: '2108449'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Ipratropium Metered Dose Inhaler
  concept_id: '40143210.0'
  code:
    concept_code: '746447'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Ipratropium Metered Dose Nasal Spray
  concept_id: '36250070.0'
  code:
    concept_code: '1797832'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: oxitropium Dry Powder Inhaler
  concept_id: '40861610.0'
  code:
    concept_code: OMOP2059572
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: oxitropium Inhalation Powder
  concept_id: '36810760.0'
  code:
    concept_code: OMOP4824799
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: oxitropium Inhalation Solution
  concept_id: '35147090.0'
  code:
    concept_code: OMOP4804165
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol Dry Powder Inhaler
  concept_id: '46234460.0'
  code:
    concept_code: '1649559'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol Inhalation Powder
  concept_id: '1356111'
  code:
    concept_code: '2108233'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol Inhalation Solution
  concept_id: '1356108'
  code:
    concept_code: '2108226'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol Metered Dose Inhaler
  concept_id: '40142700.0'
  code:
    concept_code: '745678'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Levalbuterol Inhalation Solution
  concept_id: '1356103'
  code:
    concept_code: '2108209'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Levalbuterol Metered Dose Inhaler
  concept_id: '40143280.0'
  code:
    concept_code: '745790'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Terbutaline Inhalation Powder
  concept_id: '36813480.0'
  code:
    concept_code: OMOP4827512
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Terbutaline Inhalation Solution
  concept_id: '36812410.0'
  code:
    concept_code: OMOP4826446
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: pirbuterol Dry Powder Inhaler
  concept_id: '41205380.0'
  code:
    concept_code: OMOP2403340
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: pirbuterol Metered Dose Inhaler
  concept_id: '40152690.0'
  code:
    concept_code: '801916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: formoterol Inhalation Powder
  concept_id: '1356191'
  code:
    concept_code: '2108402'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: formoterol Inhalation Solution
  concept_id: '1356187'
  code:
    concept_code: '2108395'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: salmeterol Dry Powder Inhaler
  concept_id: '40167700.0'
  code:
    concept_code: '866043'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: salmeterol Inhalation Powder
  concept_id: '35158800.0'
  code:
    concept_code: OMOP4815788
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: salmeterol Inhalation Solution
  concept_id: '783089'
  code:
    concept_code: OMOP4830921
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: salmeterol Metered Dose Inhaler
  concept_id: '1356189'
  code:
    concept_code: '2108399'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indacaterol Dry Powder Inhaler
  concept_id: '42479570.0'
  code:
    concept_code: OMOP418726
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: indacaterol Inhalation Powder
  concept_id: '1356211'
  code:
    concept_code: '2108445'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indacaterol Metered Dose Inhaler
  concept_id: '44055850.0'
  code:
    concept_code: OMOP1050478
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: olodaterol Inhalant Powder
  concept_id: '40746100.0'
  code:
    concept_code: OMOP4711602
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: olodaterol Inhalant Solution
  concept_id: '21174570.0'
  code:
    concept_code: OMOP275394
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: olodaterol Metered Dose Inhaler
  concept_id: '45775120.0'
  code:
    concept_code: '1546062'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: vilanterol Dry Powder Inhaler
  concept_id: '43180320.0'
  code:
    concept_code: OMOP459635
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: vilanterol Inhalation Powder
  concept_id: '43024340.0'
  code:
    concept_code: OMOP4849893
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone Dry Powder Inhaler
  concept_id: '42480190.0'
  code:
    concept_code: OMOP418867
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone Inhalant Powder
  concept_id: '36883710.0'
  code:
    concept_code: OMOP1004751
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone Inhalation Solution
  concept_id: '35130060.0'
  code:
    concept_code: OMOP4787320
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone Metered Dose Inhaler
  concept_id: '40142780.0'
  code:
    concept_code: '746190'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide Dry Powder Inhaler
  concept_id: '40142920.0'
  code:
    concept_code: '746824'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide Inhalation Powder
  concept_id: '1356143'
  code:
    concept_code: '2108302'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide Inhalation Solution
  concept_id: '35135830.0'
  code:
    concept_code: OMOP4793016
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide Inhalation Suspension
  concept_id: '1356140'
  code:
    concept_code: '2108295'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide Metered Dose Inhaler
  concept_id: '44120750.0'
  code:
    concept_code: OMOP1115385
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Mometasone Dry Powder Inhaler
  concept_id: '40143330.0'
  code:
    concept_code: '746792'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Mometasone Inhalant Powder
  concept_id: '36894460.0'
  code:
    concept_code: OMOP994725
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Mometasone Inhalant Solution
  concept_id: '40892820.0'
  code:
    concept_code: OMOP2090778
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Mometasone Metered Dose Inhaler
  concept_id: '44817880.0'
  code:
    concept_code: '1536141'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone Dry Powder Inhaler
  concept_id: '40144040.0'
  code:
    concept_code: '746765'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone Inhalation Powder
  concept_id: '35147990.0'
  code:
    concept_code: OMOP4805056
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone Inhalation Solution
  concept_id: '35149210.0'
  code:
    concept_code: OMOP4806270
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone Injectable Solution
  concept_id: '41080160.0'
  code:
    concept_code: OMOP2278122
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone Metered Dose Inhaler
  concept_id: '40144040.0'
  code:
    concept_code: '746403'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol / Beclomethasone Dry Powder Inhaler
  concept_id: '42483140.0'
  code:
    concept_code: OMOP418868
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol / Beclomethasone Inhalation Powder
  concept_id: '36812530.0'
  code:
    concept_code: OMOP4826562
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol / glycopyrronium Dry Powder Inhaler
  concept_id: '36421290.0'
  code:
    concept_code: OMOP4763575
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol / glycopyrronium Inhalant Powder
  concept_id: '40745350.0'
  code:
    concept_code: OMOP4711820
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol / glycopyrronium Inhalant Solution
  concept_id: '36787950.0'
  code:
    concept_code: OMOP4776216
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol Dry Powder Inhaler
  concept_id: '21158940.0'
  code:
    concept_code: OMOP286058
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol Inhalant Powder
  concept_id: '36894460.0'
  code:
    concept_code: OMOP1002030
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol Inhalant Solution
  concept_id: '21090040.0'
  code:
    concept_code: OMOP286036
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / formoterol Dry Powder Inhaler
  concept_id: '42479680.0'
  code:
    concept_code: OMOP419122
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / formoterol Inhalation Powder
  concept_id: '35133500.0'
  code:
    concept_code: OMOP4790710
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / formoterol Inhalation Solution
  concept_id: '783228'
  code:
    concept_code: OMOP4831059
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / formoterol Metered Dose Inhaler
  concept_id: '40142910.0'
  code:
    concept_code: '745797'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / salmeterol Inhalant Powder
  concept_id: '36787270.0'
  code:
    concept_code: OMOP4775534
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: azelastine / fluticasone Metered Dose Nasal Spray
  concept_id: '36250080.0'
  code:
    concept_code: '1797846'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / formoterol Dry Powder Inhaler
  concept_id: '41048760.0'
  code:
    concept_code: OMOP2246722
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / formoterol Inhalant Powder
  concept_id: '40754970.0'
  code:
    concept_code: OMOP4702057
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / formoterol Inhalant Solution
  concept_id: '21089510.0'
  code:
    concept_code: OMOP357047
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / salmeterol Dry Powder Inhaler
  concept_id: '40144020.0'
  code:
    concept_code: '746717'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / salmeterol Inhalant Powder
  concept_id: '36882730.0'
  code:
    concept_code: OMOP994600
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / salmeterol Inhalant Solution
  concept_id: '42482740.0'
  code:
    concept_code: OMOP419713
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / salmeterol Metered Dose Inhaler
  concept_id: '40144020.0'
  code:
    concept_code: '744485'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / umeclidinium / vilanterol Dry Powder Inhaler
  concept_id: '792484'
  code:
    concept_code: '1945037'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / umeclidinium / vilanterol Inhalant Powder
  concept_id: '40755790.0'
  code:
    concept_code: OMOP4701920
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol / vilanterol Dry Powder Inhaler
  concept_id: '37592050.0'
  code:
    concept_code: OMOP4781501
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol Dry Powder Inhaler
  concept_id: '43532280.0'
  code:
    concept_code: '1424887'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol Inhalant Powder
  concept_id: '43291090.0'
  code:
    concept_code: OMOP557209
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol Inhalant Solution
  concept_id: '41267400.0'
  code:
    concept_code: OMOP2465363
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: formoterol / Mometasone Metered Dose Inhaler
  concept_id: '40223710.0'
  code:
    concept_code: '998040'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Ipratropium Dry Powder Inhaler
  concept_id: '42483250.0'
  code:
    concept_code: OMOP419928
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Ipratropium Gas for Inhalation
  concept_id: '44081550.0'
  code:
    concept_code: OMOP1076180
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Ipratropium Inhalation Powder
  concept_id: '36811490.0'
  code:
    concept_code: OMOP4825521
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Ipratropium Inhalation Solution
  concept_id: '1356213'
  code:
    concept_code: '2108449'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Ipratropium Metered Dose Inhaler
  concept_id: '40143210.0'
  code:
    concept_code: '746447'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Ipratropium Metered Dose Nasal Spray
  concept_id: '36250070.0'
  code:
    concept_code: '1797832'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: oxitropium Dry Powder Inhaler
  concept_id: '40861610.0'
  code:
    concept_code: OMOP2059572
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: oxitropium Inhalation Powder
  concept_id: '36810760.0'
  code:
    concept_code: OMOP4824799
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: oxitropium Inhalation Solution
  concept_id: '35147090.0'
  code:
    concept_code: OMOP4804165
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Ipratropium Dry Powder Inhaler
  concept_id: '42483250.0'
  code:
    concept_code: OMOP419928
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Ipratropium Gas for Inhalation
  concept_id: '44081550.0'
  code:
    concept_code: OMOP1076180
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Ipratropium Inhalation Powder
  concept_id: '36811490.0'
  code:
    concept_code: OMOP4825521
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Ipratropium Inhalation Solution
  concept_id: '1356213'
  code:
    concept_code: '2108449'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Ipratropium Metered Dose Inhaler
  concept_id: '40143210.0'
  code:
    concept_code: '746447'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Ipratropium Metered Dose Nasal Spray
  concept_id: '36250070.0'
  code:
    concept_code: '1797832'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: oxitropium Dry Powder Inhaler
  concept_id: '40861610.0'
  code:
    concept_code: OMOP2059572
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: oxitropium Inhalation Powder
  concept_id: '36810760.0'
  code:
    concept_code: OMOP4824799
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: oxitropium Inhalation Solution
  concept_id: '35147090.0'
  code:
    concept_code: OMOP4804165
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol Dry Powder Inhaler
  concept_id: '46234460.0'
  code:
    concept_code: '1649559'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol Inhalation Powder
  concept_id: '1356111'
  code:
    concept_code: '2108233'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol Inhalation Solution
  concept_id: '1356108'
  code:
    concept_code: '2108226'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol Metered Dose Inhaler
  concept_id: '40142700.0'
  code:
    concept_code: '745678'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Levalbuterol Inhalation Solution
  concept_id: '1356103'
  code:
    concept_code: '2108209'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Levalbuterol Metered Dose Inhaler
  concept_id: '40143280.0'
  code:
    concept_code: '745790'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: pirbuterol Dry Powder Inhaler
  concept_id: '41205380.0'
  code:
    concept_code: OMOP2403340
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: pirbuterol Metered Dose Inhaler
  concept_id: '40152690.0'
  code:
    concept_code: '801916'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Terbutaline Inhalation Powder
  concept_id: '36813480.0'
  code:
    concept_code: OMOP4827512
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Terbutaline Inhalation Solution
  concept_id: '36812410.0'
  code:
    concept_code: OMOP4826446
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: umeclidinium Dry Powder Inhaler
  concept_id: '45774870.0'
  code:
    concept_code: '1539250'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: aclidinium Dry Powder Inhaler
  concept_id: '42873410.0'
  code:
    concept_code: '1303101'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: tiotropium Inhalation Powder
  concept_id: '1356250'
  code:
    concept_code: '2108544'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: aclidinium Inhalant Powder
  concept_id: '44069320.0'
  code:
    concept_code: OMOP1063955
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: aclidinium Inhalant Solution
  concept_id: '41236950.0'
  code:
    concept_code: OMOP2434915
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: tiotropium Dry Powder Inhaler
  concept_id: '42482080.0'
  code:
    concept_code: OMOP419850
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: tiotropium Inhalant Solution
  concept_id: '42482610.0'
  code:
    concept_code: OMOP419849
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: tiotropium Metered Dose Inhaler
  concept_id: '45774770.0'
  code:
    concept_code: '1552001'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium Dry Powder Inhaler
  concept_id: '43179060.0'
  code:
    concept_code: OMOP448423
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium Inhalant Powder
  concept_id: '43292580.0'
  code:
    concept_code: OMOP573663
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium Inhalation Powder
  concept_id: '1356199'
  code:
    concept_code: '2108419'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium Inhalation Solution
  concept_id: '1356202'
  code:
    concept_code: '2108425'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium Metered Dose Inhaler
  concept_id: '35149220.0'
  code:
    concept_code: OMOP4806281
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: umeclidinium Inhalant Powder
  concept_id: '43285710.0'
  code:
    concept_code: OMOP557191
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: umeclidinium Inhalant Solution
  concept_id: '41142750.0'
  code:
    concept_code: OMOP2340712
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: formoterol Inhalation Powder
  concept_id: '1356191'
  code:
    concept_code: '2108402'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: formoterol Inhalation Solution
  concept_id: '1356187'
  code:
    concept_code: '2108395'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: salmeterol Dry Powder Inhaler
  concept_id: '40167700.0'
  code:
    concept_code: '866043'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: salmeterol Inhalation Powder
  concept_id: '35158800.0'
  code:
    concept_code: OMOP4815788
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: salmeterol Inhalation Solution
  concept_id: '783089'
  code:
    concept_code: OMOP4830921
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: salmeterol Metered Dose Inhaler
  concept_id: '1356189'
  code:
    concept_code: '2108399'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indacaterol Dry Powder Inhaler
  concept_id: '42479570.0'
  code:
    concept_code: OMOP418726
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: indacaterol Inhalation Powder
  concept_id: '1356211'
  code:
    concept_code: '2108445'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indacaterol Metered Dose Inhaler
  concept_id: '44055850.0'
  code:
    concept_code: OMOP1050478
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: olodaterol Inhalant Powder
  concept_id: '40746100.0'
  code:
    concept_code: OMOP4711602
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: olodaterol Inhalant Solution
  concept_id: '21174570.0'
  code:
    concept_code: OMOP275394
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: olodaterol Metered Dose Inhaler
  concept_id: '45775120.0'
  code:
    concept_code: '1546062'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: vilanterol Dry Powder Inhaler
  concept_id: '43180320.0'
  code:
    concept_code: OMOP459635
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: vilanterol Inhalation Powder
  concept_id: '43024340.0'
  code:
    concept_code: OMOP4849893
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone Dry Powder Inhaler
  concept_id: '42480190.0'
  code:
    concept_code: OMOP418867
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone Inhalant Powder
  concept_id: '36883710.0'
  code:
    concept_code: OMOP1004751
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone Inhalation Solution
  concept_id: '35130060.0'
  code:
    concept_code: OMOP4787320
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone Metered Dose Inhaler
  concept_id: '40142780.0'
  code:
    concept_code: '746190'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide Dry Powder Inhaler
  concept_id: '40142920.0'
  code:
    concept_code: '746824'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide Inhalation Powder
  concept_id: '1356143'
  code:
    concept_code: '2108302'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide Inhalation Solution
  concept_id: '35135830.0'
  code:
    concept_code: OMOP4793016
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide Inhalation Suspension
  concept_id: '1356140'
  code:
    concept_code: '2108295'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide Metered Dose Inhaler
  concept_id: '44120750.0'
  code:
    concept_code: OMOP1115385
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Mometasone Dry Powder Inhaler
  concept_id: '40143330.0'
  code:
    concept_code: '746792'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Mometasone Inhalant Powder
  concept_id: '36894460.0'
  code:
    concept_code: OMOP994725
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Mometasone Inhalant Solution
  concept_id: '40892820.0'
  code:
    concept_code: OMOP2090778
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Mometasone Metered Dose Inhaler
  concept_id: '44817880.0'
  code:
    concept_code: '1536141'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone Dry Powder Inhaler
  concept_id: '40144040.0'
  code:
    concept_code: '746765'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone Inhalation Powder
  concept_id: '35147990.0'
  code:
    concept_code: OMOP4805056
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone Inhalation Solution
  concept_id: '35149210.0'
  code:
    concept_code: OMOP4806270
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone Injectable Solution
  concept_id: '41080160.0'
  code:
    concept_code: OMOP2278122
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone Metered Dose Inhaler
  concept_id: '40144040.0'
  code:
    concept_code: '746403'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol / Beclomethasone Dry Powder Inhaler
  concept_id: '42483140.0'
  code:
    concept_code: OMOP418868
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol / Beclomethasone Inhalation Powder
  concept_id: '36812530.0'
  code:
    concept_code: OMOP4826562
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol / glycopyrronium Dry Powder Inhaler
  concept_id: '36421290.0'
  code:
    concept_code: OMOP4763575
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol / glycopyrronium Inhalant Powder
  concept_id: '40745350.0'
  code:
    concept_code: OMOP4711820
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol / glycopyrronium Inhalant Solution
  concept_id: '36787950.0'
  code:
    concept_code: OMOP4776216
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol Dry Powder Inhaler
  concept_id: '21158940.0'
  code:
    concept_code: OMOP286058
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol Inhalant Powder
  concept_id: '36894460.0'
  code:
    concept_code: OMOP1002030
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol Inhalant Solution
  concept_id: '21090040.0'
  code:
    concept_code: OMOP286036
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / formoterol Dry Powder Inhaler
  concept_id: '42479680.0'
  code:
    concept_code: OMOP419122
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / formoterol Inhalation Powder
  concept_id: '35133500.0'
  code:
    concept_code: OMOP4790710
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / formoterol Inhalation Solution
  concept_id: '783228'
  code:
    concept_code: OMOP4831059
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / formoterol Metered Dose Inhaler
  concept_id: '40142910.0'
  code:
    concept_code: '745797'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / salmeterol Inhalant Powder
  concept_id: '36787270.0'
  code:
    concept_code: OMOP4775534
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: azelastine / fluticasone Metered Dose Nasal Spray
  concept_id: '36250080.0'
  code:
    concept_code: '1797846'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: false
- concept_name: fluticasone / formoterol Dry Powder Inhaler
  concept_id: '41048760.0'
  code:
    concept_code: OMOP2246722
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / formoterol Inhalant Powder
  concept_id: '40754970.0'
  code:
    concept_code: OMOP4702057
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / formoterol Inhalant Solution
  concept_id: '21089510.0'
  code:
    concept_code: OMOP357047
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / salmeterol Dry Powder Inhaler
  concept_id: '40144020.0'
  code:
    concept_code: '746717'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / salmeterol Inhalant Powder
  concept_id: '36882730.0'
  code:
    concept_code: OMOP994600
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / salmeterol Inhalant Solution
  concept_id: '42482740.0'
  code:
    concept_code: OMOP419713
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / salmeterol Metered Dose Inhaler
  concept_id: '40144020.0'
  code:
    concept_code: '744485'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / umeclidinium / vilanterol Dry Powder Inhaler
  concept_id: '792484'
  code:
    concept_code: '1945037'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / umeclidinium / vilanterol Inhalant Powder
  concept_id: '40755790.0'
  code:
    concept_code: OMOP4701920
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol / vilanterol Dry Powder Inhaler
  concept_id: '37592050.0'
  code:
    concept_code: OMOP4781501
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol Dry Powder Inhaler
  concept_id: '43532280.0'
  code:
    concept_code: '1424887'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol Inhalant Powder
  concept_id: '43291090.0'
  code:
    concept_code: OMOP557209
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol Inhalant Solution
  concept_id: '41267400.0'
  code:
    concept_code: OMOP2465363
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: formoterol / Mometasone Metered Dose Inhaler
  concept_id: '40223710.0'
  code:
    concept_code: '998040'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: aclidinium Dry Powder Inhaler
  concept_id: '42873410.0'
  code:
    concept_code: '1303101'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: aclidinium Inhalant Powder
  concept_id: '44069320.0'
  code:
    concept_code: OMOP1063955
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: aclidinium Inhalant Solution
  concept_id: '41236950.0'
  code:
    concept_code: OMOP2434915
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium Dry Powder Inhaler
  concept_id: '43179060.0'
  code:
    concept_code: OMOP448423
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium Inhalant Powder
  concept_id: '43292580.0'
  code:
    concept_code: OMOP573663
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium Inhalation Powder
  concept_id: '1356199'
  code:
    concept_code: '2108419'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium Inhalation Solution
  concept_id: '1356202'
  code:
    concept_code: '2108425'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: glycopyrronium Metered Dose Inhaler
  concept_id: '35149220.0'
  code:
    concept_code: OMOP4806281
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: tiotropium Dry Powder Inhaler
  concept_id: '42482080.0'
  code:
    concept_code: OMOP419850
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: tiotropium Inhalant Solution
  concept_id: '42482610.0'
  code:
    concept_code: OMOP419849
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: tiotropium Inhalation Powder
  concept_id: '1356250'
  code:
    concept_code: '2108544'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: tiotropium Metered Dose Inhaler
  concept_id: '45774770.0'
  code:
    concept_code: '1552001'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: umeclidinium Dry Powder Inhaler
  concept_id: '45774870.0'
  code:
    concept_code: '1539250'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: umeclidinium Inhalant Powder
  concept_id: '43285710.0'
  code:
    concept_code: OMOP557191
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: umeclidinium Inhalant Solution
  concept_id: '41142750.0'
  code:
    concept_code: OMOP2340712
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: formoterol Inhalation Powder
  concept_id: '1356191'
  code:
    concept_code: '2108402'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: formoterol Inhalation Solution
  concept_id: '1356187'
  code:
    concept_code: '2108395'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indacaterol Dry Powder Inhaler
  concept_id: '42479570.0'
  code:
    concept_code: OMOP418726
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: indacaterol Inhalation Powder
  concept_id: '1356211'
  code:
    concept_code: '2108445'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: indacaterol Metered Dose Inhaler
  concept_id: '44055850.0'
  code:
    concept_code: OMOP1050478
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: olodaterol Inhalant Powder
  concept_id: '40746100.0'
  code:
    concept_code: OMOP4711602
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: olodaterol Inhalant Solution
  concept_id: '21174570.0'
  code:
    concept_code: OMOP275394
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: olodaterol Metered Dose Inhaler
  concept_id: '45775120.0'
  code:
    concept_code: '1546062'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: salmeterol Dry Powder Inhaler
  concept_id: '40167700.0'
  code:
    concept_code: '866043'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: salmeterol Inhalation Powder
  concept_id: '35158800.0'
  code:
    concept_code: OMOP4815788
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: salmeterol Inhalation Solution
  concept_id: '783089'
  code:
    concept_code: OMOP4830921
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: salmeterol Metered Dose Inhaler
  concept_id: '1356189'
  code:
    concept_code: '2108399'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: vilanterol Dry Powder Inhaler
  concept_id: '43180320.0'
  code:
    concept_code: OMOP459635
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: vilanterol Inhalation Powder
  concept_id: '43024340.0'
  code:
    concept_code: OMOP4849893
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone Dry Powder Inhaler
  concept_id: '42480190.0'
  code:
    concept_code: OMOP418867
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone Inhalant Powder
  concept_id: '36883710.0'
  code:
    concept_code: OMOP1004751
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone Inhalation Solution
  concept_id: '35130060.0'
  code:
    concept_code: OMOP4787320
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone Metered Dose Inhaler
  concept_id: '40142780.0'
  code:
    concept_code: '746190'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide Dry Powder Inhaler
  concept_id: '40142920.0'
  code:
    concept_code: '746824'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide Inhalation Powder
  concept_id: '1356143'
  code:
    concept_code: '2108302'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide Inhalation Solution
  concept_id: '35135830.0'
  code:
    concept_code: OMOP4793016
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide Inhalation Suspension
  concept_id: '1356140'
  code:
    concept_code: '2108295'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide Metered Dose Inhaler
  concept_id: '44120750.0'
  code:
    concept_code: OMOP1115385
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Mometasone Dry Powder Inhaler
  concept_id: '40143330.0'
  code:
    concept_code: '746792'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Mometasone Inhalant Powder
  concept_id: '36894460.0'
  code:
    concept_code: OMOP994725
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Mometasone Inhalant Solution
  concept_id: '40892820.0'
  code:
    concept_code: OMOP2090778
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Mometasone Metered Dose Inhaler
  concept_id: '44817880.0'
  code:
    concept_code: '1536141'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone Dry Powder Inhaler
  concept_id: '40144040.0'
  code:
    concept_code: '746765'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone Inhalation Powder
  concept_id: '35147990.0'
  code:
    concept_code: OMOP4805056
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone Inhalation Solution
  concept_id: '35149210.0'
  code:
    concept_code: OMOP4806270
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone Injectable Solution
  concept_id: '41080160.0'
  code:
    concept_code: OMOP2278122
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone Metered Dose Inhaler
  concept_id: '40144040.0'
  code:
    concept_code: '746403'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: umeclidinium Dry Powder Inhaler
  concept_id: '45774870.0'
  code:
    concept_code: '1539250'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: false
- concept_name: aclidinium Dry Powder Inhaler
  concept_id: '42873410.0'
  code:
    concept_code: '1303101'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: false
- concept_name: tiotropium Inhalation Powder
  concept_id: '1356250'
  code:
    concept_code: '2108544'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: false
- concept_name: aclidinium Inhalant Powder
  concept_id: '44069320.0'
  code:
    concept_code: OMOP1063955
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: aclidinium Inhalant Solution
  concept_id: '41236950.0'
  code:
    concept_code: OMOP2434915
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: tiotropium Dry Powder Inhaler
  concept_id: '42482080.0'
  code:
    concept_code: OMOP419850
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: tiotropium Inhalant Solution
  concept_id: '42482610.0'
  code:
    concept_code: OMOP419849
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: tiotropium Metered Dose Inhaler
  concept_id: '45774770.0'
  code:
    concept_code: '1552001'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: false
- concept_name: glycopyrronium Dry Powder Inhaler
  concept_id: '43179060.0'
  code:
    concept_code: OMOP448423
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: glycopyrronium Inhalant Powder
  concept_id: '43292580.0'
  code:
    concept_code: OMOP573663
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: glycopyrronium Inhalation Powder
  concept_id: '1356199'
  code:
    concept_code: '2108419'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: false
- concept_name: glycopyrronium Inhalation Solution
  concept_id: '1356202'
  code:
    concept_code: '2108425'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: false
- concept_name: glycopyrronium Metered Dose Inhaler
  concept_id: '35149220.0'
  code:
    concept_code: OMOP4806281
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: umeclidinium Inhalant Powder
  concept_id: '43285710.0'
  code:
    concept_code: OMOP557191
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: umeclidinium Inhalant Solution
  concept_id: '41142750.0'
  code:
    concept_code: OMOP2340712
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: formoterol Inhalation Powder
  concept_id: '1356191'
  code:
    concept_code: '2108402'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: false
- concept_name: formoterol Inhalation Solution
  concept_id: '1356187'
  code:
    concept_code: '2108395'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: false
- concept_name: salmeterol Dry Powder Inhaler
  concept_id: '40167700.0'
  code:
    concept_code: '866043'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: false
- concept_name: salmeterol Inhalation Powder
  concept_id: '35158800.0'
  code:
    concept_code: OMOP4815788
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: salmeterol Inhalation Solution
  concept_id: '783089'
  code:
    concept_code: OMOP4830921
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: salmeterol Metered Dose Inhaler
  concept_id: '1356189'
  code:
    concept_code: '2108399'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: false
- concept_name: indacaterol Dry Powder Inhaler
  concept_id: '42479570.0'
  code:
    concept_code: OMOP418726
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: indacaterol Inhalation Powder
  concept_id: '1356211'
  code:
    concept_code: '2108445'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: false
- concept_name: indacaterol Metered Dose Inhaler
  concept_id: '44055850.0'
  code:
    concept_code: OMOP1050478
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: olodaterol Inhalant Powder
  concept_id: '40746100.0'
  code:
    concept_code: OMOP4711602
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: olodaterol Inhalant Solution
  concept_id: '21174570.0'
  code:
    concept_code: OMOP275394
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: olodaterol Metered Dose Inhaler
  concept_id: '45775120.0'
  code:
    concept_code: '1546062'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: false
- concept_name: vilanterol Dry Powder Inhaler
  concept_id: '43180320.0'
  code:
    concept_code: OMOP459635
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: vilanterol Inhalation Powder
  concept_id: '43024340.0'
  code:
    concept_code: OMOP4849893
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: Beclomethasone Dry Powder Inhaler
  concept_id: '42480190.0'
  code:
    concept_code: OMOP418867
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: Beclomethasone Inhalant Powder
  concept_id: '36883710.0'
  code:
    concept_code: OMOP1004751
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: Beclomethasone Inhalation Solution
  concept_id: '35130060.0'
  code:
    concept_code: OMOP4787320
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: Beclomethasone Metered Dose Inhaler
  concept_id: '40142780.0'
  code:
    concept_code: '746190'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: false
- concept_name: Budesonide Dry Powder Inhaler
  concept_id: '40142920.0'
  code:
    concept_code: '746824'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: false
- concept_name: Budesonide Inhalation Powder
  concept_id: '1356143'
  code:
    concept_code: '2108302'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: false
- concept_name: Budesonide Inhalation Solution
  concept_id: '35135830.0'
  code:
    concept_code: OMOP4793016
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: Budesonide Inhalation Suspension
  concept_id: '1356140'
  code:
    concept_code: '2108295'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: false
- concept_name: Budesonide Metered Dose Inhaler
  concept_id: '44120750.0'
  code:
    concept_code: OMOP1115385
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: Mometasone Dry Powder Inhaler
  concept_id: '40143330.0'
  code:
    concept_code: '746792'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: false
- concept_name: Mometasone Inhalant Powder
  concept_id: '36894460.0'
  code:
    concept_code: OMOP994725
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: Mometasone Inhalant Solution
  concept_id: '40892820.0'
  code:
    concept_code: OMOP2090778
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: Mometasone Metered Dose Inhaler
  concept_id: '44817880.0'
  code:
    concept_code: '1536141'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: false
- concept_name: fluticasone Dry Powder Inhaler
  concept_id: '40144040.0'
  code:
    concept_code: '746765'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: false
- concept_name: fluticasone Inhalation Powder
  concept_id: '35147990.0'
  code:
    concept_code: OMOP4805056
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: fluticasone Inhalation Solution
  concept_id: '35149210.0'
  code:
    concept_code: OMOP4806270
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: fluticasone Injectable Solution
  concept_id: '41080160.0'
  code:
    concept_code: OMOP2278122
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: false
- concept_name: fluticasone Metered Dose Inhaler
  concept_id: '40144040.0'
  code:
    concept_code: '746403'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: false
- concept_name: Albuterol / Beclomethasone Dry Powder Inhaler
  concept_id: '42483140.0'
  code:
    concept_code: OMOP418868
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Albuterol / Beclomethasone Inhalation Powder
  concept_id: '36812530.0'
  code:
    concept_code: OMOP4826562
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol / glycopyrronium Dry Powder Inhaler
  concept_id: '36421290.0'
  code:
    concept_code: OMOP4763575
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol / glycopyrronium Inhalant Powder
  concept_id: '40745350.0'
  code:
    concept_code: OMOP4711820
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol / glycopyrronium Inhalant Solution
  concept_id: '36787950.0'
  code:
    concept_code: OMOP4776216
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol Dry Powder Inhaler
  concept_id: '21158940.0'
  code:
    concept_code: OMOP286058
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol Inhalant Powder
  concept_id: '36894460.0'
  code:
    concept_code: OMOP1002030
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Beclomethasone / formoterol Inhalant Solution
  concept_id: '21090040.0'
  code:
    concept_code: OMOP286036
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / formoterol Dry Powder Inhaler
  concept_id: '42479680.0'
  code:
    concept_code: OMOP419122
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / formoterol Inhalation Powder
  concept_id: '35133500.0'
  code:
    concept_code: OMOP4790710
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / formoterol Inhalation Solution
  concept_id: '783228'
  code:
    concept_code: OMOP4831059
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / formoterol Metered Dose Inhaler
  concept_id: '40142910.0'
  code:
    concept_code: '745797'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Budesonide / salmeterol Inhalant Powder
  concept_id: '36787270.0'
  code:
    concept_code: OMOP4775534
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: azelastine / fluticasone Metered Dose Nasal Spray
  concept_id: '36250080.0'
  code:
    concept_code: '1797846'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: false
- concept_name: fluticasone / formoterol Dry Powder Inhaler
  concept_id: '41048760.0'
  code:
    concept_code: OMOP2246722
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / formoterol Inhalant Powder
  concept_id: '40754970.0'
  code:
    concept_code: OMOP4702057
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / formoterol Inhalant Solution
  concept_id: '21089510.0'
  code:
    concept_code: OMOP357047
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / salmeterol Dry Powder Inhaler
  concept_id: '40144020.0'
  code:
    concept_code: '746717'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / salmeterol Inhalant Powder
  concept_id: '36882730.0'
  code:
    concept_code: OMOP994600
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / salmeterol Inhalant Solution
  concept_id: '42482740.0'
  code:
    concept_code: OMOP419713
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / salmeterol Metered Dose Inhaler
  concept_id: '40144020.0'
  code:
    concept_code: '744485'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / umeclidinium / vilanterol Dry Powder Inhaler
  concept_id: '792484'
  code:
    concept_code: '1945037'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / umeclidinium / vilanterol Inhalant Powder
  concept_id: '40755790.0'
  code:
    concept_code: OMOP4701920
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol / vilanterol Dry Powder Inhaler
  concept_id: '37592050.0'
  code:
    concept_code: OMOP4781501
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol Dry Powder Inhaler
  concept_id: '43532280.0'
  code:
    concept_code: '1424887'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol Inhalant Powder
  concept_id: '43291090.0'
  code:
    concept_code: OMOP557209
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: fluticasone / vilanterol Inhalant Solution
  concept_id: '41267400.0'
  code:
    concept_code: OMOP2465363
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: formoterol / Mometasone Metered Dose Inhaler
  concept_id: '40223710.0'
  code:
    concept_code: '998040'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ANTIARRHYTHMICS, CLASS I AND III
  concept_id: '21600250.0'
  code:
    concept_code: C01B
    vocabulary_id: ATC
    concept_code_url: ''
  descendants_included: true
- concept_name: ANTIPSYCHOTICS
  concept_id: '21604490.0'
  code:
    concept_code: N05A
    vocabulary_id: ATC
    concept_code_url: ''
  descendants_included: true
- concept_name: Citalopram
  concept_id: '797617'
  code:
    concept_code: '2556'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Escitalopram
  concept_id: '715939'
  code:
    concept_code: '321988'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Fluoxetine
  concept_id: '755695'
  code:
    concept_code: '4493'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Fluvoxamine
  concept_id: '751412'
  code:
    concept_code: '42355'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Paroxetine
  concept_id: '722031'
  code:
    concept_code: '32937'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Sertraline
  concept_id: '739138'
  code:
    concept_code: '36437'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Desvenlafaxine
  concept_id: '717607'
  code:
    concept_code: '734064'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: duloxetine
  concept_id: '715259'
  code:
    concept_code: '72625'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: milnacipran
  concept_id: '19080230.0'
  code:
    concept_code: '588250'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: venlafaxine
  concept_id: '743670'
  code:
    concept_code: '39786'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: amineptin
  concept_id: '19032420.0'
  code:
    concept_code: '17698'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Amitriptyline
  concept_id: '710062'
  code:
    concept_code: '704'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Amoxapine
  concept_id: '713109'
  code:
    concept_code: '722'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: butriptyline
  concept_id: '19039880.0'
  code:
    concept_code: '19895'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Clomipramine
  concept_id: '798834'
  code:
    concept_code: '2597'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Desipramine
  concept_id: '716968'
  code:
    concept_code: '3247'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: dibenzepin
  concept_id: '19023850.0'
  code:
    concept_code: '3332'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Dothiepin
  concept_id: '19037990.0'
  code:
    concept_code: '3634'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Doxepin
  concept_id: '738156'
  code:
    concept_code: '3638'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Imipramine
  concept_id: '778268'
  code:
    concept_code: '5691'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Iprindole
  concept_id: '19122200.0'
  code:
    concept_code: '5979'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Lofepramine
  concept_id: '19091830.0'
  code:
    concept_code: '6465'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: MELITRACEN
  concept_id: '19110750.0'
  code:
    concept_code: '446248'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nortriptyline
  concept_id: '721724'
  code:
    concept_code: '7531'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Opipramol
  concept_id: '19129640.0'
  code:
    concept_code: '7674'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Protriptyline
  concept_id: '754270'
  code:
    concept_code: '8886'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: quinupramine
  concept_id: '19098510.0'
  code:
    concept_code: '35242'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Trimipramine
  concept_id: '705755'
  code:
    concept_code: '10834'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Isocarboxazid
  concept_id: '781705'
  code:
    concept_code: '6011'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Nialamide
  concept_id: '19127550.0'
  code:
    concept_code: '7394'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Phenelzine
  concept_id: '733896'
  code:
    concept_code: '8123'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Selegiline
  concept_id: '766209'
  code:
    concept_code: '9639'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Tranylcypromine
  concept_id: '703470'
  code:
    concept_code: '10734'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Agomelatine
  concept_id: '36878780.0'
  code:
    concept_code: OMOP997499
    vocabulary_id: RxNorm Extension
    concept_code_url: ''
  descendants_included: true
- concept_name: Bupropion
  concept_id: '750982'
  code:
    concept_code: '42347'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Maprotiline
  concept_id: '794147'
  code:
    concept_code: '6646'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Mianserin
  concept_id: '19007740.0'
  code:
    concept_code: '6929'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Mirtazapine
  concept_id: '725131'
  code:
    concept_code: '15996'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: nefazodone
  concept_id: '714684'
  code:
    concept_code: '31565'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Oxitriptan
  concept_id: '36427290.0'
  code:
    concept_code: OMOP4757832
    vocabulary_id: GRR
    concept_code_url: ''
  descendants_included: true
- concept_name: reboxetine
  concept_id: '19084690.0'
  code:
    concept_code: '60842'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: ST. JOHN'S WORT EXTRACT
  concept_id: '1398039'
  code:
    concept_code: '258326'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: tianeptine
  concept_id: '19041910.0'
  code:
    concept_code: '38252'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Trazodone
  concept_id: '703547'
  code:
    concept_code: '10737'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Tryptophan
  concept_id: '19006190.0'
  code:
    concept_code: '10898'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: vilazodone
  concept_id: '40234830.0'
  code:
    concept_code: '1086769'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: Viloxazine
  concept_id: '19008260.0'
  code:
    concept_code: '11196'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
- concept_name: vortioxetine
  concept_id: '44507700.0'
  code:
    concept_code: '1455099'
    vocabulary_id: RxNorm
    concept_code_url: ''
  descendants_included: true
    
# Event the study is part of, if applicable
event:
  # Identifier of event
  event_identifier: 'https://covid19.ohdsi.app/'
  # Name of the even
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
  title: 'Characterizing Health Associated Risks, and Your Baseline Disease In SARS-COV-2 (CHARYBDIS)'
  study_usecase: [0]
  study_type: [0]
  tags: [OHDSI, Study-a-thon, COVID-19]
  leads: ['Talita Duarte-Salles', 'Kristin Kostka', 'Albert Prats-Uribe']
  leadForumTags: [{name: tduarte, mainEntityofPage: 'https://forums.ohdsi.org/u/tduarte'}, {name: krfeeney, mainEntityofPage: 'https://forums.ohdsi.org/u/krfeeney'}, {name: Albert_Prats, mainEntityofPage: 'https://forums.ohdsi.org/u/Albert_Prats'}]
  startDate: 'April 21, 2020'
  endDate: 'Mid-July 2020'
  protocol: {name: 'Word Doc', mainEntityofPage: 'https://github.com/ohdsi-studies/Covid19CharacterizationCharybdis/blob/master/documents/Protocol_COVID-19%20Charybdis%20Characterisation_V5.docx'}
  publications: []
  results: [{name: 'Shiny App: Cohort Diagnostics - COVID Targets', mainEntityofPage: 'https://data.ohdsi.org/Covid19CharacterizationCharybdisDiagCovid/'}, {name: 'Shiny App: Cohort Diagnostics - Influenza Targets', mainEntityofPage: 'https://data.ohdsi.org/Covid19CharacterizationCharybdisDiagInfluenza/'}, {name: 'Shiny App: Cohort Diagnostics - Stratum', mainEntityofPage: 'https://data.ohdsi.org/Covid19CharacterizationCharybdisDiagStrata/'}, {name: 'Shiny App: Cohort Diagnostics - Features', mainEntityofPage: 'https://data.ohdsi.org/Covid19CharacterizationCharybdisDiagFeature/'}, {name: 'Shiny App: Characterization Study', mainEntityofPage: 'https://data.ohdsi.org/Covid19CharacterizationCharybdis/'}]
  authors: [tduarte, krfeeney, Albert_Prats]
  description: "**Objectives:**\n1) Describe the baseline demographic, clinical characteristics, treatments and outcomes of interest among individuals tested for SARS-CoV-2 and/or diagnosed with COVID-19 overall and stratified by sex, age, race and specific comorbidities;\n2) Describe characteristics and outcomes of patients diagnosed/tested positive for influenza as well as patients hospitalized with influenza between September 2017 and April 2018 compared to the COVID-19 population."

---
