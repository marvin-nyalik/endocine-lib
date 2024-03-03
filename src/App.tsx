import './App.css'
import Books from './components/Books';
import RocketComp from './components/Rockets';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import type { Book, BooksProps } from './lib/types';

function App() {
  const books: Book[] = [
    { author: 'Eunniah Mbabazi', title: 'Breaking Down', year: 1968, category: 'Fiction' },
    { author: 'Chinua Achebe', title: 'Things Fall Apart', year: 1975, category: 'Non-fiction' },
    { author: 'Chinua Achebe', title: 'The River Between', year: 1960, category: 'Folklore' },
    { author: 'Mbongeni Ngema', title: 'Themes of Sarafina', year: 1982, category: 'Science Fiction' },
    { author: 'Marvin Nyalik', title: 'Lyrical Labyrinth', year: 2005, category: 'Fairytales' },
  ];
  
  const booksData: BooksProps = { books: books }
  
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Books books={booksData}/>}></Route>
          <Route path='/rockets' element={<RocketComp />}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
