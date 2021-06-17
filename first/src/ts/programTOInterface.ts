
interface Product {
  nameProduct: string,
  idProduct: number
}

interface IProductService {
  getAllProducts(): Product[]
  getProductId( id:number ): Product
}

class ProductService implements IProductService {
  getAllProducts(){
    return []
  }
  getProductId(){
    return { nameProduct: '', idProduct: 2 }
  }
}

class ProductServiceMock implements IProductService{
  getAllProducts(){
    return []
  }
  getProductId(){
    return { nameProduct: '', idProduct: 4 }
  }
}

const checkProduction = ( prod: boolean ) => {
  if( prod ){
    return new ProductService()
  }else{
    return new ProductServiceMock()
  }
}

const production: boolean = true
const service: IProductService = checkProduction( production )
console.log( 
  service.getProductId( 1 )
)