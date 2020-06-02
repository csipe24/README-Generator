// Generating Content for README file
function generateMarkdown(data) {
  console.log("Generate Markdown Function Operational");
  // Modular functions
  return `
  ${genTitle(data.Title)}
  ${genDescription(data.Description)}
  ${genTableofContents()};
  ${genInstallation(data.Installation)};
  ${genUsage(data.Usage)};
  ${genLicense(data.License)};
  ${genContributors(data.Contributors)};
  ${genTests(data.Tests)};
  ${genGit(data.Github)};
  ${genEmail(data.Email)};
  `
};

function genTitle(Title){
  return `# ${Title}
  `
};

function genDescription(Description){
  return `# ${Description}
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
  7. GitHub Information`
};

function genInstallation(Installation){
  return `# ${Installation}`
};

function genUsage(Usage){
  return `# ${Usage}`
};

function genLicense(License){
  if (License === "MIT"){
    return `# ${License}`
  };
  if (License === "GPL v3"){
    return `# ${License}`
  };
  if (License === "AGPL"){
    return `# ${License}`
  };

};
// If Statement?
// ReadME Badges to go raw

function genContributors(Contributors){
  return `# ${Contributors}
  `
};

function genTests(Tests){
  return `# ${Tests}`
};

function genGit(Github){
  return `# ${Github}`
};

function genEmail(Email){
  return `# ${Email}`
};

module.exports = generateMarkdown;