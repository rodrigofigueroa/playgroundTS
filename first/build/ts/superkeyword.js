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
var PersonInheritance = /** @class */ (function () {
    function PersonInheritance(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    PersonInheritance.prototype.sellStock = function (nameStock, sells) {
        console.log(this.firstName + " sells " + nameStock + " and " + sells);
    };
    return PersonInheritance;
}());
var EmployeInheritance = /** @class */ (function (_super) {
    __extends(EmployeInheritance, _super);
    function EmployeInheritance(firstName, lastName, age, department) {
        var _this = _super.call(this, firstName, lastName, age) || this;
        _this.firstName = firstName;
        _this.lastName = lastName;
        _this.age = age;
        _this.department = department;
        return _this;
    }
    EmployeInheritance.prototype.sellStock = function (nameStock, sells) {
        _super.prototype.sellStock.call(this, nameStock, sells);
        this.reportDepartment(nameStock, sells);
    };
    EmployeInheritance.prototype.reportDepartment = function (n, s) {
        console.log(this.firstName + " sells " + s + " and " + n + " items from the " + this.department + " department");
    };
    return EmployeInheritance;
}(PersonInheritance));
var emplyee1 = new EmployeInheritance('Jhon', 'Wick', 32, 'Sells');
emplyee1.sellStock('DELL', 200);
