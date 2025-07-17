import React from "react";
import { Link } from "react-router-dom";

const categories = ["Biography" , "Horror", "Fiction", "Non-Fiction", "Mystery" ,];

const Home = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>📚 Welcome to the Online Library</h1>
      <br/>

      
<h2 style={{ fontSize: "22px", fontWeight: "bold", marginBottom: "15px" }}>
  ➡️ Explore Book Categories
</h2><br/>

<div style={{
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
  gap: "16px",
  marginBottom: "30px"
}}>
  {categories.map((cat, i) => (
    <Link
      key={i}
      to={`/books/${cat}`}
      style={{
        backgroundColor: "#f4f4f4",
        padding: "18px",
        textAlign: "center",
        borderRadius: "10px",
        textDecoration: "none",
        fontWeight: "bold",
        color: "#2a3f54",
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)",
        transition: "background-color 0.3s"
      }}
      onMouseEnter={(e) => e.target.style.backgroundColor = "#dcefe3"}
      onMouseLeave={(e) => e.target.style.backgroundColor = "#f4f4f4"}
    >
      📍 {cat}
    </Link>
  ))}
</div><br/>
   
<h2 style={{ marginTop: "30px" }}>Popular Books</h2>
<div style={{ display: "flex", gap: "20px", flexWrap: "wrap", marginTop: "10px" }}>

  
  <div style={{
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    width: "250px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    background: "#f9f9f9",
  }}>
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/7/7a/The_Great_Gatsby_Cover_1925_Retouched.jpg"
      alt="The Great Gatsby"
      style={{ width: "100%", height: "200px", objectFit: "contain", borderRadius: "8px", marginBottom: "10px" }}
    />
    <h3>The Great Gatsby</h3>
    <p><strong>Author:</strong> F. Scott Fitzgerald</p>
    <p><strong>Rating:</strong> ⭐ 4.3</p>
    <Link to="/book/1" style={{ color: "#007bff", textDecoration: "none" }}>View Details</Link>
  </div>

  <div style={{
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    width: "250px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    background: "#f9f9f9",
  }}>
    <img
      src="https://m.media-amazon.com/images/I/713jIoMO3UL._AC_UF1000,1000_QL80_.jpg"
      alt="Sapiens"
      style={{ width: "100%", height: "200px", objectFit: "contain", borderRadius: "8px", marginBottom: "10px" }}
    />
    <h3>Sapiens</h3>
    <p><strong>Author:</strong> Yuval Noah Harari</p>
    <p><strong>Rating:</strong> ⭐ 4.8</p>
    <Link to="/book/2" style={{ color: "#007bff", textDecoration: "none" }}>View Details</Link>
  </div>

  
  <div style={{
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    width: "250px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    background: "#f9f9f9",
  }}>
    <img
      src="https://m.media-amazon.com/images/I/81h2gWPTYJL._AC_UF1000,1000_QL80_.jpg"
      alt="Becoming"
      style={{ width: "100%", height: "200px", objectFit: "contain", borderRadius: "8px", marginBottom: "10px" }}
    />
    <h3>Becoming</h3>
    <p><strong>Author:</strong> Michelle Obama</p>
    <p><strong>Rating:</strong> ⭐ 4.9</p>
    <Link to="/book/16" style={{ color: "#007bff", textDecoration: "none" }}>View Details</Link>
  </div>

  
  <div style={{
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "15px",
    width: "250px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    background: "#f9f9f9",
  }}>
    <img
      src="https://m.media-amazon.com/images/I/71sBtM3Yi5L.jpg"
      alt="The Silent Patient"
      style={{ width: "100%", height: "200px", objectFit: "contain", borderRadius: "8px", marginBottom: "10px" }}
    />
    <h3>The Silent Patient</h3>
    <p><strong>Author:</strong> Alex Michaelides</p>
    <p><strong>Rating:</strong> ⭐ 4.4</p>
    <Link to="/book/33" style={{ color: "#007bff", textDecoration: "none" }}>View Details</Link>
  </div>

</div>
 </div>
  );
};

export default Home;

