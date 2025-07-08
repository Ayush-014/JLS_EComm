import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiSearch, FiUser, FiHeart, FiShoppingBag, FiLogOut } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../features/auth/authSlice.js';
import API from '../../services/api.js';
import { toast } from 'react-hot-toast';
import { NAVBAR_DATA } from '../../../constant.jsx';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('Accessories');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeCategory, setActiveCategory] = useState('New Arrivals');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const token = localStorage.getItem('accessToken');
    setIsLoggedIn(!!token);
  }, [user]);

  useEffect(() => {
  setActiveCategory('New Arrivals');
}, [activeTab]);


  const handleLogout = async () => {
    try {
      await API.post('/api/v1/users/logout');
      localStorage.removeItem('accessToken');
      dispatch(logout());
      toast.success('Logged out successfully');
      navigate('/login');
    } catch (error) {
      toast.error(error.response?.data?.message || 'Logout failed');
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm w-full">
      {/* 1 announcement bar */}
      <div className="bg-black text-white text-center py-2 px-4 text-sm">
        <p>Free shipping on orders over ₹5,000 | Use code WELCOME10 for 10% off</p>
      </div>

      {/* main */}
      <div className="container mx-auto px-4">
        {/* logo search user profile etc*/}
        <div className="flex items-center justify-between py-4 border-b">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-3xl font-bold">JLS</Link>
            <nav className="hidden md:flex space-x-6">
              {['Dresses', 'Accessories'].map((tab) => (
                <button
                  key={tab}
                  className={`py-2 font-medium text-sm uppercase tracking-wider ${activeTab === tab ? 'border-b-2 border-black' : 'text-gray-600'}`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center space-x-6">
            <div className="relative hidden md:block">
              <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search for outfits, brands..."
                className="pl-10 pr-4 py-2 border rounded-full text-sm w-64 focus:outline-none focus:ring-1 focus:ring-gray-300"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <div className="flex space-x-4">
              {!isLoggedIn ? (
                <div className="relative group">
                  <button className="p-2 text-gray-700 hover:text-black">
                    <FiUser size={20} />
                  </button>
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 invisible group-hover:visible transition-all">
                    <Link
                      to="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      My Profile
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 flex items-center gap-2"
                    >
                      <FiLogOut size={16} />
                      Logout
                    </button>
                  </div>
                </div>
              ) : (
                <Link 
                  to="/login" 
                  className="p-2 text-gray-700 hover:text-black"
                  aria-label="Login"
                >
                  <FiUser size={20} />
                </Link>
              )}
              
              <Link to="/wishlist" className="p-2 text-gray-700 hover:text-black" aria-label="Wishlist">
                <FiHeart size={20} />
              </Link>
              
              <Link to="/cart" className="p-2 text-gray-700 hover:text-black relative" aria-label="Cart">
                <FiShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* sec nav */}
        <nav className="flex justify-center overflow-x-auto py-3 hide-scrollbar space-x-6">
  {(activeTab === 'Dresses' ? NAVBAR_DATA.DRESS_CATEGORY : NAVBAR_DATA.ACCESSORIES_CATEGORY).map((item) => (
    <Link
      key={item}
      to={`/category/${item.toLowerCase().replace(/\s+/g, '-')}`}
      onClick={() => setActiveCategory(item)}
      className={`whitespace-nowrap text-sm font-medium ${
        activeCategory === item ? 'text-black border-b-2 border-black' : 'text-gray-600 hover:text-black'
      }`}
    >
      {item}
    </Link>
  ))}
</nav>

      </div>
    </header>
  );
};

export default Navbar;
