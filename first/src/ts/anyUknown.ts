

type PersonAny = {
  type: 'person', // discriminator
  address: string
}
let personAd: any

personAd = JSON.parse('{ "adress": "Montreal" }')

// console.log(
//   personAd.address
// );

let personAd2: unknown

personAd2 = JSON.parse('{ "adress": "Toronto" }')

// console.log( personAd2.address ); //error

// Check if exist address in any

const isPersonAny = (object: any): object is PersonAny => 'address' in object 

const isPersonAnyV2 = (object: any): object is PersonAny => !!object && object.type === 'person'

if( 
  isPersonAny( personAd2 ) || isPersonAnyV2( personAd2 )
){
  console.log( personAd2.address )
}else{
  console.log( 'You are an Alien' )
}

