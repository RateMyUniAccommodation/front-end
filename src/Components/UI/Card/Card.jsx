import React from "react";
import styles from "./Card.module.css";
import image from "../../../assets/images/caroussel-image.jpg";

const Card = () => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={image} alt="caroussel" />
      <div className={styles.cardInfo}>
        <h3 >Bob</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptates, quod, quia, voluptate quae voluptatem quibusdam quosdawdawdwadawdawddawdwadawddwadawdawd
        </p>
      </div>
    </div>
  );
};
export default Card;