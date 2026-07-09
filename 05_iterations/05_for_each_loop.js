// forEach is an array method that runs a callback for every item in the array.

const fruits = ['apple', 'banana', 'cherry'];

fruits.forEach((fruit, index) => {
  console.log(index, fruit);
});

const tasks = [
  { id: 1, title: 'Write email', done: false },
  { id: 2, title: 'Pay bill', done: true },
  { id: 3, title: 'Call client', done: false }
];

tasks.forEach(task => {
  if (!task.done) {
    console.log('Pending:', task.title);
  }
});



const items = ['pen', 'notebook', 'eraser'];

items.forEach((item, index) => {
  console.log(`${index + 1}. ${item}`);
});