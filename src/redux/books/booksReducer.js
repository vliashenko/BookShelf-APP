import { createSlice ,createReducer, combineReducers } from "@reduxjs/toolkit";
import { fetchBooks, fetchBooksById } from "./booksOperations";
// import * as booksActions from "./booksActions"

// const entities = createReducer([], {
//     [fetchBooks.fulfilled] : ( _, action) => action.payload
// })

// const isLoading = createReducer(false, {
//     [fetchBooks.pending] : () => true,
//     [fetchBooks.fulfilled] : () => false,
//     [fetchBooks.rejected] : () => false,
// })

// const error = createReducer(null, {
//     [fetchBooks.rejected] : (_, action) => action.payload,
//     [fetchBooks.pending] : () => null,
// })

// export default combineReducers({
//     entities,
//     isLoading,
//     error,
// })

const booksSlice = createSlice({
    name: "books",
    initialState: { 
        entities: [], 
        book: null,
        isLoading: false, 
        error: null
    },
    extraReducers: {
        [fetchBooks.fulfilled] : (state, { payload }) => {
            return { ...state, entities: payload, isLoading: false }
        },
        [fetchBooksById.fulfilled] : (state, { payload }) => {
            return { ...state, book: payload, isLoading: false }
        },

        [fetchBooks.pending] : (state, _) => {
            return { ...state, isLoading: true }
        },
        [fetchBooksById.pending] : (state, _) => {
            return { ...state, isLoading: true }
        },

        [fetchBooks.rejected] : (state, _) => {
            return { ...state, isLoading: false, error: true }
        },
        [fetchBooksById.rejected] : (state, _) => {
            return { ...state, isLoading: false, error: true }
        },
    }
})

export default booksSlice.reducer