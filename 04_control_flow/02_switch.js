// A switch statement is used to execute different code based on
//  different conditions. It's cleaner than multiple if...else if statements 
// when checking one value against many options.


const day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Weekend");
}



const month = 2;

switch (month) {
  case 12:
  case 1:
  case 2:
    console.log("Winter");
    break;
  case 3:
  case 4:
  case 5:
    console.log("Spring");
    break;
  case 6:
  case 7:
  case 8:
    console.log("Summer");
    break;
  case 9:
  case 10:
  case 11:
    console.log("Fall");
    break;
}




const score = 85;

switch (true) {
  case score >= 90:
    console.log("Grade: A");
    break;
  case score >= 80:
    console.log("Grade: B");
    break;
  case score >= 70:
    console.log("Grade: C");
    break;
  default:
    console.log("Grade: F");
}



// string comparison

const color = "red";

switch (color) {
  case "red":
    console.log("Stop");
    break;
  case "yellow":
    console.log("Caution");
    break;
  case "green":
    console.log("Go");
    break;
  default:
    console.log("Unknown color");
}


// Number Actions:

const operation = 2;

switch (operation) {
  case 1:
    console.log("Add");
    break;
  case 2:
    console.log("Subtract");
    break;
  case 3:
    console.log("Multiply");
    break;
  case 4:
    console.log("Divide");
    break;
  default:
    console.log("Invalid operation");
}


