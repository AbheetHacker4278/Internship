import React, { useContext } from 'react';
import { MdStar } from 'react-icons/md';
import { ShopContext } from '../Context/ShopContext';

const ProductDisplay = ({ product }) => {
  const {addtocart} = useContext(ShopContext)
  return (
    <section className="p-6 max-w-5xl mx-auto bg-white shadow-md rounded-md">
      <div className="flex flex-col xl:flex-row gap-10">
        {/* Left: Product Images */}
        <div className="flex flex-col xl:flex-row gap-4">
          {/* Main Image */}
          <div className="flex-grow">
            <img
              src={product.image}
              alt={`Main Product - ${product.name}`}
              className="w-full h-96 object-cover rounded-md shadow-lg"
            />
          </div>
        </div>

        {/* Right: Product Details */}
        <div className="flex flex-col gap-6">
          {/* Product Title */}
          <h3 className="text-2xl font-semibold text-gray-800">{product.name}</h3>

          {/* Ratings */}
          <div className="flex items-center gap-2 text-yellow-500">
            {[...Array(4)].map((_, idx) => (
              <MdStar key={idx} />
            ))}
            <p className="text-gray-600 text-sm">(111 reviews)</p>
          </div>

          {/* Pricing */}
          <div className="flex items-center gap-4">
            <span className="text-lg text-gray-500 line-through">${product.old_price}</span>
            <span className="text-xl text-red-500 font-bold">${product.new_price}</span>
          </div>

          {/* Size Selection */}
          <div>
            <h4 className="text-lg font-semibold text-gray-800 mb-2">Select Size:</h4>
            <div className="flex gap-4">
              {['S', 'M', 'L', 'XL'].map((size) => (
                <div
                  key={size}
                  className="ring-2 ring-gray-300 h-10 w-10 flex items-center justify-center text-sm font-medium cursor-pointer hover:ring-slate-900 transition-all rounded-md"
                >
                  {size}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4">
            <button onClick={() => {addtocart(product.id)}} className="px-6 py-2 bg-purple-500 text-white rounded hover:bg-blue-400 transition-all text-sm">
              Add to Cart
            </button>
            <button className="px-6 py-2 bg-emerald-500 text-white rounded hover:bg-green-400 transition-all text-sm">
              Buy It Now
            </button>
          </div>

          {/* Additional Info */}
          <div className="text-sm text-gray-600">
            <p>
              <span className="font-medium">Category: </span>
              Women | Jacket | Winter
            </p>
            <p>
              <span className="font-medium">Tags: </span>
              Modern | Latest
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDisplay;
