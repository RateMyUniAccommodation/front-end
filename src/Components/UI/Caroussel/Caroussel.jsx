import React, { useState, useEffect, useMemo, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./Caroussel.module.css";
import Card from "../Card/Card";
import CarouselButton from "./CarousselButton";
import { fetchProfiles } from "../../../api/api";

const Caroussel = () => {
  const autoPlayOptions = {
    delay: 8000,
    stopOnInteraction: false,
    stopOnMouseEnter: true,
  };

  const [profiles, setProfiles] = useState([]);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [
    Autoplay(autoPlayOptions),
  ]);

  useEffect(() => {
    fetchProfiles().then((data) => {
      setProfiles(data);
    });
  }, []);

  const memoizedProfiles = useMemo(() => profiles.slice(0, 2), [profiles]);

  useEffect(() => {
    if (emblaApi && memoizedProfiles.length > 0) {
      emblaApi.reInit();
    };
  }, [emblaApi, memoizedProfiles]);

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
        {memoizedProfiles.map((user) => (
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
