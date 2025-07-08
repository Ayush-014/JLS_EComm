import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Footer } from "./components/index.components.js";
import { UserRoutes } from "./routes/index.routes.js"

function AppLayout() {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState("Dresses");

  const hideLayoutRoutes = ['/login', '/register', '/admin', '/profile'];
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
        <UserRoutes activeTab={activeTab} setActiveTab={setActiveTab} />
      </main>

      {!shouldHideLayout && <Footer />}
    </div>
  );
}

export default AppLayout;