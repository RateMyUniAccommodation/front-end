import React, { useState, useRef, useEffect } from "react";
import styles from "./SearchBar.module.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import Dropdown from "./Dropdown";

const SearchBar = () => {
  const [showDropDown, setDropDown] = useState(false);
  const inputRef = useRef(null);

  const handleDropDownClick = () => {
    setDropDown(true);
  }
  const handleInputBlur = () => {
    setDropDown(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setDropDown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [inputRef]);

  return (
    <div className={styles.navbarSearchBar}>
      <div className={styles.searchContainer}>
        <MagnifyingGlassIcon className={styles.searchIcon} />
        <input ref={inputRef} onClick={handleDropDownClick} type="text" placeholder="Search..." />
        {showDropDown && <Dropdown />}
      </div>
    </div>
  );
};
export default SearchBar;
