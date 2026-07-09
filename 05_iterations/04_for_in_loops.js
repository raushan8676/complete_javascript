// for...in iterates over the keys (property names) of an object.

const user = {
  name: 'Alice',
  age: 30,
  city: 'Paris'
};

for (const key in user) {
  console.log(key, user[key]);
}

const order = {
  id: 123,
  status: 'pending',
  total: 49.99
};

for (const field in order) {
  console.log(`Order ${field} : ${order[field]}`);
}



const colors = ['red', 'green', 'blue'];

for (const index in colors) {
  console.log(index, colors[index]);
}