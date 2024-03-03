export type Book = {
    author: string;
    title: string;
    year: number;
    category: string;
  }
  
export type BooksProps = {
  books: Book[]
}

export type Rocket = {
  id: string,
  name: string,
  country: string,
  description: string,
  company: string,
  flickr_images: string[];
}