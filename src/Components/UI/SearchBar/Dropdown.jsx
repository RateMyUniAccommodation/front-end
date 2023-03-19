import React, { useState, useEffect } from "react";
import { fetchUniversities } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import styles from "./Dropdown.module.css";

const Dropdown = () => {
  const [universities, setUniversities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleClick = (event) => {
    const university = event.target.textContent;
    navigate(`/accommodation/${university}`);
  };

useEffect(() => {
  setIsLoading(true);
  fetchUniversities().then((data) => {
    setUniversities(data);
    setIsLoading(false);
  });
}, []);

  return (
    <div className={styles.dropdown}>
      <ul>
        {isLoading ? (
          <li>Loading...</li>
        ) : (
          universities.map((uni) => (
            <li key={uni.id} onClick={handleClick}>
              {uni.name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default Dropdown;
