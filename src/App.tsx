import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Solutions from "./pages/Solutions";
import HospitalDemo from "./pages/HospitalDemo";

export default function App() {
  return (
    <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/solutions" element={<Solutions />} />
  <Route path="/solutions/hospital" element={<HospitalDemo />} />
</Routes>
  );
}