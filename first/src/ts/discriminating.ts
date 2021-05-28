
export class Search {
  classType = 'SEARCH'
  constructor( readonly payload: {searchQuery: string}){}
}

export class SearchSuccsess {
  classType = 'SEARCH_SUCCESS'
  constructor( public payload: {searchSuccess: string }){}
}

export class SearchFailed {
  classType = 'SEARCH_FAILED'
}

export type search = Search | SearchSuccsess | SearchFailed

// 

interface Triangle {
  kind: 'triangle' | undefined
  height: number
  width: number 
}

interface Circle {
  kind: 'circle' | undefined
  width: number 
}

type Figure = Triangle | Circle

function area( figure: Figure ): number | undefined {
  switch( figure.kind ){
    case 'triangle':
      return (figure.height * figure.width) / 2
    case 'circle':
      return Math.PI * ( figure.width ** 2 )
  }
}

const myTriangle: Triangle = { kind: 'triangle', height: 50, width: 20}
const myCircle: Circle = { kind: 'circle', width: 20}

console.log(
  area( myTriangle )
);
console.log(
  area( myCircle )
);