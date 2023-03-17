import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dropdown.module.css";

const Dropdown = () => {
  const navigate = useNavigate();
  const handleClick = (event) => {
    const university = event.target.textContent;
    navigate(`/accommodation/${university}`);
  };
  return (
    <div className={styles.dropdown}>
      <ul>
        <li onClick={handleClick}>University of Liverpool</li>
        <li onClick={handleClick}>University of Leeds</li>
        <li onClick={handleClick}>University of Manchester</li>
        <li>University of Lancaster</li>
        <li>University of Exeter</li>
        <li>University of Cambridge</li>
        <li>University of Oxford</li>
      </ul>
    </div>
  );
};

export default Dropdown;
