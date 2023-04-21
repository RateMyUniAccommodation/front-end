import React, { useEffect, useState } from "react";
import styles from "./Accommodation.module.css";
import { useLocation } from "react-router-dom";
import { getReviews } from "../../api/api";
import ReviewCard from "./SubComponents/ReviewCard";

const Accommodation = ({ accomInfo }) => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { state } = useLocation();
  const data = state["accom_info"]["item"];

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewData = await getReviews(data.id);
        setReviews(reviewData);
        console.log(reviewData);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    };
    fetchReviews();
  }, [data.id]);

  console.log(data);

  return (
    <div className={styles.accomGrid}>
      <h1>{data.name}</h1>
      <h2>Reviews</h2>
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      <div className={styles.reviewGrid}>
        {!loading &&
          !error &&
          reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
      </div>
    </div>
  );
};
export default Accommodation;
