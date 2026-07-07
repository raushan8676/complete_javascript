function sayMyName(){
    console.log("R");
    console.log("A");
    console.log("U");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
}

sayMyName()


function addtwoNumber(num1,num2){
    return num1+num2;
}

console.log(addtwoNumber(3,5));



function loginUser(username = "Raushan"){
    if(!username){
        console.log("Please enter a username")
        return
    }
    console.log(`${username} logged in Successfully`)
}

loginUser("Rohit");



function calculateprice(...val1){
    return val1
}

console.log(calculateprice(100,200,300,500,400))



function handleObject(anyobject){
    console.log(`user name is ${anyobject.username} , price is ${anyobject.price} `)
}

handleObject({
    username:"raus",
    price:100
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray
}

console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));