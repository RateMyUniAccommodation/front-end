import React from "react";
import styles from "./Card.module.css";
import { StarIcon } from "@heroicons/react/20/solid";

const Card = ({ name, image_link, num_reviews }) => {
  return (
    <div className={styles.card}>
      <img src={image_link} alt={name} />
      <h3>{name}</h3>
       <div className={styles.review}>
        <p>{num_reviews} Reviews</p>
        <StarIcon className={styles.star} />
      </div>
    </div>
  );
};
export default Card;
