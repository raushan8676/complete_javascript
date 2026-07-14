fetch("https://jsonplaceholder.typicode.com/posts/1")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

  // real world
  function getUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Rahul", age: 25, city: "Delhi" });
    }, 1500);
  });
}

getUserData()
  .then((user) => {
    console.log("User:", user.name);
    console.log("Age:", user.age);
  })
  .catch((error) => {
    console.log("Error:", error);
  });