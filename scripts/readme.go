package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"os"
	"regexp"
	"strings"

	"github.com/go-yaml/yaml"
)

// Study structure
type Study struct {
	AnalyticsUseCases  string
	StudyType          string
	Tags               []string
	StudyLead          []string
	StudyLeadForumsTag []StudyLeadForumTag
	StudyStartDate     string
	StudyEndDate       string
	Protocol           Protocol
	Publications       string
	ResultsExplorer    ResultsExplorer
}

// StudyLeadForumTag structure
type StudyLeadForumTag struct {
	Title string
	URL   string
}

// Protocol structure
type Protocol struct {
	Title string
	URL   string
}

// ResultsExplorer structure
type ResultsExplorer struct {
	Title string
	URL   string
}

func check(e error) {
	if e != nil {
		panic(e)
	}
}

func getReadMe(url string) (string, error) {
	resp, err := http.Get(url)
	if err != nil {
		return "", fmt.Errorf("GET error: %v", err)
	}
	defer resp.Body.Close()

	if resp.StatusCode != http.StatusOK {
		return "", fmt.Errorf("Status error: %v", resp.StatusCode)
	}

	data, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		return "", fmt.Errorf("Read body: %v", err)
	}

	return string(data), nil
}

func getData(line string, property string) string {
	index := strings.Index(line, property)
	substring := line[index+len(property):]
	result := strings.Trim(substring, ": *")
	return result
}

func getProtocol(line string, property string) Protocol {
	var rgxTitle = regexp.MustCompile(`\[(.*?)\]`)
	title := rgxTitle.FindStringSubmatch(line)[1]
	line = rgxTitle.ReplaceAllString(line, "")
	var rgxURL = regexp.MustCompile(`\((.*?)\)`)
	url := rgxURL.FindStringSubmatch(line)[1]
	result := Protocol{
		title,
		url,
	}
	return result
}

func getResultExplorer(line string, property string) ResultsExplorer {
	var rgxTitle = regexp.MustCompile(`\[(.*?)\]`)
	title := rgxTitle.FindStringSubmatch(line)[1]
	line = rgxTitle.ReplaceAllString(line, "")
	var rgxURL = regexp.MustCompile(`\((.*?)\)`)
	url := rgxURL.FindStringSubmatch(line)[1]
	result := ResultsExplorer{
		title,
		url,
	}
	return result
}

func getStudyLeadForumTags(line string, property string) []StudyLeadForumTag {
	index := strings.Index(line, property)
	substring := line[index+len(property):]
	result := strings.Trim(substring, ": *")
	arr := strings.Split(result, ", ")
	var results []StudyLeadForumTag
	for _, s := range arr {
		var rgxTitle = regexp.MustCompile(`\[(.*?)\]`)
		title := rgxTitle.FindStringSubmatch(s)[1]
		line = rgxTitle.ReplaceAllString(s, "")
		var rgxURL = regexp.MustCompile(`\((.*?)\)`)
		url := rgxURL.FindStringSubmatch(s)[1]
		result := StudyLeadForumTag{
			title,
			url,
		}
		results = append(results, result)
	}
	return results
}

func getTags(line string, property string) []string {
	index := strings.Index(line, property)
	substring := line[index+len(property):]
	result := strings.Trim(substring, ": *")
	s := strings.Split(result, ", ")
	return s
}

func getStudyLead(line string, property string) []string {
	index := strings.Index(line, property)
	substring := line[index+len(property):]
	result := strings.Trim(substring, ": *")
	s := strings.Split(result, ", ")
	return s
}

func main() {

	routePath := "../content/study"
	items, _ := ioutil.ReadDir(routePath)
	for _, item := range items {
		if item.IsDir() {
			subitems, _ := ioutil.ReadDir(routePath + "/" + item.Name())
			for _, subitem := range subitems {
				if !subitem.IsDir() {
					// fmt.Println(routePath + "/" + item.Name() + "/" + subitem.Name())
					if subitem.Name() == "index.md" {
						dat, err := ioutil.ReadFile(routePath + "/" + item.Name() + "/" + subitem.Name())
						check(err)
						yamlData := strings.Trim(string(dat), "-")
						result := mainYaml(yamlData)
						generateJSONFile(result, routePath+"/"+item.Name()+"/index.json")
					}
				}
			}
		}
	}
}

func generateJSONFile(url string, outputPath string) {
	readMe, err := getReadMe(url)
	if err != nil {
		log.Fatalf(err.Error())
	}

	lines := strings.Split(readMe, "\n")
	var analyticsUseCases, studyType, studyStartDate, studyEndDate, publications string
	var studyLeadForumsTag []StudyLeadForumTag
	var tags, studyLead []string
	var protocol Protocol
	var resultsExplorer ResultsExplorer
	for _, line := range lines {
		if len(line) > 0 {
			if strings.Contains(line, "Study type") {
				studyType = getData(line, "Study type")
			}
			if strings.Contains(line, "Tags") {
				tags = getTags(line, "Tags")
				// tags = getData(line, "Tags")
			}
			if strings.Contains(line, "Analytics use case(s)") {
				analyticsUseCases = getData(line, "Analytics use case(s)")
			}
			if strings.Contains(line, "Study lead") && !strings.Contains(line, "Study lead forums tag") {
				//studyLead = getData(line, "Study lead")
				studyLead = getStudyLead(line, "Study lead")
			}
			if strings.Contains(line, "Study lead forums tag") {
				//studyLeadForumsTag = getData(line, "Study lead forums tag")
				studyLeadForumsTag = getStudyLeadForumTags(line, "Study lead forums tag")
			}
			if strings.Contains(line, "Study end date") {
				studyEndDate = getData(line, "Study end date")
			}
			if strings.Contains(line, "Study start date") {
				studyStartDate = getData(line, "Study start date")
			}
			if strings.Contains(line, "Protocol") {
				protocol = getProtocol(line, "Protocol")
				// protocol = getData(line, "Protocol")
			}
			if strings.Contains(line, "Publications") {
				publications = getData(line, "Publications")
			}
			if strings.Contains(line, "Results explorer") {
				resultsExplorer = getResultExplorer(line, "Results explorer")
			}
		}
	}
	study := Study{
		analyticsUseCases,
		studyType,
		tags,
		studyLead,
		studyLeadForumsTag,
		studyStartDate,
		studyEndDate,
		protocol,
		publications,
		resultsExplorer,
	}
	enc := json.NewEncoder(os.Stdout)
	enc.SetIndent("", "  ")
	enc.Encode(study)
	f, err := os.Create(outputPath)
	check(err)

	defer f.Close()
	file, _ := json.MarshalIndent(study, "", " ")

	_ = ioutil.WriteFile(outputPath, file, 0644)
}

// Yaml structure
type Yaml struct {
	ReadMeURL string
}

func mainYaml(data string) string {
	y := Yaml{}

	err := yaml.Unmarshal([]byte(data), &y)
	if err != nil {
		log.Fatalf("error: %v", err)
	}
	fmt.Printf("%+v\n", y)
	return y.ReadMeURL
}
