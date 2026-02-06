let age: number = 20;
console.log(age);

const obj = {
  name: "asif",
  age: 35,
};
const obj1 = obj;
obj1.name = "Haniaya Asif";
// console.log(obj);
// const symbolObj = Symbol("name");
// const obj1_: { [key: symbol]: string; name?: string } = {};
// obj1_[symbolObj] = "Alice";
// obj1_.name = "Bob";

var data: null | string = null;
data = "sasas";
console.log(data);
/***
 * primptive
    - String, number, boolean, null, undefine,symbol(unique keys for object properties)
 
    * Object
   -Array, tuple, enum, func, class, enum
 
   * special
    - any, unknown (type check), never(),void, union,intersection
 
    * advance
     - union, intersection, type(custom), enum(fixed inme se hi), Literal type(restrcit value)
 
     * function
     - 
 * 
 */

// var symbol1 = Symbol("abc");
// var symbol2 = Symbol("abc");
// console.log(symbol1 == symbol2);

let number: number[] = [1, 2, 3];
let names: Array<string> = ["a", "b"];
names.push("haniya");
console.log(names);

// tupel => fixed length
// collection of different types
// hetro => diff type of items
// order=> enforced

const empData: [string, number, boolean] = ["asif", 20, true];
console.log(empData);

// ==> Object data type
/***
 *
 */
let student: { name1: string; age: number } = {
  name1: "asif",
  age: 33,
};
// let student1: { key: string | number | undefined } = {
//   name: "asif",
//   age: 33,
// };

// ==>any (hold any type of variable, not sure what type will come)
// disabled typed checked
const myNum: any = 20;

let value1: unknown = "Asif";
value1 = 200;
if (typeof value1 === "string") {
  console.log(value1.toUpperCase());
}
console.log("dddddddddddd" + value1);

let value55: unknown;
value55 = 5;
console.log(value55);
value55 = "hello";
let num23: number;
if (typeof value55 === "string") {
  console.log("+++++++++++::" + value55.toUpperCase());
}

// ==> never: no execute properly: no end loop

/**
 * while(true){console.log(true)}
 */

// union

let myData: string | number | [] = "Asif";

// ==> interface
// structure of object
interface Info {
  name: string;
  age: number;
  college: string;
}
let myStud: Info = {
  name: "asif",
  age: 20,
  college: "NIET",
};
interface tacherType extends Info {
  subject: string;
}
let teacherInfo: tacherType = {
  name: "asif2",
  age: 40,
  college: "NIET",
  subject: "Math",
};

// intersection: number | string
// combine multiple type to one
// union: choose one

// type ==> custom data type

interface IEmp {
  id: number;
  name: string;
  email: string;
}
interface IAdmin extends IEmp {
  classes: string[];
}
class AdminUser implements IAdmin {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public classes: string[]
  ) {}
}

// type and interface sample
// intersection &
type myUser = {
  id: number;
  name: string;
  email: string;
};
type myAdmin = myUser & { permission: string[] };

class Person {
  constructor(public name: string) {}
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

/**
 * extends
 */
class Employee extends Person {
  constructor(name: string, public role: string) {
    super(name);
  }
  showRole() {
    console.log(`Role: ${this.role}`);
  }
}

const emp = new Employee("Asif", "Developer");
emp.greet();
emp.showRole();

/**
 * Implements
 */
interface ILogger {
  log(message: string): void;
}
class ConsoleLogger implements ILogger {
  log(message: string) {
    console.log(`Log is : ${message}`);
  }
}
const log = new ConsoleLogger();
log.log("Server failed!");

interface server {
  id: number;
  name: string;
}
type serverKeys = keyof server;
