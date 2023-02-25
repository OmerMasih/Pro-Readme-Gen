function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-olive.svg)`;
  }
  return "";
}

function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Description](#description)
  * [Languages](#languages)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license) 
  * [Contribution](#contributing)
  * [Test](#test)
  * [Contact](#contact)
  
  
  ## Languages
  ${data.languages}
  
  ## Installation
  ${data.installation}

  ## Usage
   ${data.usage}

   ## License
  ${data.license}

   ## Contribution
  ${data.contributing}

   ## Test
  ${data.test}

  ## Contact
  
  Please feel free to reach out if you have any questions.

  -[Github]('https://github.com/${data.github}')<br/>
  -[Email]('https://github.com/${data.email}')

  <br/>

  ### This generator is created by Masihullah Omer.👏🏻

`;
}

module.exports = generateMarkdown;
