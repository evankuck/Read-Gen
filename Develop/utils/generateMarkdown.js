// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return "https://img.shields.io/badge/License-MIT-yellow.svg";
      break;
    case "APACHE":
      return "https://img.shields.io/badge/License-Apache%20-%20v2-blue.svg";
      break;
    case "GPL":
      return "https://img.shields.io/badge/License-GPLv3-red.svg";
      break;
    case "BSD":
      return "https://img.shields.io/badge/License-BSD%20-%20Closed-blue.svg";
      break;
    case "None":
      return "";
      break;
    default:
      return "https://img.shields.io/badge/License-None-red.svg";
      break;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case "MIT":
      return "https://opensource.org/licenses/MIT";
      break;
    case "APACHE":
      return "https://opensource.org/licenses/Apache-2.0";
      break;
    case "GPL":
      return "https://opensource.org/licenses/GPL-3.0";
      break;
    case "BSD":
      return "https://opensource.org/licenses/BSD-3-Clause";
      break;
    case "None":
      return "";
      break;
    default:
      return "";
      break;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  ## License
  
  [![License](${renderLicenseBadge(license)})](${renderLicenseLink(license)})


  `;
}

// TODO: Create a function to generate markdown for README
// title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions

// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.description}
  ${data.tableOfContents}
  ${data.installation}
  ${data.usage}
  ${data.contributing}
  ${data.tests}
  ${data.questions}
  ${renderLicenseSection(data.license)}
  # Questions?
Github: ${data.github}
Email: ${data.email}

`;
}

module.exports = generateMarkdown;
