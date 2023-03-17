// Interface
interface UserInterface {
  name: String;
  age: Number;
}

function showUser(p: UserInterface) {
  console.log(`Your name is ${p.name} and you are ${p.age} years old`);
}

const user = { name: "John", age: 27 };
showUser(user);

// Basic types

// Variables types
let message: string = "Welcome to Typescript class";
console.log(message);
let id: number = 1;
let isVerified: boolean = true;
let x: any;

let loggedInStatus: string[] = ["active", "inactive", "pending", "suspended"];
let arr: any[] = [1, true, "structure"];

// Tuple
let users: [string, boolean, number] = ["John", true, 28];
// Tuple Array
let employees: [number, string][];

employees = [
  [1, "John"],
  [2, "Flemma"],
  [3, "Jane"],
];

// Union
let pid: string | number;
pid = 22;

// Enum
enum Gender {
  Male = "male",
  Female = "female",
}

// Type Assertion
let uid: any = 1;
let userId = <number>uid;
uid = "23eadsc3ddscwer2sddseae";
userId = 2;

// Function
function compute(x: number, y: number): number {
  return x + y;
}
console.log(compute(23, 55));

// Void
function logMessage(message: string | number): void {
  console.log(message);
}
logMessage("log messages");

// Type and not Inteface with primitives
type Point = string | number;
const p1: Point = 50;

// Using interface
const usermeta: UserInterface = {
  name: "Henry",
  age: 29,
};
console.log(usermeta);

interface MathFunc {
  (x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;
const subtract: MathFunc = (x: number, y: number): number => x - y;

interface PersonInterface {
  id: number;
  name: string;
  age: number;
  register(): void;
}

// Classes
class Person implements PersonInterface {
  id: number;
  name: string;
  age: number;

  constructor(id: number, name: string, age: number) {
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
  position: string;

  constructor(id: number, name: string, age: number, position: string) {
    super(id, name, age);
    this.position = position;
  }

  register(): void {
    console.log(`${this.name} the ${this.position} is now registered`);
  }
}

const emp = new Employee(3, "Samuel Shawn", 38, "Developer");

console.log(emp.register());

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArr = getArray<number>([1, 2, 3, 4]);
let strArr = getArray<string>(["Richard", "Tope", "Paul"]);

numArr.push(5);
strArr.push("Hello");
