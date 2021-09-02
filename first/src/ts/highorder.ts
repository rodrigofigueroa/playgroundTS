
type numFunc<T> = ( arg: T ) => ( c: number ) => number 

const multi: numFunc<number> = ( m: number ) => ( another: number ) => m * another

const saySomething: numFunc<string> = ( c: string ) => ( s: number ) => s

console.log( multi( 2 )( 2 ) );
