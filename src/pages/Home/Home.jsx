import React from "react";
import styles from "./Home.module.css";
import backgroundImage from "../../assets/images/home-background.png";
import SearchBar from "../../Components/UI/SearchBar/SearchBar";
import TextImageSection from "./SubComponents/TextImageSection";
import ReviewSection from "./SubComponents/ReviewSection";

const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.bgImageContainer}>
        <img src={backgroundImage} alt="background" />
        <div className={styles.searchBarWrapper}>
          <SearchBar />
        </div>
      </div>
      <TextImageSection />
      <ReviewSection />
    </div>
  );
};

export default Home;
