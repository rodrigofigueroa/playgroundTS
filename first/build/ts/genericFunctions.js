"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Comparing = /** @class */ (function () {
    function Comparing(key, value) {
        this.key = key;
        this.value = value;
    }
    return Comparing;
}());
function compare(v1, v2) {
    if (v1.key === v2.key &&
        v1.value === v2.value) {
        return true;
    }
    return false;
}
var prof1 = new Comparing('a', 'b');
var prof2 = new Comparing('b', 'b');
var prof3 = new Comparing('b', 'b');
var prof4 = new Comparing('b', 'b');
console.log(compare(prof1, prof2));
console.log(compare(prof3, prof4));
function userRole() {
    return JSON.parse('{ "firstName": "Jhon", "work": "admin" }');
}
var user = userRole();
console.log(user);
switch (user.work) {
    case "admin" /* Admin */:
        console.log(user.work);
        break;
    case "marketing" /* Marketing */:
        console.log(user.work);
        break;
    default:
        break;
}
var twoValuesClass = /** @class */ (function () {
    function twoValuesClass(value, key) {
        this.value = value;
        this.key = key;
    }
    return twoValuesClass;
}());
function com(v1, v2) {
    if (v1.value === v2.value) {
        console.log(true);
    }
    else {
        console.log(false);
    }
}
var p = new twoValuesClass('orange', 'orange');
var r = new twoValuesClass('orange', 'orange');
com(p, r);
function concatString(a, b) {
    return a.sA + " " + b.sA;
}
var OnlyStringClass = /** @class */ (function () {
    function OnlyStringClass(sA, sB) {
        this.sA = sA;
        this.sB = sB;
    }
    return OnlyStringClass;
}());
var OnlyStringClassTwo = /** @class */ (function () {
    function OnlyStringClassTwo(sA, sB) {
        this.sA = sA;
        this.sB = sB;
    }
    return OnlyStringClassTwo;
}());
var s1 = new OnlyStringClass('a', 'a');
var s2 = new OnlyStringClassTwo('c', 'C');
console.log(concatString(s1, s2));
