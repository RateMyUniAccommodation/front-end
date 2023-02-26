import React from "react";
import styles from "./SearchBar.module.css";
//import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

const SearchBar = () => {
  return (
    <div className={styles.navbarSearchBar}>
      <input type="text" placeholder="Search..." />
    </div>
  );
};
export default SearchBar;