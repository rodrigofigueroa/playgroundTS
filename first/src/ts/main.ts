function percentage( price: number, discount: number ): number | undefined {
  return price - ( price / discount )
}

console.log( percentage( 100, 20 ) )
// console.log( percentage( 100, ' 20% ' ) );