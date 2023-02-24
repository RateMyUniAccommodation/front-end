import { BrowserRouter, Routes, Route } from "react-router-dom";
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import View from "./pages/View";
import Error from "./pages/Err";

export default function App() {
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
