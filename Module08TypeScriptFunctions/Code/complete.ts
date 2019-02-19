/*
 * Module 08 - TypeScript Functions
 * Topics: 
 *      function Declarations
 *      Arrow Functions
 *      Typing Functions
 *      Function Declarations vs Function Expressions
 *      Optional and Default Parameters
 *      Rest Parameters with Spread Syntax
 *      CallBack Functions
 *      void
 *      never Types
 *      Function Overloads
 */
console.log("Module 08 - TypeScript Functions complete.js loaded...");


namespace Complete {

    console.log("");
    console.log("****************************************************************");
    console.log("Topic - function Declarations");
    console.log("****************************************************************");

    function functionDeclaration1(param1, param2) {
        return param1 + param2;
    }
    console.log(`functionDeclaration1(1, 2) is ${functionDeclaration1(1, 2)}`);
    console.log(`functionDeclaration2("1", "2") is ${functionDeclaration1("1", "2")}`);


    console.log("");
    console.log("****************************************************************");
    console.log("Topic - Arrow Functions");
    console.log("****************************************************************");

    let arrowFunction1 = (param1, param2) => param1 + param2;
    console.log(`arrowFunction1(1, 2) is ${arrowFunction1(1, 2)}`);
    console.log(`arrowFunction1("1", "2") is ${arrowFunction1("1", "2")}`);


    console.log("");
    console.log("****************************************************************");
    console.log("Topic - Typing Functions");
    console.log("****************************************************************");

    function functionDeclaration2(param1: number, param2: number) : number {
        return param1 + param2;
    }
    console.log(`functionDeclaration2(1, 2) is ${functionDeclaration2(1, 2)}`);
    //console.log(`functionDeclaration2("1", "2") is ${functionDeclaration2("1", "2")}`);


    console.log("");
    console.log("****************************************************************");
    console.log("Topic - Function Declarations vs Function Expressions");
    console.log("****************************************************************");

    // Reminder, discuss affect of hoisting on function expressions
    let functionExpression1 = function(param1: number, param2: number) : number {
        return param1 + param2;
    }
    console.log(`functionExpression1(1, 2) is ${functionExpression1(1, 2)}`);


    console.log("");
    console.log("****************************************************************");
    console.log("Topic - Optional and Default Parameters");
    console.log("****************************************************************");

    // Typescript, unlike JavaScript, requires the correct number of parameters
    function functionDeclaration3(param1: number, param2: number): number {
        return param1 + param2;
    }

    //console.log(`functionDeclaration3(1) is ${functionDeclaration3(1)}`);               // [ts] Expected 2 arguments, but got 1
    //console.log(`functionDeclaration3(1, 2, 3) is ${functionDeclaration3(1, 2, 3)}`);   // [ts] Expected 2 arguments, but got 3
    console.log(`functionDeclaration3(1, 2) is ${functionDeclaration3(1, 2)}`);

    // Optional parameter with a ?
    function optionalParameterFunction1(param1: number, param2?: number): number {
        return param1 + param2;
    }
    console.log(`optionalParameterFunction1(1) is ${optionalParameterFunction1(1)}`);               
    //console.log(`optionalParameterFunction1(1, 2, 3) is ${optionalParameterFunction1(1, 2, 3)}`);   // [ts] Expected 2 arguments, but got 3
    console.log(`optionalParameterFunction1(1, 2) is ${optionalParameterFunction1(1, 2)}`);

    // Default parameter
    function defaultParameterFunction1(param1: number, param2 = 0): number {
        return param1 + param2;
    }
    console.log(`defaultParameterFunction1(1) is ${defaultParameterFunction1(1)}`);               
    //console.log(`defaultParameterFunction1(1, 2, 3) is ${defaultParameterFunction1(1, 2, 3)}`);   // [ts] Expected 2 arguments, but got 3
    console.log(`defaultParameterFunction1(1, 2) is ${defaultParameterFunction1(1, 2)}`);

