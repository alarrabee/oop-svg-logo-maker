//Imports the Inquirer.js library so that it can be used to create interactive prompts and gather user input within the application.
const inquirer = require("inquirer");

//Imports the File System module in Node.js allowing the code to use the functionality provided by the File System module through the fs variable. This functionality includes reading from and writing to files
const fs = require("fs");

//Imports classes
const {Triangle, Circle, Square} = require("./lib/shapes");



//return inquirer.prompt will return a promise that resolves to an object containing the users answers to the questions presented by inquirer.prompt
function promptUser(){
        return inquirer.prompt([
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
                choices: ["Triangle", "Circle", "Square"]
            },
            {
                input: "input",
                message: "Enter shape color color using a color keyword (OR a hexadecimal number):",
                name: "shapeColor"
            }
        ]);
    }


//Function to write svg file
function writeToFile(fileName, data){
    fs.writeFile(fileName, data, function(err) {
        console.log(err ? err : "Generated logo.svg");
    })
}

//Function to initialize the app
//will prompt the user and handle the user's input with .then
function init(){
    promptUser().then(({text, textColor, shape, shapeColor}) => {
        let shapes;

        switch (shape) {
            case "Triangle":
                shapes = new Triangle(shapeColor);
                break;
            case "Circle":
                shapes = new Circle(shapeColor);
                break;
            case "Square":
                shapes = new Square(shapeColor);
                break;
            default:
                break;
        }

        //write the rest for text and text color
        shapes.setColor(shapeColor);

        //write to file
        const fileName = "examples/logo.svg";
        writeToFile(fileName, shapes.render());
    })
    .catch (err => {
        console.log("Error", err);
    })
}



//Function call to initialize app
init()