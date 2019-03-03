/*
 * Module 03 - TypeScript Types and Operators
 * Topics:
 *      TypeScript Comments
 *      JavaScript Data Types
 *      Coercion
 *      Type Annotations
 *      TypeScript Data Types
 *      Truthy Falsy Values
 *      MultiLine String Delimiters
 *      Template Literals
 *      Any types
 *      Unknown types
 *      Type Assertion
 *      Type Aliases
 *      Inferred Typing
 *      Type Shapes and Compatibility
 *      Duplicate Identifiers
 */
console.log("Module 03 - TypeScript Types and Operators complete.js loaded...");

console.log("");
console.log("****************************************************************");
console.log("Topic - TypeScript Comments");
console.log("****************************************************************");

// Single Line Comment
/*  Multi
    Line
    Comment
*/

// TypeScript Compiler can strip comments with removeComments compiler option
//      tsc complete.ts --removeComments
//      tsconfig.json
//           { "compilerOptions": { "removeComments": true } }


console.log("");
console.log("****************************************************************");
console.log("Topic - JavaScript Data Types");
console.log("****************************************************************");

// JavaScript Types
// Examples of Value Data Types
console.log("typeof true is " + typeof true);	 	  	 	                // "boolean"
console.log("typeof false is " + typeof false); 	 	 	                // "boolean"
console.log("typeof 13 is " + typeof 13); 	 		 	                    // "number"
console.log("typeof 'string' is " + typeof "string"); 	 	 	            // "string"
console.log("typeof { prop: 'value' } is " + typeof { prop: "value" });	    // "object"
console.log("typeof [ 1, 2, 3 ] is " + typeof [ 1, 2, 3 ]);                 // "object"
console.log("typeof null is " + typeof null);	 	 		                // "object (bug in typeof, should return null)"
console.log("typeof undefined is " + typeof undefined);	 	 	            // "undefined"
console.log("typeof NaN is " + typeof NaN);	 		  	                    // "number"
console.log("typeof Symbol() is " + typeof Symbol()); 	 		            // "symbol" (Commented out because Symbol is supported in ES2015 and above)


console.log("");
console.log("****************************************************************");
console.log("Topic - Coercion");
console.log("****************************************************************");

// Explicit Coercion _ When developer uses a Function or Method to force conversion
console.log('typeof "42" is ' + typeof "42");	 	 	                    // Returns string
console.log('typeof Number( "42" ) is ' + typeof Number( "42" )); 	        // Returns number

// Implicit Coercion - When JavaScript automatically does conversion
// Note: The difference between == and === is strict equals does not allow conversion
// Note: Commented out because TS feels they will always be false
// console.log('"99.99" == 99.99 is ' + ("99.99" == 99.99)); 	 	           // Returns true, loosely equals
// console.log('"99.99" === 99.99 is ' + ("99.99" === 99.99));                // Returns false, strict equals


console.log("");
console.log("****************************************************************");
console.log("Topic - Type Annotations");
console.log("****************************************************************");

let variableTypeAnnotation1: string = "Hello TypeScript";
function functionTypeAnnotations1(param1: string): number {
    return param1.length;
}
console.log("length of variableTypeAnnotation1 is " + functionTypeAnnotations1(variableTypeAnnotation1));


console.log("");
console.log("****************************************************************");
console.log("Topic - TypeScript Data Types");
console.log("****************************************************************");

// Basic Types
var booleanNoValue: boolean;
var booleanTrue: boolean = true;
var booleanFalse: boolean = false;
var numberNoValue: number;
var number0: number = 0;
var number5: number = 5;
var numberNaN: number = NaN;
var stringNoValue: string;
var stringEmpty: string = "";
var stringHello: string = "Hello";
var stringFalse: string = "False";
var objectNull: object = null;
var objectPropValue: object = { prop: "value" };

// New Types
var array1: number[] = [1, 2, 3];
console.log("typeof array1 is " + typeof array1);
var array2: Array<number> = [1, 2, 3];
console.log("typeof array2 is " + typeof array2);
enum colorEnum { Red, Blue, Green }
console.log("typeof colorEnum is " + typeof colorEnum);
var enum1: colorEnum = colorEnum.Red;
console.log("typeof enum1 is " + typeof enum1);


