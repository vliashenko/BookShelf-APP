import { configureStore } from "@reduxjs/toolkit";
import booksReducer from "./books/booksReducer";
import booksSlice from "./books/booksReducer"

export const store = configureStore({
    reducer: {
        books: booksSlice,
    },
})