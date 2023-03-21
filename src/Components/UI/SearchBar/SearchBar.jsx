import React, { useState, useRef, useEffect } from "react";
import styles from "./SearchBar.module.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Dropdown from "./Dropdown";

const SearchBar = () => {
  const [inputValue, setInputValue] = useState("");
  const [showDropDown, setDropDown] = useState(false);
  const inputRef = useRef(null);

  const handleDropDownClick = () => {
    setDropDown(true);
  }
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setDropDown(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [inputRef]);

  return (
    <div className={styles.navbarSearchBar}>
      <div className={styles.searchContainer}>
        <MagnifyingGlassIcon className={styles.searchIcon} />
        <input value={inputValue} ref={inputRef} onClick={handleDropDownClick} onChange={handleInputChange} type="text" placeholder="Search..." />
        {showDropDown && <Dropdown inputValue={inputValue} />}
      </div>
    </div>
  );
};
export default SearchBar;
