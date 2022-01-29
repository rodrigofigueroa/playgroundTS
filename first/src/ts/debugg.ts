
class Bug {
  findBugg( bug: string ){
    console.log( `Finding this ${ bug } on my program!` )
  }
}

const bug: Bug = new Bug()
console.log( bug.findBugg( 'Spider' ) );