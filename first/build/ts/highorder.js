"use strict";
var multi = function (m) { return function (another) { return m * another; }; };
var saySomething = function (c) { return function (s) { return s; }; };
console.log(multi(2)(2));
