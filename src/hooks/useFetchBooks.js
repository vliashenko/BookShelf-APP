import { useState ,useEffect } from 'react';
import { useLocation } from "react-router-dom";
import * as BookshelfAPI from "../services/bookshelf-api";

const useFetchBooks = () => {
    const [books, setBooks] = useState([]);
    const [ status, setStatus] = useState('idle');
    const location = useLocation();

    useEffect(() => {
        setStatus("pending")
        BookshelfAPI.fetchBooks()
            .catch(setStatus('rejected'))
            .then(setBooks)
            .then(setStatus("resolved"))
    },[])


    return {books, status, location}
};

export default useFetchBooks;