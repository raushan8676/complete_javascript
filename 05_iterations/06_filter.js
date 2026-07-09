// filter is an array method that creates a new array containing only
//  the elements that pass a test.


const numbers = [1, 2, 3, 4, 5];

const evens = numbers.filter(num => num % 2 === 0);

console.log(evens); 


const users = [
  { name: 'Alice', active: true },
  { name: 'Bob', active: false },
  { name: 'Carol', active: true }
];

const activeUsers = users.filter(user => user.active);

console.log(activeUsers);



const values = ['10', '', '42', 'hello', '0'];

const numericValues = values.filter(value => !Number.isNaN(Number(value)) && value !== '');

console.log(numericValues); 