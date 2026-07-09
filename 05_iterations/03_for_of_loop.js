// for...of iterates over the values of an iterable, like arrays, strings,
//  maps, sets, and more.

const fruits = ['apple', 'banana', 'cherry'];

for (const fruit of fruits) {
  console.log(fruit);
}

const number = [1,2,3,4,5,6,7,9];

for(const key of number){
    console.log(key);
}

const word = 'hello';

for (const char of word) {
  console.log(char);
}



const shoppingList = ['milk', 'bread', 'eggs'];

for (const item of shoppingList) {
  if (item === 'eggs') {
    console.log('Remember to buy eggs first.');
  } else {
    console.log('Buy:', item);
  }
}