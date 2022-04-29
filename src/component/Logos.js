import React from 'react';
import styles from "./Logos.module.css";
import Apple from "../images/apple.jpg";
import Xiaomi from "../images/xiaomi.jpg";
import Samsung from "../images/samsung.jpg";

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who Support Us?</h3>
            <div>
                <img src={Apple} alt="support" />
                <img src={Xiaomi} alt="support" />
                <img src={Samsung} alt="support" />
            </div>
        </div>
    );
};
export default Logos;