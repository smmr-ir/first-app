import React from 'react';
import Card from  "./Card";
import styles from "./Cards.module.css";

import iphone1 from "../images/iphone1.jpg";
import iphone2 from "../images/iphone2.jpg";
import iphone3 from "../images/iphone3.jpg";
import iphone4 from "../images/iphone4.jpg";

const Cards = () => {
    return (
        <div className={styles.container}>
            <Card image={iphone1} name="IphoneX" cost="500$" />
            <Card image={iphone2} name="IphoneX" cost="400$" />
            <Card image={iphone3} name="IphoneX" cost="700$" />
            <Card image={iphone4} name="IphoneX" cost="900$" />
        </div>
    );
};

export default Cards;