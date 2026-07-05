const mysymbol = Symbol("userId");

const jsPerson = {
    name: "raushan",
    "full name": "RAushan Kumar",
    age:25,
    email: "raushan@dataaegis.com",
    city:"Teghra",
    isEligible:"True",
    [mysymbol]:12345
}

console.log(jsPerson)
console.log(jsPerson.age)
console.log(jsPerson["email"])
console.log(jsPerson["full name"])

jsPerson.email = "raushan@chatgpt.com"
console.log(jsPerson)

Object.freeze(jsPerson.email)
jsPerson.email = "raushan@microsoft.com"        // freeze work with obj only
console.log(jsPerson)

