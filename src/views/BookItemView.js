import useFetchBookById from '../hooks/useFetchBookById';
import PageHeading from '../components/PageHeading/PageHeading';
import BookCard from '../components/BookCard/BookCard';
import Loader from '../components/Loader/Loader';
import NotFoundView from './NotFoundView';

const BookItemView = () => {

    const { book, status, bookId} = useFetchBookById()

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