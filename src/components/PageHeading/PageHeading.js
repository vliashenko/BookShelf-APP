import React from 'react';
import styles from "./PageHeading.module.css";

const PageHeading = ({ title }) => {
    return (
        <div className={styles.PageHeading}>
            {title}
        </div>
    );
};

export default PageHeading;