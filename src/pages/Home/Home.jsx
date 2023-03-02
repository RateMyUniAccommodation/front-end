import React from "react";
import styles from "./Home.module.css";
import backgroundImage from "../../assets/images/home-background.png";
import SearchBar from "../../Components/UI/SearchBar/SearchBar";

const Home = () => {
  //<div className={styles.homeContent}>
  //<h1 className={styles.homeTitle}>Find your perfect accommodation</h1>
  return (
    <div className={styles.home}>
      <div className={styles.bgImageContainer}>
        <img src={backgroundImage} alt="background" />
        <div className={styles.searchBarWrapper}>
          <SearchBar/>
        </div>
      </div>
      <h1>Home</h1>
    </div>
  );
};

export default Home;   
