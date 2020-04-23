<p align="center"><a href="https://ohdsi.org" target="_blank" rel="noopener"><img src="assets/images/ohdsi-logo.png" alt="Academic logo"></a></p>

# COVID-19 studyathon website

This website contains an overview of the [**OHDSI COVID-19 studyathon**](https://www.ohdsi.org/ohdsi-news-updates/covid19-studyathon/) activities.

The site is built using the [Hugo](https://gohugo.io/) [Academic](https://github.com/gcushen/hugo-academic) template which makes it easy to create a beautiful website using Markdown, Jupyter, or RStudio. See the framework [**documentation**](https://sourcethemes.com/academic/docs/).

## Local development installation

If you want to work with this website locally, [install Hugo](https://gohugo.io/getting-started/installing/#quick-install) and clone this repository.

After cloning this repo, you can run the following commands to deploy to https://localhost:1313:
```
git submodule update --init --recursive
hugo server
```

## Add new datasets

Add new datasets with `hugo new dataset/[dataset_name].md`


## Add new studies

Add new studies with `hugo new study/[study_name].md`

## Add new person profiles

Add new person profiles with `hugo new authors/[author_name]`

## License

The code is licensed under the [MIT](LICENSE.md) license.

The Academic template is copyright 2017-present [George Cushen](https://georgecushen.com) and released under the [MIT](LICENSE-Academic.md) license.
