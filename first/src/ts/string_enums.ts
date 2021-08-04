
enum CharacterMoveset{
  Up    = 'UP',
  Down  = 'DOWN',
  Right = 'RIGHT',
  Left  = 'LEFT'
}

console.log( CharacterMoveset.Down );

function moveSets( move: CharacterMoveset ){
  if( move === CharacterMoveset.Down ){
    console.log('SIT and see');
  }
}

moveSets( CharacterMoveset.Down )

enum LoadingProducts{
  Load_Success  = 'Products Loaded Successfuly',
  Load_Failed   = 'Failed to Load Products',
  Loading       = 'Loading All Products',
}

function loadingProds( message: string ){
  if( message === 'failed' ){
    console.log( LoadingProducts.Load_Failed );
  }
  if( message === 'success' ){
    console.log( LoadingProducts.Load_Success );
  }
}

loadingProds( 'failed')
loadingProds( 'success')