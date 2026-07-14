# OOP in JavaScript

OOP (Object-Oriented Programming) in JavaScript means writing code using objects and classes to make programs more organized, reusable, and easier to maintain.

## 1. Why OOP?
OOP helps you:
- group related data and functions together
- reuse code
- make programs easier to manage

## 2. Object
An object stores data and behavior together.

```js
const student = {
  name: "Rahul",
  age: 21,
  study() {
    console.log("Studying");
  }
};

console.log(student.name);
student.study();
```

## 3. Class
A class is a blueprint for creating objects.

```js
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(`Hello, my name is ${this.name}`);
  }
}

const p1 = new Person("Rahul", 21);
p1.greet();
```

## 4. Constructor
The `constructor()` method sets the initial values of an object.

```js
class Car {
  constructor(brand) {
    this.brand = brand;
  }
}

const c1 = new Car("Tesla");
console.log(c1.brand);
```

## 5. Inheritance
One class can inherit properties and methods from another class.

```js
class Animal {
  constructor(name) {
    this.name = name;
  }

  eat() {
    console.log(`${this.name} is eating`);
  }
}

class Dog extends Animal {
  bark() {
    console.log(`${this.name} is barking`);
  }
}

const d1 = new Dog("Tommy");
d1.eat();
d1.bark();
```

## 6. Encapsulation
Encapsulation keeps data inside a class and allows access through methods.

```js
class BankAccount {
  constructor(balance) {
    this._balance = balance;
  }

  deposit(amount) {
    this._balance += amount;
  }

  getBalance() {
    return this._balance;
  }
}

const acc = new BankAccount(100);
acc.deposit(50);
console.log(acc.getBalance());
```

## 7. Polymorphism
Polymorphism means different classes can use the same method name in different ways.

```js
class Bird {
  sound() {
    console.log("Chirp");
  }
}

class Dog {
  sound() {
    console.log("Bark");
  }
}

const b = new Bird();
const d = new Dog();

b.sound();
d.sound();
```

## Summary
- `object` = a real thing with data and behavior
- `class` = a blueprint for creating objects
- `constructor` = initializes object values
- `inheritance` = child class gets features from parent class
- `encapsulation` = protects and organizes data
- `polymorphism` = same method name, different behavior