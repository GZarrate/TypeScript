/*
 * Module 09 - TypeScript Interfaces, Classes, and Objects
 * Topics:
 *      Interfaces
 *      Duck Typing
 *      Optional Properties
 *      Readonly Properties
 *      Function Types
 *      Enum Types
 *      Class Types
 *      Access Modifiers
 *      Getters and Setters
 *      Parameter Decorators
 *      Static Types
 *      Abstract Types
 *      Generics and Classes
 *      Object Spread and Destructuring
 */
console.log("Module 09 - TypeScript Interfaces, Classes, and Objects complete.js loaded...");
console.log("");
console.log("****************************************************************");
console.log("Topic - Interfaces");
console.log("****************************************************************");
let name11 = { lastName: "Flintstone", firstName: "Fred" };
function displayName(varName, name) {
    console.log(`${varName} is:`);
    console.log(name);
}
displayName("name11", name11);
console.log("");
console.log("****************************************************************");
console.log("Topic - Duck Typing");
console.log("****************************************************************");
// Excess Property Checking (Applies to Object Notation)
// let name12: INameInterface = { firstName: "Barney", lastName: "Rubble", age: 25 };                   // [TS] Type is not assignabe to type 'INameInterface'
let name12 = { firstName: "Barney", lastName: "Rubble", age: 25 }; // Fixed with a type assertion
displayName("name12", name12);
// let name13: INameInterface = { age: 25 };                                                            // [TS] Type is not assignabe to type 'INameInterface'
// let name13: INameInterface = { age: 25 } as INameInterface;                                          // [TS] Type cannot be converted to type 'INameInterface'
let name14 = { firstName: "Barney", lastName: "Rubble", age: 25 };
displayName("name14", name14); // Excess Property Checking only applies to object literals
let name15 = { age: 25 };
// displayName("name15", name15);                                                                      // [TS] Argument of type is not assignable to parameter of type 'INameInterface'
let name16 = { age: 25 };
displayName("name16", name16); // Ok because of any type
let name17 = { firstName: "Barney", lastName: "Rubble", age: 25 };
displayName("name17", name17);
console.log("");
console.log("****************************************************************");
console.log("Topic - Optional Properties");
console.log("****************************************************************");
let name18 = { firstName: "Barney", lastName: "Rubble" };
displayName("name18", name18);
let name19 = { firstName: "Barney", lastName: "Rubble", age: 25 };
displayName("name19", name19);
console.log("");
console.log("****************************************************************");
console.log("Topic - Readonly Properties");
console.log("****************************************************************");
let name20 = { firstName: "Barney", lastName: "Rubble", age: 25, id: 123 };
// name20.id = 456;                                                                                    // [TS] Cannot assign to 'id' because it is a constant or a readonly property
displayName("name20", name20);
console.log("");
console.log("****************************************************************");
console.log("Topic - Function Types");
console.log("****************************************************************");
// functionExpression11 infers its type
let functionExpression11 = function (param1, param2) { return param1 + param2; };
console.log(`functionExpression11(1, 2) is ${functionExpression11(1, 2)}`);
// functionExpression12's type is specified, => is to avoid too many colons confusion
let functionExpression12 = function (param1, param2) { return param1 + param2; };
console.log(`functionExpression12(1, 2) is ${functionExpression12(1, 2)}`);
let functionType1 = function (param1, param2) { return param1 + param2; };
console.log(`functionType1(1, 2) is ${functionType1(1, 2)}`);
// Parameter names can be different
let functionType2 = function (p1, p2) { return p1 + p2; };
console.log(`functionType2(1, 2) is ${functionType2(1, 2)}`);
// And types can be inferred from interface
let functionType3 = function (p1, p2) { return p1 + p2; };
console.log(`functionType3(1, 2) is ${functionType3(1, 2)}`);
console.log("");
console.log("****************************************************************");
console.log("Topic - Enum Types");
console.log("****************************************************************");
// Simple enum is zero based
var numberEnum1;
(function (numberEnum1) {
    numberEnum1[numberEnum1["Zero"] = 0] = "Zero";
    numberEnum1[numberEnum1["One"] = 1] = "One";
})(numberEnum1 || (numberEnum1 = {}));
console.log(`numberEnum1.Zero is ${numberEnum1.Zero}`);
console.log(`numberEnum1.One is ${numberEnum1.One}`);
console.log(`numberEnum1.Two is ${numberEnum1.Two}`); // undefined
// Can specify starting value
var numberEnum2;
(function (numberEnum2) {
    numberEnum2[numberEnum2["One"] = 1] = "One";
    numberEnum2[numberEnum2["Two"] = 2] = "Two";
})(numberEnum2 || (numberEnum2 = {}));
console.log(`numberEnum2.One is ${numberEnum2.One}`);
console.log(`numberEnum2.Two is ${numberEnum2.Two}`);
// Can add more values to existing enum
(function (numberEnum1) {
    numberEnum1[numberEnum1["Two"] = 2] = "Two";
})(numberEnum1 || (numberEnum1 = {}));
console.log(`numberEnum1.Zero is ${numberEnum1.Zero}`);
console.log(`numberEnum1.One is ${numberEnum1.One}`);
console.log(`numberEnum1.Two is ${numberEnum1.Two}`);
// Can use other types as well
var stringEnum1;
(function (stringEnum1) {
    stringEnum1["Zero"] = "Zero";
    stringEnum1["One"] = "One";
})(stringEnum1 || (stringEnum1 = {}));
console.log(`stringEnum1.Zero is ${stringEnum1.Zero}`);
console.log(`stringEnum2.One is ${stringEnum1.One}`);
console.log("");
console.log("****************************************************************");
console.log("Topic - Class Types");
console.log("****************************************************************");
console.log("****************************************************************");
console.log("Topic - Access Modifiers");
console.log("****************************************************************");
console.log("****************************************************************");
console.log("Topic - Getters and Setters");
console.log("****************************************************************");
class Person1 {
    constructor(id, firstName, lastName, age) {
        this._id = id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    // Must use this to access properties
    // [TS] Cannot find name 'firstName', Did you mean this instance member 'this.firstName'?
    // logPerson() { console.log(`${firstName} ${lastName} is ${age} years old.`); }
    logPerson() { console.log(`${this._id}: ${this.firstName} ${this.lastName} is ${this.age} years old.`); }
    privateMethod() { }
    get id() { return this._id; }
    set id(id) {
        if (id > 0) {
            this._id = id;
        }
        else {
            console.log("Person1: id must be positive.");
        }
    }
}
let person1 = new Person1(123, "Peter", "Griffin", 43);
person1.logPerson();
// Access Modifiers
// person1._id = 456;                                                            // [TS] Property '_id' is private and only accessible within class 'Person1'
person1.age++;
person1.logPerson();
// person1.privateMethod();                                                      // [TS] Property 'privateMethod' is private and only accessible within class 'Person1'
// Getters and Setters
person1.id = 456;
person1.id = -1;
person1.logPerson();
console.log("");
console.log("****************************************************************");
console.log("Topic - Parameter Decorators");
console.log("****************************************************************");
// View JS file to see differences between previous class
class Person2 {
    constructor(_id, firstName, lastName, age) {
        this._id = _id;
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    logPerson() { console.log(`${this._id}: ${this.firstName} ${this.lastName} is ${this.age} years old.`); }
    get id() { return this._id; }
    set id(id) {
        if (id > 0) {
            this._id = id;
        }
        else {
            console.log("Person1: id must be positive.");
        }
    }
}
let person2 = new Person1(789, "Lois", "Griffin", 42);
person2.logPerson();
console.log("");
console.log("****************************************************************");
console.log("Topic - Static Types");
console.log("****************************************************************");
class StaticClass {
    constructor(instanceNum, staticNum) {
        this.instanceNum = instanceNum;
        // this.staticNum = staticNum;                                            // [TS] Property 'staticNum' does not exist on type 'StaticClass'
        StaticClass.staticNum = staticNum;
    }
    // constructor(public instanceNum, static public staticNum) {}
    logNums(varName) {
        console.log(`${varName}: instanceNum is ${this.instanceNum}`);
        console.log(`${varName}: staticNum is ${StaticClass.staticNum}`);
    }
}
let staticClass1 = new StaticClass(1, 1);
let staticClass2 = new StaticClass(2, 2);
staticClass1.logNums("staticClass1");
staticClass2.logNums("staticClass2");
StaticClass.staticNum = 3;
staticClass1.logNums("staticClass1");
staticClass2.logNums("staticClass2");
console.log("");
console.log("****************************************************************");
console.log("Topic - Abstract Types");
console.log("****************************************************************");
// We will revisit in Module 13 - Prototypical Inheritance
class AbstractClass {
    constructor(prop1, prop2) {
        this.prop1 = prop1;
        this.prop2 = prop2;
    }
}
// let abstractClass1 = new AbstractClass("Prop1", "Prop2");                      // [TS] Cannot create an instance on an abstract class
console.log("");
console.log("****************************************************************");
console.log("Topic - Generics and Classes");
console.log("****************************************************************");
class GenericsClass {
    constructor(operand1, operand2) {
        this.operand1 = operand1;
        this.operand2 = operand2;
    }
}
let genericsClass1 = new GenericsClass(1, 2);
let genericsClass2 = new GenericsClass("1", "2");
// let genericsClass3 = new GenericsClass<number>(1, "2");                        // [TS] Argument of type '"2"' is not assignablbe to parameter of type 'number'
console.log("");
console.log("****************************************************************");
console.log("Topic - Object Spread and Destructuring");
console.log("****************************************************************");
let spreadObject1 = { prop1: "value1", prop2: "value2" };
console.log("spreadObject1 is");
console.log(spreadObject1);
let spreadObject2 = Object.assign({}, spreadObject1, { prop3: "value3", method1() { console.log("method1() called"); } });
console.log("spreadObject2 is");
console.log(spreadObject2);
// Properties overwrite on conflict and enumerable properties / methods like method1() are spread
let spreadObject3 = Object.assign({}, spreadObject2, { prop3: "newValue3" });
console.log("spreadObject3 is");
console.log(spreadObject3);
spreadObject3.method1();
// But normal class methods are not enumerable, so do not spread
class SpreadClass4 {
    constructor() {
        this.prop4 = "prop4";
    }
    method4() { console.log("method4() called"); }
}
let spreadObject4 = new SpreadClass4();
let spreadObject5 = Object.assign({}, spreadObject4);
console.log("spreadObject5 is");
console.log(spreadObject5);
// spreadObject5.method4();                                                       // [TS] Property 'method4' does not exist on type
// Object Destructuring
let { prop1, prop2, prop3, method1 } = spreadObject3;
console.log(`prop1 is ${prop1}`);
console.log(`prop2 is ${prop2}`);
console.log(`prop3 is ${prop3}`);
method1();
// Renaming properties during Destructuring
let { prop1: destructureProp1, prop2: destructureProp2, prop3: destructureProp3, method1: destructureMethod1 } = spreadObject3;
console.log(`destructureProp1 is ${destructureProp1}`);
console.log(`destructureProp2 is ${destructureProp2}`);
console.log(`destructureProp3 is ${destructureProp3}`);
destructureMethod1();
//# sourceMappingURL=complete.js.map