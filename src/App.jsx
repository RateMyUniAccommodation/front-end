import React, { Fragment, useEffect, useState, useMemo } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Accomodation from "./pages/Accommodation/Accommodation";
import University from "./pages/University/University";
import { fetchUniversities } from "./api/api";

const App = () => {
  const [universityData, setUniversityData] = useState([]);

  useEffect(() => {
    const fetchUniversityData = async () => {
      const universityData = await fetchUniversities();
      setUniversityData(universityData);
    };
    fetchUniversityData();
  }, []);

  const universityPages = useMemo(() => {
    return universityData.map((page) => {
      const { id, name, lat, lon, accommodations } = page;
      return (
        <Route
          key={id}
          path={`/university/${name}`}
          element={
            <University
              title={name}
              lat={lat}
              lon={lon}
              accommodations={accommodations}
            />
          }
        />
      );
    });
  }, [universityData]);

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        {universityPages}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="accommodation" element={<Accomodation />} />
        <Route path="auth" element={<Auth />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
