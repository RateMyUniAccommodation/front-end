import React, {Fragment} from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import MapView from "./pages/MapView/MapView";
import Error from "./pages/Error/Error";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import University from "./pages/University/University";
const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="accommodation">
          <Route path=":id" element={<University />} />
        </Route>
        <Route path="view" element={<MapView />} />
        <Route path="auth" element={<Auth />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Fragment>
  );
};

export default App;
