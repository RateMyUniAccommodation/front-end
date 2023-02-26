import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { HomeIcon } from "@heroicons/react/24/solid";
import Navitem from "./Navitem";
import SearchBar from "../UI/SearchBar/SearchBar";

const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";
  
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/home" className={styles.navbarLogo}>
          <HomeIcon className={styles.navbarLogoIcon} />
          <h1 className={styles.navbarLogoTitle}>ratemyuniaccom</h1>
        </Link>
        {!isHomePage && <SearchBar />}
        <ul className={styles.navbarMenu}>
          <Navitem link="about" title="About us" />
          <Navitem link="contact" title="Contact us" />
        </ul>
        <div className={styles.navbarRight}>
          <button className={styles.navbarButton}>Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
