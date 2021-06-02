"use strict";
var personAd;
personAd = JSON.parse('{ "adress": "Montreal" }');
// console.log(
//   personAd.address
// );
var personAd2;
personAd2 = JSON.parse('{ "adress": "Toronto" }');
// console.log( personAd2.address ); //error
// Check if exist address in any
var isPersonAny = function (object) { return 'address' in object; };
var isPersonAnyV2 = function (object) { return !!object && object.type === 'person'; };
if (isPersonAny(personAd2) || isPersonAnyV2(personAd2)) {
    console.log(personAd2.address);
}
else {
    console.log('You are an Alien');
}
