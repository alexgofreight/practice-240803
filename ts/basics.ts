// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameter

let age: number;

age = 12;

// Complex types

let hobbies: string[];

hobbies = ['sport', 'cooking'];

let person: {
  name: string;
  age: number;
}

person = {
  name: 'Alex',
  age: 43
}

// Type inference (推理)

let course = 'React - The Complete Guide'  // TS auto detect type

let multiTypeCourse: string | number = 'Chinese';
multiTypeCourse = 1234;

// TS only

type Person = {
  name: string;
  age: number;
}

let personA: Person;

let manyPeople: Person[];

// Function & types
function add2(a: number): number {
  return 2+a;
}

function printV(value: any): void {
  console.log(value)
}

// Generics
function insertAtBeginning<T>(array: T[], value: T) {
  return [value, ...array]
}

const resultA = insertAtBeginning([1,2,3], -1);

//resultA[0].split('')

// Class

class Student {
  firstName: string;
  age: number;
  private courses: string[];

  constructor(
    first: string, age: number
  ) {
    this.firstName = first;
    this.age = age;
  }

  // function no need function keyword
  enroll(courseName: string) {
    this.courses.push(courseName);
  }

  listCourse() {
    return this.courses.slice
  }
}

// 簡短的寫法
class StudentA {
  constructor(
    public name: string,
    public age: number,
    private courses: string[]
  ) {}

}

const studentA = new Student('Alex', 18);
studentA.enroll('math');
studentA.enroll('english');
studentA.listCourse()

// Interface

interface Human {
  name: string;
  age: number;

  greet: () => void;
}

let max: Human;

max = {
  name: 'Alex',
  age: 18,
  greet() {
    console.log('Hello')
  }
}

class Instructor implements Human {
  name: string;
  age: number;
  greet: () => {};
  action: string;
}

// implements: 用於 class 實現一個或多個 interface
// extends: 用於 class 繼承另一個 interface, 或 interface 繼承另一個 interface
// 一個 class 只能繼承一個父 class，但一個 interface 可以繼承多個 interface
