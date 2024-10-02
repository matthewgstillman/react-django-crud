import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/apiproject/books/");
      const data = await response.json();
      setBooks(data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <h1>Book Website</h1>
      <div>
        <input type="text" placeholder="Book Title..."/>
        <input type="number" placeholder='Release Date...'/>
        <button>Add Book</button>
        {books.map((book) => 
          <div>
            <p>Title: {book.title}</p>
            <p>Release Year: {book.release_year}</p>
          </div>
        )}
      </div>
    </>
  )
}

export default App
