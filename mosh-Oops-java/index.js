const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 2
    },
    draw: function () {
        console.log("draw");
    }
}
const circle2 = {
    radius: 1,
    location: {
        x: 1,
        y: 2
    },
    draw: function () {
        console.log("draw 2");
    }
}
circle.draw();
circle2.draw();

// factory
function createCircle(radius) {
    return {
        radius,
        draw: function () {
            console.log(`draws ${radius}`);
        }
    };
}
const circle3 = createCircle(10);
circle3.draw()


// constructor
function Circle(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log('Draw constrcutor', this.radius);
    }
}

const another = new Circle(900);
another.draw();


let x = {};
console.log(x);

let tt = new Number();
console.log(tt)

// function are object
function Circle_(radius) {
    this.radius = radius;
    this.draw = function () {
        console.log("function are object/'1 ")
    }
}
const a1 = new Circle_(2000);
Circle_.call({}, 1);
Circle_.apply({}, [1, 2, 3]);

/**
 * value type: number, string,boolean, undefined, null
 * Reference type: Object, function, Array
 */
let x1 = 10;
let y1 = x1;
x1 = 20;

let x2 = { value: 10 };
let y2 = x2;
x2.value = 300;


// pass by value
let a11 = 10;
function increase2(n) {
    return n++;
}
let ss = increase2(a11)
console.log(ss);

// pass by refernce
let obj = { value: 10 };
function increase(obj) {
    obj.value++
}
increase(obj);
console.log("Data", obj);

// addding and removing property
function carWheel(name) {
    this.name = name;
    this.wheelMove = function () {
        console.log(`${this.name} car running on road`);
    }
}
const audiCar = new carWheel('Audi');
audiCar.unitArea = { location: "Asia" };
delete audiCar.unitArea;
audiCar.wheelMove();
const bmwCar = new carWheel('BMW');
bmwCar.wheelMove();

// enumaration
for (let key in audiCar) {
    if (typeof audiCar[key] !== 'function') {
        console.log("for loop", key);
    }
}

const myKeys = Object.keys(audiCar);
console.log("List of keys", myKeys);


// get and setter

function myCircle(radius) {
    this.radius = radius;
    let defaultLOcation = { x: 0, y: 1 };
    this.getDefautLocation = function () {
        return defaultLOcation;
    }
    this.draw = function () {
        console.log("My circle" + this.radius)
    }
}
const myCicle1 = new myCircle(20000);
//alert(myCicle1.getDefautLocation().y);
myCicle1.draw();

// stopwatch

function stoptWatch() {
    let startTime, endTime, running, duration = 0;
    this.start = function () {
        if (running) {
            throw new Error('Stop watch is already running');
        }
        running = true;
        startTime = new Date();
        //alert(startTime.toLocaleString())
    };
    this.stop = function () { };
    this.reset = function () { };
    Object.defineProperty(this, 'duration', {
        get: function () {
            return duration
        }
    })
}
const sw = new stoptWatch();
sw.start();
sw.stop();
sw.reset();

// protoType

/***
 * Shape ==> Circle + Sqaure
 * Shape= Bases class/super/Parent classs
 * Circle know as = Deroved clss/Sub class/Child class
 * inheritace in oops
 * 1 - Classical: a model where classes inherit from other classes
 * 2 - Prototypical:  involves objects inheriting directly from other objects
 *  prototype means = Parent
 *  prototype= objects inherit properties and methods from other objects.
 *  prototype: Just a regular object!
 *  multi level inheritance = myArray =>arrayBase =>ObjectBase
 */

let employee = { name: "Haniay" };
Object.defineProperty(employee, 'name', {
    writable: true
});
employee.name = "Haniya Asif";
console.log(Object.keys(employee))

// Proto typicsl inheritnace
const animal = {
    eat() {
        console.log("This animal eat food")
    }
}
const dog = Object.create(animal);
dog.eat() // inherit
dog.brak = function () {
    console.log("The dog brak!")
}
dog.brak();

/***
 * default behaviour: prototype
 * object ptototype= null
 * this: show current context
 * Class-based vs. prototype-based: Classical inheritance uses classes, while prototypal inheritance uses objects.
Inheritance model: Classical inheritance forms a class hierarchy, whereas prototypal inheritance forms a prototype chain.
Flexibility: Prototypal inheritance is more flexible and dynamic, allowing for changes at runtime.
 * 
 */

// chai aur code
function createUser(name, score) {
    this.username = name;
    this.score = score
}
createUser.prototype.incriment = function () {
    this.score++;
}
createUser.prototype.printMe = function () {
    console.log(`scpore id ${this.score}`)
}
const chai = new createUser("chai", 100);
const tea = createUser("chai", 200);
chai.printMe();
chai.incriment();