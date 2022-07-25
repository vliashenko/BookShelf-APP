import React from 'react';
import Navigation from '../Navigation/Navigation';
import styles from "./Appbar.module.css";

const Appbar = () => {
    return (
        <div className={styles.appbar}>
           <Navigation/> 
        </div>
    );
};

export default Appbar;