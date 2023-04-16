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

export const checkEmailExists = async () => {
  const response  = await fetch("/mock-data/users.json");
  const emailExists = true;
  return emailExists
}

export const checkUsernameExists = async () => {
  const response = await fetch("");
  const usernameExists = true;
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
  checkEmailExists,
  checkUsernameExists,
  login,
  register
};


