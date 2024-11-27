import React from 'react';
import { UtensilsCrossed } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <UtensilsCrossed className="h-8 w-8 text-yellow-500" />
            <span className="ml-2 text-xl font-semibold">Great Taste</span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-yellow-500">Home</a>
            <a href="#" className="text-gray-700 hover:text-yellow-500">Menu</a>
            <a href="#" className="text-gray-700 hover:text-yellow-500">About</a>
            <a href="#" className="text-gray-700 hover:text-yellow-500">Contact</a>
          </div>
          <div>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors">
              Login
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;