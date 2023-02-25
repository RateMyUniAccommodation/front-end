import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import { HomeIcon } from "@heroicons/react/24/solid";


const Navbar = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/home";

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.navbarLogo}>
          <HomeIcon className={styles.navbarLogoIcon} />
          <h1 className={styles.navbarLogoTitle}>ratemyuniaccom</h1>
        </Link>

        {!isHomePage && (
          <form className={styles.navbarSearchForm}>
            <input type="text" placeholder="Search..." />
            <button type="submit">Go</button>
          </form>
        )}

        <ul className={styles.navbarMenu}>
          <li className={styles.navbarMenuItem}>
            <Link to="/" className={styles.navbarLink}>
              Home
            </Link>
          </li>
          <li className={styles.navbarMenuItem}>
            <Link to="/about" className={styles.navbarLink}>
              About
            </Link>
          </li>
          <li className={styles.navbarMenuItem}>
            <Link to="/contact" className={styles.navbarLink}>
              Contact
            </Link>
          </li>
        </ul>

        <div className={styles.navbarRight}>
          <button className={styles.navbarButton}>Sign In</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;