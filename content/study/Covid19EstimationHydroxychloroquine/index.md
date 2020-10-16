---
# Website information
# Study title
title: 'OHDSI COVID-19 Studyathon: Hydroxychloroquine population-level effect estimation'

tags: [Study-a-thon, COVID-19]
categories: []

# Do not fill; filled automatically
date: 2020-10-07T11:57:08+02:00
lastmod: 2020-10-07T11:57:08+02:00
featured: false

# Change to 'false' to be published
draft: false

# Study identifier, specifically created for the website.
# The identifier is the last part of the URL directing to the particular study
study_id: 'Covid19EstimationHydroxychloroquine'

# Study identifier 
study_identifier: 'EUPAS34497' 

# URL to study registration site
study_registration_url: http://www.encepp.eu/encepp/viewResource.htm?id=34498 

# Study description
description: 'Many existing drugs are being considered for use in treatment and prophylaxis of COVID-19 in rapid clinical trials across the world. However, the full safety profiles of these drugs is often unknown, and the current trials are unlikely to be powered or have sufficent follow-up time to evaluate most safety outcomes. The aim of this OHDSI study is to use existing retrospective data to evaluate the safety of these drugs. Where possible, we also attempt to estimate potential efficacy, for example using prior viral infections as surrogate outcome, or where available by using COVID-19 as outcome.'

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
authors: [jenniferlane, jweave17]

# Study Type, choose 0 or 1:
# 0: Clinical Application
# 1: Methods Research
study_type: [0]

# Analytics Use Case of the Study, choose 0, 1, 2 or 3:
# 0: Characterization
# 1: Population-Level Estimation
# 2: Patient-Level Prediction
# 3: Characterization and Population-Level Estimation
study_usecase: [1]

# Database identifiers of databases used for the study
databases: [IQVIA_US_EMR, IQVIA_AUS_EMR, IQVIAFrance_EMR, IQVIA_Germany_EMR, IQVIA_HUSCM, IQVIA_UK_THIN_IMRD_EMR, EHIS, IPCI, SIDIAP]

# Conditions studied; if multiple conditions are being studied,
# duplicate all keys under "conditions"
conditions:
- concept_name: Myocardial infarction
  concept_id: '4329847'
  code:
    concept_code: '22298006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/22298006
  descendants_included: true
- concept_name: Acute pancreatitis
  concept_id: '199074'
  code:
    concept_code: '197456007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/197456007
  descendants_included: true
- concept_name: Acute renal failure syndrome
  concept_id: '197320'
  code:
    concept_code: '14669001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/14669001
  descendants_included: true
- concept_name: Acute renal papillary necrosis with renal failure
  concept_id: '432961'
  code:
    concept_code: '298015003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/298015003
  descendants_included: true
- concept_name: Acute tubular necrosis
  concept_id: '444044'
  code:
    concept_code: '35455006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/35455006
  descendants_included: true
- concept_name: Angioedema
  concept_id: '432791'
  code:
    concept_code: '41291007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/41291007
  descendants_included: true
- concept_name: Bradycardia
  concept_id: '4169095'
  code:
    concept_code: '48867003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/48867003
  descendants_included: true
- concept_name: Conduction disorder of the heart
  concept_id: '316999'
  code:
    concept_code: '44808001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/44808001
  descendants_included: false
- concept_name: Sinus bradycardia
  concept_id: '4171683'
  code:
    concept_code: '49710005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49710005
  descendants_included: true
- concept_name: Sinus node dysfunction
  concept_id: '317302'
  code:
    concept_code: '60423000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/60423000
  descendants_included: true
- concept_name: Cardiac arrhythmia
  concept_id: '44784217'
  code:
    concept_code: '698247007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/698247007
  descendants_included: true
- concept_name: Palpitations
  concept_id: '315078'
  code:
    concept_code: '80313002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/80313002
  descendants_included: true
- concept_name: Tachycardia
  concept_id: '444070'
  code:
    concept_code: '3424008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/3424008
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
- concept_name: Chronic kidney disease stage 5
  concept_id: '443611'
  code:
    concept_code: '433146000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/433146000
  descendants_included: true
