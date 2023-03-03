import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Caroussel.module.css";
import Card from "../Card/Card";

const Caroussel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.emblaContainer}>
        <div className={styles.emblaSlide}>
          <Card />
        </div>
        <div className={styles.emblaSlide}>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default Caroussel;
