import { Link, useLocation } from "react-router-dom";
import {
  FaCampground,
  FaWater,
  FaMapMarkedAlt,
  FaTachometerAlt,
  FaUsers,
  FaSignOutAlt,
} from "react-icons/fa";

const SidebarItem = ({ to, icon: Icon, label }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Link to={to}>
      <div
        className={`flex items-center gap-3 p-3 rounded-md transition ${
          isActive
            ? "bg-white text-orange-600 font-semibold"
            : "text-white hover:bg-orange-600"
        }`}
      >
        <Icon className="text-xl" />
        <span>{label}</span>
      </div>
    </Link>
  );
};

export default function AdminLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-orange-500 to-orange-700 text-white flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-center p-6 text-xl font-bold border-b border-orange-600">
            Admin Panel
          </div>
          <nav className="p-4 space-y-2">
            <SidebarItem to="/admin" icon={FaTachometerAlt} label="Dashboard" />
            <SidebarItem to="/admin/accessories" icon={FaCampground} label="Post Accessories" />
            <SidebarItem to="/admin/dresses" icon={FaWater} label="Post Dresses" />
            <SidebarItem to="/admin/promotions" icon={FaMapMarkedAlt} label="Post Promotions" />
          </nav>
        </div>
        <div className="p-4">
          <button className="flex items-center gap-2 text-white hover:text-red-300">
            <FaSignOutAlt /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
     <main className="flex-1 bg-gray-100 p-8 overflow-y-auto border-4 border-dashed border-orange-500">
  {children}
</main>

    </div>
  );
}
