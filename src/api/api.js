import apiService from "./apiService";

export const fetchUniversities = async () => {
  const response = await fetch("/mock-data/universities.json");
  const universities = await response.json();
  return universities;
};

export const fetchProfiles = async () => {
  const response = await fetch("/mock-data/users.json");
   const users = await response.json();
   return users;
 };

// Review API

export const getReviews = async (id) => {
  const response = await apiService.get(`/api/reviews/${id}`);
  const reviews = await response.json();
  return reviews;
}

export const postReview = async (id, comment, rating, accomId, userId) => {
  const data = {
    "comment": comment,
    "rating": rating,
    "accom_id": accomId,
    "user_id": userId
  }
  const response = await apiService.post(`/api/reviews/${id}`, data)
  return response.json()["message"];
}

// Map API

export const getMapData = async (lat,lon) => {
  const response = await apiService.get(`map/get/${lat}/${lon}`);
  const mapData = await response.json();
  return mapData;
}

// Auth API

export const checkEmailExists = async () => {
  const response  = await apiService.get("auth/checkUsername");
  const emailExists = response.json()["status"];
  return emailExists
}

export const checkUsernameExists = async () => {
  const response = await fetch("/auth/checkEmail");
  const usernameExists = response.json()["status"];
  return usernameExists
}

export const login = async () => {
  const response = await fetch("");
  const token = await response.json();
  return token
}

export const register = async () => {
  const response = await fetch("");
  const token = await response.json();
  return token
}

export default {
  fetchUniversities,
  fetchProfiles,
  getMapData,
  getReviews,
  postReview,
  checkEmailExists,
  checkUsernameExists,
  login,
  register
};


