export const fetchUniversities = async () => {
  const response = await fetch("/universities.json");
  const universities = await response.json();
  return universities;
};

// export const fetchProfiles = async () => {
//   const response = await fetch("/users.json");
//   const users = await response.json();
//   return users;
// };

export default {
  fetchUniversities,
};


