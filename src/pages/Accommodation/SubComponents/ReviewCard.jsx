import React from "react";
import styles from "./ReviewCard.module.css";
import RatingStars from "./StarRating";
import { UserCircleIcon } from "@heroicons/react/24/outline";

const ReviewCard = ({ review }) => {
  const { username, comment, rating, create_time } = review;
  const createDate = create_time.split("T")[0];

  return (
    <div className={styles.card}>
      <UserCircleIcon className={styles.userIcon} />
      <div className={styles.header}>
        <RatingStars rating={rating} />
        <p>{comment}</p>
      </div>
      <div className={styles.userinfo}>
        <h3>{username}</h3>
        <p className={styles.date}>{createDate}</p>
      </div>
    </div>
  );
};
export default ReviewCard;
