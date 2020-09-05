const { exec } = require("child_process");
const rp = require('request-promise');
const $ = require('cheerio');
const matter = require('gray-matter');
const axios = require('axios');
const fs = require('fs');
const MT = require('mark-twain');
const json2md = require('json2md');
const YAML = require('yamljs');
// const md2json = require('md-2-json');

const githubHandle = 'https://api.github.com/users/ohdsi-studies/repos';
const repos = [];

// const jsonML = MT(fs.readFileSync('../content/study/ACE/index.md').toString());
// console.log(jsonML)

// const myImg = json2md(jsonML);

// /** This will console ![My image](http://example.com/image.png) */
// console.log(myImg);


 
// parse YAML string
// const nativeObject = YAML.parse(yamlString);
 
// Generate YAML
// const yamlString = YAML.stringify(nativeObject, 4);
 
// Load yaml file using YAML.load
// const nativeObject = YAML.load('../content/study/ACE/index.md');
// console.log(nativeObject);

// const yamlString = YAML.stringify(nativeObject, 2, 2);
// console.log(yamlString);

main();

async function main(){
  try {
    const reposResult = await axios.get(githubHandle);
    // console.log(reposResult.data.length);
    for (var i = 0; i < reposResult.data.length; i++){
      const repo = {
        name: reposResult.data[i].name,
        rawReadmeUrl: `https://raw.githubusercontent.com/${reposResult.data[i].full_name}/master/README.md`,
        description: reposResult.data[i].description,
      }
      repos.push(repo)
    }  
  } catch (error) {
    
  } 
  
  // loop
  // create index.md file
  // add data to file
  repos.every(async (item,index) => {
    //const item = repos[0]
    const dir = './tmp';
    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }

    const response = await axios.get(item.rawReadmeUrl);
    const html = response.data;
    const linesArray = html.split(/\r?\n/g)
    //console.log(html.split(/\r?\n/g));
    
    const extData = {}
    
    let hCounter = 0;
    let endOfList = 1000;
    
    const description = [];
    
    for (let i = 0; i < linesArray.length; i++) {
      if (hCounter > 1) break;
      const line = linesArray[i];
      if (line === "") continue;
      //console.log(line)
      if(linesArray[i+1].indexOf("===") === 0 || line.indexOf("#") === 0){
        hCounter++;
        if(hCounter === 1){
          extData.title = line
        }
        continue;
      }
      if(line.toLowerCase().indexOf('Analytics use case(s)'.toLowerCase()) !== -1){
        extData.useCases = scrapeArrayOfUseCaseFrom(line) 
      }else if(line.toLowerCase().indexOf('Study type'.toLowerCase()) !== -1){
        extData.type = scrapeArrayOfStudyTypeFrom(line) //this.scrapeStringFrom(line)
      }else if(line.toLowerCase().indexOf('Tags'.toLowerCase()) !== -1){
        extData.tags = this.scrapeArrayOfStringFrom(line) 
      }else if(line.toLowerCase().indexOf('Study lead:'.toLowerCase()) !== -1){
        extData.leads = this.scrapeArrayOfStringFrom(line)
      }else if(line.toLowerCase().indexOf('Study lead forums tag'.toLowerCase()) !== -1){
        extData.leadForumTags = this.scrapeArrayOfLinkFrom(line) 
      }else if(line.toLowerCase().indexOf('Study start date'.toLowerCase()) !== -1){
        extData.startDate = this.scrapeStringFrom(line)
      }else if(line.toLowerCase().indexOf('Study end date'.toLowerCase()) !== -1){
        extData.endDate = this.scrapeStringFrom(line)
      }else if(line.toLowerCase().indexOf('Protocol'.toLowerCase()) !== -1){
        extData.protocol = this.scrapeLinkFrom(line)
      }else if(line.toLowerCase().indexOf('Publications'.toLowerCase()) !== -1){
        extData.publications = this.scrapeArrayOfLinkFrom(line) 
      }else if(line.toLowerCase().indexOf('Results explorer'.toLowerCase()) !== -1){
        // get all lines after
        i++;
        if(linesArray[i].trim().indexOf('-') === 0){
          const results = [];
            while(linesArray[i].trim().indexOf('-') === 0){
            results.push(linesArray[i])
            i++;
          }
          i--;
          endOfList = i;
          extData.results = this.scrapeArrayOfLinkFromListOf(results)
        }else{
          i--;
          endOfList = i;
          extData.results = this.scrapeArrayOfLinkFrom(line)
        }
      }
      if(i>endOfList){
        description.push(line);
      }
      //   extData.results = $('strong', li).text()
      // }
      // check for texts
      // others are desc
      
    }
    
    extData.description = description;
    // console.log(extData);
    // const yamlString = YAML.stringify(extData, 2, 2);
    // console.log(yamlString);
    // console.log('============================================')


    // exec(`cd .. && cd content/study/temp && mkdir ${item.name}`, (error, data, getter) => {
    //   if(error){
    //     console.log("error",error.message);
    //     return;
    //   }
    //   if(getter){
    //     console.log("data",data);
    //     return;
    //   }
    //   console.log("data",data);
    
    // });

    

    // if folder and file does not exist run hugo new - add readme part
    if (fs.existsSync(`../content/study/${item.name}/index.md`)) {
      console.log(`File ${item.name} exists`)
      removeReadmePart(item, extData)
    }else{
      console.log(`File ${item.name} does not exist`);
      exec(`cd .. && hugo new study/${item.name}`, (error, data, getter) => {
        if(error){
          console.log("error",error.message);
          return;
        }
        if(getter){
          console.log("data",data);
          return;
        }
        console.log("data",data);
        removeReadmePart(item, extData)
      });
    }

    // add new readme part

    const yamlString = YAML.stringify(extData, 2, 2);

    // fs.appendFile(`../content/study/${item.name}/index.md`,yamlString,function(err){
    //   if(err)throw err;
    //   console.log(`File ../content/study/${item.name}/index.md is created successfully.`);
    // })

    // else read file - rremovee readme part and replace it with new one
    
    // exec(`cd .. && hugo new study/${item.name}`, (error, data, getter) => {
    //   if(error){
    //     console.log("error",error.message);
    //     return;
    //   }
    //   if(getter){
    //     console.log("data",data);
    //     return;
    //   }
    //   console.log("data",data);
    
    // });
    

    /*console.log(item.name);
    const subDir = `./tmp/${item.name}`;
    if (!fs.existsSync(subDir)){
        fs.mkdirSync(subDir);
    }
    markdownContent = `---
from_readme:
  description: Retrospective, real-world, observational study to estimate the population-level effects of hydroxychloroquine among patients with rheumatoid arthritis. Designed and executed during the OHDSI community COVID-19 virtual study-a-thon (March 26-29) to inform healthcare decision-making in response to the current global pandemic.
  study_usecase: [1,2]
  study_type: [1]
  study_status: [0]
  tags: [Study-a-thon, COVID-19]
  # study_lead: [Jennifer Lane, James Weaver]
  # study_lead_forums_tag: [jenniferlane, jweave17]
  start_date: 2020-05-31
  end_date: 
  # protocol: PDF (as filed with PASS)
  publications: 
  - url: "https://www.medrxiv.org/content/10.1101/2020.04.08.20054551v2"
  results:
  - url: "https://data.ohdsi.org/Covid19EstimationHydroxychloroquine/"
    id: Shiny
---`;
    fs.writeFile(`./tmp/${item.name}/index.md`,markdownContent,function(err){
      if(err)throw err;
      console.log(`File ./tmp/${item.name}/index.md is created successfully.`);
    })*/
  })
  
}


