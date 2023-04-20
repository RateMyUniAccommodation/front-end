import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import styles from "./StarRating.module.css";

const StarRating = ({ rating }) => {
  const numStars = 5;
  const fullStar = <StarIcon className={styles.solidStar} />;
  const emptyStar = <StarIcon className={styles.emptyStar} />;

  const fullStars = Math.floor(rating);
  const emptyStars = numStars - Math.ceil(rating);

  const stars = [];
  for (let i = 0; i < fullStars; i++) {
    stars.push(fullStar);
  }
  for (let i = 0; i < emptyStars; i++) {
    stars.push(emptyStar);
  }

  return <div style={{ display: "flex" }}>{stars}</div>;
};

export default StarRating;