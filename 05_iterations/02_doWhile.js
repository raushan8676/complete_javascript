// A do...while loop runs the body first, then checks the condition. 
// That means it always executes at least once.

let count = 1;

do {
  console.log(count);
  count++;
} while (count <= 5);


let attempt = 0;
let success = false;

do {
  attempt++;
  console.log(`Attempt ${attempt}: checking connection...`);

  success = Math.random() > 0.6;
  console.log(success)
} while (!success && attempt < 5);

if (success) {
  console.log("Connected successfully!");
} else {
  console.log("Failed after 5 attempts.");
}



const tasks = ["email", "report", "meeting"];
let index = 0;

do {
  const task = tasks[index];
  console.log("Working on:", task);
  index++;
} while (index < tasks.length);