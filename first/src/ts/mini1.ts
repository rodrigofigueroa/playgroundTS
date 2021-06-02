
class Dog {
  constructor( readonly name: string ){}
  sayHelo(): string | void  {
    return 'Wow!'
  }
}
class Fish {
  constructor( readonly name: string ){}
  dive( howDeep: number ): string{
    return `${ howDeep } Deep`
  }
}

type Pet = Dog | Fish

const talkToPet = (object: Pet): object is Fish => 'sayHelo' in object 

const myPet = new Dog('Sammy')
const myPet2 = new Fish('BLue')
console.log(
  myPet.sayHelo()
);
console.log(
  myPet2.dive(23)
);
if( talkToPet( myPet2 ) ){
  console.log(
    myPet.sayHelo()
  );
}else{
  console.log(`Fishes don't talk `);
}

// talkToPet({name: 'Jhon'}) wrong
