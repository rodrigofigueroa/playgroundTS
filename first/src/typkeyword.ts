type foot = number
type pound = number

type Patient = {
  name: string,
  height: foot,
  weight?: pound 
}

let bob: Patient = {
  name: 'bob',
  height: 11,
  weight: 54
}

console.log(bob);
