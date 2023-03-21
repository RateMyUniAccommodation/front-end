import React from "react";
import styles from "./Button.module.css";

const Button = (props) => {
  return (
    <button className={styles.navbarButton} onClick={props.onClick}>
      {props.name}
    </button>
  );
};

export default Button;