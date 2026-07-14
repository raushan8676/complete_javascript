A Promise in JavaScript is an object that represents a future value.

It helps you handle async work such as:

1. fetching data from an API
2. reading a file
3. waiting for a timer

Basic idea
A promise is in one of 3 states:
- pending → still running
- fulfilled → success
- rejected → failure

Real-world use cases of Promise:
- API calls
- login authentication
- loading products from a server
- file reading
- payment processing

Simple real-world analogy:
A Promise is like ordering food online:
- you place the order
- later it is either delivered (resolve)
- or failed (reject)

Example:
```js
function placeOrder() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Food delivered");
      } else {
        reject("Order failed");
      }
    }, 2000);
  });
}

placeOrder()
  .then((message) => console.log(message))
  .catch((error) => console.log(error));
```