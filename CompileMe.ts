class Greeter {
    greeting: string;
    constructor(message: string) { this.greeting = message; }
    greet() { return "Hello, " + this.greeting; }
}

let greeter: Greeter = new Greeter("TypeScript!");
console.log(greeter.greet());
