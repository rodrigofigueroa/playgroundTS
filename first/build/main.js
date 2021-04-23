"use strict";
function percentage(price, discount) {
    return price - (price / discount);
}
console.log(percentage(100, 20));
// console.log( percentage( 100, ' 20% ' ) );
