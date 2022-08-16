// import * as booksActions from "./booksActions";
import * as bookShelfAPI from "../../services/bookshelf-api"
import { createAsyncThunk } from "@reduxjs/toolkit";

// export const fetchBooks = () => async dispatch => {
//     dispatch(booksActions.fetchBooksRequest());

//     try {
//         const books = await bookShelfAPI.fetchBooks();
//         dispatch(booksActions.fetchBooksSuccess(books))
//     } catch (error) {
//         dispatch(booksActions.fetchBooksError(error.message))
//     }
// }

export const fetchBooks = createAsyncThunk(
    "books/fetchBooks",
    async (_, { rejectWithValue }) => {
        try {
            const books = await bookShelfAPI.fetchBooks();
            return books
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)

export const fetchBooksById = createAsyncThunk(
    "books/fetchBooksById",
    async ( id, { rejectWithValue }) => {
        try {
            const book = await bookShelfAPI.fetchBookById(id);
            return book
        } catch (error) {
            return rejectWithValue(error.message)
        }
    }
)