
interface authomovile {
  startEngine(): boolean,
  stop(): boolean,
  run( km:number ): void
}

class Car implements authomovile{
  startEngine(){
    return true
  }
  stop(){
    return false
  }
  run( km:number ){
    console.log(`This is running at ${ km } KM`)
  }
}

interface flyCar {
  flying(): string
}

interface swimCar {
  swimming(): string
}

class SecretCar  extends Car implements flyCar, swimCar{

  flying(){
    return 'This car is flying'
  }
  swimming(){
    return 'This car is Swimming'
  }

}

const myCar = new Car()
myCar.startEngine()
myCar.run( 23 )
myCar.stop()

const jamesBondCar = new SecretCar()
console.log(jamesBondCar.startEngine() )
jamesBondCar.run( 32 )
console.log( jamesBondCar.swimming() )
console.log( jamesBondCar.flying() )
