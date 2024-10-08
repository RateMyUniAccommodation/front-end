import React, { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { HomeIcon } from "@heroicons/react/24/solid";
import Navitem from "./Navitem";
import SearchBar from "../UI/SearchBar/SearchBar";
import Button from "../UI/Button/Button";

const Navbar = () => {
  const navRef = useRef(null);
  const [isLogin, setLogin] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/home";


  const handleClick = () => {
    navigate("auth");
    // setLogin((prevLogin) => !prevLogin);
  }

  return (
    <nav ref={navRef} className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/home" className={styles.navbarLogo}>
          <HomeIcon className={styles.navbarLogoIcon} />
          <h1 className={styles.navbarLogoTitle}>ratemyuniaccom</h1>
        </Link>
        {!isHomePage && <SearchBar />}
        <ul className={styles.navbarMenu}>
          <Navitem link="about" title="About" />
          <Navitem link="contact" title="Contact" />
        </ul>
        <div className={styles.navbarRight}>
          <Button onClick={handleClick} name={`${!isLogin ? 'Login' : 'Signed in'}`} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
