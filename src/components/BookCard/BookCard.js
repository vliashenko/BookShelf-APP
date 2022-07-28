import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import styles from "./BookCard.module.css";

const BookCard = ({ book }) => {

    const location = useLocation();
    const navigate = useNavigate();

    const onGoBack = () => {
        navigate(location?.state?.from ?? "/books")
    };
 
    return (
        <>
            <button 
                type="button"
                onClick={onGoBack}
                style={{margin: "0 30px"}}
            >
                Go Back
            </button>

            <div className={styles.container}>
                <div className={styles.containerImg}>
                    <img className={styles.img} src={book.imgUrl} alt="" />
                </div>

                <p className={styles.title}>
                    {book.title}
                </p>

                <b className={styles.author}>
                    {book.author.name}
                </b>

                <p className={styles.content}>
                    {book.descr}
                </p>
            </div>
        </>
    );
};

export default BookCard;