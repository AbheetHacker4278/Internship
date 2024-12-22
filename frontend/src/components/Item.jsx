import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ id, name, image, old_price, new_price }) => {
  return (
    <div className="bg-white border border-purple-300 shadow-blue-300 rounded-3xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group">
      <Link to={`/product/${id}`} className="block w-full aspect-w-1 aspect-h-1 overflow-hidden">
        <img
          onClick={window.scrollTo({ top: 0, behavior: 'smooth' })}
          src={image}
          alt={name}
          className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </Link>
      <div className="p-4 text-center">
        <h4 className="text-sm font-bold mb-1 text-zinc-600 -tracking-tight">{name}</h4>
        <div className="flex justify-center items-center gap-3 mb-4">
          <span className="text-gray-500 line-through text-sm">${old_price}</span>
          <span className="text-green-500 text-2xl font-semibold">${new_price}</span>
        </div>
      </div>
    </div>
  );
};

export default Item;
