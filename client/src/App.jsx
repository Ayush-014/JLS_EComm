import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { Admin, Profile, Login, Home, Signup, ProductDetail, Wishlist, Cart, CategoryDisplay } from "./pages/pages.index.js";
import { Toaster } from "react-hot-toast";
import { ProtectedRoute, Navbar, Footer } from "./components/index.components.js";
import { useState } from 'react';
import { WISHLISTDATA, CARTITEMS, ETHNICWEARDATA } from "../constant.jsx"

function AppLayout() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('Dresses');
  
  const hideLayoutRoutes = ['/login', '/register', 'admin', '/profile'];
  const shouldHideLayout = hideLayoutRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen flex flex-col">

      {!shouldHideLayout && (
        <header className="py-4 px-6 shadow-sm">
          <div className="container mx-auto flex justify-between items-center">
            <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
          </div>
        </header>
      )}

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Signup />} />
          

            <Route path="/profile" element={<Profile />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/category/ethnic-wear" element={<CategoryDisplay products={ETHNICWEARDATA} />} />
            <Route path="/wishlist" element={<Wishlist wishlist={WISHLISTDATA} />} />
            <Route path="/cart" element={<Cart
                                cartItems={CARTITEMS}
                                onRemove={(id) => console.log("Remove item", id)}
                                onCheckout={() => console.log("Checkout triggered")} />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
          <Route element={<ProtectedRoute />}>
          </Route>
        </Routes>
      </main>

      {!shouldHideLayout && <Footer />}

      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: { duration: 3000 },
          error: { 
            duration: 5000,
            style: {
              background: '#ff4d4f',
              fontWeight: '500',
            },
          },
          loading: { duration: 8000 },
        }}
      />
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppLayout />
    </Router>
  );
}

export default App;