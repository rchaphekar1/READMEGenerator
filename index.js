const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

// array of questions for user
const questions = [
    "What is the name of your project?",
    "Please provide a link to your Github repo.",
    "Please provide a quick description of your project.",
    "What packages must be installed for your project?",
    "Please provide instructions for your project and examples for use.",
    "What is your name?",
    "Please provide a link to your personal Github.",
    "Please enter your email address.",
    "Please select which npm license you would like to add."
];

// function to write README file
const writeToFile = () =>
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
                name: 'installation',
                message: questions[3],
            },
            {
                type: 'input',
                name: 'usage',
                message: questions[4]
            },
            {
                type: 'input',
                name: 'userName',
                message: questions[5],
            },
            {
                type: 'input',
                name: 'githubLink',
                message: questions[6],
            },
            {
                type: 'input',
                name: 'emailAddress',
                message: questions[7],
            },
            {
                type: 'checkbox',
                name: 'license',
                message: questions[8],
                choices: ['Inquirer'],
            },
        ]);

const generateREADME = (data) =>
`# ${data.projectName}

![License](https://img.shields.io/npm/l/${data.license})

![${data.projectName}]() // Include screenshot or gif of application in parantheses

<hr>

## Table of Contents
<ul>
    <li><a href="#description">Description</a></li>
    <li><a href="#installation">Installation</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#credits">Credits</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#questions">Questions</a></li>
</ul>

## Description

${data.githubRepo}

${data.description}

## Installation

install ${data.installation}

## Usage

${data.usage}

## Credits

${data.userName}: ${data.githubLink}

## License

Copyright © 2021 ${data.userName}

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Questions

Link to my Github: ${data.githubLink}
Email Address: ${data.emailAddress}
`;

// function to initialize program
function init() {
    writeToFile()
        .then((data) => writeFileAsync('README.md', generateREADME(data)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.log(err));
};

// function call to initialize program
init();