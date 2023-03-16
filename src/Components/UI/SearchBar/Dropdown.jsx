import React from "react";
import styles from "./Dropdown.module.css";

const Dropdown = () => {
  return (
    <div className={styles.dropdown}>
      <ul>
        <li>University of Liverpool</li>
        <li>University of Leeds</li>
        <li>University of Manchester</li>
        <li>University of Lancaster</li>
        <li>University of Exeter</li>
        <li>University of Cambridge</li>
        <li>University of Oxford</li>
      </ul>
    </div>
  );
};

export default Dropdown;
