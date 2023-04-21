import React, { Fragment } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import styles from "./StarRating.module.css";

const StarRating = ({ rating }) => {
  const numStars = 5;

  const stars = [];
  for (let i = 0; i < numStars; i++) {
    stars.push(i < rating ? <StarIcon key={i} className={styles.solidStar} /> : <StarIcon key={i} className={styles.emptyStar} />);
  }
  
  return <div className={styles.starsWrapper}>{stars}</div>
};

export default StarRating;