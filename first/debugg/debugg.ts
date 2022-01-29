
class FindBug {
  findBugg( bug: string ){
    console.log( `Finding this ${ bug } on my program!` )
  }
}

const bugs: FindBug = new FindBug()
console.log( bugs.findBugg( 'Spider' ) );