class PersonInheritance {
  constructor(
    public firstName: string,
    public lastName: string,
    protected age: number,
  ){}
  sellStock( nameStock: string, sells: number ): void {
    console.log(`${this.firstName} sells ${nameStock} and ${sells}`);
  }
}

class EmployeInheritance extends PersonInheritance{
  constructor(
    public firstName: string, public lastName: string, public age: number, 
    public department: string
  ){ super( firstName, lastName, age ) }

  sellStock( nameStock: string, sells: number){
    super.sellStock( nameStock, sells )
    this.reportDepartment( nameStock, sells )
  }

  private reportDepartment( n: string, s: number ){
    console.log(
      `${this.firstName} sells ${ s } and ${ n } items from the ${ this.department } department`
    );
  }
}

const emplyee1 = new EmployeInheritance('Jhon', 'Wick', 32, 'Sells')
emplyee1.sellStock( 'DELL', 200 )