console.log('I am running!');
// AS A developer
// I WANT a README generator
// SO THAT I can quickly create a professional README for a new project

// GIVEN a command-line application that accepts user input
// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// inquirer documentation: https://www.npmjs.com/package/inquirer

const questions = [

  // WHEN I enter my project title
  // THEN this is displayed as the title of the README
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },

  // WHEN I am prompted for information about my application repository
  // THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
  {
    type: "input",
    name: "description",
    message: "Please describe your project.",
  },
  {
    type: "input",
    name: "tableOfContents",
    message: "Please list the table of contents.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the steps required to install your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Please describe how your project is used.",
  },
  {
    type: "input",
    name: "contributing",
    message: "Please describe how others can contribute to your project.",
  },
  {
    type: "input",
    name: "tests",
    message: "Please describe how to run tests for your project.",
  },
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },

  // WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
  {
    type: "list",
    choices: ["MIT", "Apache", "GPL", "BSD", "None"],
    name: "license",
    default: "MIT",
    message: "What is your license?",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions) // inquirer prompt function accepts an array of questions and returns a promise that resolves to an object containing the answers to the questions
    .then((answers) => {
      // answers is an object containing the answers to the questions
      console.log(answers); // log the answers to the console
      writeToFile("README.md", generateMarkdown(answers)); // write the answers to the README file
    });
}

// Function call to initialize app
init();







// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests



// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile

// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions

// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README
