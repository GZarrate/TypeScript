/*
 * Module 11 - TypeScript and this Keyword
 * Topics:
 *      Catching incorrect uses of this keyword
 *      noImplicitThis flag
 *      this Parameters
 */
console.log("Module 11 - TypeScript and this Keyword complete.js loaded...");
console.log("");
console.log("****************************************************************");
console.log("Topic - Catching incorrect uses of this keyword");
console.log("****************************************************************");
// Note: this can vary depending on how it is called
function thisFunction() { console.log(this); }
console.log("thisFunction()");
thisFunction(); // Window {...} since the window object or global scope made the call to thisFunction()
let thisObjectLiteral1 = { thisFunction() { console.log(this); } };
console.log("");
console.log("thisObjectLiteral1.thisFunction()");
thisObjectLiteral1.thisFunction(); // Object{thisFunction: function} since obj invoked the function
// All pretty simple so far
// But what about this...
let thisFunctionRef = thisObjectLiteral1.thisFunction;
console.log("");
console.log("thisFunctionRef()");
thisFunctionRef(); // Window {...} since it was called from the global scope again!
// Note: This can happen with callbacks but probably different object scopes not global
// or this...
let thisObjectLiteral2 = {
    outerFunction() {
        console.log(this); // Object{outerFunction: function}
        function nestedFunction() { console.log(this); } // Window{...}
        nestedFunction();
    },
};
console.log("");
console.log("thisObjectLiteral2.outerFunction()");
thisObjectLiteral2.outerFunction(); // This happens because JS loses scope of this when in a nested function
// Note: This happens a lot with events, setTimeout(), or closures
// Fixes
let thisObjectLiteral3 = {
    outerFunction() {
        console.log(this); // Object{outerFunction: function}
        // This is the important bit
        const that = this;
        function nestedFunction() { console.log(that); } // Object{outerFunction: function}
        nestedFunction();
    },
};
console.log("");
console.log("thisObjectLiteral3.outerFunction()");
thisObjectLiteral3.outerFunction();
let thisObjectLiteral4 = {
    outerFunction() {
        console.log(this); // Object{outerFunction: function}
        function nestedFunction() { console.log(this); } // Object{outerFunction: function}
        // These are the important bits
        // Note: call() and apply() are identical except call() takes comma delimited list of function arguments
        nestedFunction.call(this);
        // Note: and apply() takes an array of function arguments for 2nd parameter
        nestedFunction.apply(this);
        // Note: bind() does not call the function immediately, but will use that same this scope for every future call
        const bindNestedFunction = nestedFunction.bind(this);
        bindNestedFunction();
    },
};
console.log("");
console.log("thisObjectLiteral4.outerFunction()");
thisObjectLiteral4.outerFunction();
let thisObjectLiteral5 = {
    outerFunction() {
        console.log(this); // Object{outerFunction: function}
        // Arrow Function has no this of its own
        const nestedFunction = () => { console.log(this); }; // Object{outerFunction: function}
        nestedFunction();
    },
};
console.log("");
console.log("thisObjectLiteral5.outerFunction()");
thisObjectLiteral5.outerFunction();
console.log("");
console.log("****************************************************************");
console.log("Topic - noImplicitThis flag");
console.log("****************************************************************");
// Set "noImplicitThis": true in tsconfig.json
// Review warnings now
console.log("");
console.log("****************************************************************");
console.log("Topic - this Parameters");
console.log("****************************************************************");
let thisObjectLiteral6 = {
    outerFunction() {
        console.log(this); // Object{outerFunction: function}
        // Note the this parameter
        function nestedFunction() {
            console.log(this); // Object{outerFunction: function}
        }
        nestedFunction.call(this);
        nestedFunction.apply(this);
        const bindNestedFunction = nestedFunction.bind(this);
        bindNestedFunction();
    },
};
console.log("");
console.log("thisObjectLiteral6.outerFunction()");
thisObjectLiteral6.outerFunction();
// Set "noImplicitThis": false in tsconfig.json
// To eliminate earlier compile warnings
