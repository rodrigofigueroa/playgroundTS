
class Person4 {
  public firstName: string | undefined
  public lastName: string | undefined
  protected age: number | undefined
  myName(): string{
    return `My name is ${ this.firstName }`
  }
}

class Employe extends Person4{
  department: string | undefined
  whoAMI(){
    return `My name is ${ this.firstName }`
  }
}

const jhon = new Employe()

console.log( jhon.whoAMI() )
// Explicity
class Person5 {
  firstName = ''
  lastNAme = ''
  age = 0
  constructor(
    firstName: string,
    lastNAme: string,
    age: number,
  ){
    this.firstName = firstName
    this.lastNAme = lastNAme
    this.age = age
  }
}

//implicity

class Person6 {
  constructor(
    public firstName: string,
    public lastName : string,
    private age: number
  ){}
}
const person6: Person6 = new Person6('Jhon','Wick', 42 )
console.log(person6.firstName, person6.lastName);

