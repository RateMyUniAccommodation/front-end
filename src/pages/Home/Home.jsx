import React from "react";
import styles from "./Home.module.css";
import backgroundImage from "../../assets/images/home-background.png";
import SearchBar from "../../Components/UI/SearchBar/SearchBar";
import TextImageSection from "./SubComponents/TextImageSection";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.bgImageContainer}>
        <img src={backgroundImage} alt="background" />
        <div className={styles.searchBarWrapper}>
          <SearchBar/>
        </div>
      </div>
      <TextImageSection/>
    </div>
  );
};

export default Home;   
