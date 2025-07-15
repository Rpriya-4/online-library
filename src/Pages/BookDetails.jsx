import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books);
  const book = books.find((b) => b.id === Number(id));

  if (!book) return <p style={{ padding: "20px" }}>Book not found.</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Description:</strong> {book.description}</p>
      <p><strong>Rating:</strong> ⭐ {book.rating}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <br />
      <Link to={`/books/${book.category}`}>← Back to Browse</Link>
    </div>
  );
};

export default BookDetails;
