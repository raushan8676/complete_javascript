// Array : An array is a special objects used to store multiple values in a single variable.

let fruit = ["Apple","BAnana","orange"];

console.table([
    fruit[0],
    fruit[1],
    fruit[2]
])

// Array constructor

const number = new Array(10,20,30);
console.log(number);


const arr = [1,2,3,4]
arr.push(10)
console.log(arr)

arr.pop()
console.log(arr)

arr.unshift(0)
console.log(arr);

arr.shift()
console.log(arr)

console.log(arr.length)

console.log(arr.indexOf(4));

console.log(arr.includes(5));

console.log(arr.slice(1,2))
console.log(arr)

console.log(arr.splice(1,2))
console.log(arr)
