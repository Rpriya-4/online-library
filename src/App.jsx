import React from "react";
import { Routes, Route , useLocation } from "react-router-dom";

import BookDetails from "./Pages/BookDetails";

import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import BrowserBooks from "./Pages/BrowserBooks";
import AddBook from "./Pages/AddBook";
import NotFound from "./Pages/NotFound";

const App = () => {

   const location = useLocation();

  const isNotFoundRoute =
    !["/", "/add"].includes(location.pathname) &&
    !location.pathname.startsWith("/books/") &&
    !location.pathname.startsWith("/book/");
  return (
    <div>
       {!isNotFoundRoute && <Navbar />} 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/books/:category" element={<BrowserBooks />} />
        <Route path="/add" element={<AddBook />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