console.log("");
console.log("****************************************************************");
console.log("Topic - Truthy Falsy Values");
console.log("****************************************************************");

console.log("Boolean(booleanNoValue) is " + Boolean(booleanNoValue));
console.log("Boolean(booleanTrue) is " + Boolean(booleanTrue));
console.log("Boolean(booleanFalse) is " + Boolean(booleanFalse));
console.log("Boolean(numberNoValue) is " + Boolean(numberNoValue));
console.log("Boolean(number0) is " + Boolean(number0));
console.log("Boolean(number5) is " + Boolean(number5));
console.log("Boolean(numberNaN) is " + Boolean(numberNaN));
console.log("Boolean(stringEmpty) is " + Boolean(stringEmpty));
console.log("Boolean(stringHello) is " + Boolean(stringHello));
console.log("Boolean(stringFalse) is " + Boolean(stringFalse));


console.log("");
console.log("****************************************************************");
console.log("Topic - MultiLine String Delimiters");
console.log("****************************************************************");

let multiLineString = `This is a
very long string
of words to demo
the use of multi-
line string delimiters`;
console.log(multiLineString);


console.log("");
console.log("****************************************************************");
console.log("Topic - Template Literals");
console.log("****************************************************************");

let templateLiteralName = "Glenn Quagmire";
console.log("Hello " + templateLiteralName + "!");                      // Concatenation
console.log(`Hello ${templateLiteralName}!`);                           // Template Literal


console.log("");
console.log("****************************************************************");
console.log("Topic - Any Types");
console.log("****************************************************************");

var any1: any = true;
console.log("typeof any1 is " + typeof any1);
any1 = 5;
console.log("typeof any1 is " + typeof any1);
any1 = "hello";
console.log("typeof any1 is " + typeof any1);
any1 = null;
console.log("typeof any1 is " + typeof any1);


console.log("");
console.log("****************************************************************");
console.log("Topic - Unknown Types");
console.log("****************************************************************");

// any1();                                                                 // Using it as a function when its a null, no type safety with any type
// var unknown1: unknown = null;
// unknown1();                                                             // Error and no compile when unknown type is used unsafely


console.log("");
console.log("****************************************************************");
console.log("Topic - Type Assertion");
console.log("****************************************************************");

var assertAny1: any = "string";
var assertString1 = <string>assertAny1;
var assertString2 = assertAny1 as string;

// To demonstrate, show intellisense for each of the assert variables
// Mostly used with objects and polymorphic behavior

console.log("typeof assertAny1 is " + typeof assertAny1);
console.log("typeof assertString1 is " + typeof assertString1);
console.log("typeof assertString2 is " + typeof assertString2);


console.log("");
console.log("****************************************************************");
console.log("Topic - Type Aliases");
console.log("****************************************************************");

type arrayOfNames = Array<{ firstName: string, lastName: string }>;
var people: arrayOfNames;
var students: arrayOfNames = [{ firstName: "Peter", lastName: "Griffin" }];

console.log("typeof people is " + typeof people);
console.log("typeof students is " + typeof students);


console.log("");
console.log("****************************************************************");
console.log("Topic - Inferred Typing");
console.log("****************************************************************");

var inferredString = "string";
var inferredNumber = 5;
// inferredString = inferredNumber;                                          // Type 'number' is not assignable to type 'string'
console.log("typeof inferredString is " + typeof inferredString);
console.log("typeof inferredNumber is " + typeof inferredNumber);


console.log("");
console.log("****************************************************************");
console.log("Topic - Type Shapes and Compatibility");
console.log("****************************************************************");

type nameType = { firstName: string, lastName: string };
var name1: nameType = { lastName: "Peter", firstName: "Griffin" };          // ok

var name2 = { firstName: "Lois", lastName: "Griffin", age: 43 };
name1 = name2;                                                              // ok, duck typing
var name3 = { age: 25 };
// name1 = name3;                                                              // not ok because different types
console.log(name1);


console.log("");
console.log("****************************************************************");
console.log("Topic - Duplicate Identifiers");
console.log("****************************************************************");

// type nameType = { firstName: string, lastName: string };                    // Duplicate Identifier from above
var nameType = { firstName: "Peter", lastName: "Griffin" };
var name1: nameType = nameType;                                             // not intuitive, but legal.  Note JS emitted
console.log(name1);
