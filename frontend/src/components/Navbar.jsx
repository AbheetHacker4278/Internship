import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdCategory, MdHomeFilled, MdLocalConvenienceStore, MdShop2 } from 'react-icons/md';

const Navbar = ({ containerStyles }) => {
  return (
    <nav className={`${containerStyles} p-4`}>
      <div className="flex flex-wrap gap-4 items-center justify-between">
        {/* Home Link */}
        <NavLink to={'/'} className="group relative">
          <div
            className="flex items-center gap-2 px-4 py-2 border border-blue-400 rounded-lg shadow-md bg-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:border-blue-500 hover:shadow-orange-200"
          >
            <MdHomeFilled className="text-blue-400 group-hover:text-white text-xl transition-colors duration-300" />
            <span className="md:text-gray-600 md:group-hover:text-white md:font-medium md:transition-colors md:duration-300">
              Home
            </span>
          </div>
          {/* Tooltip */}
          <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 px-3 py-1 text-white bg-gray-800 text-sm rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300">
            Go to Home
          </span>
        </NavLink>

        {/* Premium Link */}
        <NavLink to={'/Premium'} className="group relative">
          <div
            className="flex items-center gap-2 px-4 py-2 border border-blue-400 rounded-lg shadow-md bg-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:border-blue-500 hover:shadow-green-200"
          >
            <MdCategory className="text-blue-400 group-hover:text-white text-xl transition-colors duration-300" />
            <span className="md:text-gray-600 md:group-hover:text-white md:font-medium md:transition-colors md:duration-300">
              Premium
            </span>
          </div>
          {/* Tooltip */}
          <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 px-3 py-1 text-white bg-gray-800 text-sm rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300">
            Explore Premium Content
          </span>
        </NavLink>

        {/* Winter Wear Link */}
        <NavLink to={'/Winter-Wear'} className="group relative">
          <div
            className="flex items-center gap-2 px-4 py-2 border border-blue-400 rounded-lg shadow-md bg-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:border-blue-500 hover:shadow-pink-200"
          >
            <MdShop2 className="text-blue-400 group-hover:text-white text-xl transition-colors duration-300" />
            <span className="md:text-gray-600 md:group-hover:text-white md:font-medium md:transition-colors md:duration-300">
              Winter Wear
            </span>
          </div>
          {/* Tooltip */}
          <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 px-3 py-1 text-white bg-gray-800 text-sm rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300">
            Check Winter Collection
          </span>
        </NavLink>

        {/* Year End Stock Link */}
        <NavLink to={'/Year-End-Stock'} className="group relative">
          <div
            className="flex items-center gap-2 px-4 py-2 border border-blue-400 rounded-lg shadow-md bg-white transition-all duration-300 hover:bg-blue-500 hover:shadow-lg hover:border-blue-500 hover:shadow-red-200"
          >
            <MdLocalConvenienceStore className="text-blue-400 group-hover:text-white text-xl transition-colors duration-300" />
            <span className="md:text-gray-600 md:group-hover:text-white md:font-medium md:transition-colors md:duration-300">
              Year-End Stock
            </span>
          </div>
          {/* Tooltip */}
          <span className="absolute left-1/2 transform -translate-x-1/2 top-full mt-2 px-3 py-1 text-white bg-gray-800 text-sm rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-1 transition-all duration-300">
            Year-End Discounts!
          </span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
