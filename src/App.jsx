import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import View from "./pages/Map/View";
import Error from "./pages/Error/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/">
          <Route index element={<Home />} />
          <Route path="view" element={<View />} />
          <Route path="auth" element={<Auth />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
