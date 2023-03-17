"use strict";
function showUser(p) {
    console.log(`Your name is ${p.name} and you are ${p.age} years old`);
}
const user = { name: "John", age: 27 };
showUser(user);
// Basic types
// Variables types
let message = "Welcome to Typescript class";
console.log(message);
let id = 1;
let isVerified = true;
let x;
let loggedInStatus = ["active", "inactive", "pending", "suspended"];
let arr = [1, true, "structure"];
// Tuple
let users = ["John", true, 28];
// Tuple Array
let employees;
employees = [
    [1, "John"],
    [2, "Flemma"],
    [3, "Jane"],
];
// Union
let pid;
pid = 22;
// Enum
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
})(Gender || (Gender = {}));
// Type Assertion
let uid = 1;
let userId = uid;
uid = "23eadsc3ddscwer2sddseae";
userId = 2;
// Function
function compute(x, y) {
    return x + y;
}
console.log(compute(23, 55));
// Void
function logMessage(message) {
    console.log(message);
}
logMessage("log messages");
const p1 = 50;
// Using interface
const usermeta = {
    name: "Henry",
    age: 29,
};
console.log(usermeta);
const add = (x, y) => x + y;
const subtract = (x, y) => x - y;
// Classes
class Person {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    register() {
        console.log(`${this.name} has just registered`);
    }
    login() {
        console.log(`${this.name} is now logged in`);
    }
}
const person1 = new Person(1, "Brad Pitt", 25);
const person2 = new Person(2, "Lola Spincer", 29);
console.log(person1, person2);
person1.register();
person2.register();
person1.login();
// Inheritance
class Employee extends Person {
    constructor(id, name, age, position) {
        super(id, name, age);
        this.position = position;
    }
    register() {
        console.log(`${this.name} the ${this.position} is now registered`);
    }
}
const emp = new Employee(3, "Samuel Shawn", 38, "Developer");
console.log(emp.register());
// Generics
function getArray(items) {
    return new Array().concat(items);
}
let numArr = getArray([1, 2, 3, 4]);
let strArr = getArray(["Richard", "Tope", "Paul"]);
numArr.push(5);
strArr.push("Hello");
