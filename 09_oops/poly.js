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