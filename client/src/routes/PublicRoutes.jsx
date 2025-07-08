import { Routes, Route } from "react-router-dom";
import { Login, Signup, Profile } from "../pages/pages.index.js"

export default function PublicRoutes () {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
