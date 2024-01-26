const { Square, Triangle, Circle } = require('./lib/shapes');
const inquirer = require('inquirer');
const SVG = require('./lib/svg');
const { writeFile } = require('fs/promises');

inquirer
  .prompt([
    {// Prompt the user for text input.
      type: 'input',
      message: 'Please provide logo text.',
      name: 'text',
    },
    {// Prompt the user for the text color.
      type: 'input',
      message: 'Please enter desired text color.',
      name: 'textColor',
    },
    {// Prompt the user for the shape.
      type: 'list',
      message: 'PLease choose a logo shape.',
      choices: ['Circle', 'Triangle', 'Square'],
      name: 'shape',
    },
    {// Prompt the user for the shape color.
      type: 'input',
      message: 'Please enter desired shape color.',
      name: 'shapeColor',
    },
  ])
  .then(({text, textColor, shape, shapeColor}) => {
    let newShape; // set an empty variable
    switch(shape) {
      case "Circle": 
        newShape = new Circle();
        break;

      case "Triangle":
        newShape = new Triangle();
        break;
      
      case "Square":
        newShape = new Square();
        break;
    }
    newShape.setColor(shapeColor);

    const svg = new SVG();
    svg.setText(text, textColor);
    svg.setShape(newShape);

    return writeFile('logo.svg', svg.render());
  })
  .then(() => {
    console.log("Generated logo.svg")
  });

// Generate an SVG using the provided inputs.

// Save the SVG to a file named "logo.svg".

// Print the message "Generated logo.svg" to the command line.

// Open the "logo.svg" file in a browser.