removeReadmePart = (item, extData) =>{
  // remove old readme part
  fs.readFile(`../content/study/${item.name}/index.md`, 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    // console.log(data)
    // console.log('*****************************')
    const linesArray = data.split(/\r?\n/g)
    let resultArray = [];
    let startIndexOfReadme = 10000;
    let endIndexOfReadme = 0;
    linesArray.every((line, index) => {
      if(line.indexOf('from_readme') !== -1){
        startIndexOfReadme = index;
      }
      if(index>startIndexOfReadme){
        console.log(line)
        console.log(line.substr(0,1))
        if(line === ""){
        }else{
          if(line.substr(0,3) === '---'){
            endIndexOfReadme = index;
          }else if(line.substr(0,1) === ' ' || line.substr(0,1) === '-'){//line.indexOf(' ') === 0 || line.indexOf("-") === 0){
            // in readme
          }else{
            // not in readme
            endIndexOfReadme = index;
          }
        }
      }
      console.log(index, startIndexOfReadme, endIndexOfReadme)
      return true
    })
    console.log("startIndexOfReadme",startIndexOfReadme)
    console.log("endIndexOfReadme",endIndexOfReadme)
    
    resultArray = [];
    // console.log(linesArray)

    linesArray.every((line, index) => {
      if(startIndexOfReadme !== 0 && endIndexOfReadme !== 0){
        if(index>=startIndexOfReadme && index<endIndexOfReadme){
          
        }else{
          if(line.substr(0,3) === '---'){}
          else{      resultArray.push(line)}
        }
      }else{
        if(line.substr(0,3) === '---'){}
        else{resultArray.push(line)}
      }
      return true
    });
    const resultStr = resultArray.join('\n');
    console.log('*****************************');
    console.log(resultStr)
    console.log('*****************************')

    // var result = data.replace(/string to be replaced/g, 'replacement');
    const newReadme = {from_readme: extData}
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
    switch(element){
      case 'Clinical Application':
        output.push(0);
        break;
      case 'Methods Research':
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
    console.log('++++++++++++++++++++++++++++')
    console.log(element)
    console.log('++++++++++++++++++++++++++++')
    switch(element){
      case 'Characterization':
        output.push(0);
        break;
      case 'Population-Level Estimation':
        output.push(1);
        break;
      case 'Patient-Level Prediction':
        output.push(2);
        break;
      case 'Characterization and Population-Level Estimation':
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
  if(result === "") return [];
  result = result.split(", ");
  return result.map(item => generateObjectofNameAndUrlFrom(item));
}

scrapeArrayOfStringFrom = (str) => {
  let result = cleanTextWithColon(str);
  if(result === "") return [];
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
  const url = str.match(/\((.*)\)/)[1]
  return {name, url}
}


cleanTextWithColon = (str) => {
  return str.split(":").slice(1).join().trim().replace(/\*\*/g, '');//.replace(/\-/g, '');
}