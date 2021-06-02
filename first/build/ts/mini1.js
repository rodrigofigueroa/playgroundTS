"use strict";
var Dog = /** @class */ (function () {
    function Dog(name) {
        this.name = name;
    }
    Dog.prototype.sayHelo = function () {
        return 'Wow!';
    };
    return Dog;
}());
var Fish = /** @class */ (function () {
    function Fish(name) {
        this.name = name;
    }
    Fish.prototype.dive = function (howDeep) {
        return howDeep + " Deep";
    };
    return Fish;
}());
var talkToPet = function (object) { return 'sayHelo' in object; };
var myPet = new Dog('Sammy');
var myPet2 = new Fish('BLue');
console.log(myPet.sayHelo());
console.log(myPet2.dive(23));
if (talkToPet(myPet2)) {
    console.log(myPet.sayHelo());
}
else {
    console.log("Fishes don't talk ");
}
// talkToPet({name: 'Jhon'}) wrong
