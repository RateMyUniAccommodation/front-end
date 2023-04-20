import React from "react";
import styles from "./ReviewCard.module.css";
import RatingStars from "./StarRating";

const ReviewCard = ({ review }) => {
    const { username, comment, rating, create_time } = review;
    const createDate = create_time.split("T")[0];

    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <div>{username}&#160;:&#160;</div>
                <RatingStars rating={rating} />
            </div>
            <div>{comment}</div>
            <div className={styles.date}>{createDate}</div>
        </div>
    );
};
export default ReviewCard;
