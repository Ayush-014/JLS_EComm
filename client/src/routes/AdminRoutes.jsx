import { Routes, Route } from "react-router-dom";
import { AdminDashboard, PostAccessory, PostPromotions, PostDresses } from "../pages/pages.index.js"

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<AdminDashboard />} />
      <Route path="/dresses" element={<PostDresses />} />
      <Route path="/accessories" element={<PostAccessory />} />
      <Route path="/promotions" element={<PostPromotions />} />
    </Routes>
  );
};

export default AdminRoutes;
