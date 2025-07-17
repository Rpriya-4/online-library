import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

     const BookDetails = () => {
  const { id } = useParams();
  const books = useSelector((state) => state.books);
  const book = books.find((b) => b.id === Number(id));

    if (!book) return <p style={{ padding: "20px" }}>Book not found.</p>;

       return (
      <div style={{ padding: "20px", display: "flex", justifyContent: "center" }}>
     <div
      style={{
        maxWidth: "600px",
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
      }}
    >
       <img
        src={book.image}
        alt={book.title}
        style={{
          width: "100%",
          height: "300px",
          objectFit: "contain",
          borderRadius: "10px",
          marginBottom: "10px",
        }}
      />
      <h2 style={{ marginBottom:"10px"}}>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      {/* <p><strong>Description:</strong> {book.description}</p> */}
      <p><strong>Rating:</strong> ⭐ {book.rating}</p>
      <p><strong>Category:</strong> {book.category}</p>
      <p style={{ marginTop : "10px 0",lineHeight: "1.15"}}>{book.description}</p>
      <br />
      <Link to={`/books/${book.category}`}>← Back to Browse</Link>
    </div>
    </div>
  );
};

export default BookDetails;
