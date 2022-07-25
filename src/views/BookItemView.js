import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageHeading from '../components/PageHeading/PageHeading';
import BookCard from '../components/BookCard/BookCard';
import Loader from '../components/Loader/Loader';
import NotFoundView from './NotFoundView';
import * as BookshelfAPI from "../services/bookshelf-api";

const BookItemView = () => {

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

    if(status === "pending" || status === "idle") {
        return (
            <Loader/>
        )
    };

    if(status === "rejected") {
        return (
            <NotFoundView/>
        )
    }

    if(status === "resolved" && book) {
        return (
            <>
                <PageHeading title={`Book ${bookId}`}/>
                <BookCard book={book}/>
            </>
        )
    }
};

export default BookItemView;