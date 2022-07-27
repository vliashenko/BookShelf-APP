import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as BookshelfAPI from "../services/bookshelf-api";


const useFetchBookById = () => {

    const [book, setBook] = useState(null);
    const [status, setStatus] = useState("idle")
    const params = useParams();
    const bookId = params.id;

    useEffect(() => {
        setStatus("pending")    
        BookshelfAPI.fetchBookById(bookId)
            .catch(() =>setStatus("rejected"))
            .then(setBook)
            .then(setStatus("resolved"))
    },[bookId])

    return { book, status, bookId }
};

export default useFetchBookById;