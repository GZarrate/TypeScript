/*
 * Module 10 - TypeScript Error Handling
 * Topics:
 *      Creating Error Interfaces and Classes
 *      throw, try, catch, finally in TypeScript
 */
console.log("Module 10 - TypeScript Error Handling complete.js loaded...");

console.log("");
console.log("****************************************************************");
console.log("Topic - throw, try, catch, finally in TypeScript");
console.log("****************************************************************");

class ExceptionHandling {
    public throwAString() { throw "Boom!"; }

    // Error Types: Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError
    public throwAnError() { throw new Error("Boom!"); }

    public tryCatchFinally() {
        try {
            throw new Error("Exception in try block.");
        } catch (error) {
            console.log(error);
            console.log(error.name);
            console.log(error.message);
            console.log(error.stack);       // Non-Standard
        } finally {
            console.log("exceptionHandling.tryCatchFinally() finished.");
        }
    }

    public tryFinally() {
        try {
            throw new Error("Exception in try block.");
        } finally {
            console.log("exceptionHandling.tryFinally() finished.");
        }
    }
}

let exceptionHandling = new ExceptionHandling();
// exceptionHandling.throwAString();                                             // Just the string, not very helpful
// exceptionHandling.throwAnError();                                             // Has stack info
// exceptionHandling.tryCatchFinally();                                          // No exception reaches compiler, and finally displays after catch
// exceptionHandling.tryFinally();                                               // Exception is never caught, so app stops but finally happens first


console.log("");
console.log("****************************************************************");
console.log("Topic - Creating Error Interfaces and Classes");
console.log("****************************************************************");

interface IExceptionInterface {
    name: string;
    message: string;
}

class AJAXExecption {
    public readonly stack: string;
    constructor(public name: string, public message: string,
                public uriCalled: string,
                public innerException?: IExceptionInterface) {
        this.stack = (new Error(message)).stack;
    }
}

// let innerException: IExceptionInterface = { name: "Exception", message: "Exception" };
// throw new AJAXExecption("AJAXException", "AJAX Exception",
//                         "http://localhost:8080/api/data");
// throw new AJAXExecption("AJAXException", "AJAX Exception",
//                         "http://localhost:8080/api/data", innerException);
