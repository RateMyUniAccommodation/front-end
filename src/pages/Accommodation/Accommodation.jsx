import React, { useEffect, useState } from "react";
import styles from "./accommodation.module.css"
import { useLocation } from 'react-router-dom';
import { getReviews } from "../../api/api";
import ReviewCard from "./SubComponents/ReviewCard";
import ReviewForm from "./SubComponents/ReviewForm";

const Accommodation = ({accomInfo}) => {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const { state } = useLocation();
  const data = state["accom_info"]

  const dynamicBackground = {
    backgroundImage: `url(${data.image_link})`,
  }

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

  const addReview = (review) => {
    setReviews([review,...reviews]);
  };

  const handleReviewCreation = (rating, comment) => {
    const newReview = {
      id:  reviews.length + 1,
      rating: rating,
      comment: comment,
      username: "You",
      create_time: new Date().toISOString()
    }
    console.log(newReview)
    addReview(newReview);
  }

  return <>
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <div className={styles.headerImage} style={dynamicBackground} />
        <div className={styles.headerContent}>
          <h1 className={styles.accomName}>{data.name}</h1>
        </div>
      </div>


      <div className={styles.reviewContainer}>
        <ReviewForm onSubmit={handleReviewCreation} accomId={data.id} />
        <h2>Reviews</h2>
        {loading && <p>Loading...</p>}
        {error && <p>Error</p>}
        {!loading && !error && reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  </>;
}
export default Accommodation;