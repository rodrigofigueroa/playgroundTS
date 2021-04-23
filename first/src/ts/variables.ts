let firsVariable = 'My variable'
let nm: number = 5 
let bool: boolean = true
let sym = Symbol('huhu')
let anyy: any = 'Anything'
let unkow: unknown = 5 

function tsFunc( nuber: number, age: number ): void {
  console.log(
    nuber * age 
  );
}

function years( age: number ): number {
  let date = new Date()
  return date.getUTCFullYear() - age
}

function nullFunc (): null | undefined {
  return 
}