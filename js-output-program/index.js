function abc() {
  console.log(a);
  var a = 10;
}
abc();

//map

let mapArr = [2, 3, 4, 5];
let rslt = mapArr.map((elem) => elem * elem);
console.log(rslt);

// function statement <==> function declaration
ab();
//b();
function ab() {
  console.log("Fn() statement");
}
// ab();

// fn : expression
var b = function ab() {
  console.log("Fn() expression");
};
// b();

// anonymous function

// function (){

// }

// named  function expression
var t1 = function as1() {
  console.log(as1);
};
t1();

// first class function
var s1 = function (param1) {
  console.log(param1);
};

function test() {}
s1(test);

//First class function exmaple => firsct class citizen

//1 assignined function to a variable
var q1 = function () {
  console.log("assignined function to a variable");
};
q1();

// 2 passing function as a argument
function test21() {
  return "assing function as a argument";
}
function main(callback, name) {
  console.log(callback(), name);
}
main(test21, "asif");

// 3 returning a function to another funciton

function fn1() {
  return function fn2() {
    console.log("im function fn2()");
  };
}
fn1()();
