export {}

class Person {
  name: string | undefined
}

class Employee extends Person{}

class Animal {
  
}

const workers: Person[] = []
workers[ 0 ] =  new Person()
workers[ 1 ] =  new Employee()
// workers[ 2 ] =  new Animal() // error

const w: Array< string | number > = [ 's' , 5 ]

console.log( workers );


