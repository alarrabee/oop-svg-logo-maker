const inquirer = require("inquirer");

//An array of questions for user input
const questions = [
    {
        input: "input",
        message: "Enter up to three characters:",
        name: "characters"
    },
    {
        input: "input",
        message: "Enter text color:",
        name: "textColor"
    },
    {
        input: "list",
        message: "Select a shape:",
        name: ["Circle", "Triangle", "Square"]
    },
    {
        input: "input",
        message: "Enter shape color:",
        name: "characters"
    }
]
