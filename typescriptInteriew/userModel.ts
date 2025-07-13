export interface UserInterface {
    id:string;
    name:string;
}

const user:UserInterface = {
    id:'1',
    name:'Asif'
}

// Define way of array in ts

let fruits: string[] = ['a','c','c'];
let fruits1:Array<string> = ['w','c','g'];

// defiine array of number and sring
const foo:string | number = 2;
let values:(string|number)[]= ['Apple',2,'dss'];

// type assertion(tell compiler about type of variable)
let ab:string = 'AAAAA';

//void=> does not return any thing
const doSomething = ():void=>{
    console.log('dsd');
}

console.log("==============Testing===========")

const flatArr = [1,[2,3],4,[5,6]];
const flatArr1 = flatArr.flat(Infinity);
console.log(flatArr1);