    // Default parameter - note type inferance means we do not need a type annotaton for param2
    function defaultParameterFunction2(param1: number, param2 = 0): number {
        return param1 + param2;
    }
    // console.log(`defaultParameterFunction2("1") is ${defaultParameterFunction2("1")}`);     // Argument of type '"1"' is not assignable to parameter of type 'number'         


    console.log("");
    console.log("****************************************************************");
    console.log("Topic - Rest Parameters with Spread Syntax");
    console.log("****************************************************************");

    // Rest syntax
    function restFunction1(...operands: number[]) {
        return operands.reduce((previous, current) => previous + current);
    }
    console.log(`restFunction1(2, 4, 6) is ${restFunction1(2, 4, 6)}`);


    console.log("");
    console.log("****************************************************************");
    console.log("Topic - CallBack Functions");
    console.log("****************************************************************");

    function callBackCallerFunction1(callBackFunction: () => string) {
        console.log(`callbackFunction() returned ${callBackFunction()}`);
    }
    callBackCallerFunction1(function() { return "call me"});
    callBackCallerFunction1(() => "call me");
    //callBackCallerFunction1("call me");                                   // [ts] Argument of type 'call me' not assignable to to parameter of type () => string

    function callBackCallerFunction2(callBackFunction: (string) => string) {
        let someData = " maybe";
        console.log(`callbackFunction(someData) returned ${callBackFunction(someData)}`);
    }
    callBackCallerFunction2(function(data) { return "call me" + data});
    callBackCallerFunction2((data) => "call me" + data);
    callBackCallerFunction2(function() { return "call me"});                // Works because JavaScript parameters are optional, and this call happens at run-time


    console.log("");
    console.log("****************************************************************");
    console.log("Topic - void");
    console.log("****************************************************************");

    function voidFunction1(param1: string, param2: string): void {
        console.log(`voidFunction1 received param1 = ${param1} and param2 = ${param2}`);
    //    return true;                                                             // [ts] Type 'true' not assignable to type 'void'
        // return null;                                                        // Works
        return undefined;                                                   // Also Works
    }
    voidFunction1("Hello", "World");


    console.log("");
    console.log("****************************************************************");
    console.log("Topic - never Types");
    console.log("****************************************************************");

    /*function neverFunction1(param1: string, param2: string): never {               // [ts] A function returning 'never' cannot have a reachable end point
        console.log(`neverFunction1 received param1 = ${param1} and param2 = ${param2}`);
    //    return true;                                                             // [ts] Type 'true' not assignable to type 'never'
    //    return null;                                                             // [ts] Type 'null' not assignable to type 'never'
    //    return undefined;                                                        // [ts] Type 'undefined' not assignable to type 'never'

        // Exception to never allow function to finish
        throw "Function never gets to end of code block";
        // Could also use an infinite loop to achieve this
    }
    neverFunction1("Never", "Mind");*/


    console.log("");
    console.log("****************************************************************");
    console.log("Topic - Function Overloads");
    console.log("****************************************************************");

    function functionOverloads1(param1: string, param2: string): string;
    function functionOverloads1(param1: number, param2: number): number;
    // The actual function with code below is not callable, just a pattern for previous overload signatures
    function functionOverloads1(param1: any, param2: any): any {
        return param1 + param2;
    }
    console.log(`functionOverloads1("1", "2") is ${functionOverloads1("1", "2")}`);
    console.log(`functionOverloads1(1, 2) is ${functionOverloads1(1, 2)}`);
    //console.log(`functionOverloads1("1", 2) is ${functionOverloads1("1", 2)}`);             // [ts] Argument of type "1" is not assignable to parameter of type 'number'
    //console.log(`functionOverloads1(true, false) is ${functionOverloads1(true, false)}`);   // [ts] Argument of type "true" is not assignable to parameter of type 'number'

}