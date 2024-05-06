const inquirer = require("inquirer");
//Imports the Inquirer.js library so that it can be used to create interactive prompts and gather user input within the application.

const fs = require("fs");
//Imports the File System module in Node.js allowing the code to use the functionality provided by the File System module through the fs variable. This functionality includes reading from and writing to files

const {Triangle, Circle, Square} = require("./lib/shapes");
//Imports classes

//An array of questions for user input
const questions = [
    {
        input: "input",
        message: "Enter up to three (3) characters:",
        name: "text"
    },
    {
        input: "input",
        message: "Enter text color using a color keyword (OR a hexadecimal number):",
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
        message: "Enter shape color color using a color keyword (OR a hexadecimal number):",
        name: "shapeColor"
    }
];


async function getLogo(){
    try{
        const answer = inquirer.prompt(questions)

    await 
    }
    catch(err){

    }
}

//Function to write svg file
function writeToFile(fileName, data){
    const {Triangle, Circle, Square}
    fs.writeFile("fileName", "content", function(err) {
        console.log(err ? err : "Generated logo.svg");
    })
}

//Function to initialize the app
function init(){
    inquirer.prompt(questions).then(function(data) {
        const fileName = "examples/logo.svg";
        writeToFile(fileName, data);
    });
}

//Function call to initialize app
init()