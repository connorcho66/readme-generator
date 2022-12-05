// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [

    {
        type: "input",
        message: "Title of README?",
        name: "title",
    },
    
    {
        type: "input",
        message: "Your GitHub username?",
        name: "username",
    },
    
    {
        type: "input",
        message: "Your email address?",
        name: "email",
    },
    
    {
        type: "input",
        message: "Write a short description of your project.",
        name: "description",
    },
    
    {
        type: "list",
        message: "Choose what kind of license should your project have.",
        name: "license",
        choices: ['MIT', 'GPLv2', 'Apache', 'None']
    },
    
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "install",
        default: 'npm i'
    },
    
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "test",
        default: "npm test",
    },
    
    {
        type: "input",
        message: "What is a usage of this repo",
        name: "usage",
    },

    {
        type: "input",
        message: "Who are the contributors of this project?",
        name: "contributors",
    },
    
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((inquirerAns) => {
            console.log("Working on it...");
            writeToFile("./dist/demo.md", generateMarkdown({...inquirerAns}));
        })
}

// Function call to initialize app
init();
