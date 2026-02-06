class Bird {
  fly() {
    console.log("Bird fly!");
  }
  eat() {
    console.log("Birds eat!");
  }
  makeSound() {}
}

class Sparrow extends Bird {
  makeSound(): void {
    console.log("Sparrow Sound!");
  }
  fly(): void {
    console.log("Sparrow fly!");
  }
}

function makeBirdFly(bird: Bird) {
  bird.fly();
}
makeBirdFly(new Sparrow());
// const sparrow = new Sparrow();
// sparrow.eat();
// sparrow.fly();
// sparrow.makeSound();
