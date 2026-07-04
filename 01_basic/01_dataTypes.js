// javascript has 7 primitive and 1 non-primitive dataTypes.

// primitive datatypes

let str = "Raushan";
let num = 25;
let bool = true;
let n = null;
let und;
let sym = Symbol('id');
let big = 14655222222222222222545n;

// find the type of

console.table([typeof(str), typeof(num),typeof(bool), typeof(n), typeof(und), typeof(sym), typeof(big)]);


// non primitive datatype 

let obj = {name: "Ar Rahman"};

console.log(typeof(obj));