export type Book = {
    author: string;
    title: string;
    year: number;
    category: string;
  }
  
export type BooksProps = {
  books: Book[]
}