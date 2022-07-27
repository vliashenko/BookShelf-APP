import React from 'react';
import { NavLink } from "react-router-dom"
import styles from "./Navigation.module.css";

const Navigation = () => {
    return (
        <nav>
            <NavLink 
                exact="true"
                to="/" 
                className={styles.link} 
                activeclassname={styles.activeLink}
            >
                Main 
            </NavLink>   

            <NavLink 
                to="/books" 
                className={styles.link} 
                activeclassname={styles.activeLink}
            > 
                Books 
            </NavLink>   

            <NavLink 
                to="/authors" 
                className={styles.link} 
                activeclassname={styles.activeLink}
            > 
                Authors 
            </NavLink>   

            <NavLink 
                to="/table" 
                className={styles.link} 
                activeclassname={styles.activeLink}
            > 
                Table 
            </NavLink> 
        </nav>
    );
};

export default Navigation;