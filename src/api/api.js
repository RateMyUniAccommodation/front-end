import api from "./apiService";

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

export const getReviews = async (accomId) => {
  const response = await api.get(`/api/review/get/${accomId}`);
  const reviews = await response;
  return reviews;
}

export const postReview = async (id, comment, rating, accomId) => {
  const data = {
    "comment": comment,
    "rating": rating,
    "accom_id": accomId
  }
  const response = await api.post(`/api/review/create`, data)
  return response["message"];
}

export const deleteReview = async (reviewId) => {
  const response = await api.delete(`/api/review/${reviewId}`)
  return response["message"]
}

// Map API

export const getMapData = async (lat, lon) => {
  const response = await api.get(`/map/get/${lat}/${lon}`);
  console.log(response)
  const mapData = await response;
  return mapData;
}

// Auth API

export const checkEmailExists = async () => {
  const response = await api.get("/auth/checkUsername");
  const emailExists = response["status"];
  return emailExists
}

export const checkUsernameExists = async () => {
  const response = await api.get("/auth/checkEmail");
  const usernameExists = response["status"];
  return usernameExists
}

export const login = async (email, password) => {
  const data = {
    email: email,
    password: password
  }
  const response = await api.post("/auth/login", data);
  if (response["token"]) {
    localStorage.setItem("jwt", response["webtoken"])
    return true
  }
  else {
    return response["message"]
  }
}

export const signup = async (email, password, username) => {
  const data = {
    email: email,
    password: password,
    username: username
  }
  const response = await api.post("/auth/signup",);
  if (response["token"]) {
    localStorage.setItem("jwt", response["webtoken"])
    return true
  }
  else {
    return response["message"]
  }
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
  signup
};


