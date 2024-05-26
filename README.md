Boot Camp Module 10 Challenge

# Description
This is the week 10 Module Challenge for the U of M Coding Bootcamp

# Object-Oriented Programming: SVG Logo Maker
This challenge was to build a Node.js command-line application that takes user input to generate a logo and save it. Using the command-line, the application will prompt the user to select a color and shape, provide text, and save the generated SVG to a **.svg** file.

## User Story
```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria
```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Application Screenshot
![image](https://github.com/alarrabee/oop-svg-logo-maker/assets/149320486/4c1bf7c8-b115-463a-bc19-629017b38832)
### Example Logos
![image](https://github.com/alarrabee/oop-svg-logo-maker/assets/149320486/b343841a-4a7a-4144-860c-10c264f072b9)   ![image](https://github.com/alarrabee/oop-svg-logo-maker/assets/149320486/216bb307-6012-4825-8e4b-2d6fa3a94dd5)
 ![image](https://github.com/alarrabee/oop-svg-logo-maker/assets/149320486/751047e5-c7a2-4ac7-a235-dfdb564e5562)



## Installation Instructions
Prerequisites
- Node.js
- npm

1. Clone the repository
    ```bash
   https://github.com/alarrabee/oop-svg-logo-maker.git
   ```
2. Install dependencies
   ```bash
   npm install
   ```
3. Invoke application
   ```bash
   node index.js
   ```
## Usage Information
1. Using the command-line answer each prompt as it appears and press enter.
2. When all prompts have been successfully answered you will see the message **Generated logo.svg** displayed.
3. Navigate to the examples folder to see your newly generaged SVG logo file.
4. Open SVG file in a browser to preview your logo.

### Demo
[View a video demonstration of the application](https://drive.google.com/file/d/1iM4E0FuWiF7vOi_uXr07z_u5pLHtYE22/view)

## Acknowledgments
Guidance provided by edX Web Development Tutor Team (Megan Meyers)

