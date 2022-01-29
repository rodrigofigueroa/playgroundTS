export {}

interface compareToWithoutGen < T = {} > {
    compareTo( value: T ): number
}

class Rectangle implements compareToWithoutGen<Rectangle> {
  constructor( private width: number, private height: number ){
    this.width = width
    this.width = height
  }
  compareTo( value: Rectangle ){
    return this.width + this.height - ( value.height + value.width )
  }
}

class Triangle implements compareToWithoutGen<Triangle> {
  compareTo( value: Triangle ){
    return 2
  }
}

const rect1 = new Rectangle( 2, 1 )
const rect2 = new Rectangle( 3, 2 )
console.log(
  rect1.compareTo( rect2 ) > 0
  ? `Rect 1 is bigguer`
  : rect1.compareTo( rect2 ) == 0 
  ? 'Is equal'
  : 'Is small'
)

class Programer implements compareToWithoutGen<Programer> {
  constructor( private salary: number, public firstName: string){
    this.salary = salary
    this.firstName = firstName
  }
  compareTo( value: Programer): number {
    return this.salary - value.salary 
  }
}

const rod   = new Programer( 3000, 'Rodrigo' )
const jhon  = new Programer( 2000, 'Jhon' )

console.log(
  rod.compareTo( jhon ) > 0
  ? `${rod.firstName} gain more than ${jhon.firstName}`
  : rod.compareTo( jhon ) === 0 
  ? `${rod.firstName} salay is the same as ${jhon.firstName}`
  : `${rod.firstName} is Poor`
);

