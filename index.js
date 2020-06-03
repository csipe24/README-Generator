const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  {
    type: "input",
    message: "Enter the Project Title",
    name: "Title"
  },

  {
    type: "input",
    message: "Give a description of your Project",
    name: "Description"
  },

  {
    type: "input",
    message: "Describe how to install the App",
    name: "Installation"
  },

  {
    type: "input",
    message: "Describe how the usage of the App",
    name: "Usage"
  },

  {
    type: "list",
    message: "Select A License",
    choices: ["MIT", "GPL v3", "AGPL"],
    name: "License"
  },

  {
    type: "input",
    message: "List the Names of the Contributors",
    name: "Contributors"
  },

  {
    type: "input",
    message: "Describe the kinds of tests created for this Application",
    name: "Tests"
  },

  {
    type: "input",
    message: "What is your GitHub Username?",
    name: "Github"
  },

    {
    type: "input",
    message: "What is your email?",
    name: "Email"
  },
];

function writeToFile(fileName, data) {
  console.log("Write File!");
  fs.writeFile(fileName, generateMarkdown(data), function(err){
    if(err)
    {console.log(err)}
    else 
    {console.log("Success!")};
  });
    };

function init() {  
inquirer.prompt(  questions )
        .then( (  response  ) => {
            writeToFile("NEWREADME.md", response);
        } )
};

init();