import React from "react";
import styles from "./Auth.module.css";
import Form from "./SubComponents/Form";
import Image from "../../assets/images/people.jpg";

const Auth = () => {
  return (
    <div className={styles.grid}>
      <Form />
      <div className={styles.image}>
        <img src={Image} alt="People" />
      </div>
    </div>
  );
}

export default Auth;