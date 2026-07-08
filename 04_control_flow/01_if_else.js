// 1. Basic if Statement

// Executes code only if a condition is true.


const isUserLoggedIn = true

if(isUserLoggedIn){
    console.log("yes , You logged in !");
}


// 2. if...else Statement

// Provides two paths: one if the condition is true, another if it's false.

const Myage = 15;
if (Myage >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}

// 3. if...else if...else Statement

// Check multiple conditions in order.

const score = 75;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}


// 4. Comparison Operators (Used in conditions)
// Operator 	Meaning 	       Example
// == 	   Equal to (loose) 	5 == "5" → true
// === 	  Equal to (strict) 	5 === "5" → false
// != 	  Not equal to       	5 != 3 → true
// !== 	 Strictly not equal 	5 !== "5" → true
// > 	  Greater than 	        5 > 3 → true
// < 	    Less than 	        5 < 10 → true
// >= 	  Greater or equal 	    5 >= 5 → true
// <= 	  Less or equal 	    3 <= 5 → true

const num = 10;
if (num > 5 && num < 15) {
  console.log("Number is between 5 and 15");
}




// 5. Logical Operators (Combine conditions)
// Operator 	Meaning 	              Example
// && 	   AND (both must be true) 	age >= 18 && hasLicense
// ||    	OR (at least one true) 	role === "admin" || role === "moderator"
// !    	NOT (reverses)      	!isRaining


const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
  console.log("You can drive");
}

if (age < 18 || !hasLicense) {
  console.log("You cannot drive");
}



// Nested if statement

const age2 = 20;
const hasLicense2 = false;

if (age2 >= 18) {
  console.log("You are old enough");
  if (hasLicense2) {
    console.log("You can drive!");
  } else {
    console.log("Get a license first");
  }
} else {
  console.log("Too young to drive");
}