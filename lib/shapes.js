
//Shape - The parent class - takes in shape color, text color, and text
class Shape {
    constructor(shapeColor, textColor, text){
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
    }
    render(){

    }
}

//Triangle, Circle, and Square are class extensions which allows them to inherit properties and methods from their parent class. 
class Triangle extends Shape {
    //render() method is overriden to provide different functionality for this class
    render(){
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="50,10 90,90 10,90" fill="${this.shapeColor}"/><text x="10" y="50" font-family="Arial" font-size="24" fill="${this.textColor}">${this.text}</text></svg>`
    }
}


class Circle extends Shape {

    render(){
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="${this.shapeColor}"/><text x="10" y="50" font-family="Arial" font-size="24" fill="${this.textColor}">${this.text}</text></svg>`
    }
}


class Square extends Shape {

    render(){
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" fill="${this.shapeColor}"/><text x="10" y="50" font-family="Arial" font-size="24" fill="${this.textColor}">${this.text}</text></svg>`
    }
}


//Exports classes
module.exports = {Triangle, Circle, Square}


