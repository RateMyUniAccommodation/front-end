import React, { useState, useEffect, useCallback, useMemo } from "react";
import { fetchUniversities } from "../../../api/api";
import { useNavigate } from "react-router-dom";
import styles from "./Dropdown.module.css";

const Dropdown = ({ inputValue }) => {
  const [universities, setUniversities] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const handleClick = useCallback(
    (university) => {
      navigate(`/university/${university}`);
    },
    [navigate]
  );

  useEffect(() => {
    setIsLoading(true);
    fetchUniversities().then((data) => {
      setUniversities(data);
      setIsLoading(false);
    });
  }, []);

  const filteredUniversities = useMemo(() => {
    return inputValue.trim() === ""
      ? universities
      : universities.filter((university) =>
          university.name.toLowerCase().includes(inputValue.toLowerCase())
        );
  }, [inputValue, universities]);

  return (
    <div className={styles.dropdown}>
      <ul>
        {isLoading ? (
          <li>Loading...</li>
        ) : (
          filteredUniversities.map((uni) => (
            <li key={uni.id} onClick={() => handleClick(uni.name)}>
              {uni.name}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};


export default Dropdown;
