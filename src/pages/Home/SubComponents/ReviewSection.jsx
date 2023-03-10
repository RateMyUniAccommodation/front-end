import React from "react";
import styles from "./ReviewSection.module.css";
import Caroussel from "../../../Components/UI/Caroussel/Caroussel";
const ReviewSection = () => {
  return (
    <div className={styles.reviewSection}>
      <h1>Our Reviews</h1>
      <Caroussel />
    </div>
  );
};

export default ReviewSection;
