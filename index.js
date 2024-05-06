const inquirer = require("inquirer");
//Imports the Inquirer.js library so that it can be used to create interactive prompts and gather user input within the application.

const fs = require("fs");
//Imports the File System module in Node.js allowing the code to use the functionality provided by the File System module through the fs variable. This functionality includes reading from and writing to files


//An array of questions for user input
const questions = [
    {
        input: "input",
        message: "Enter up to three characters:",
        name: "text"
    },
    {
        input: "input",
        message: "Enter text color:",
        name: "textColor"
    },
    {
        input: "list",
        message: "Select a shape:",
        name: "shape",
        choices: ["Circle", "Triangle", "Square"]
    },
    {
        input: "input",
        message: "Enter shape color:",
        name: "shapeColor"
    }
];

