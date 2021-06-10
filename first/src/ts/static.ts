
class Gangsta {
  static bulletsLeft: number = 100
  constructor(){}
  shoot(){
    Gangsta.bulletsLeft--;
    console.log( Gangsta.bulletsLeft );
  }
}

const gan  = new Gangsta()
const gan2 = new Gangsta()

gan.shoot()
gan2.shoot()

// singleton

class AppState {
  counter = 0
  private static insReference: AppState

  private constructor(){}
  static getInstance(): AppState{
      if( AppState.insReference === undefined ){
        AppState.insReference = new AppState()
      }
      return AppState.insReference
  }
}

//const appstate = new AppState() // error

const appstate1 = AppState.getInstance()
const appstate2 = AppState.getInstance()
appstate1.counter++
appstate2.counter++
console.log(
  appstate1, appstate2
);
