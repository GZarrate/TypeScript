/*
 * Module 05 - TypeScript Variables and Scope
 * Topics:
 *      var, let, const keywords
 *      Global vs Function Scope
 *      Function vs Block Level Scope
 *      Hoisting
 *      Shadowing
 *      Understanding Boxing and UnBoxing
 */
console.log("Module 05 - TypeScript Variables and Scope complete.js loaded...");
console.log("");
console.log("****************************************************************");
console.log("Topic - var, let, const keywords");
console.log("****************************************************************");
var globalVar1 = "globalVar1";
console.log("globalVar1 is " + globalVar1); // globalVar1
// JavaScript is ok with this, TypeScript doesn't like this
// globalVar2 = "globalVar2";                                              // [ts] Cannot find name 'globalVar2'. Did you mean globalVar1?
var globalVar1 = "new globalVar1"; // JavaScript allows redecaring variables with var keyword
console.log("globalVar1 is " + globalVar1); // new globalVar1
let globalLet1 = "globalLet1";
console.log("globalLet1 is " + globalLet1); // globalLet1
// let globalLet1 = "new globalLet1";                                      // [ts] Cannot redeclare block-scoped variable 'globalLet1'
const globalConst1 = "globalConst1";
// globalConst1 = "new globalConst1";                                      // [ts] Cannot assign to 'globalConst1' because it is a constant
console.log("");
console.log("****************************************************************");
console.log("Topic - Global vs Function Scope");
console.log("****************************************************************");
function globalFunction1() {
    console.log("globalVar1 in globalFunction() is " + globalVar1); // globalVar1
    var localVar1 = "localVar1";
    console.log("localVar1 in globalFunction() is " + localVar1); // localVar1
    let localLet1 = "localLet1";
    console.log("localLet1 in globalFunction() is " + localLet1); // localLet1
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
console.log("blockVar1 is " + blockVar1); // blockVar1 is global
// console.log("blockLet1 is " + blockLet1);                               // Uncaught ReferenceError: blockLet1 is not defined
function globalFunction2() {
    if (true) {
        var localVar1 = "localVar1";
        let localLet1 = "localLet1";
    }
    console.log("localVar1 is " + localVar1); // localVar1 is function level via hoisting
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
    console.log("localVar1 is " + localVar1); // localVar1 is function level via hoisting
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
    console.log("localLet1 is " + localLet1); // localLet1
}
globalFunction3();
console.log("");
console.log("****************************************************************");
console.log("Topic - Understanding Boxing and UnBoxing");
console.log("****************************************************************");
let valType = 0;
valType++;
console.log("valType is " + valType);
let refType = valType; // Boxing
// refType++;                                                              // An arithmetic operand must be of type 'any', 'number', or an enum type
console.log("refType is " + refType);
let newValType = Number(refType.toString()); // Unboxing
newValType++;
console.log("newValType is " + newValType);
//# sourceMappingURL=complete.js.map