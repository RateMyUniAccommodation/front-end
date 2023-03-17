import React, {Fragment} from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import styles from "./CarousselButton.module.css";

const CarouselButton = (props) => {
  return (
    <Fragment>
      <button className={styles.carouselButton} onClick={props.prevClick}>
        <ChevronLeftIcon />
      </button>
      <button className={styles.carouselButton} onClick={props.nextClick}>
        <ChevronRightIcon />
      </button>
    </Fragment>
  );
}

export default CarouselButton;