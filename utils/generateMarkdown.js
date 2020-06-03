// Generating Content for README file
function generateMarkdown(data) {
  console.log("Generate Markdown Function Operational");
  // Modular functions
  return `
  ${genTitle(data.Title)}
  ${genDescription(data.Description)}
  ${genTableofContents()}
  ${genInstallation(data.Installation)}
  ${genUsage(data.Usage)}
  ${genLicense(data.License)}
  ${genContributors(data.Contributors)}
  ${genTests(data.Tests)}
  ${genGit(data.Github)}
  ${genEmail(data.Email)}
  `
};

function genTitle(Title){
  return `# ${Title}
  `
};

function genDescription(Description){
  return `# Description
   ${Description}

  `
};

function genTableofContents(){
  return `# Table Of Contents

  1. Description
  2. Installation
  3. Usage
  4. License (Badge)
  5. Contributors
  6. Tests
  7. GitHub Information


`

}

function genInstallation(Installation){
  return `# Installation
  ${Installation}
  `
}

function genUsage(Usage){
  return `# Usage
  ${Usage}
  `
}

function genLicense(License){
  if (License === "MIT"){
    return `# License
    [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
    `
  };
  if (License === "GPL v3"){
    return `# License
    [![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
    `
  };
  if (License === "AGPL"){
    return `# License
    [![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0) 
    `
  };
}

function genContributors(Contributors){
  return `# Contributors
  ${Contributors}
  `
}

function genTests(Tests){
  return `# Tests
  ${Tests}
  `
}

function genGit(Github){
  return `# Creator Profile
   Github: ${Github}
   ![GitHub Profile Photo](https://github.com/${Github}.png)
   `
}

function genEmail(Email){
  return `# Creator Email
  ${Email}
  `
}

module.exports = generateMarkdown;