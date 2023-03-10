import React from "react";
import styles from "./TextImageSection.module.css";
import thinkIcon from "../../../assets/icons/thinking.png";

const TextImageSection = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1>Difficulty finding Accommodation Information ?</h1>
        <p>
          RateMyUniAccom let's you get reviews for your university accomodation from other students
          and make a choice on where to stay.
        </p>
      </div>
      <div className={styles.image}>
        <img src={thinkIcon} alt="Your Image" />
      </div>
    </div>
  );
};

export default TextImageSection;
