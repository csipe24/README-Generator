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
            writeToFile("README1.md", response);
        } )
};

init();


// Description : Readme Generator
// entry point (Index.js)
// Default test command
// Git REPO: 
// Keywords: README Generator
// Author
// License: ics

// DO we need another module?
// DO we need module exports?
// module.exports = {
//     pie: pie,
//     predictable: predictable
//   };
  





// * `node_modules` is not tracked and uploaded to GitHub. (Hint: It is easy if you create your `.gitignore` file before installing dependencies with npm.)

// * Repo **MUST** include `package.json` with required dependencies. (Hint: Run `npm init` when you first setup the project before installing any dependencies.)

// * Include screenshots (or a video) of typical user flows through your application. This includes views of the prompts and the responses after their selection.
 