import {  useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { booksOperations, booksSelectors} from "../redux/books"
import { useSelector, useDispatch } from 'react-redux';

const useFetchBookById = () => {
    const dispatch = useDispatch();
    const book = useSelector(booksSelectors.getBook)
    const isLoading = useSelector(booksSelectors.getIsLoading)
    const error = useSelector(booksSelectors.getError)
    const params = useParams();
    const bookId = params.id;

    useEffect(() => {
        dispatch(booksOperations.fetchBooksById(bookId))
    },[bookId, dispatch])

    return { book, isLoading, error, bookId }
};

export default useFetchBookById;