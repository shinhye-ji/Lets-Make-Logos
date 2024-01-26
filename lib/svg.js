class SVG {
    constructor() {
        this.textElement = "";
        this.shapeElement = "";
    }
    render() { // returns an SVG with shape element based on user input
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeElement}${this.textElement}</svg>`;
        }
    setText(svgText, svgTextColor) { //self proclaimed parameters. 
        if (svgText.length > 3) {
            throw new Error("Text must not exceed 3 characters.");
        }
    this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${svgTextColor}">${svgText}</text>`;
        }

    setShape(svgShape) {
    this.shapeElement = svgShape.render();
    
        }
}

module.exports = SVG;