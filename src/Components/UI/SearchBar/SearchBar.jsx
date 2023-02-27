import React from "react";
import styles from "./SearchBar.module.css";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar = () => {
  return (
    <div className={styles.navbarSearchBar}>
      <MagnifyingGlassIcon className={styles.searchIcon} />
      <input type="text" placeholder="Search..." />
    </div>
  );
};
export default SearchBar;