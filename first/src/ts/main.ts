function percentage( price: number, discount: number ){
  return price - ( price / discount )
}

console.log( percentage( 100, 20 ) );
// console.log( percentage( 100, ' 20% ' ) );