import { Link, useParams, useOutletContext, useLocation } from "react-router-dom";
    
const AuthorSubView = () => {

    const { authorId } = useParams();

    const location = useLocation()

    const allAuthors = useOutletContext();
    const author = allAuthors.find(author => author.id === Number(authorId))
    
    return (
        <div style={{display: "flex", flexDirection: "column", alignItems: "center"}}>
            <h2>{author.name}</h2>

            <ul>
                {author.books.map(book => <li key={book.id}>
                    <Link 
                        to={`/books/${book.id}`}
                        state={{from: location}}
                    >
                        {book.title}</Link>
                </li>)}
            </ul>
        </div>
    );
};

export default AuthorSubView;