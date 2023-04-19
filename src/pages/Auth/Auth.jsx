import React from "react";
import styles from "./Auth.module.css";
import Form from "./SubComponents/Form";
import Image from "../../assets/images/people.jpg";

const Auth = () => {
  return (
    <div className={styles.grid}>
      <Form />
      <div className={styles.image}>
        <div className={styles.texts}>
          <h1>Discover reviews of your university accommodation</h1>
          <p>
            Make an easy decison on accommodation through the reviews or give
            your own opinion ans submit a post!
          </p>
        </div>
        <img src={Image} alt="People" />
      </div>
    </div>
  );
};

export default Auth;
