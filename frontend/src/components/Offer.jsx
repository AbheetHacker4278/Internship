import React from 'react';

const Offer = () => {
  return (
    <section className="w-full bg-gradient-to-r from-blue-500 via-pink-400 to-purple-600 py-8 px-6 sm:px-12 lg:px-24">
      <div className="p-10 sm:p-16 lg:p-20 max-w-full max-h-96 mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white mb-4 leading-tight">
            Winter Sale <span className="text-yellow-400">50% Off</span>
          </h2>
          <p className="text-lg sm:text-xl lg:text-2xl text-white mb-6">
            Women's Premium Leather Formal Wear
          </p>
          <button className="px-6 sm:px-8 py-3 sm:py-4 bg-yellow-400 text-gray-900 text-md sm:text-lg font-semibold rounded-full shadow-lg hover:bg-yellow-300 transition-transform transform hover:scale-105">
            Shop Now
          </button>
        </div>

        {/* Image Section */}
        <div className="hidden md:lg:w-1/2 md:w-full md:flex md:justify-center">
          <img
            src="https://cdn3d.iconscout.com/3d/premium/thumb/woman-doing-online-shopping-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--order-digital-shop-pack-e-commerce-illustrations-5299734.png" // Replace with the actual image path
            alt="Women's Leather Formal Wear Shoes"
            className="w-3/4 sm:w-full h-auto object-cover drop-shadow-2xl rounded-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default Offer;
