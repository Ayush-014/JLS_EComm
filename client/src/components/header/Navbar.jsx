import { useState } from 'react';
import { Button } from '../index.components.js';
import { FiSearch, FiUser, FiHeart, FiShoppingBag } from 'react-icons/fi';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('women');
  const [searchQuery, setSearchQuery] = useState('');
  const dresscategory = ['New Arrivals', 'Tops', 'Bottoms', 'Lehanga', 'Gown', 'Occasion Wear'];
  const accessoriesCategory = ['New Arrivals', 'Accessories', 'Ethnic Wear'];
  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm w-full">
      {/* 1st announcement Bar */}
      <div className="bg-black text-white text-center py-2 px-4 text-sm">
        <p>Free shipping on orders over ₹5,000 | Use code WELCOME10 for 10% off</p>
      </div>

      {/* main nav */}
      <div className="container mx-auto px-4">
        {/* logo search, user actions */}
        <div className="flex items-center justify-between py-4 border-b">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-3xl font-bold"> JLS </a>
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
              <button className="p-2 text-gray-700 hover:text-black">
                <FiUser size={20} />
              </button>
              <button className="p-2 text-gray-700 hover:text-black">
                <FiHeart size={20} />
              </button>
              <button className="p-2 text-gray-700 hover:text-black relative">
                <FiShoppingBag size={20} />
                <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  0
                </span>
              </button>
            </div>
          </div>
        </div>

        {/* sec nav */}
        <nav className="flex justify-center overflow-x-auto py-3 hide-scrollbar space-x-6">
          {activeTab === 'Dresses' ? (
            <>
              {dresscategory.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="whitespace-nowrap text-sm font-medium text-gray-600 hover:text-black"
                >
                  {item}
                </a>
              ))}
            </>
          ) : (
            <>
              {accessoriesCategory.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="whitespace-nowrap text-sm font-medium text-gray-600 hover:text-black"
                >
                  {item}
                </a>
              ))}
            </>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;