/*
 * Module 06 - TypeScript Code Blocks, Conditions, and Loops
 * Topics:
 *      Code Blocks
 *      Control of Flow Syntax in TypeScript
 */
console.log("Module 06 - TypeScript Code Blocks, Conditions, and Loops complete.js loaded...");
var Complete;
(function (Complete) {
    console.log("");
    console.log("****************************************************************");
    console.log("Topic - Code Blocks");
    console.log("****************************************************************");
    // Reminder:  Change tsconfig.json | compilerOptions | target: es5
    for (let i = 0; i < 3; i++) {
        console.log(`1: ${i}`);
        for (let i = 0; i < 2; i++) {
            console.log(`2: ${i}`);
        }
    }
    let arrow = (x) => x * x;
    console.log("");
    console.log("****************************************************************");
    console.log("Topic - Control of Flow Syntax in TypeScript");
    console.log("****************************************************************");
    // Reminder:  Change tsconfig.json | compilerOptions | target: es5
    let numbers = [1, 3, 5, 7, 11];
    for (const num of numbers) {
        console.log(num);
    }
    // Change target back to es6
})(Complete || (Complete = {}));
