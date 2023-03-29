import React, { Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import University from "./pages/University/University";

import UniversityData from "./assets/data/universityData.json"

import MapPage from "./pages/University/University"

const data = UniversityData

const App = () => {

  const universityPages = UniversityData.map((page) => {
    const { id, name, lat, lon } = page;
    return (
      <Route key={id} path={`/university/${name}`}
        element={<MapPage title={name} lat={lat} lon={lon} />
        } />
    )
  })

  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        {universityPages}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="auth" element={<Auth />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
