/*
 * Module 13 - TypeScript Prototypical Inheritance
 * Topics:
 *      Extending Interfaces
 *      Interfaces Extending Classes
 *      Extending Classes
 *      Hybrid Types
 *      Intersection Types
 *      Union Types
 *      Type Guards
 */
console.log("Module 13 - TypeScript Prototypical Inheritance complete.js loaded...");

console.log("");
console.log("****************************************************************");
console.log("Topic - Extending Interfaces");
console.log("****************************************************************");

interface IBaseInterface { firstName: string; lastName: string; }
interface IExtendsInterface extends IBaseInterface { displayName(); }
class ExtendsClass implements IExtendsInterface {
    constructor(public firstName, public lastName) {}
    public displayName() { console.log(`Name is ${this.firstName} ${this.lastName}`); }
}
let extendsClass1 = new ExtendsClass("Stewie", "Griffin");
extendsClass1.displayName();


console.log("");
console.log("****************************************************************");
console.log("Topic - Interfaces Extending Classes");
console.log("****************************************************************");

interface IClassExtendsInterface extends ExtendsClass { age?: number; }
class ExtendsClass2 implements IClassExtendsInterface {
    constructor(public firstName, public lastName, public age?) {}
    public displayName() {
        console.log(`${this.firstName} ${this.lastName} is ${this.age} years old.`);
    }
}
let extendsClass2 = new ExtendsClass2("Stewie", "Griffin", 1);
extendsClass2.displayName();


console.log("");
console.log("****************************************************************");
console.log("Topic - Extending Classes");
console.log("****************************************************************");

class ExtendsClass3 extends ExtendsClass implements IClassExtendsInterface { }
let extendsClass3 = new ExtendsClass3("Stewie", "Griffin");
extendsClass3.displayName();


console.log("");
console.log("****************************************************************");
console.log("Topic - Hybrid Types");
console.log("****************************************************************");

// Hybrid Types allow interfaces to contain properties, function declarations, indexers as well as methods
interface IHybridInterface {
    (param1: number, param2: number): number;
    factor: number;
    displayResult();
}

function HybridFactory(): IHybridInterface {
    const hybrid = function(p1, p2) { this.p1 = p1; this.p2 = p2; } as IHybridInterface;
    hybrid.factor = 10;
    hybrid.displayResult = () => { console.log((this.p1 + this.p2) * hybrid.factor); };
    return hybrid;
}

let hybrid1 = HybridFactory();
hybrid1(1, 3);
hybrid1.displayResult();


console.log("");
console.log("****************************************************************");
console.log("Topic - Intersection Types");
console.log("****************************************************************");

interface IPersonInterface { firstName: string; lastName: string; }
interface ILoggableInterface { log(); }
type LoggablePersonType = IPersonInterface & ILoggableInterface;
let loggablePerson1: LoggablePersonType = {
    firstName: "Brian",
    lastName: "Griffin",
    log: () => { console.log(`${loggablePerson1.firstName} ${loggablePerson1.lastName}`); },
};
loggablePerson1.log();


console.log("");
console.log("****************************************************************");
console.log("Topic - Union Types");
console.log("****************************************************************");

let stringnum: string | number = "Ten";
console.log(`typeof stringnum is ${typeof stringnum}`);
stringnum = 10;
console.log(`typeof stringnum is ${typeof stringnum}`);
// stringnum = true;                                                           // Type 'true' is not assignable to type 'string | number'


console.log("");
console.log("****************************************************************");
console.log("Topic - Type Guards");
console.log("****************************************************************");

function flip(): string | number {
    if (Math.floor(Math.random() * 2)) {
        return "0";
    } else {
        return "Heads";
    }
}
let value: string | number = flip();

if ((value as string).length) {
    console.log(`length of value is ${(value as string).length}`);
} else {
    console.log(`length of value is ${(value as number).toString().length})}`);
}

function typeGuard(param1: string | number): param1 is string {
    return typeof param1 === "string";
}

if (typeGuard(value)) {
    console.log(`length of value is ${value.length}`);
} else {
    console.log(`length of value is ${value.toString().length}`);
}
