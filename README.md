![Hands-on training at Esri provided by Accelebrate](https://deivu67oka01d.cloudfront.net/esri/esri_accelebrate4.jpg)

# Introduction to TypeScript
**2019 Esri Developer Summit - Pre-Summit Hands-on Training Mar 3-4, 2019**

This course teaches using the TypeScript language combined with existing knowledge of JavaScript for application development. It does not define what type of development, such as Web Browser or node.js, it concentrates on the TypeScript language syntax and the corresponding JavaScript code into which it transpiles.

## Class Prerequisites

All attendees must have intermediate-level experience developing web applications with JavaScript coding, libraries, and frameworks.

## Technical Setup and Requirements

### Software

1. Web browser – please install a recent version of any of the following browsers, to view transpiled JavaScript output:
	- Google Chrome - https://www.google.com/chrome/
	- Mozilla Firefox - https://www.mozilla.org/en-US/firefox/
	- Microsoft Edge - https://www.microsoft.com/en-us/windows/microsoft-edge

2. An IDE (Integrated Development Environment) or code editor that helps with TypeScript syntax – any one of the following would be fine for class:
	- Visual Studio Code - https://code.visualstudio.com/
	- Visual Studio - https://www.visualstudio.com/downloads/
	- WebStorm - https://www.jetbrains.com/webstorm/download/
	- Sublime Text - https://www.sublimetext.com/
	- Atom - https://atom.io/
	- Brackets - http://brackets.io/

3. Node.js / npm
	- Node.js is useful for viewing transpiled JavaScript output, and it also includes npm, a package manager for installing required and optional packages for class.
	- Download from https://nodejs.org/
	- Either the “LTS (Long Term Support)” 10.x version or the “Current” 11.x version is fine for class.
	- Install with default settings, and then verify the installation at the command line (note the double hyphens):  
		```node --version```  
		```npm --version```  

- Optional: Git
	- Git is not required, but it can help with the downloading of class files and version control of the code you will develop in class.
	- Download from https://git-scm.com/download (or use a Git client from another source).
	- Install with default settings, and then verify the installation at the command line:  
		```git --version```

- Optional: Yarn
	- Yarn installs required and optional packages for class if you prefer it over npm as your package manager.
	- Download from https://yarnpkg.com/en/docs/install
	- Install with default settings (you must install Node.js first), and then verify the installation at the command line:  
		```yarn --version```

### Package Dependencies
Class files contain development environment dependencies, example code, frameworks, and reference images / links that will be used during class

1. Create a folder for the Class Files on your computer, and navigate into that folder in your Command Prompt / Terminal.

2. Download the class files, either by Git or by web browser:
	- If using Git, run this command inside the folder you created:  
		```git clone https://github.com/Esri-Accelebrate/TypeScript.git```
	- If you are not using Git, download this zip file and unzip the contents into the folder you created:  
		https://github.com/Esri-Accelebrate/TypeScript/archive/master.zip

3. Install Class File Dependencies
	- In your Command Prompt / Terminal, navigate into the “TypeScript” or “TypeScript-master” folder of class files, and issue ONE of the following commands (note that npm and yarn are different tools for the same job):  
		```npm install```  
		```yarn install```  

4. Verify the installation
	- In your Command Prompt / Terminal, issue ONE of the following commands:  
		```npm run verify```  
		```yarn run verify```  
	- This should respond with Version 3.3.3, which means the TypeScript compiler has been successfully installed.

### Class Files
Check back before your session for updated class files.  These can be downloaded again following Step 2 from [Package Dependency](https://github.com/Esri-Accelebrate/TypeScript#package-dependencies) section above.

## Class Outline
- Overview of JavaScript and TypeScript Development
  - ECMAScript vs JavaScript
  - JavaScript Compared to Other Programming Languages
  - JavaScript Engines
  - Web based JavaScript Development
  - Other types of JavaScript Development
  - TypeScript Development
  - TypeScript is a Superset of JavaScript functionality
  - Transpiling TypeScript
- Setting up the Development Environment
  - JavaScript Engines
  - Code Editors and IDEs
  - Package Managers
  - Web Browsers and Servers, node.js and other engines
  - Testing and Debugging
  - Transpiling
  - TypeScript Configuration files
  - Task Runners
  - Linter
- TypeScript Types and Operators
  - TypeScript Comments
  - Strong Typing with TypeScript
  - Type Shapes
  - Types available in TypeScript
  - TypeScript Operators
  - Type Aliases
  - Inferred Typing
  - Type Compatibility
  - Duplicate Identifiers
- Generics
  - What’s a generic?
  - Why do we need generics?
  - Generics syntax
  - Writing a generic type
  - Using a generic type
- TypeScript Variables and Scope
  - Declaring variables in TypeScript vs JavaScript
  - let and const keywords
  - Block Level Scope
  - Type Annotations
  - Scoping Rules
  - Shadowing
  - Understanding Boxing and UnBoxing
  - Boolean Types
  - Truthy and Falsy Values
  - Number Types
  - String Types
  - MultiLine String Delimiters
  - Template Literals
  - Any Types
  - Type Assertion
  - Generics and variables
- TypeScript Code Blocks, Conditions, and Loops
  - Code Blocks
  - Control of Flow Syntax in TypeScript
- TypeScript Arrays and Collection Types
  - Array Types
  - Iterating Across All Array Elements
  - for of Loops
  - Tuple Types
  - Object types
  - Array Spread and Destructuring
  - Arrays and generics
  - Object Spread and Destructuring
- TypeScript Functions
  - Function Declarations
  - Arrow functions
  - Typing Functions
  - Optional and Default Parameters
  - Rest Parameters with Spread Syntax
  - Function Declarations vs Function Expressions
  - CallBack Functions
  - void
  - never Types
  - Function Overloads
- TypeScript Interfaces, Classes, and Objects
  - Interfaces
  - Structural Subtyping or Duck Typing
  - Property Decorators
  - Optional Properties
  - Readonly Properties
  - Function Types
  - Enum Types
  - Class Types
  - Access Modifiers, Public, Private, Protected
  - Class Decorators
  - Getters and Setters
  - Accessor Decorators
  - Method Decorators
  - Parameter Decorators
  - Static Types
  - Abstract Types
  - Generics and Classes
- TypeScript Error Handling
  - Creating Error Interfaces and Classes
  - throw, try, catch, finally in TypeScript
- TypeScript, configuration, and this Keyword
  - Catching incorrect uses of this keyword
  - noImplicitThis flag
  - this Parameters
  - Revisiting tsconfig.json
  - Revisiting TS Lint configuration
- Organizing TypeScript code
  - ECMAScript modules
  - Exporting identifiers
  - Importing identifiers
  - Using defaults
  - Namespaces
- TypeScript Prototypical Inheritance
  - Extending Interfaces
  - Interfaces Extending Classes
  - Extending Classes
  - Hybrid Types
  - Intersection Types
  - Union Types
  - Type Guards
- Promises and Asynchronous Functions
  - Using Promises
  - Promise States
  - Promise Methods
  - Promises and generics
  - Creating a Promise
  - then() and catch() Methods
  - Promise Chaining
  - Handling Multiple Promises
  - async Functions
  - await Keyword
  - Returned async Promise
