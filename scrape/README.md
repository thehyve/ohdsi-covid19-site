# Scrape data from repository
A simple nodejs script to sxtract data for covid-19 stadyathon website from [OHDSI Studies repository](https://github.com/ohdsi-studies/)

---

## Requirements

For run the script, you will only need Node.js and a node global package, Yarn, installed in your environement.

### Node
#### Installation
  You can find information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v12.16.1

    $ npm --version
    6.14.8

### Yarn installation
  After installing node, this project will need yarn too, so just run the following command.

      $ npm install -g yarn

---

## Install

    $ git clone https://github.com/thehyve/ohdsi-covid19-site
    $git checkout scrape-nodejs
    $ cd scrape
    $ yarn install

## Running the project

    $ yarn start

### Details

This script scrapes studies and related authors in the `content` folder.
By default these new studies and authors are draft. To publish them on website you need to change `draft: true` to `draft:false` in each item.

## License

The code is licensed under the [MIT](LICENSE.md) license.

