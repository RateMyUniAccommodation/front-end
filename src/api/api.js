const fetchUniversities = async () => {
  const response = await fetch("/src/mock-data/universities.json");
  const universities = await response.json();
  return universities;
};

export default fetchUniversities;
