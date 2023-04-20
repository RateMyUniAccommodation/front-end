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
  const reviews = await response.json();
  return reviews;
}

export const postReview = async (id, comment, rating, accomId) => {
  const data = {
    "comment": comment,
    "rating": rating,
    "accom_id": accomId
  }
  const response = await api.post(`/api/review/create`, data)
  return response.json()["message"];
}

export const deleteReview = async (reviewId) => {
  const response = await api.delete(`/api/review/${reviewId}`)
  return response.json()["message"]
}

// Map API

export const getMapData = async (lat,lon) => {
  const response = await api.get(`/map/get/${lat}/${lon}`);
  const mapData = await response.json();
  return mapData;
}

// Auth API

export const checkEmailExists = async () => {
  const response  = await api.get("/auth/checkUsername");
  const emailExists = response.json()["status"];
  return emailExists
}

export const checkUsernameExists = async () => {
  const response = await api.get("/auth/checkEmail");
  const usernameExists = response.json()["status"];
  return usernameExists
}

export const login = async (email,password) => {
  const data = {
    email: email,
    password: password
  }
  const response = await api.post("/auth/login",data).json();
  if(response["token"]){
    localStorage.setItem("jwt",response["webtoken"])
    return true
  }
  else{
    return response["message"]
  }
}

export const register = async (email,password,username) => {
  const response = await api.post("/auth/register",).json();
  if(response["token"]){
    localStorage.setItem("jwt",response["webtoken"])
    return true
  }
  else{
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
  register
};


