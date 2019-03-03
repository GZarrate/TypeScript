/*
 * Module 04 - Generics
 * Topics:
 *      Writing and Using a generic type
 */
console.log("Module 04 - Generics complete.js loaded...");
console.log("");
console.log("****************************************************************");
console.log("Topic - Writing and Using a generic type");
console.log("****************************************************************");
function genericsFunction1(arg) {
    console.log("typeof arg is " + typeof arg);
    return arg;
}
genericsFunction1(true);
genericsFunction1(5);
genericsFunction1("string");
// genericsFunction1<number>("five");                                       // Argument of type '"five"' is not assignable to parameter of type 'number'
//# sourceMappingURL=complete.js.map