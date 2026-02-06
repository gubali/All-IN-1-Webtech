// below example of cconstructor with super keyword and inheritance
class Parent {
  constructor(name) {
    this.name = name;
  }
  static getName(instance) {
    console.log(`User name is ${instance.name}`);
  }
}

class Child extends Parent {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  getInfo() {
    console.log(`${this.name} age is ${this.age}`);
  }
}


const myChild = new Child('John', 30);
myChild.getInfo();

console.log(myChild instanceof Parent);


// access of sttaic keyword
Parent.getName(); // User name is undefined