- concept_name: End stage renal disease
  concept_id: '193782'
  code:
    concept_code: '46177005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/46177005
  descendants_included: true
- concept_name: Acute respiratory distress
  concept_id: '4191650'
  code:
    concept_code: '373895009'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/373895009
  descendants_included: true
- concept_name: Acute respiratory distress syndrome
  concept_id: '4195694'
  code:
    concept_code: '67782005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/67782005
  descendants_included: true
- concept_name: Respiratory insufficiency
  concept_id: '318459'
  code:
    concept_code: '409623005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/409623005
  descendants_included: true
- concept_name: Acute gastrojejunal ulcer without hemorrhage AND without perforation
  concept_id: '4147683'
  code:
    concept_code: '30514008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/30514008
  descendants_included: false
- concept_name: Angiodysplasia of duodenum
  concept_id: '40482685'
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
- concept_name: Duodenal ulcer disease
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
- concept_name: Heart failure
  concept_id: '316139'
  code:
    concept_code: '84114007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84114007
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
- concept_name: Pneumonia
  concept_id: '255848'
  code:
    concept_code: '233604007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/233604007
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
  descendants_included: false
- concept_name: Subarachnoid hemorrhage
  concept_id: '432923'
  code:
    concept_code: '21454007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/21454007
  descendants_included: false
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
- concept_name: Heart failure
  concept_id: '316139'
  code:
    concept_code: '84114007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84114007
  descendants_included: true
- concept_name: Transient cerebral ischemia
  concept_id: '373503'
  code:
    concept_code: '266257000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/266257000
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
- concept_name: Venous thrombosis
  concept_id: '444247'
  code:
    concept_code: '111293003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/111293003
  descendants_included: true
- concept_name: Myocardial infarction
  concept_id: '4329847'
  code:
    concept_code: '22298006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/22298006
  descendants_included: true
- concept_name: Acute pancreatitis
  concept_id: '199074'
  code:
    concept_code: '197456007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/197456007
  descendants_included: true
- concept_name: Acute renal failure syndrome
  concept_id: '197320'
  code:
    concept_code: '14669001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/14669001
  descendants_included: true
- concept_name: Acute renal papillary necrosis with renal failure
  concept_id: '432961'
  code:
    concept_code: '298015003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/298015003
  descendants_included: true
- concept_name: Acute tubular necrosis
  concept_id: '444044'
  code:
    concept_code: '35455006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/35455006
  descendants_included: true
- concept_name: Myocardial infarction
  concept_id: '4329847'
  code:
    concept_code: '22298006'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/22298006
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
- concept_name: Subarachnoid hemorrhage
  concept_id: '432923'
  code:
    concept_code: '21454007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/21454007
  descendants_included: false
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
- concept_name: Acute gastrojejunal ulcer without hemorrhage AND without perforation
  concept_id: '4147683'
  code:
    concept_code: '30514008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/30514008
  descendants_included: false
- concept_name: Angiodysplasia of duodenum
  concept_id: '40482685'
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
- concept_name: Duodenal ulcer disease
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
- concept_name: Bradycardia
  concept_id: '4169095'
  code:
    concept_code: '48867003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/48867003
  descendants_included: true
- concept_name: Conduction disorder of the heart
  concept_id: '316999'
  code:
    concept_code: '44808001'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/44808001
  descendants_included: false
- concept_name: Sinus bradycardia
  concept_id: '4171683'
  code:
    concept_code: '49710005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/49710005
  descendants_included: true
- concept_name: Sinus node dysfunction
  concept_id: '317302'
  code:
    concept_code: '60423000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/60423000
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
- concept_name: Chronic kidney disease stage 5
  concept_id: '443611'
  code:
    concept_code: '433146000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/433146000
  descendants_included: true
- concept_name: End stage renal disease
  concept_id: '193782'
  code:
    concept_code: '46177005'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/46177005
  descendants_included: true
- concept_name: Heart failure
  concept_id: '316139'
  code:
    concept_code: '84114007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84114007
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
- concept_name: Cardiac arrhythmia
  concept_id: '44784217'
  code:
    concept_code: '698247007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/698247007
  descendants_included: true
- concept_name: Palpitations
  concept_id: '315078'
  code:
    concept_code: '80313002'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/80313002
  descendants_included: true
