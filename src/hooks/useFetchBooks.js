import { useState ,useEffect } from 'react';
import * as BookshelfAPI from "../services/bookshelf-api";

const useFetchBooks = () => {
    const [books, setBooks] = useState([]);
    const [ status, setStatus] = useState('idle');

    useEffect(() => {
        setStatus("pending")
        BookshelfAPI.fetchBooks()
            .catch(setStatus('rejected'))
            .then(setBooks)
            .then(setStatus("resolved"))
    },[])


    return {books, status}
};

export default useFetchBooks;