class PersonS {
    namePerson: string | undefined
    age: number | undefined
}

class CustomerS {
  namePerson: string | undefined
}

const cust: CustomerS = new PersonS()

cust.namePerson = 'Jhon Wick'

console.log( cust );