- concept_name: Tachycardia
  concept_id: '444070'
  code:
    concept_code: '3424008'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/3424008
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
  descendants_included: false
- concept_name: Subarachnoid hemorrhage
  concept_id: '432923'
  code:
    concept_code: '21454007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/21454007
  descendants_included: false
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
- concept_name: Heart failure
  concept_id: '316139'
  code:
    concept_code: '84114007'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/84114007
  descendants_included: true
- concept_name: Transient cerebral ischemia
  concept_id: '373503'
  code:
    concept_code: '266257000'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/266257000
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
- concept_name: Venous thrombosis
  concept_id: '444247'
  code:
    concept_code: '111293003'
    vocabulary_id: SNOMED
    concept_code_url: http://snomed.info/id/111293003
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
  concept_id: '46273442'
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
  concept_id: '46273442'
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
  concept_id: '46273442'
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
  concept_id: '46273442'
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
 
# Study protocol
study_protocol:
  # Protocol identifier; specifically created for the website
  # The identifier is the last part of the URL directing to the particular study protocol
  protocol_id: Covid19EstimationHydroxychloroquine/design
  # Last modification date, use date format YYYY-MM-DD
  date_modified: 2020-04-01
  # Protocol identifier, in case protocol has an identifier elsewhere 
  protocol_identifier:  
  # Protocol license
  license: 
  # URL to the protocol
  protocol_url: https://github.com/ohdsi-studies/Covid19EstimationHydroxychloroquine/blob/master/documents/OHDSI%20COVID-19%20Studyathon_PLE_HCQ_Protocol_v1.4.pdf
  # Version of the protocol 
  version: 1.4

# URL to the forum thread about the study
forum_thread_url: 

# Source code used for the study; if multiple code repositories are available, 
# duplicate all keys under "source_code"
source_code:
- name: 'Covid19EstimationHydroxychloroquine'
  # URL to GitHub repository containing the source code
  code_repository_url: https://github.com/ohdsi-studies/Covid19EstimationHydroxychloroquine
  # Last modification date, use date format YYYY-MM-DD
  date_modified: 2020-04-11
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
- name: 'Risk of hydroxychloroquine alone and in combination with azithromycin in the treatment of rheumatoid arthritis: a multinational, retrospective study' 
  # URL to the web application
  application_url: https://data.ohdsi.org/Covid19EstimationHydroxychloroquine/

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
  title: 'OHDSI COVID-19 Studyathon: Hydroxychloroquine population-level effect estimation'
  study_usecase: [1]
  study_type: [0]
  tags: [Study-a-thon, COVID-19]
  leads: ['Jennifer Lane', 'James Weaver']
  leadForumTags: [{name: jenniferlane, mainEntityofPage: 'https://forums.ohdsi.org/u/jenniferlane'}, {name: jweave17, mainEntityofPage: 'https://forums.ohdsi.org/u/jweave17'}]
  startDate: 'March 26, 2020'
  endDate: ""
  protocol: {name: 'PDF (as filed with PASS)', mainEntityofPage: 'as filed with PASS)](https://github.com/ohdsi-studies/Covid19EstimationHydroxychloroquine/blob/master/documents/OHDSI%20COVID-19%20Studyathon_PLE_HCQ_Protocol_v1.4.pdf'}
  publications: []
  results: [{name: 'Shiny app', mainEntityofPage: 'https://data.ohdsi.org/Covid19EstimationHydroxychloroquine/'}]
  authors: [jenniferlane, jweave17]
  description: "Many existing drugs are being considered for use in treatment and prophylaxis of COVID-19 in rapid clinical trials across the world. However, the full safety profiles of these drugs is often unknown, and the current trials are unlikely to be powered or have sufficent follow-up time to evaluate most safety outcomes. The aim of this OHDSI study is to use existing retrospective data to evaluate the safety of these drugs. Where possible, we also attempt to estimate potential efficacy, for example using prior viral infections as surrogate outcome, or where available by using COVID-19 as outcome.\nThis study is part of the [OHDSI 2020 COVID-19 study-a-thon](https://www.ohdsi.org/covid-19-updates/)."

---
