import React from 'react';
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import styles from "./Loader.module.css";

const Loader = () => {
    return (
        <div className={styles.container}>
            <div className={styles.loader}>
                <AiOutlineLoading3Quarters  size="24"/>
            </div>
            
            <p className={styles.loaderTitle}> Loading... </p>
        </div>
    );
};

export default Loader;