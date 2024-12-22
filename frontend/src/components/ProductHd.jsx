import React from 'react';
import { TbArrowRight } from 'react-icons/tb';

const ProductHd = ({ product }) => {
  return (
    <div className="pt-32 pl-8 pb-4 md:pb-8 flex flex-wrap items-center gap-x-2 text-gray-700 text-sm md:text-base font-medium">
      {/* Breadcrumb Items */}
      <span className="hover:text-blue-500 cursor-pointer">Home</span>
      <TbArrowRight className="text-gray-500" />
      <span className="hover:text-blue-500 cursor-pointer">Shop</span>
      <TbArrowRight className="text-gray-500" />
      <span className="hover:text-blue-500 cursor-pointer">{product.category}</span>
      <TbArrowRight className="hidden md:inline md:text-gray-500" />
      <span className="hidden md:inline md:text-green-600 md:font-semibold truncate">
        {product.name}
      </span>
    </div>
  );
};

export default ProductHd;
