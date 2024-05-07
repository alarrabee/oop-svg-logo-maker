const Text = require("./lib/text");


class Shape {
    constructor(shapeColor){
        this.shapeColor = shapeColor;
    }
    render(){

    }
}

//triangle class
class Triangle extends Shape {
    // constructor(textColor, shapeColor){
    //     super(textColor, shapeColor);
    // }
    render(){
        return `<svg width="300" height="200">
                    <polygon points="50,10 90,90 10,90" fill="${this.shapeColor}"/>
                </svg>`;
    }
}

//circle class
class Circle extends Shape {
    // constructor(textColor, shapeColor){
    //     super(textColor, shapeColor);
    // }
    render(){
        return `<svg width="300" height="200">
                    <circle cx="50" cy="50" r="40" fill="${this.shapeColor}"/>
                </svg>`
    }
}


//square class
class Square extends Shape {
    // constructor(textColor, shapeColor){
    //     super(textColor, shapeColor);
    // }
    render(){
        return `<svg width="300" height="200">
                    <rect x="10" y="10" width="80" height="80" fill="${this.shapeColor}"/>
                </svg>`
    }
}




module.exports = {Triangle, Circle, Square}
//Exports classes

