/*
 * Module 07 - TypeScript Arrays and Collection Types
 * Topics:
 *      Array Types
 *      Iterating Across All Array Elements
 *      for of Loops
 *      Tuple Types
 *      Array Spread and Destructuring
 *      Generics and Arrays
 */
console.log("Module 07 - TypeScript Arrays and Collection Types complete.js loaded...");
console.log("");
console.log("****************************************************************");
console.log("Topic - Array Types");
console.log("Topic - Iterating Across All Array Elements");
console.log("Topic - for of Loops");
console.log("****************************************************************");
let numberArray1 = [1, 2, 3];
let numberArray2 = [1, 2, 3];
let stringArray1 = ["One", "Two", "Three"];
let stringArray2 = ["One", "Two", "Three"];
console.log(`numberArray1 is ${numberArray1}`);
for (let i = 0; i < numberArray2.length; i++) {
    console.log(`numberArray2[${i}] is ${numberArray2[i]}`);
}
for (const key in stringArray1) {
    // if statement used to avoid iterating over inherited properties from Object's prototype
    if (stringArray1.hasOwnProperty(key)) {
        const val = stringArray1[key];
        console.log(`stringArray1[${key}] is ${val}`);
    }
}
for (const val of stringArray2) {
    console.log(`stringArray2 has ${val}`);
}
console.log("");
console.log("****************************************************************");
console.log("Topic - Tuple Types");
console.log("****************************************************************");
let tuple1 = ["zero", 0];
console.log(`tuple1 is ${tuple1}`);
// tuple1 = [1, "one"];                                                        // [ts] Type '[number, string]' is not assignable to type '[string, number]'
let tuple2 = [true, "two", 2];
console.log(`tuple2 is ${tuple2}`);
console.log("");
console.log("****************************************************************");
console.log("Topic - Array Spread and Destructuring");
console.log("****************************************************************");
// Rest syntax
function sumFunction1(...operands) {
    let sum = 0;
    for (const operand of operands) {
        sum += operand;
    }
    return sum;
}
console.log(`sumFunction1(2, 4, 6) is ${sumFunction1(2, 4, 6)}`);
// Spread syntax
console.log(`sumFunction1(...numberArray1) is ${sumFunction1(...numberArray1)}`);
// Destructuring
let [one, two, three] = numberArray1;
console.log(`one is ${one}`);
console.log(`two is ${two}`);
console.log(`three is ${three}`);
[one, three] = [three, one];
console.log(`one is ${one}`);
console.log(`two is ${two}`);
console.log(`three is ${three}`);
console.log("");
console.log("****************************************************************");
console.log("Topic - Generics and Arrays");
console.log("****************************************************************");
function genericsFunction2(arg) {
    console.log("length of arg is " + arg.length);
    return arg;
}
function genericsFunction3(arg) {
    console.log("length of arg is " + arg.length);
    return arg;
}
genericsFunction2([true, false]);
genericsFunction2([1, 2, 3, 4, 5]);
genericsFunction3(["string1", "string2", "string3"]);
//# sourceMappingURL=complete.js.map