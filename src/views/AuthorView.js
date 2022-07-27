import { useState, useEffect } from 'react';
import { NavLink, Outlet } from "react-router-dom";
import * as BookshelfAPI from "../services/bookshelf-api";
import PageHeading from '../components/PageHeading/PageHeading';

const AuthorView = () => {

    const [authors, setAuthors] = useState(null);

    useEffect(() => {
        BookshelfAPI.fetchAuthors().then(setAuthors)
    },[])

    return (
        <>
            <PageHeading title="Authors"/>

            <ul>
                {authors && authors.map( author => <li key={author.id}>
                    <NavLink to={`/authors/${author.id}`}> {author.name} </NavLink>
                </li>)}
            </ul>
            <hr />

            {authors && <Outlet context={authors}/>}
        </>
    );
};

export default AuthorView;