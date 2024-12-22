import React from 'react'
import Item from './Item'
import LATEST from '../assets/latest'
const NewCollections = () => {
  return (
    <section className="py-10 bg-gray-50 p-10">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl font-bold text-center text-zinc-600 mb-4">🫧Latest Premium Collection🫧</h3>
        <hr className="w-24 border-t-2 mx-auto mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {LATEST.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              image={item.image}
              name={item.name}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewCollections