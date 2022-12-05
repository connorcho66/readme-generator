// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      return "![License](https://img.shields.io/badge/License-MIT-blue)"
    case 'GPLv3':
      return "![License](https://img.shields.io/badge/License-GPLv3-blue)"
    case 'Apache':
      return "![License](https://img.shields.io/badge/License-Apache-blue)"
    case 'None':
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      return "https://choosealicense.com/licenses/mit/"
    case 'GPLv3':
      return "https://choosealicense.com/licenses/gpl-3.0/"
    case 'Apache':
      return "https://www.apache.org/licenses/"
    case 'None':
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  switch (license) {
    case 'MIT':
      return "This application uses the MIT license.";
    case 'GPLv3':
      return "This application uses the GPLv2 license.";
    case 'Apache':
      return "This application uses the Apache license.";
    case 'None':
      return "This application does not use a license."; 
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
       
  ${renderLicenseBadge(data.license)}

  ## Description 📝
  ${data.description}

  ## Table of Contents 🗒
    
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Credit](#credit)
  - [Questions](#questions)
  - [Tests](#tests)

  ## Installation 🔧
  ${data.install}

  ## Usage 📌
  ${data.usage}

  ## License 📛
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
 
  ## Credit 🏆
  ${data.contributor}

  ## Questions❓
  My GitHub Account: https://github.com/${data.username}. <br>
  You can contact me via email: ${data.email}.

  ## Tests 🧪
  ${data.test}
`;
}

module.exports = generateMarkdown;
