/* On the basis of store and access in the memory , it is classified in two type
1. stack
2. Heap

1. stack : used by primitive datatypes (fixed pridicatble size)
2. Heap : used by Non-primitive datatypes (size change dynamically)
*/

let age = 25;       // store directly in stack
let newAge = age;   // get a copy of age 
newAge = 26;        // changes in copy , not in original 

console.table([age,newAge]);

// ------------------------------------------------------------------------------------------

let user = {                // the variable user save in stack hold the address of heap data.
    name:"RAushan"          // save in heap 
};

let newUser = user;         // access the address 
user.name = "kumar";        // change in data of heap , so original data chnages.

console.table([user,newUser]);