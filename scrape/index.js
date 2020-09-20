const { exec } = require("child_process");
const axios = require('axios');
const fs = require('fs');
const YAML = require('yamljs');

const githubHandle = 'https://api.github.com/users/ohdsi-studies/repos';
const repos = [];

main();

async function main() {
  try {
    const reposResult = await axios.get(githubHandle);
    for (var i = 0; i < reposResult.data.length; i++) {
      const repo = {
        name: reposResult.data[i].name,
        rawReadmeUrl: `https://raw.githubusercontent.com/${reposResult.data[i].full_name}/master/README.md`,
        description: reposResult.data[i].description,
      }
      repos.push(repo);
    }
  } catch (error) {
    console.log(error);
  }

  console.log(`Found ${repos.length} repositories.\n`);

  let addedCounter = 0;

  for (const [index, item] of repos.entries()) {
    console.log(`Scrape Repo #${index + 1} - ${item.name}`);

    let response;
    try {
      response = await axios.get(item.rawReadmeUrl);
    } catch (error) {
      console.log(error.message);
      continue;
    }
    const html = response.data;
    const linesArray = html.split(/\r?\n/g)
    const extData = {}

    let hCounter = 0;
    let endOfList = 1000;

    const description = [];

    for (let i = 0; i < linesArray.length; i++) {
      if (hCounter > 1) break;
      const line = linesArray[i];
      if (line === "") continue;
      if (linesArray[i + 1].indexOf("===") === 0 || line.indexOf("#") === 0) {
        hCounter++;
        if (hCounter === 1) {
          extData.title = line
        }
        continue;
      }
      if (line.toLowerCase().indexOf('Analytics use case(s):'.toLowerCase()) !== -1) {
        extData.study_usecase = scrapeArrayOfUseCaseFrom(line)
      } else if (line.toLowerCase().indexOf('Study type:'.toLowerCase()) !== -1) {
        extData.study_type = scrapeArrayOfStudyTypeFrom(line) //this.scrapeStringFrom(line)
      } else if (line.toLowerCase().indexOf('Tags:'.toLowerCase()) !== -1) {
        extData.tags = this.scrapeArrayOfStringFrom(line)
      } else if (line.toLowerCase().indexOf('Study lead:'.toLowerCase()) !== -1) {
        extData.leads = this.scrapeArrayOfStringFrom(line)
      } else if (line.toLowerCase().indexOf('Study lead forums tag:'.toLowerCase()) !== -1) {
        extData.leadForumTags = this.scrapeArrayOfLinkFrom(line)
      } else if (line.toLowerCase().indexOf('Study start date:'.toLowerCase()) !== -1) {
        extData.startDate = this.scrapeStringFrom(line)
      } else if (line.toLowerCase().indexOf('Study end date:'.toLowerCase()) !== -1) {
        extData.endDate = this.scrapeStringFrom(line)
      } else if (line.toLowerCase().indexOf('Protocol:'.toLowerCase()) !== -1) {
        extData.protocol = this.scrapeLinkFrom(line)
      } else if (line.toLowerCase().indexOf('Publications:'.toLowerCase()) !== -1) {
        extData.publications = this.scrapeArrayOfLinkFrom(line)
      } else if (line.toLowerCase().indexOf('Results explorer:'.toLowerCase()) !== -1) {
        // get all lines after
        i++;
        if (linesArray[i].trim().indexOf('-') === 0) {
          const results = [];
          while (linesArray[i].trim().indexOf('-') === 0) {
            results.push(linesArray[i])
            i++;
          }
          i--;
          endOfList = i;
          extData.results = this.scrapeArrayOfLinkFromListOf(results)
        } else {
          i--;
          endOfList = i;
          extData.results = this.scrapeArrayOfLinkFrom(line)
        }
      }
      if (i > endOfList) {
        description.push(line);
      }
    }

    if (extData.leadForumTags && extData.leadForumTags.length > 0) {
      const authors = extData.leadForumTags.map((item => item.name.replace('[', '').replace(']', '')));
      extData.authors = authors;
    } else {
      extData.authors = [];
    }

    extData.authors.forEach(author => {
      // create author
      if (fs.existsSync(`../content/authors/${author}/_index.md`)) {
        //removeAuthorReadmePart(item, extData)
      } else {
        exec(`cd .. && hugo new authors/${author}`, (error, data, getter) => {
          if (error) {
            return;
          }
          if (getter) {
            return;
          }
          //removeAuthorReadmePart(item, extData)
        });
      }
    });

    extData.description = description.join('\n');

    //console.log(`End: Scrape Repo #${index} - ${item.name}`);
    if (extData.tags && extData.tags.includes('COVID-19')) {
      if (fs.existsSync(`../content/study/${item.name}/index.md`)) {
        removeReadmePart(item, extData)
      } else {
        exec(`cd .. && hugo new study/${item.name}`, (error, data, getter) => {
          if (error) {
            return;
          }
          if (getter) {
            return;
          }
          removeReadmePart(item, extData)
        });
      }
      console.log(`Added to content`);
      addedCounter++;
    } else {
      //console.log('does not have covid tag');
    }

  }
  console.log(`\nScraped total number of ${repos.length} repositories. Added ${addedCounter} with tag "COVID-19" to content.`)
}


