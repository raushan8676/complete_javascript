let marval_heros = ["ironman","captain","thor"];
let dc_heros = ["batman","superman","flash"]

// marval_heros.push(dc_heros);
// console.log(marval_heros);


// concat()
let allheros = marval_heros.concat(dc_heros)
console.log(allheros)

// spread operator
let result = [...marval_heros,...dc_heros]
console.log(result);


// flat()

let arr = [1,2,[3,4],5,[6,7],8,9,10,11,[12,13,14,15]]

let res = arr.flat();
console.log(res)

console.log(Array.isArray(arr));
console.log(typeof arr)


let str= "hello"
console.log(Array.from(str))

console.log(Array.of(1,2,3,45))