// In javascript , A String is a sequence of chanracters used to represent text.


// ways to create strings
let str1 = "Hello";
let str2 = 'Hello';
let str3 = `hello`;


// strings are immutable
let text = " javascript js";
text[0]="Y";
console.log(text);

// length
console.log(text.length);

// common methods
console.table([
    text.trim(),
    text.toUpperCase(),
    text.toLocaleLowerCase(),
    text.includes("js"),
    text.slice(1,5),
    text.replace("js","javaScript")
])

// Template literals

let name = "RAushan kumar";
let age = 22;

console.log(`My name is ${name} and i am ${age} years old`);

// string object 
let str = new String("hello");
console.log(str);