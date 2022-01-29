export {}

class Comparing<K, V> {
  constructor( public key: K, public value: V ){}
}

interface Pairs <K, V> {
  key: K,
  value: V
}

function compare< K, V >( v1: Pairs< K, V >, v2: Pairs< K, V > ): boolean {
  if( 
      v1.key === v2.key && 
      v1.value === v2.value
     ){
    return true
  }
  return false
}

const prof1 = new Comparing('a', 'b')
const prof2 = new Comparing('b', 'b')

const prof3 = new Comparing('b', 'b')
const prof4 = new Comparing('b', 'b')

console.log( compare( prof1, prof2 ) )
console.log( compare( prof3, prof4 ) )
// 
interface Worker{
  firstName: string,
  work: string
}
interface Worker2{
  firstName: string,
  work: string
  age: number
}
const enum Area {
  Admin = 'admin',
  Marketing = 'marketing'
}

function userRole<T>(): T {
  return JSON.parse( '{ "firstName": "Jhon", "work": "admin" }' )
}


const user = userRole<Worker2>()
console.log( user );
switch ( user.work ) {
  case Area.Admin:
      console.log( user.work )
    break;
  case Area.Marketing:
    console.log( user.work )
    break;

  default:
    break;
}

interface twoValues<K, V> {
  key: K,
  value: V
}

class twoValuesClass<K, V> {
  constructor(
    public value: V,
    public key: K
  ){}
}
function com<K,V> ( v1: twoValues<K,V>, v2: twoValues<K,V> ){
  if( v1.value === v2.value ){
    console.log( true )
  }else{
    console.log( false )
  }
}

const p = new twoValuesClass('orange', 'orange')
const r = new twoValuesClass('orange', 'orange')

com( p, r )

interface onlyStrings<A,B> {
  sA: A,
  sB: B
}

interface onlyStringsTwo<A,B> {
  sA: A,
  sB: B
}

function concatString<A,B>( a: onlyStrings<A,B>, b: onlyStringsTwo<A,B>){
  return `${a.sA} ${b.sA}`
}

class OnlyStringClass<A,B> {
  constructor(
    public sA: A,
    public sB: B 
  ){}
}

class OnlyStringClassTwo<A,B> {
  constructor(
    public sA: A,
    public sB: B 
  ){}
}

const s1 = new OnlyStringClass( 'a', 'a' )
const s2 = new OnlyStringClassTwo( 'c', 'C' )

console.log(  
  concatString(s1, s2)
);