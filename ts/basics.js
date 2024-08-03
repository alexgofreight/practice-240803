// Primitives: number, string, boolean
// More complex types: arrays, objects
// Function types, parameter
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var age;
age = 12;
// Complex types
var hobbies;
hobbies = ['sport', 'cooking'];
var person;
person = {
    name: 'Alex',
    age: 43
};
// Type inference (推理)
var course = 'React - The Complete Guide'; // TS auto detect type
var multiTypeCourse = 'Chinese';
multiTypeCourse = 1234;
var personA;
var manyPeople;
// Function & types
function add2(a) {
    return 2 + a;
}
function printV(value) {
    console.log(value);
}
// Generics
function insertAtBeginning(array, value) {
    return __spreadArray([value], array, true);
}
var resultA = insertAtBeginning([1, 2, 3], -1);
//resultA[0].split('')
// Class
var Student = /** @class */ (function () {
    function Student(first, age) {
        this.firstName = first;
        this.age = age;
    }
    // function no need function keyword
    Student.prototype.enroll = function (courseName) {
        this.courses.push(courseName);
    };
    Student.prototype.listCourse = function () {
        return this.courses.slice;
    };
    return Student;
}());
// 簡短的寫法
var StudentA = /** @class */ (function () {
    function StudentA(name, age, courses) {
        this.name = name;
        this.age = age;
        this.courses = courses;
    }
    return StudentA;
}());
var studentA = new Student('Alex', 18);
studentA.enroll('math');
studentA.enroll('english');
studentA.listCourse();
var max;
max = {
    name: 'Alex',
    age: 18,
    greet: function () {
        console.log('Hello');
    }
};
var Instructor = /** @class */ (function () {
    function Instructor() {
    }
    return Instructor;
}());
// implements: 用於 class 實現一個或多個 interface
// extends: 用於 class 繼承另一個 interface, 或 interface 繼承另一個 interface
// 一個 class 只能繼承一個父 class，但一個 interface 可以繼承多個 interface
