import React from "react";
import styles from "./SearchBar.module.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar = () => {
  return (
    <div className={styles.navbarSearchBar}>
      <div className={styles.searchContainer}>
        <MagnifyingGlassIcon className={styles.searchIcon} />
        <input type="text" placeholder="Search..." />
      </div>
    </div>
  );
};
export default SearchBar;
