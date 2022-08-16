import useFetchBookById from '../hooks/useFetchBookById';
import PageHeading from '../components/PageHeading/PageHeading';
import BookCard from '../components/BookCard/BookCard';
import Loader from '../components/Loader/Loader';
import NotFoundView from './NotFoundView';

const BookItemView = () => {

    const { book, isLoading, error, bookId} = useFetchBookById()

    if(isLoading) {
        return (
            <Loader/>
        )
    };

    if(error) {
        return (
            <NotFoundView/>
        )
    }

    if(!error && book) {
        return (
            <>
                <PageHeading title={`Book ${bookId}`}/>
                <BookCard book={book}/>
            </>
        )
    }
};

export default BookItemView;