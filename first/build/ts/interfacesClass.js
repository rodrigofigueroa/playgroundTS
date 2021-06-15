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
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.startEngine = function () {
        return true;
    };
    Car.prototype.stop = function () {
        return false;
    };
    Car.prototype.run = function (km) {
        console.log("This is running at " + km + " KM");
    };
    return Car;
}());
var SecretCar = /** @class */ (function (_super) {
    __extends(SecretCar, _super);
    function SecretCar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SecretCar.prototype.flying = function () {
        return 'This car is flying';
    };
    SecretCar.prototype.swimming = function () {
        return 'This car is Swimming';
    };
    return SecretCar;
}(Car));
var myCar = new Car();
myCar.startEngine();
myCar.run(23);
myCar.stop();
var jamesBondCar = new SecretCar();
console.log(jamesBondCar.startEngine());
jamesBondCar.run(32);
console.log(jamesBondCar.swimming());
console.log(jamesBondCar.flying());
