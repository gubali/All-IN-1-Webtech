"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var user = {
    id: '1',
    name: 'Asif'
};
// Define way of array in ts
var fruits = ['a', 'c', 'c'];
var fruits1 = ['w', 'c', 'g'];
// defiine array of number and sring
var foo = 2;
var values = ['Apple', 2, 'dss'];
// type assertion(tell compiler about type of variable)
var ab = 'AAAAA';
//void=> does not return any thing
var doSomething = function () {
    console.log('dsd');
};
console.log("==============Testing===========");
var flatArr = [1, [2, 3], 4, [5, 6]];
var flatArr1 = flatArr.flat(Infinity);
console.log(flatArr1);
