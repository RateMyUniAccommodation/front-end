import React, { useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./Caroussel.module.css";
import Card from "../Card/Card";

const Caroussel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false });
  const imageArray = ["caroussel-image.jpg", "caroussel-image-two.jpg"];
  //src/assets/images/caroussel-image-two.jpg
  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.emblaContainer}>
        <div className={styles.emblaSlide}>
          <Card
            imageName={imageArray[0]}
            author="Clark & Alicia"
            description="This fully-furnished space features a comfortable queen-sized bed, a
          fully-equipped kitchenette, and a cozy living area with a flat-screen
          TV. You'll love the convenient location, just steps away from the
          city's best restaurants, cafes, and shopping. Book your stay now and
          make Bob and Alicia's apartment your home away from home!"
          />
        </div>
        <div className={styles.emblaSlide}>
          <Card
            imageName={imageArray[1]}
            author="Clementine"
            description="I had a great experience living in the university accommodation at Crown Place. 
            The rooms were spacious and clean, and the location was perfect for getting to classes and exploring the city. 
            The staff were friendly and helpful, and there were plenty of social events organized for residents. 
            Overall, I would highly recommend this accommodation to any student looking for a comfortable and convenient place to live."
          />
        </div>
      </div>
    </div>
  );
};

export default Caroussel;
