import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer>
      <div className={styles.footerIcons}>
        <a href="#" className={styles.iconInstagram}></a>
        <a href="#" className={styles.iconLinkedin}></a>
      </div>
      <div className={styles.footerText}>
        <p>&copy; 2023 RateMyUniAccom. All rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;