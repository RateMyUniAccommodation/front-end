import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
import { UserPlusIcon, StarIcon, CurrencyPoundIcon} from "@heroicons/react/24/outline";

const Card = ({ name, rooms, description, price, image, num_reviews, info }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/accommodation/${name}`, {state: {accom_info:info}});
  };
  return (
    <div onClick={handleClick} className={styles.card}>
      <img src={image} alt={name} />
      <div className={styles.info}>
        <div className={styles.title}>
        <h3>{name}</h3>
        <p>{description}</p>
        </div>
        <div className={styles.facilities}>
          <UserPlusIcon className={styles.room} />
          <p>{rooms} Available Rooms</p>
        </div>
        <div className={styles["price-review"]}>
        <div className={styles.price}>
          <CurrencyPoundIcon className={styles.pound} />
          <p>{price} pcm</p>
        </div>
        <div className={styles.review}>
          <StarIcon className={styles.star} />
          <p>{num_reviews} Reviews</p>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
