import React from 'react';
import Item from './Item';
import POPULAR from '../assets/popular';

const ReleatedProduct = () => {
  const handleClick = () => {
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <section className="py-10 bg-gray-50 p-10">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center text-gray-800 mb-4">Releated Products</h3>
        <hr className="w-24 border-t-2 border-blue-600 mx-auto mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {POPULAR.map((item) => (
            <div key={item.id} onClick={handleClick}>
              <Item
                id={item.id}
                image={item.image}
                name={item.name}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReleatedProduct;
