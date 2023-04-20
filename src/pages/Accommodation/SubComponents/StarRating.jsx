import React from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import styles from "./StarRating.module.css";

const StarRating = ({ rating }) => {
  const numStars = 5;
  const fullStars = rating;

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(i < fullStars ? <StarIcon key={i} className={styles.solidStar} /> : <StarIcon key={i} className={styles.emptyStar} />);
  }
  
  return <div style={{ display: "flex" }}>{stars}</div>;
};

export default StarRating;