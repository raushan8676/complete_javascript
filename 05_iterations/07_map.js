// map creates a new array by transforming each item in the original array.


const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);

console.log(doubled); 



// const users = [
//   { name: 'Alice', age: 28 },
//   { name: 'Bob', age: 34 }
// ];

// const names = users.map(user => user.name);

// console.log(names); 


const stringPrices = ['10', '20', '30'];

const prices = stringPrices.map(price => Number(price));

console.log(prices); 



// const products = [
//   { title: 'T-shirt', price: '19.99', quantity: 2 },
//   { title: 'Hat', price: '9.50', quantity: 1 }
// ];

// const checkoutItems = products.map(item => ({
//   title: item.title,
//   unitPrice: Number(item.price),
//   available: Number(item.quantity),
//   totalPrice: Number(item.price) * item.quantity
// }));

// console.log(checkoutItems);




const products = [
  { id: 1, name: 'T-shirt', price: 19.99, inStock: true },
  { id: 2, name: 'Hat', price: 12.5, inStock: false },
  { id: 3, name: 'Sneakers', price: 59.9, inStock: true }
];

const productCards = products
  .filter(product => product.inStock)
  .map(product => ({
    id: product.id,
    title: product.name,
    priceLabel: `$${product.price.toFixed(2)}`,
    available: product.inStock
  }));

console.log(productCards);







const users = [
  { id: 1, firstName: 'Jane', lastName: 'Doe', active: true },
  { id: 2, firstName: 'Sam', lastName: 'Lee', active: false },
  { id: 3, firstName: 'Anna', lastName: 'Kim', active: true }
];

const activeUserNames = users
  .filter(user => user.active)
  .map(user => `${user.firstName} ${user.lastName}`);

console.log(activeUserNames);
