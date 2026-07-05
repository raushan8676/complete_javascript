

const user = {}

user.id = 1
user.name = "raushan"
user.email = "rk@mail.com"

console.log(user);


const userdata = {
    mydata:{
        fullname:{
            firstname:"RAushan"
        }
    }
}

console.log(userdata)
console.log(userdata.mydata.fullname.firstname);


// add two objects
const obj1 = {
    1: "A",
    2: "B"
}

const obj2 = {
    3: "C",
    4: "D"
}

const obj3 = Object.assign({}, obj1 , obj2)
console.log(obj3)

const obj4 = {...obj1,...obj2}
console.log(obj4);

console.log(Object.keys(user))
console.log(Object.values(user));
console.log(Object.entries(user));
