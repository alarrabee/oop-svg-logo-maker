


class Shape {
    constructor(shapeColor, textColor, text){
        this.shapeColor = shapeColor;
        this.textColor = textColor;
        this.text = text;
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
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="50,10 90,90 10,90" fill="${this.shapeColor}"/><text x="10" y="50" font-family="Arial" font-size="24" fill="${this.textColor}">${this.text}</text></svg>`
    }
}

//circle class
class Circle extends Shape {
    // constructor(textColor, shapeColor){
    //     super(textColor, shapeColor);
    // }
    render(){
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="40" fill="${this.shapeColor}"/><text x="10" y="50" font-family="Arial" font-size="24" fill="${this.textColor}">${this.text}</text></svg>`
    }
}


//square class
class Square extends Shape {
    // constructor(textColor, shapeColor){
    //     super(textColor, shapeColor);
    // }
    render(){
        return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="10" width="80" height="80" fill="${this.shapeColor}"/><text x="10" y="50" font-family="Arial" font-size="24" fill="${this.textColor}">${this.text}</text></svg>`
    }
}






//Exports classes
module.exports = {Triangle, Circle, Square}


