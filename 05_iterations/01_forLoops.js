// for loops in JavaScript 
// A for loop runs a block of code a set number of times.

for(let i=0; i<5; i++){
    console.log(i)
}

const colors = ['red', 'green', 'blue'];

for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }
// console.log('Liftoff!');

// break and continue
for (let i = 0; i < 10; i++) {
  if (i === 5) {
    break; // stop the loop entirely
  }
  console.log(i);
}


for (let i = 0; i < 10; i++) {
  if (i %2 === 0) {
    continue; // skip even
  }
  console.log(i);
}