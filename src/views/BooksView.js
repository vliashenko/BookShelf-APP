import useFetchBooks from "../hooks/useFetchBooks";
import { Link } from "react-router-dom";
import PageHeading from '../components/PageHeading/PageHeading';
import Loader from '../components/Loader/Loader';
import NotFoundView from "./NotFoundView";
import BooksItem from "../components/BooksItem/BooksItem";


const BooksView = () => {

    const { books,  error, isLoading, location } = useFetchBooks();

    if(isLoading === true) {
        return (
            <>
                <PageHeading title="Books"/>
                <Loader/>
            </>
        )
    };

    if(error !== null) {
        return (
            <NotFoundView/>
        )
    };

    if(isLoading === false && books.length > 0) {
        return (
            <>
                <PageHeading title="Books"/>
        
                <ul style={{display: "flex", justifyContent: "space-around", flexWrap:"wrap"}}>
                    {books.map(book => {
                        const {id, ...allProp} = book
                        return (
                            <Link 
                                key={id} 
                                to={`/books/${id}`}
                                state={{from: location}}
                                >
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