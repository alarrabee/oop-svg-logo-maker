//Imports the Inquirer.js library so that it can be used to create interactive prompts and gather user input within the application
const inquirer = require("inquirer");

//Imports the File System module in Node.js allowing the code to use the functionality provided by the File System module through the fs variable. This functionality includes reading from and writing to files
const fs = require("fs");

//Imports classes from shapes.js file
const {Triangle, Circle, Square} = require("./lib/shapes");



//Will return a promise that resolves to an object containing the users answers to the questions presented by inquirer.prompt
function promptUser(){
        return inquirer.prompt([
            {
                type: "input",
                message: "Enter up to three (3) characters:",
                name: "text",
                validate: function(input){
                    if (input.length > 3){
                        return "Please enter up to three (3) characters only!";
                    }
                    return true;
                }
            },
            {
                type: "input",
                message: "Enter text color using a color keyword (OR a hexadecimal number):",
                name: "textColor"
            },
            {
                type: "list",
                message: "Select a shape:",
                name: "shape",
                choices: ["Triangle", "Circle", "Square"]
            },
            {
                type: "input",
                message: "Enter shape color using a color keyword (OR a hexadecimal number):",
                name: "shapeColor"
            }
        ]);
    }


//Function to write svg file
function writeToFile(fileName, data){
    fs.writeFile(fileName, data, function(err) {
        console.log(err ? err : "Generated logo.svg");
    });
}

//Function to initialize the app
function init(){
    //Will prompt the user and handle the user's input with .then
    promptUser().then(({text, textColor, shape, shapeColor}) => {
        let shapes;

        switch (shape) {
            case "Triangle":
                shapes = new Triangle(shapeColor, textColor, text);
                break;
            case "Circle":
                shapes = new Circle(shapeColor, textColor, text);
                break;
            case "Square":
                shapes = new Square(shapeColor, textColor, text);
                break;
            default:
                break;
        }

        //Writes to file
        const fileName = "examples/logo.svg";
        writeToFile(fileName, shapes.render());
    })
    .catch (err => {
        console.log("Error", err);
    })
}


//Function call to initialize app
init()