

function changeForC( forc: number, fromTo: string ): number {
  return ( fromTo === 'FtoC') 
          ? ( ( forc - 32 ) * ( 5 / 9 ) ) 
          : ( ( forc * ( 9 / 5 ) ) + 32 )
}

console.log( `70F to C is: ${changeForC( 70, 'FtoC' ).toFixed( 1 ) }C` );
console.log( `35C to F is: ${changeForC( 35, 'CtoF' ).toFixed( 1 ) }F` );
console.log( `6F to C is: ${changeForC( 6, 'ABCD' ).toFixed( 1 ) }F` );

//  using enums

enum CelciusOrFarenheit {
  FtoC,
  CtoF
}

function changeForCWithEnums( forc: number, fromTo: CelciusOrFarenheit ): number {
  return ( fromTo === CelciusOrFarenheit.FtoC ) 
          ? ( ( forc - 32 ) * ( 5 / 9 ) ) 
          : ( ( forc * ( 9 / 5 ) ) + 32 )
}

console.log( `70F to C is:  ${changeForCWithEnums( 70, CelciusOrFarenheit.FtoC ).toFixed( 1 ) }C` );
console.log( `35C to F is:  ${changeForCWithEnums( 35, CelciusOrFarenheit.CtoF ).toFixed( 1 ) }F` );
console.log( `6F to C is:   ${changeForCWithEnums( 6,  CelciusOrFarenheit.CtoF ).toFixed( 1 ) }F` );