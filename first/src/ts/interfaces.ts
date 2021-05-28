interface Person2 {
  firstName: string,
  lastName: string, //lastName?: string,
  age: number
}

const savePerson = ( person: Person2 ): void | null => {
  console.log( `Saving this person: ${person.firstName}` );
}

const per: Person2 = {
  firstName: 'Stephen', lastName: 'King', age: 122
}
// const per = {
//   firstName: 'Stephen', age: 122
// }

savePerson( per )

