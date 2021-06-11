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
var PersonAbstract = /** @class */ (function () {
    function PersonAbstract(FirstName) {
        this.FirstName = FirstName;
    }
    PersonAbstract.prototype.dayOff = function () {
        console.log(this.FirstName + " will have a dayoff");
    };
    PersonAbstract.prototype.increaseSalary = function (percentaje) {
        this.dayOff();
        this.increasePercentaje(percentaje);
    };
    return PersonAbstract;
}());
var Constractor = /** @class */ (function (_super) {
    __extends(Constractor, _super);
    function Constractor(FirstName) {
        var _this = _super.call(this, FirstName) || this;
        _this.FirstName = FirstName;
        return _this;
    }
    Constractor.prototype.increasePercentaje = function (percentaje) {
        console.log(this.FirstName + " will get a increace of salary by " + percentaje + "%");
    };
    return Constractor;
}(PersonAbstract));
var EmployeAbstract = /** @class */ (function (_super) {
    __extends(EmployeAbstract, _super);
    function EmployeAbstract(firstName) {
        var _this = _super.call(this, firstName) || this;
        _this.firstName = firstName;
        return _this;
    }
    EmployeAbstract.prototype.increasePercentaje = function (percentaje) {
        console.log(this.FirstName + " will get an increase of hour by " + percentaje + "%");
    };
    return EmployeAbstract;
}(PersonAbstract));
var j = new Constractor('Marth');
var m = new EmployeAbstract('Mary');
var workers = [];
// j.increasePercentaje( 5 )
// m.increasePercentaje( 6 )
workers[0] = new Constractor('Yoshi');
workers[1] = new EmployeAbstract('Mario');
workers.forEach(function (w) { return w.increasePercentaje(5); });
