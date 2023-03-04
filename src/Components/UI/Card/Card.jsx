import React from "react";
import styles from "./Card.module.css";
import image from "../../../assets/images/caroussel-image.jpg";

const Card = () => {
  return (
    <div className={styles.card}>
      <img className={styles.cardImage} src={image} alt="caroussel" />
      <div className={styles.cardInfo}>
        <h3>Clark and Alicia</h3>
        <p>
          This fully-furnished space features a comfortable queen-sized bed, a
          fully-equipped kitchenette, and a cozy living area with a flat-screen
          TV. You'll love the convenient location, just steps away from the
          city's best restaurants, cafes, and shopping. Book your stay now and
          make Bob and Alicia's apartment your home away from home!
        </p>
      </div>
    </div>
  );
};
export default Card;
