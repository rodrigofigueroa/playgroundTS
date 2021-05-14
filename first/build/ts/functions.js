"use strict";
function calcTax(state, income, dependants) {
    if (state === 'NY') {
        return income * 0.6 - dependants * 500;
    }
    else if (state === 'NJ') {
        return income * 0.6 - dependants * 300;
    }
    else {
        return;
    }
}
var tax = calcTax('NY', 50000, 2);
function padd1(value, padding) {
    if (typeof padding === 'string') {
        return padding + 'px';
    }
    if (typeof padding === 'number') {
        return padding + 'px';
    }
    throw new Error('that is not legal');
}
padd1('hello', true);
function padd(value, padding) {
    if (typeof padding === 'string') {
        return padding + 'px';
    }
    if (typeof padding === 'number') {
        return padding + 'px';
    }
    throw new Error('variable not legal');
}
padd('hello', 20);
