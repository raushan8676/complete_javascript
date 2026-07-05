const score = 100
console.log(score);

const balance = new Number(100)
console.log(balance)

console.log(balance.toString());
console.log(balance.toString().length);


const number = 100.6345
console.log(balance.toFixed(2))

console.log(number.toPrecision(3));

const hundreds = 1000000
console.log(hundreds.toLocaleString());
console.log(hundreds.toLocaleString('en-IN'));




// ----------------------------------------------

// js has built in math objects for mathematical performance

let min=10
let max=100

console.table([
    Math.round(4.3),
    Math.round(4.7),
    Math.floor(4.9),
    Math.ceil(4.2),
    Math.trunc(4.9),
    Math.pow(2,3),
    Math.sqrt(16),
    Math.cbrt(27),
    Math.max(10,20,5),
    Math.min(10,20,5),
    Math.random(),
    Math.floor(Math.random()),
    Math.floor(Math.random()*10)+1,
    Math.floor(Math.random()*(max-min+1))+min,
])