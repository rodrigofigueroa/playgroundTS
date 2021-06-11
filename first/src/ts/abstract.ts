
abstract class PersonAbstract {
    constructor(
      public FirstName: string
    ){}

    dayOff(){
      console.log( `${this.FirstName} will have a dayoff` );
    }

    increaseSalary( percentaje: number ){
      this.dayOff()
      this.increasePercentaje( percentaje )
    }

    abstract increasePercentaje( percentaje: number ): void
}

class Constractor extends PersonAbstract{
  
  constructor( public FirstName: string ){
    super( FirstName )
  }

  increasePercentaje( percentaje: number ) {
    console.log( `${this.FirstName} will get a increace of salary by ${ percentaje }%` )
  }
  
}

class EmployeAbstract extends PersonAbstract {
  constructor( public firstName: string ){
   super( firstName ) 
  }

  increasePercentaje( percentaje: number ){
    console.log( `${ this.FirstName } will get an increase of hour by ${ percentaje }%`) 
  }
}

const j = new Constractor('Marth')
const m = new EmployeAbstract('Mary')
const workers: PersonAbstract[] = []

// j.increasePercentaje( 5 )
// m.increasePercentaje( 6 )

workers[ 0 ] = new Constractor('Yoshi')
workers[ 1 ] = new EmployeAbstract('Mario')

workers.forEach( w => w.increasePercentaje( 5 ) )
