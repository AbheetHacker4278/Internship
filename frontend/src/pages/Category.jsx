import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import all_products from '../assets/all_products';

const Category = ({ category, banner }) => {
  const navigate = useNavigate();

  // Handle navigation to product details
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <section className="w-full py-12 px-6 sm:px-12 lg:px-24 overflow-y-auto">
      <div className="pt-20 md:max-w-screen-2xl md:mx-auto md:pt-20 md:px-10">
        {/* Banner Section */}
        <div className="relative w-full overflow-hidden rounded-lg shadow-lg">
          <img
            src={banner}
            alt="Category Banner"
            className="block w-full h-64 sm:h-80 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h1 className="text-3xl sm:text-5xl font-bold text-white uppercase">
              {category}
            </h1>
          </div>
        </div>

        {/* Sorting and Product Info */}
        <div className="flex justify-between items-center mt-10 mb-6">
          <h5 className="text-lg font-medium">
            <span className="text-gray-600">Showing 1-12</span> out of 36 products
          </h5>
          <div className="flex items-center space-x-2 cursor-pointer text-gray-700 hover:text-black">
            <span>Sort by</span>
            <MdOutlineKeyboardArrowDown size={24} />
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {all_products.map((item) => {
            if (category === item.category) {
              return (
                <div
                  key={item.id}
                  onClick={() => handleProductClick(item.id)}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-70 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold">{item.name}</h3>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xl font-bold text-gray-900">
                        ${item.new_price}
                      </span>
                      {item.old_price && (
                        <span className="line-through text-gray-500">
                          ${item.old_price}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;
