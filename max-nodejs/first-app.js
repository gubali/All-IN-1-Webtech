const fs = require("fs");
fs.writeFileSync("test.txt", "Content is writing from node js!!!!");

//

const name = "Haniya Asif";
const age = 1.6;
let add = "jareal";
const sumarizeDate = (name, age, add) => {
  return "Im " + `${name}` + "age is" + `${age}` + "with add of" + `${add}`;
};

console.log(sumarizeDate(name, age, add));
const hobby = ["Apple", "Orange"];
console.log(hobby.map((res) => "Fruits " + res));
hobby.push("Bananan");
console.log(hobby);

const copyArray = [...hobby];
console.log(copyArray);

const arr = (...arg) => {
  return arg;
};
console.log(arr(1, 2, 3, 4));

// object de-structuring
const employeDetails = {
  name: "Adam",
  age: 29,
  greet() {
    console.log(`My name is ` + name);
  },
};
const printName = ({ name, age }) => {
  console.log(`My name-Destructirung`, name, age);
};
printName(employeDetails);

// array  de-strcutureing
const [var1, var2] = hobby;
console.log(var1, var2);
