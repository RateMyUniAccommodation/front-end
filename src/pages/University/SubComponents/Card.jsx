import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
import { StarIcon, CurrencyPoundIcon} from "@heroicons/react/24/outline";

const Card = ({ name, price, image, num_reviews }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/accommodation/${name}`);
  };

  return (
    <div onClick={handleClick} className={styles.card}>
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <div className={styles.facilities}></div>
      <div className={styles.price}>
        <CurrencyPoundIcon className={styles.pound} />
        <p>{price}</p>
      </div>
      <div className={styles.review}>
        <StarIcon className={styles.star} />
        <p>{num_reviews} Reviews</p>
      </div>
    </div>
  );
};
export default Card;
