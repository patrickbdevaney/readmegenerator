// includes the inquirer package to make the prompts work for the readme generator
const inquirer = require("inquirer");
// includes generateMarkdown.js for the licenses
const generateMarkdown = require('./utils/generateMarkdown.js')
const badge = require("./badge.js")
//includes file system for writing to the client side files
const fs = require('fs')
const questions = [
{
        type: "input",
        name: "projecttitle",
        message: "What is your the title of the project?"
    },
    {
        type: "input",
        name: "description",
        message: "Describe your project."
    },
 
    {
        type: 'checkbox',
        name: 'tableofcontents',
        choices: ['Title', 'Description', 'Table of Contents', 'Installations', 'Usage', 'License', 'Contributors', 'Testing', 'GitHub Repo', 'Email for question inquiries'],
        message: 'Select from the options in bullet points which you want in your table of contents',

    },
    {
        type: "input",
        name: "installation",
        message: "Include the necessary installations"
    },
    {
        type: "input",
        name: "usage",
        message: "Explain how the user should use your program"
    },
    {
        type: 'list',
        name: 'licenses',
        choices: ['Apache License 2.0', ' MIT License', 'Eclipse Public License 2.0', 'Mozilla Public License 2.0'],
        message: 'Choose the license for your project.',
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'Include the project contributors'
    },
    {
        type: 'input',
        name: 'test',
        message: 'Give instructions for your program.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Input your Github username.',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Add your Email as an additional contact.',
    }
]

/* .then(result => {
    console.log(result.projecttitle, result.description, result.tableofcontents, result.installation, result.usage, result.licenses, result.contributors, result.test, result.github, result.email); */
  
function writeToFile(fileName, data) {
    return fs.writeFileSync(fileName, data)
}


function init() {
    //poses inquirer questions to the user
    inquirer.prompt(questions)
    .then((data) => writeToFile ('README.md', generateMarkdown(data)))
    .then(() => console.log("README produced"))
    .catch((err)=> console.log(err))
}

// Function to start program
init();
