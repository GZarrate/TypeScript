/*
 * Module 05 - TypeScript Variables and Scope
 * Topics:
 *      var, let, const keywords
 *      Global vs Function Scope
 *      Function vs Block Level Scope
 *      Hoisting
 *      Shadowing
 *      Type Annotations
 *      Basic Types
 *      Truthy Falsy Values
 *      MultiLine String Delimiters
 *      Template Literals
 *      Any Types
 *      Type Assertion
 *      Understanding Boxing and UnBoxing
 */
console.log("Module 05 - TypeScript Variables and Scope complete.js loaded...");

console.log("");
console.log("****************************************************************");
console.log("Topic - var, let, const keywords");
console.log("****************************************************************");

var globalVar1 = "globalVar1";
console.log("globalVar1 is " + globalVar1);                             // globalVar1

// JavaScript is ok with this, TypeScript doesn't like this
// globalVar2 = "globalVar2";                                              // [ts] Cannot find name 'globalVar2'. Did you mean globalVar1?

var globalVar1 = "new globalVar1";                                      // JavaScript allows redecaring variables with var keyword
console.log("globalVar1 is " + globalVar1);                             // new globalVar1

let globalLet1 = "globalLet1";
console.log("globalLet1 is " + globalLet1);                             // globalLet1
// let globalLet1 = "new globalLet1";                                      // [ts] Cannot redeclare block-scoped variable 'globalLet1'

const globalConst1 = "globalConst1";
// globalConst1 = "new globalConst1";                                      // [ts] Cannot assign to 'globalConst1' because it is a constant


console.log("");
console.log("****************************************************************");
console.log("Topic - Global vs Function Scope");
console.log("****************************************************************");

function globalFunction1() {
    console.log("globalVar1 in globalFunction() is " + globalVar1);     // globalVar1

    var localVar1 = "localVar1";
    console.log("localVar1 in globalFunction() is " + localVar1);       // localVar1

    let localLet1 = "localLet1";
    console.log("localLet1 in globalFunction() is " + localLet1);       // localLet1

    // mysteryVar = "mysteryVar";                                          // TypeScript still doesn't like this
}

globalFunction1();
// console.log("localVar1 is " + localVar1);                               // Uncaught ReferenceError: localVar1 is not defined
// console.log("localLet1 is " + localLet1);                               // Uncaught ReferenceError: localLet1 is not defined


console.log("");
console.log("****************************************************************");
console.log("Topic - Function vs Block Level Scope");
console.log("****************************************************************");

// Note: Block Level
if (true) {
    var blockVar1 = "blockVar1";
    let blockLet1 = "blockLet1";
}
console.log("blockVar1 is " + blockVar1);                               // blockVar1 is global
// console.log("blockLet1 is " + blockLet1);                               // Uncaught ReferenceError: blockLet1 is not defined

function globalFunction2() {
    if (true) {
        var localVar1 = "localVar1";
        let localLet1 = "localLet1";
    }
    console.log("localVar1 is " + localVar1);                           // localVar1 is function level via hoisting
    // console.log("localLet1 is " + localLet1);                           // Uncaught ReferenceError: localLet1 is not defined
}
globalFunction2();


console.log("");
console.log("****************************************************************");
console.log("Topic - Hoisting");
console.log("****************************************************************");

function globalFunction2Hoisted() {
    var localVar1;
    if (true) {
        localVar1 = "localVar1Hoisted";
        let localLet1 = "localLet1";
    }
    console.log("localVar1 is " + localVar1);                           // localVar1 is function level via hoisting
    // console.log("localLet1 is " + localLet1);                           // Uncaught ReferenceError: localLet1 is not defined
}
globalFunction2Hoisted();


console.log("");
console.log("****************************************************************");
console.log("Topic - Shadowing");
console.log("****************************************************************");

function globalFunction3() {
    let localLet1 = "localLet1";
    if (true) {
        let localLet1 = "blockLocalLet1";
    }
    console.log("localLet1 is " + localLet1);                           // localLet1
}
globalFunction3();


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
console.log("Topic - Basic Types");
console.log("****************************************************************");

let letBoolean: boolean;
let letBooleanTrue: boolean = true;
let letBooleanFalse: boolean = false;

let letNumber: number;
let letNumber0: number = 0;
let letNumber5: number = 5;

let letString: string;
let letStringEmpty: string = "";
let letStringHello: string = "Hello";
let letStringFalse: string = "False";

console.log("letBoolean is " + letBoolean);
console.log("letNumber is " + letNumber);
console.log("letString is " + letString);


console.log("");
console.log("****************************************************************");
console.log("Topic - Truthy Falsy Values");
console.log("****************************************************************");

console.log("Boolean(letBoolean) is " + Boolean(letBoolean));
console.log("Boolean(letBooleanTrue) is " + Boolean(letBooleanTrue));
console.log("Boolean(letBooleanFalse) is " + Boolean(letBooleanFalse));
console.log("Boolean(letNumber0) is " + Boolean(letNumber0));
console.log("Boolean(letNumber5) is " + Boolean(letNumber5));
console.log("Boolean(letStringEmpty) is " + Boolean(letStringEmpty));
console.log("Boolean(letStringHello) is " + Boolean(letStringHello));
console.log("Boolean(letStringFalse) is " + Boolean(letStringFalse));


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
console.log("Topic - Type Assertion");
console.log("****************************************************************");

let assertAny1: any = "string";
let assertString1 = <string>assertAny1;
let assertString2 = assertAny1 as string;

// To demonstrate, show intellisense for each of the assert variables
// Mostly used with objects and polymorphic behavior

console.log("typeof assertAny1 is " + typeof assertAny1);
console.log("typeof assertString1 is " + typeof assertString1);
console.log("typeof assertString2 is " + typeof assertString2);


console.log("");
console.log("****************************************************************");
console.log("Topic - Understanding Boxing and UnBoxing");
console.log("****************************************************************");

let valType: number = 0;
valType++;
console.log("valType is " + valType);

let refType: Object = valType;                                          // Boxing
// refType++;                                                              // An arithmetic operand must be of type 'any', 'number', or an enum type
console.log("refType is " + refType);

let newValType: number = Number(refType.toString());                    // Unboxing
newValType++;
console.log("newValType is " + newValType);
