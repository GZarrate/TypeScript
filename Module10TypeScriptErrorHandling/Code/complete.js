/*
 * Module 10 - TypeScript Error Handling
 * Topics:
 *      Creating Error Interfaces and Classes
 *      throw, try, catch, finally in TypeScript
 */
console.log("Module 10 - TypeScript Error Handling complete.js loaded...");
var Complete;
(function (Complete) {
    console.log("");
    console.log("****************************************************************");
    console.log("Topic - throw, try, catch, finally in TypeScript");
    console.log("****************************************************************");
    class ExceptionHandling {
        throwAString() { throw "Boom!"; }
        ;
        // Error Types: Error, EvalError, RangeError, ReferenceError, SyntaxError, TypeError, URIError
        throwAnError() { throw new Error("Boom!"); }
        tryCatchFinally() {
            try {
                throw new Error("Exception in try block.");
            }
            catch (error) {
                console.log(error);
                console.log(error.name);
                console.log(error.message);
                console.log(error.stack); // Non-Standard
            }
            finally {
                console.log("exceptionHandling.tryCatchFinally() finished.");
            }
        }
        tryFinally() {
            try {
                throw new Error("Exception in try block.");
            }
            finally {
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
    class AJAXExecption {
        constructor(name, message, uriCalled, innerException) {
            this.name = name;
            this.message = message;
            this.uriCalled = uriCalled;
            this.innerException = innerException;
            this.stack = (new Error(message)).stack;
        }
    }
    let innerException = { name: "Exception", message: "Exception" };
    //throw exception;
    // throw new AJAXExecption("AJAXException", "AJAX Exception", 
    //                         "http://localhost:8080/api/data");
    // throw new AJAXExecption("AJAXException", "AJAX Exception", 
    //                         "http://localhost:8080/api/data", innerException);
})(Complete || (Complete = {}));
