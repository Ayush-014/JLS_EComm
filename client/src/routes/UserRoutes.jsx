import { Routes, Route } from "react-router-dom";
import {
  Profile,
  Login,
  Home,
  Signup,
  ProductDetail,
  Wishlist,
  Cart,
  CategoryDisplay
} from "../pages/pages.index.js";
import { ProtectedRoute } from "../components/index.components.js";
import { WISHLISTDATA, CARTITEMS, ETHNICWEARDATA } from "../../constant.jsx";

const UserRoutes = ({ activeTab, setActiveTab }) => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Signup />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/category/ethnic-wear" element={<CategoryDisplay products={ETHNICWEARDATA} />} />
      <Route path="/wishlist" element={<Wishlist wishlist={WISHLISTDATA} />} />
      <Route
        path="/cart"
        element={
          <Cart
            cartItems={CARTITEMS}
            onRemove={(id) => console.log("Remove item", id)}
            onCheckout={() => console.log("Checkout triggered")}
          />
        }
      />
      <Route path="/product/:productId" element={<ProductDetail />} />

      <Route element={<ProtectedRoute />}>
      </Route>
    </Routes>
  );
};

export default UserRoutes;