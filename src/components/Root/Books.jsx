import React, { useEffect, useState } from "react";
import BookCard from "./BookCard";

const Books = () => {

  const [books, setBooks] = useState([]);
  useEffect(() => {
    fetch("./booksData.json")
      .then((response) => response.json())
      .then((data) => setBooks(data));
  }, []);
  return (
    <div>
      <h1 className="font-bold text-4xl text-center">Books</h1>
      <div>
        {books.map((book) => (
          <BookCard key={books.bookId} book={book}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Books;
