import React from "react";
import { useParams } from "react-router-dom";

const University = () => {
  const { id } = useParams();
  return (
      <h1>{id} Reviews</h1>
  );
};

export default University;