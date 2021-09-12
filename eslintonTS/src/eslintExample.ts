
type Esliteo = {
  nameS?: string,
  number: string
}

interface Eslineto {
  n: string
}

class Car implements Esliteo{
  public static nameS: string
  public static number: string
  constructor(
    private n: string,
    public number: string
  ){
    this.n = n
    this.number = number
  }
}