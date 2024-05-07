
class Text {
    constructor(text, textColor){
        this.textColor = textColor;
        this.text = text;
    }

    render(){
        return `<text x="10" y="50" font-family="Arial" font-size="24" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = Text;