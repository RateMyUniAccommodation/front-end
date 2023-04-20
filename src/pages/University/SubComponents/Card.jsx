import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";
import { StarIcon,} from "@heroicons/react/24/outline";

const Card = ({ uni, name, image_link, num_reviews }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/accommodation/${name}`);
  };

  return (
    <div onClick={handleClick} className={styles.card}>
      <img src={image_link} alt={name} />
      <h3>{name}</h3>
      <div className={styles.facilities}>
        <div className={styles.facility}>
        <WifiIcon className={styles.icon} />
        <p>Wifi</p>
        </div>
        <div className={styles.facility}>
        <ArchiveBoxIcon className={styles.icon}/>
        <p>Laundry</p>
        </div>
        <div className={styles.facility}>
        <ChatBubbleLeftRightIcon className={styles.icon} />
        <p>Common Room</p>
        </div>
      </div>
      <div className={styles.review}>
        <p>{num_reviews} Reviews</p>
        <StarIcon className={styles.star} />
      </div>
    </div>
  );
};
export default Card;
