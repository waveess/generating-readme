//initialization of the fs function
const fs = require("fs");

//inquirer initiation
const inquirer = require("inquirer");

//importing the generateMarkdown file into the index.js file
const generateReadme = require("./utils/generateMarkdown.js");


// array of questions for user
const questions = [
    {
        type: "input",
        name: "github",
        message: "Enter your GitHub Username (Required)",
        validate: GitHubUsernameInput => {
            if(GitHubUsernameInput) {
                return true;
            } else {
                console.log("Please enter your GitHub Username!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "email",
        message: "Enter your email: (Required)",
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log("Please enter your email!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? (Required)",
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log("Please enter your Project name!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "description",
        message: "Enter the description of the Project (Required)",
        validate: projectDescriptionInput => {
            if(projectDescriptionInput) {
                return true;
            } else {
                console.log("Please enter Project Description!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "installation",
        message: "Provide installation instructions: (Required)",
        validate: installationInstructionsInput => {
            if (installationInstructionsInput) {
                return true;
            } else {
                console.log("Please enter Installation Instructions!");
                return false;
            }
        } 
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter information about Usage: (Required)",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log("Please enter Usage details!");
                return false;
            }
        }
    },
    {
        type: "input",
        name: "contribution",
        message: "Please enter Contribution details: (Required)",
        validate: contributionInput => {
            if (contributionInput) {
                return true;
            } else {
                console.log("Please enter Contribution details!");
            }
        }
    },
    {
        type: "input",
        name: "test",
        message: "Please enter Test Instructions: (Required)",
        validate: testInstructionsInput => {
            if (testInstructionsInput) {
                return true;
            } else {
                return false;
            }
        }
    },
    {
        type: "list",
        name: "license",
        message: "Please select from the list of licenses: (Required)",
        choices: ["GNUAGPLv3", "GNUGPLv3", "GNULGPLv3", "Apache2.0", "MIT", "BSD"],
        validate: licenseSelection => {
            if (licenseSelection) {
                return true;
            } else {
                return false;
            }
        }
    }
];




//function to invoke the questions for the user
const init = () => {
    return inquirer.prompt(questions)
}

//initialization of the function calls
init()
    .then(userAnswerData => {
        const readUserAnswerData = generateReadme(userAnswerData);
        console.log(userAnswerData);
        fs.writeFile('README.md', readUserAnswerData, err => {
                if(err) throw new Error(err);
                 console.log('README.md created!');
        });
    });



