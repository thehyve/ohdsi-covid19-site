---
# Display name
title: "{{ replace .Name "-" " " | title }}"
name: {{ .Name }}

# Username (this should match the folder name and the author name on other pages)
authors:
- {{ .Name }}

# Organization/Affiliation
organization:
  id:
  name:
  address:
  department:
  jobTitle: 

# Academic Networking
accounts:
  forumName: 
  # https://github.com/USERNAME
  githubHandle: USERNAME
  # https://scholar.google.com/citations?user=PERSON-ID
  googlescholarId: PERSON-ID
  # OHDSI Collaborator URL
  ohdsiCollaborator: 
  orcidIdentifier:

social:
# - icon: envelope
#   icon_pack: fas
#   link: '#contact'  # For a direct email link, use "mailto:test@example.
# - icon: twitter
#   icon_pack: fab
#   link: https://twitter.com/GeorgeCushen
- icon: comments
  icon_pack: fas
  link: 
- icon: google-scholar
  icon_pack: ai
  link: 
- icon: github
  icon_pack: fab
  link: 
- icon: orcid
  icon_pack: ai
  link: 


honorificPrefix:

# Array of suffixes (e.g. "M.D." , "...")
honorificSuffix: []
---
