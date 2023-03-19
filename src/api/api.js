const fetchUniversities = async () => {
  const response = await fetch("/universities.json");
  const universities = await response.json();
  return universities;
};

export default fetchUniversities;
