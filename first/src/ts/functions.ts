

function calcTax( state: string, income: number, dependants: number ): number | undefined
{
  if( state === 'NY' ){
    return income * 0.6 - dependants * 500
  }else if (state === 'NJ'){
    return income * 0.6 - dependants * 300
  }else{
    return 
  }
}

let tax: any = calcTax( 'NY', 50000, 2 )

function padd1(value: string, padding: any ): string{
  if( typeof padding === 'string' ){
    return padding + 'px'
  }
  if( typeof padding === 'number' ){
    return padding + 'px'
  }
  throw new Error('that is not legal')
}

padd1('hello', true )

function padd(value: string, padding: string | number ): string{
  if( typeof padding === 'string' ){
    return padding + 'px'
  }
  if( typeof padding === 'number' ){
    return padding + 'px'
  }
  throw new Error('variable not legal')
}

padd('hello', 20 )
