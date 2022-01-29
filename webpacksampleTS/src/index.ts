
interface BookInfo {
  bookName: string,
  author: string
}
class Book implements BookInfo{
  constructor(
    public bookName: string,
    public author: string
  ){
    this.bookName = bookName
    this.author = author
  }
}

const fiveAMClub: Book = new Book('5AM CLub', 'Robin Sharma')

console.log( fiveAMClub )