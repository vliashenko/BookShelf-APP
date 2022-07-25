import React from 'react';
import styles from "./BooksItem.module.css";

const BooksItem = ({ imgUrl, title }) => {
    return (
        <li className={styles.bookItem}>
           <img className={styles.bookImg} src={ imgUrl } alt="alternative" /> 
           <p className={styles.bookTitle}>{title}</p>
        </li>
    );
};

export default BooksItem;