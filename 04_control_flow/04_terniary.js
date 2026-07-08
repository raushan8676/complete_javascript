// The ternary operator is a shorthand way to write simple if...else statements in one line. 
// It's the only JavaScript operator that takes three operands.

// condition ? valueIfTrue : valueIfFalse


const age = 20;
const status = age >= 18 ? "Adult" : "Minor";
console.log(status); 

// let score = 49;
// const message = score >= 50 ? "Pass" : "Fail";
// console.log(message);

const isLoggedIn = true;
const greeting = isLoggedIn ? "Welcome back!" : "Please log in";
console.log(greeting); // "Welcome back!"

const name = "";
const displayName = name ? name : "Guest";
console.log(displayName); // "Guest"

const score = 75;

const grade = score >= 90 ? "A" : 
              score >= 80 ? "B" : 
              score >= 70 ? "C" : 
              score >= 60 ? "D" : 
              "F";

console.log(grade); 


const isAdmin = true;
const user = isAdmin ? 
  { role: "admin", permissions: "full" } : 
  { role: "user", permissions: "limited" };

console.log(user);
// { role: "admin", permissions: "full" }


// real world
const isActive = true;
const className = isActive ? "btn-active" : "btn-inactive";
console.log(className); // "btn-active"

const password = "123";
const message = password.length >= 8 ? "Strong password" : "Weak password";
console.log(message); // "Weak password"

// let isDarkMode = false;
// isDarkMode = !isDarkMode ? true : false;
// // or simply:
// isDarkMode = !isDarkMode;