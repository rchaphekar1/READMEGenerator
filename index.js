const inquirer = require('inquirer');
const fs = require('fs');

// array of questions for user
const questions = [
    "What is the name of your project?",
    "Please provide a link to your Github repo.",
    "Please provide a quick description of your project.",
    "Please provide a few key features of your project.",
    "What is your name?",
    "Please provide a link to your personal Github."
];

// function to write README file
function writeToFile(fileName, data) {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'projectName',
                message: questions[0],
            },
            {
                type: 'input',
                name: 'githubRepo',
                message: questions[1],
            },
            {
                type: 'input',
                name: 'description',
                message: questions[2],
            },
            {
                type: 'input',
                name: 'keyFeatures',
                message: questions[3],
            },
            {
                type: 'input',
                name: 'userName',
                message: questions[4],
            },
            {
                type: 'input',
                name: 'githubLink',
                message: questions[5],
            },
        ])
        .then((data) => {
            const fileName = `${"README"}.md`;

            fs.appendFile(fileName, JSON.stringify(data, null, '\t'), (err) =>
                err ? console.log(err) : console.log("Success!")
            );
        });
};

// function to initialize program
function init() {
    writeToFile();
};

// function call to initialize program
init();