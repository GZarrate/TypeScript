/*
 * Module 03 - TypeScript Types and Operators
 * Topics:
 *      TypeScript Comments
 *      Strong Typing with TypeScript
 *      Types available in TypeScript
 *      Inferred Typing
 *      Type Aliases
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
console.log("Topic - Strong Typing with TypeScript");
console.log("Concept - Types in JavaScript");
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
console.log("Topic - Strong Typing with TypeScript");
console.log("Concept - Coercion");
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
console.log("Topic - Types available in TypeScript");
console.log("****************************************************************");

// Basic Types
var boolean1: boolean = true;
var boolean2: boolean = false;
var number1: number = 5;
var number2: number = NaN;
var string1: string = "string";
var object1: object = null;
var object2: object = { prop: "value" };

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
console.log("Topic - Inferred Typing");
console.log("****************************************************************");

var inferredString = "string";
var inferredNumber = 5;
// inferredString = inferredNumber;                                          // Type 'number' is not assignable to type 'string'
console.log("typeof inferredString is " + typeof inferredString);
console.log("typeof inferredNumber is " + typeof inferredNumber);


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
