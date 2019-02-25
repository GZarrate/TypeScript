/*
 * Module 14 - Promises and Asynchronous Functions
 * Topics:
 *      Using Promises
 *      Promise States
 *      Promise Methods
 *      Creating a Promise
 *      then() and catch() Methods
 *      Promise Chaining
 *      Handling Multiple Promises
 *      async Functions
 *      await Keyword
 *      Returned async Promise
 */
console.log("Module 14 - Promises and Asynchronous Functions complete.js loaded...");

console.log("");
console.log("****************************************************************");
console.log("Topic - Using Promises");
console.log("****************************************************************");
console.log("****************************************************************");
console.log("Topic - Promise States");
console.log("****************************************************************");
console.log("");
console.log("****************************************************************");
console.log("Topic - Promise Methods");
console.log("****************************************************************");
console.log("");
console.log("****************************************************************");
console.log("Topic - Creating a Promise");
console.log("****************************************************************");

// Creating a Promise
function asyncCallReturnPromiseLongSyntax(calledFrom: string): Promise<string> {
    function successOrFail(resolve, reject): any {
        if (Math.floor(Math.random() * 2) === 0) {
            resolve(`${calledFrom}: Async Function Successful!`);
        } else {
            reject(`${calledFrom}: Async Function Failed :(`);
        }
    }
    function pretendAsyncFunction(resolve, reject) {
        setTimeout(successOrFail(resolve, reject), 250);
    }
    const promise = new Promise<string>(pretendAsyncFunction);
    return promise;
}

function asyncCallReturnPromiseShortSyntax(calledFrom: string): Promise<string> {
    return new Promise<string>(function pretendAsyncFunction(resolve, reject) {
        setTimeout(() => {
            if (Math.floor(Math.random() * 2) === 0) {
                resolve(`${calledFrom}: Async Function Successful!`);
            } else {
                reject(`${calledFrom}: Async Function Failed :(`);
            }
        } , 250);
    });
}

console.log("");
console.log("****************************************************************");
console.log("Topic - then() and catch() Methods");
console.log("****************************************************************");

// Promise States are pending, fulfilled, or rejected
asyncCallReturnPromiseLongSyntax("then() and catch() Methods Long")
    .then((successMessage) => console.log(successMessage))
    .catch((errorMessage) => console.error(errorMessage));

asyncCallReturnPromiseShortSyntax("then() and catch() Methods Short")
    .then((successMessage) => console.log(successMessage))
    .catch((errorMessage) => console.error(errorMessage));


console.log("");
console.log("****************************************************************");
console.log("Topic - Promise Chaining");
console.log("****************************************************************");

// Promise.then() and Promise.catch() return a Promise, which allows for chaining
asyncCallReturnPromiseLongSyntax("Promise Chaining (Outer)")
    .then((successMessage) => {
        console.log(successMessage);
        return asyncCallReturnPromiseShortSyntax("Promise Chaining (Inner)");
    })
    .then((successMessage) => console.log(successMessage))
    .catch((errorMessage) => console.error(errorMessage));


console.log("");
console.log("****************************************************************");
console.log("Topic - Handling Multiple Promises");
console.log("****************************************************************");

// Returns after all Promises are resolved
Promise.all([asyncCallReturnPromiseLongSyntax("Multiple Promises Long"),
             asyncCallReturnPromiseShortSyntax("Multiple Promises Short")])
    .then((returnValues) => console.log(returnValues))
    .catch((returnValues) => console.error(returnValues));


console.log("");
console.log("****************************************************************");
console.log("Topic - async Functions");
console.log("****************************************************************");
console.log("****************************************************************");
console.log("Topic - Returned async Promise");
console.log("****************************************************************");

// async functions return a Promise
async function asyncFunction() {}
let asyncFunction1 = asyncFunction();
console.log("asyncFunction1 is");
console.log(asyncFunction1);


console.log("");
console.log("****************************************************************");
console.log("Topic - await Keyword");
console.log("****************************************************************");

function resolveAfter1Seconds(value: number): Promise<number> {
    return new Promise((resolve) => { setTimeout(() => { resolve(value); }, 1000); });
}

async function add(param1: number, param2: number): Promise<number> {
    const result1 = await resolveAfter1Seconds(param1);
    const result2 = await resolveAfter1Seconds(param2);
    return result1 + result2;
}

// prints results after 2 seconds.
add(10, 20)
    .then((result) => { console.log(`add(10, 20) is ${result}`); });

// View transpiled JavaScript to see __awaiter code
