import { useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { booksOperations, booksSelectors} from "../redux/books"
import { useSelector, useDispatch } from 'react-redux';

const useFetchBooks = () => {
    const location = useLocation();
    const dispatch = useDispatch();

    const books = useSelector(booksSelectors.getBooks)
    const isLoading = useSelector(booksSelectors.getIsLoading)
    const error = useSelector(booksSelectors.getError)

    useEffect(() => {
        dispatch(booksOperations.fetchBooks())
    },[ dispatch ])


    return {books, error, isLoading, location}
};

export default useFetchBooks; 