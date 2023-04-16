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

export const checkEmail = async () => {
  const response  = await fetch("/mock-data/users.json");
  const usernameExists = await response.json();
  return usernameExists
}

export const checkUsername = async () => {
  const response = await fetch("");

}

export default {
  fetchUniversities,
  fetchProfiles
};


