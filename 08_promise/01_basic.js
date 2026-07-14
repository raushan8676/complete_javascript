const promise = new Promise((resolve, reject) => {
  let success = true;

  if (success) {
    resolve("Task completed");
  } else {
    reject("Task failed");
  }
});

promise
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  });


  // real time example
  const p = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data loaded after 2 seconds");
  }, 2000);
});

p.then((data) => {
  console.log(data);
});


// promise chaining

const pC = new Promise((resolve) => {
  resolve(5);
});

pC
  .then((x) => x * 2)
  .then((y) => y + 3)
  .then((z) => console.log(z));