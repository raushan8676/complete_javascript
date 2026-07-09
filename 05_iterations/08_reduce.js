// reduce combines all array items into a single value by applying a function repeatedly.

const numbers = [1, 2, 3, 4];

const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); 


const cart = [
  { name: 'T-shirt', price: 20, quantity: 2 },
  { name: 'Hat', price: 10, quantity: 1 },
  { name: 'Shoes', price: 50, quantity: 1 }
];

const totalCost = cart.reduce((sum, item) => {
  return sum + item.price * item.quantity;
}, 0);

console.log(totalCost); 




