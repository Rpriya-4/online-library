
    import React, { useState } from "react";
  import { useDispatch } from "react-redux";
 import { addBook } from "../redux/BooksSlice";
   import { useNavigate } from "react-router-dom";

    const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

        const [form, setForm] = useState({
      title: "",
      author: "",
      description: "",
      rating: "",
      category: ""
  });

    const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

      const handleSubmit = (e) => {
    e.preventDefault();

        if (!form.title || !form.author || !form.description || !form.rating || !form.category) {
      alert("Please fill all fields.");
      return;
    }

       const newBook = {
      ...form,
      id: Date.now(),
      rating: parseFloat(form.rating)
    };

    dispatch(addBook(newBook));
    navigate(`/books/${form.category}`);
  };

      return (
         <div style={{ padding: "20px" }}>
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} /><br /><br />
        <input name="author" placeholder="Author" onChange={handleChange} /><br /><br />
        <input name="description" placeholder="Description" onChange={handleChange} /><br /><br />
        <input name="rating" type="number" placeholder="Rating (0-5)" onChange={handleChange} /><br /><br />
        <input name="category" placeholder="Category (Fiction, etc)" onChange={handleChange} /><br /><br />
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBook;
  