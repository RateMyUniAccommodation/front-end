import React, { Fragment, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Error from "./pages/Error/Error";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Accomodation from "./pages/Accommodation/Accommodation";

import UniversityData from "./assets/data/universityData.json"

import MapPage from "./pages/University/University"

const App = () => {
  const [navHeight, setNavHeight] = useState(0);

  const handleHeightChange = (height) => {
    setNavHeight(height);
  };

  const universityPages = UniversityData.map((page) => {
    const { id, name, lat, lon } = page;
    return (
      <Route key={id} path={`/university/${name}`}
        element={<MapPage title={name} lat={lat} lon={lon} navHeight={navHeight}/>
        } />
    )
  })

  return (
    <Fragment>
      <Navbar onHeightChange={handleHeightChange}/>
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
