const fs = require("fs");
const inquirer = require("inquirer");
const genMark = require("./utils/generateMarkdown.js");

// At least one badge

// * Tests
// * User GitHub profile picture
// * User GitHub email


const questions = [
  {
    type: "input",
    message: "Enter the Project Title",
    name: "title"
  },

  {
    type: "input",
    message: "Give a description of your Project",
    name: "description"
  },

  {
    type: "input",
    message: "List the Table of Contents",
    name: "Table Of Contents"
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
    type: "input",
    message: "",
    name: "License"
  },

  {
    type: "input",
    message: "List the Names of the Contributors",
    name: "Contributors"
  },

  {
    type: "input",
    message: "",
    name: "Tests"
  },
];

function writeToFile(fileName, data) {
}

function init() {
inquirer.prompt(questions)
        .then( (response) => {
            console.log(response);
            generateMarkdown(response);
});
};

init();

//  fs.writeFile("log.json", JSON.stringify(reponse, null, "\t"), function(err){
//   if(err){console.log(err);}
//   else {console.log("success")


// At least one badge
// * Project title
// * Description
// * Table of Contents
// * Installation
// * Usage
// * License
// * Contributing
// * Tests
// * User GitHub profile picture
// * User GitHub email




// 1. Create JSON File.

// NPM init
// Dafault folder name
// Default Version
// Description : Readme Generator
// entry point (Index.js)
// Default test command
// Git REPO: 
// Keywords: README Generator
// Author
// License: ics

// SHows result in JSON Object

// Select YES

// package.JSON File

// npm install Inquier -- save




// What NPM installs do we need?

// inquirer?

// DO we need another module?
// DO we need module exports?
// module.exports = {
//     pie: pie,
//     predictable: predictable
//   };
  




// ## Submission Requirements

// * Create a `.gitignore` file and include `node_modules/` and `.DS_Store/`.

// * `node_modules` is not tracked and uploaded to GitHub. (Hint: It is easy if you create your `.gitignore` file before installing dependencies with npm.)

// * Repo **MUST** include `package.json` with required dependencies. (Hint: Run `npm init` when you first setup the project before installing any dependencies.)

// * Include screenshots (or a video) of typical user flows through your application. This includes views of the prompts and the responses after their selection.
