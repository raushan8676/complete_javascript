function loginUser(username, password) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (username === "admin" && password === "1234") {
        resolve("Login successful");
      } else {
        reject("Invalid username or password");
      }
    }, 2000);
  });
}

loginUser("admin", "1234")
  .then((message) => {
    console.log(message);
  })
  .catch((error) => {
    console.log(error);
  });