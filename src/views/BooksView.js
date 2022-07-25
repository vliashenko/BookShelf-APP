import { useState ,useEffect } from 'react';
import { Link } from "react-router-dom";
import * as BookshelfAPI from "../services/bookshelf-api";
import PageHeading from '../components/PageHeading/PageHeading';
import Loader from '../components/Loader/Loader';
import NotFoundView from "./NotFoundView";
import BooksItem from "../components/BooksItem/BooksItem";


const BooksView = () => {

    const [books, setBooks] = useState([]);
    const [ status, setStatus] = useState('idle');

    useEffect(() => {
        setStatus("pending")
        BookshelfAPI.fetchBooks()
            .catch(setStatus('rejected'))
            .then(setBooks)
            .then(setStatus("resolved"))
    },[])

    if(status === "idle") {
        return (
            <PageHeading title="Books"/>
        )
    };

    if(status === "pending") {
        return (
            <Loader/>
        )
    };

    if(status === "rejected") {
        return (
            <NotFoundView/>
        )
    }

    if(status === "resolved" && books.length > 0) {
        return (
            <>
                <PageHeading title="Books"/>
        
                <ul style={{display: "flex", justifyContent: "space-around", flexWrap:"wrap"}}>
                    {books.map(book => {
                        const {id, ...allProp} = book
                        return (
                            <Link key={id} to={`/books/${id}`}>
                                <BooksItem {...allProp}/>
                            </Link>
                        )
                    })}
                </ul>
            </>
        )
    }
};

export default BooksView;