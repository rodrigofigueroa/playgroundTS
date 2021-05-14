"use strict";
var Person = /** @class */ (function () {
    function Person(namePerson, lastName, age) {
        this.namePerson = namePerson;
        this.lastName = lastName;
        this.age = age;
    }
    return Person;
}());
var Animal = /** @class */ (function () {
    function Animal(nameAnimal, age) {
        this.nameAnimal = nameAnimal;
        this.age = age;
    }
    return Animal;
}());
var a = new Animal('Mota', 6);
var p = new Person('Zim', 'Invader', 233);