removeReadmePart = (item, extData) => {
  fs.readFile(`../content/study/${item.name}/index.md`, 'utf8', function (err, data) {
    if (err) {
      return console.log(err);
    }
    const linesArray = data.split(/\r?\n/g)
    let resultArray = [];
    let startIndexOfReadme = 10000;
    let endIndexOfReadme = 0;
    linesArray.every((line, index) => {
      if (line.indexOf('from_readme') !== -1) {
        startIndexOfReadme = index;
      }
      if (index > startIndexOfReadme) {
        if (line === "") {
        } else {
          if (line.substr(0, 3) === '---') {
            endIndexOfReadme = index;
          } else if (line.substr(0, 1) === ' ' || line.substr(0, 1) === '-') {//line.indexOf(' ') === 0 || line.indexOf("-") === 0){
          } else {
            endIndexOfReadme = index;
          }
        }
      }
      return true
    })

    resultArray = [];

    linesArray.every((line, index) => {
      if (startIndexOfReadme !== 0 && endIndexOfReadme !== 0) {
        if (index >= startIndexOfReadme && index < endIndexOfReadme) {

        } else {
          if (line.substr(0, 3) === '---') { }
          else { resultArray.push(line) }
        }
      } else {
        if (line.substr(0, 3) === '---') { }
        else { resultArray.push(line) }
      }
      return true
    });
    const resultStr = resultArray.join('\n');
    const newReadme = { from_readme: extData }
    const yamlString = YAML.stringify(newReadme, 2, 2);
    const content = `---\n${resultStr}\n${yamlString}\n---`
    fs.writeFile(`../content/study/${item.name}/index.md`, content, 'utf8', function (err) {
      if (err) return console.log(err);
    });
  });

}

scrapeArrayOfStudyTypeFrom = (item) => {
  const output = [];
  const result = scrapeArrayOfStringFrom(item)
  result.forEach(element => {
    //console.log(element);
    switch (element.toLowerCase()) {
      case 'Clinical Application'.toLowerCase():
        output.push(0);
        break;
      case 'Methods Research'.toLowerCase():
        output.push(1);
        break;
    }
  });

  return output;
}

scrapeArrayOfUseCaseFrom = (item) => {
  const output = [];
  const result = scrapeArrayOfStringFrom(item)
  result.forEach(element => {
    switch (element.toLowerCase()) {
      case 'Characterization'.toLowerCase():
        output.push(0);
        break;
      case 'Population-Level Estimation'.toLowerCase():
        output.push(1);
        break;
      case 'Patient-Level Prediction'.toLowerCase():
        output.push(2);
        break;
      case 'Characterization and Population-Level Estimation'.toLowerCase():
        output.push(3);
        break;
    }
  });

  return output;
}


scrapeArrayOfLinkFromListOf = (items) => {
  const result = []
  items.forEach(item => {
    result.push(generateObjectofNameAndUrlFrom(item))
  });
  return result;
}

scrapeArrayOfLinkFrom = (str) => {
  let result = cleanTextWithColon(str);
  if (result === "") return [];
  result = result.split(", ");
  return result.map(item => generateObjectofNameAndUrlFrom(item));
}

scrapeArrayOfStringFrom = (str) => {
  let result = cleanTextWithColon(str);
  if (result === "") return [];
  return result.split(", ");
}

scrapeLinkFrom = (str) => {
  const result = cleanTextWithColon(str);
  return generateObjectofNameAndUrlFrom(result);
}

scrapeStringFrom = (str) => {
  return cleanTextWithColon(str);
}

generateObjectofNameAndUrlFrom = (str) => {
  if (!str) return {}
  const name = str.match(/\[(.*)\]/)[1]
  const mainEntityofPage = str.match(/\((.*)\)/)[1]
  return { name, mainEntityofPage }
}


cleanTextWithColon = (str) => {
  const result = str.substr(str.indexOf(":") + 1).trim().replace(/\*\*/g, '');
  if (result === "-") { return "" }
  return result;
}