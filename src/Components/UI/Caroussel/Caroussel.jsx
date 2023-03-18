import React, { useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./Caroussel.module.css";
import Card from "../Card/Card";
import CarouselButton from "./CarousselButton";
import users from "../../../mock-data/users.json";

const Caroussel = () => {
  const autoPlayOptions = {
    delay: 8000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  };

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay(autoPlayOptions),
  ]);

  useEffect(() => {
    if (emblaApi) {
      // Embla API is ready
    }
  }, [emblaApi]);

  const handlePrevClick = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const handleNextClick = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.emblaContainer}>
        {users.map((user) => (
          <div className={styles.emblaSlide} key={user.id}>
            <Card
              imageName={user.image}
              author={user.author}
              description={user.description}
            />
          </div>
        ))}
      </div>
      <CarouselButton prevClick={handlePrevClick} nextClick={handleNextClick} />
    </div>
  );
};

export default Caroussel;
