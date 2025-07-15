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

      <h2>➡️ Popular Books</h2>
      <ul>
        <li><Link to="/book/1" style={{fontWeight:"bold" , fontSize:"18px",}}>The Great Gatsby</Link></li>
        <li><Link to="/book/2" style={{fontWeight:"bold" , fontSize:"18px",}}>Sapiens</Link></li>
        <li><Link to="/book/16" style={{fontWeight:"bold" , fontSize:"18px",}}>Becoming</Link></li>
        <li><Link to="/book/33" style={{fontWeight:"bold" , fontSize:"18px",}}>The Silent Patient</Link></li>
      </ul>
    </div>
  );
};

export default Home;
