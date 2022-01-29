"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.width = height;
    }
    Rectangle.prototype.compareTo = function (value) {
        return this.width + this.height - (value.height + value.width);
    };
    return Rectangle;
}());
var Triangle = /** @class */ (function () {
    function Triangle() {
    }
    Triangle.prototype.compareTo = function (value) {
        return 2;
    };
    return Triangle;
}());
var rect1 = new Rectangle(2, 1);
var rect2 = new Rectangle(3, 2);
console.log(rect1.compareTo(rect2) > 0
    ? "Rect 1 is bigguer"
    : rect1.compareTo(rect2) == 0
        ? 'Is equal'
        : 'Is small');
var Programer = /** @class */ (function () {
    function Programer(salary, firstName) {
        this.salary = salary;
        this.firstName = firstName;
        this.salary = salary;
        this.firstName = firstName;
    }
    Programer.prototype.compareTo = function (value) {
        return this.salary - value.salary;
    };
    return Programer;
}());
var rod = new Programer(3000, 'Rodrigo');
var jhon = new Programer(2000, 'Jhon');
console.log(rod.compareTo(jhon) > 0
    ? rod.firstName + " gain more than " + jhon.firstName
    : rod.compareTo(jhon) === 0
        ? rod.firstName + " salay is the same as " + jhon.firstName
        : rod.firstName + " is Poor");
