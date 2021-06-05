"use strict";
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
var Person4 = /** @class */ (function () {
    function Person4() {
    }
    Person4.prototype.myName = function () {
        return "My name is " + this.firstName;
    };
    return Person4;
}());
var Employe = /** @class */ (function (_super) {
    __extends(Employe, _super);
    function Employe() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Employe.prototype.whoAMI = function () {
        return "My name is " + this.firstName;
    };
    return Employe;
}(Person4));
var jhon = new Employe();
console.log(jhon.whoAMI());
// Explicity
var Person5 = /** @class */ (function () {
    function Person5(firstName, lastNAme, age) {
        this.firstName = '';
        this.lastNAme = '';
        this.age = 0;
        this.firstName = firstName;
        this.lastNAme = lastNAme;
        this.age = age;
    }
    return Person5;
}());
//implicity
var Person6 = /** @class */ (function () {
    function Person6(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    return Person6;
}());
var person6 = new Person6('Jhon', 'Wick', 42);
console.log(person6.firstName, person6.lastName);
