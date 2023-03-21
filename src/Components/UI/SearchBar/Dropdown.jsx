import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Dropdown.module.css";
import data from "../../../assets/unis_names.json";

const Dropdown = () => {
  const navigate = useNavigate();
  const handleClick = (event) => {
    const university = event.target.textContent;
    navigate(`/accommodation/${university}`);
  };
  return (
    <div className={styles.dropdown}>
      <ul>
      {
          data.map((uni) => (
              <li onClick={handleClick}>{uni}</li>
            ))
        }
      </ul>
    </div>
  );
};

export default Dropdown;
