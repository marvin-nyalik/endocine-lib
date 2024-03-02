import Books from "../../components/Books";
import { fireEvent, render, screen } from "@testing-library/react";
import type { Book, BooksProps } from "../../lib/types";

describe('Books Component', () => {
  describe('=> Rendering', () => {
    it('-> Renders as expected', () => {
      const books: Book[] = [
        { author: 'Mbongeni Ngema', title: 'Sarafina', year: 1982, category: 'Science Fiction' },
      ]
      const booksData: BooksProps = {
        books: books,
      }

      render(<Books books={booksData}/>)
      const title = screen.getByText(/Sarafina/i);
      expect(title).toBeVisible();
    })
  })

  describe("=> Functionality", () => {
    it('-> Its Inputs Respond to Change event', () => {
        const books: Book[] = [
          { author: 'Mbongeni Ngema', title: 'Sarafina', year: 1982, category: 'Science Fiction' },
        ]
        const booksData: BooksProps = {
          books: books,
        }
  
        render(<Books books={booksData}/>)

        const authorInput = screen.getByPlaceholderText("Author");
      
        const authorText = "Marvin Nyalik";
        fireEvent.change(authorInput, { target: { value: authorText}})
       
        expect(authorInput).toHaveValue(authorText); 
      })

      it('-> Its Filters the books list in the Dom when Input changes', () => {
        const books: Book[] = [
          { author: 'Mbongeni Ngema', title: 'Sarafina', year: 1982, category: 'Science Fiction' },
          { author: 'Author 1', title: 'Title 1', year: 2000, category: 'Category 1' },
        ]
        const booksData: BooksProps = {
          books: books,
        }
  
        render(<Books books={booksData}/>)

        const authorInput = screen.getByPlaceholderText("Author");
        const author1 = screen.getByText(/Author 1/i);
        expect(author1).toBeInTheDocument();
      
        fireEvent.change(authorInput, { target: { value: "Mbongeni"}})
        expect(author1).not.toBeInTheDocument();
      })

      it('-> Its rearranges the books list in the Dom when select value changes', () => {
        const books: Book[] = [
          { author: 'Mbongeni Ngema', title: 'Sarafina', year: 1982, category: 'Science Fiction' },
          { author: 'Author 1', title: 'Amazing', year: 2000, category: 'Category 1' },
        ]
        const booksData: BooksProps = {
          books: books,
        }
  
        render(<Books books={booksData}/>)
        const firstElement = screen.getByText(/Sarafina/i);
        const secondElement = screen.getByText(/Amazing/i);

        expect(firstElement).toHaveAttribute('data-testid', 'book-0');
        expect(secondElement).toHaveAttribute('data-testid', 'book-1');

        const selectElement = screen.getByRole('combobox');
        fireEvent.change(selectElement, { target: { value: 'title'}});
        expect(firstElement).toHaveAttribute('data-testid', 'book-1');
        expect(secondElement).toHaveAttribute('data-testid', 'book-0');
      })
  })
})