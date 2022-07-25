import React from 'react';
import styles from "./BookCard.module.css";

const BookCard = ({ book }) => {
    return (
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
    );
};

export default BookCard;