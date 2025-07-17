import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    const linkStyle = {
    color: "white",
    textDecoration: "none",
    fontWeight: "bold",
    padding: "10px 28px",
    borderRadius: "6px",
    transition: "background-color 0.3s",
  };
  
     const linkHoverStyle = {
  backgroundColor: "#2b7a78", 
       };
  return (
     <nav style={{
      background: "#8eb596",
      padding: "15px",
      display: "flex",
      gap: "20px",
      justifyContent: "center"
    }}>
      <Link
        to="/"
        style={linkStyle}
        onMouseEnter={e => e.target.style.backgroundColor = "#6c9877"}
        onMouseLeave={e => e.target.style.backgroundColor = "transparent"}
      >
        🏠 Home
      </Link>

      <Link
        to="/books/Fiction"
        style={linkStyle}
        onMouseEnter={e => e.target.style.backgroundColor = "#6c9877"}
        onMouseLeave={e => e.target.style.backgroundColor = "transparent"}
      >
        📚 Browse Books
      </Link>

      <Link
        to="/add"
        style={linkStyle}
        onMouseEnter={e => e.target.style.backgroundColor = "#6c9877"}
        onMouseLeave={e => e.target.style.backgroundColor = "transparent"}
      >
        ➕ Add Book
      </Link>
    </nav>
  );
};

export default Navbar;