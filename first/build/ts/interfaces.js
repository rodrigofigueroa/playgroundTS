"use strict";
var savePerson = function (person) {
    console.log("Saving this person: " + person.firstName);
};
var per = {
    firstName: 'Stephen', lastName: 'King', age: 122
};
// const per = {
//   firstName: 'Stephen', age: 122
// }
savePerson(per);
