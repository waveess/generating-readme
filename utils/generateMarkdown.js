//function to generate markdown data
function generateMarkdown(data) {
    return `# ${data.title}
    ![Github licence](http://img.shields.io/badge/license-${data.license}-blue.svg)
  
  
    ## Description
  
    ${data.description}
  
    ## Table of Contents
  
    * [Installation](#installation)
    * [User Story](#user-story)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
  
  
    ## Installation 
  
    ${data.installation}
  
    ## User Story 
  
    GIVEN a command-line application that accepts user input<br />
    WHEN I am prompted for information about my application repository<br />
    THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions<br />
    WHEN I enter my project title<br />
    THEN this is displayed as the title of the README<br />
    WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions<br />
    THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests<br />
    WHEN I choose a license for my application from a list of options<br />
    THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under<br />
    WHEN I enter my GitHub username<br />
    THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile<br />
    WHEN I enter my email address<br />
    THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions<br />
    WHEN I click on the links in the Table of Contents<br />
    THEN I am taken to the corresponding section of the README<br />
  
    ## Usage
  
    ${data.usage}
     
    ## License
  
    This project is licensed under the ${data.license}.
  
    ## Contributing
  
    ${data.contribution}
  
    ## Tests
  
    ${data.test}
  
    
  
    ## Questions
  
    If you have any questions about the repository, contact me directly at ${data.email}. You can find more of my work at https://github.com/${data.github}.
  
  `;
  }
  
  
  
  //export of the generateMarkdown to the main file
  module.exports = generateMarkdown ;
  
  