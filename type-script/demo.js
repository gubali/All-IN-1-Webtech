var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var age = 20;
console.log(age);
var obj = {
    name: "asif",
    age: 35,
};
var obj1 = obj;
obj1.name = "Haniaya Asif";
// console.log(obj);
// const symbolObj = Symbol("name");
// const obj1_: { [key: symbol]: string; name?: string } = {};
// obj1_[symbolObj] = "Alice";
// obj1_.name = "Bob";
var data = null;
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
var number = [1, 2, 3];
var names = ["a", "b"];
names.push("haniya");
console.log(names);
// tupel => fixed length
// collection of different types
// hetro => diff type of items
// order=> enforced
var empData = ["asif", 20, true];
console.log(empData);
// ==> Object data type
/***
 *
 */
var student = {
    name1: "asif",
    age: 33,
};
// let student1: { key: string | number | undefined } = {
//   name: "asif",
//   age: 33,
// };
// ==>any (hold any type of variable, not sure what type will come)
// disabled typed checked
var myNum = 20;
var value1 = "Asif";
value1 = 200;
if (typeof value1 === "string") {
    console.log(value1.toUpperCase());
}
console.log("dddddddddddd" + value1);
var value55;
value55 = 5;
console.log(value55);
value55 = "hello";
var num23;
if (typeof value55 === "string") {
    console.log("+++++++++++::" + value55.toUpperCase());
}
// ==> never: no execute properly: no end loop
/**
 * while(true){console.log(true)}
 */
// union
var myData = "Asif";
var myStud = {
    name: "asif",
    age: 20,
    college: "NIET",
};
var teacherInfo = {
    name: "asif2",
    age: 40,
    college: "NIET",
    subject: "Math",
};
var AdminUser = /** @class */ (function () {
    function AdminUser(id, name, email, classes) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.classes = classes;
    }
    return AdminUser;
}());
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.greet = function () {
        console.log("Hello ".concat(this.name));
    };
    return Person;
}());
/**
 * extends
 */
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, role) {
        var _this = _super.call(this, name) || this;
        _this.role = role;
        return _this;
    }
    Employee.prototype.showRole = function () {
        console.log("Role: ".concat(this.role));
    };
    return Employee;
}(Person));
var emp = new Employee("Asif", "Developer");
emp.greet();
emp.showRole();
var ConsoleLogger = /** @class */ (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function (message) {
        console.log("Log is : ".concat(message));
    };
    return ConsoleLogger;
}());
var log = new ConsoleLogger();
log.log("Server failed!");
