import React, { useState } from "react";
import { StarIcon } from "@heroicons/react/24/solid";
import styles from "./ReviewForm.module.css";
import { postReview } from "../../../api/api";

const ReviewForm = ({ onSubmit, accomId }) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleRatingClick = (newRating) => {
    setRating(newRating);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    //const response = await postReview(comment, rating, accomId);
    //if success
    onSubmit( rating, comment)
    setRating(0);
    setComment("");
    //if failed
    //error msg
  };

  return (
    <form className={styles["review-form"]} onSubmit={handleSubmit}>
      <div className={styles["star-container"]}>
        {[1, 2, 3, 4, 5].map((i) => (
          <StarIcon
            key={i}
            className={`${styles.star} ${i <= rating ? styles["star-filled"] : ""}`}
            onClick={() => handleRatingClick(i)}
          />
        ))}
      </div>
      <div className={styles["comment-container"]}>
        <label htmlFor="comment" className={styles["comment-label"]}>Comment:</label>
        <textarea
        
          id="comment"
          name="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className={styles["comment-input"]}
        />
      </div>
      <button type="submit" className={styles["submit-button"]}>Submit</button>
    </form>
  );
};

export default ReviewForm;
