"use strict";
var CharacterMoveset;
(function (CharacterMoveset) {
    CharacterMoveset["Up"] = "UP";
    CharacterMoveset["Down"] = "DOWN";
    CharacterMoveset["Right"] = "RIGHT";
    CharacterMoveset["Left"] = "LEFT";
})(CharacterMoveset || (CharacterMoveset = {}));
console.log(CharacterMoveset.Down);
function moveSets(move) {
    if (move === CharacterMoveset.Down) {
        console.log('SIT and see');
    }
}
moveSets(CharacterMoveset.Down);
var LoadingProducts;
(function (LoadingProducts) {
    LoadingProducts["Load_Success"] = "Products Loaded Successfuly";
    LoadingProducts["Load_Failed"] = "Failed to Load Products";
    LoadingProducts["Loading"] = "Loading All Products";
})(LoadingProducts || (LoadingProducts = {}));
function loadingProds(message) {
    if (message === 'failed') {
        console.log(LoadingProducts.Load_Failed);
    }
    if (message === 'success') {
        console.log(LoadingProducts.Load_Success);
    }
}
loadingProds('failed');
loadingProds('success');
