import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BrowseBooks = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books);
  const [search, setSearch] = useState("");

  const filteredBooks = books.filter((book) =>
    book.category === category &&
    (book.title.toLowerCase().includes(search.toLowerCase()) ||
     book.author.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>📘 Category: {category}</h2>

  
      <input
   type="text"
       placeholder="🔍 Search by title or author"
      value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
      padding: "10px",
      width: "300px",
       fontSize: "16px",
       borderRadius: "8px",
       border: "1px solid #ccc",
       marginBottom: "20px",
        boxShadow: "0 1px 5px rgba(0,0,0,0.1)"
  }}
/>


      {filteredBooks.length === 0 ? (
        <p>No books found.</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "flex-start" }}>
  {filteredBooks.map((book) => (
    <div
      key={book.id}
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        width: "250px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        background: "#f9f9f9",
        transition: "transform 0.2s",
        cursor: "pointer"
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
       <img
        src={book.image} 
        alt={book.title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "contain",
          borderRadius: "8px",
          marginBottom: "10px"
        }}
      />

      <h3 style={{ marginBottom: "10px" }}>{book.title}</h3>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Rating:</strong> ⭐ {book.rating}</p>
      
      <Link to={`/book/${book.id}`} style={{ color: "#007bff", textDecoration: "none" }}>
        View Details
      </Link>
    </div>
  ))}
</div>

      )}
    </div>
  );
};

export default BrowseBooks;
