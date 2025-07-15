import { createSlice } from "@reduxjs/toolkit";
import books from "../data"; // initial dummy data

const booksSlice = createSlice({
  name: "books",
  initialState: books,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload); // new book added to array
    }
  }
});

export const { addBook } = booksSlice.actions;
export default booksSlice.reducer;
