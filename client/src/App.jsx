import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Admin, Profile, Login, Home, Signup } from "./pages/pages.index.js";
import { Toaster } from "react-hot-toast";
import { ProtectedRoute } from "./components/index.components.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        
        {/* Protected Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/admin" element={<Admin />} />
        </Route>
      </Routes>
      <Toaster position="bottom-right" />
    </Router>
  );
}

export default App;