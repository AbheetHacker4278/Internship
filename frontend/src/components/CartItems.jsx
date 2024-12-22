import React, { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

const CartItems = () => {
    const { all_products, cartItems, removefromcart } = useContext(ShopContext);

    // Calculate Subtotal
    const subtotal = all_products.reduce((total, product) => {
        if (cartItems[product.id] > 0) {
            return total + product.new_price * cartItems[product.id];
        }
        return total;
    }, 0);

    // Calculate Grand Total (with potential coupon/discount logic)
    const grandTotal = subtotal; // Placeholder for coupon/discount calculation

    return (
        <section className="container mx-auto p-4">
            {/* Cart Title */}
            <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

            {/* Cart Table */}
            <div className="overflow-x-auto mt-20">
                <table className="w-full border-collapse border border-gray-300">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-2 text-left border">Product</th>
                            <th className="p-2 text-left border">Title</th>
                            <th className="p-2 text-left border">Price</th>
                            <th className="p-2 text-left border">Quantity</th>
                            <th className="p-2 text-left border">Total</th>
                            <th className="p-2 text-left border">Remove</th>
                        </tr>
                    </thead>
                    <tbody>
                        {all_products.map((e) => {
                            if (cartItems[e.id] > 0) {
                                return (
                                    <tr key={e.id} className="border-b">
                                        <td className="p-2 border">
                                            <img
                                                src={e.image}
                                                alt={e.name}
                                                className="h-16 w-16 object-cover rounded-md"
                                            />
                                        </td>
                                        <td className="p-2 border">{e.name}</td>
                                        <td className="p-2 border">${e.new_price.toFixed(2)}</td>
                                        <td className="p-2 border">{cartItems[e.id]}</td>
                                        <td className="p-2 border">
                                            ${(e.new_price * cartItems[e.id]).toFixed(2)}
                                        </td>
                                        <td className="p-2 border">
                                            <button
                                                onClick={() => removefromcart(e.id)}
                                                className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600"
                                            >
                                                Remove
                                            </button>
                                        </td>
                                    </tr>
                                );
                            }
                            return null;
                        })}
                    </tbody>
                </table>
            </div>

            {/* Coupon and Price Summary Section */}
            <div className="grid md:grid-cols-2 gap-4 mt-6">
                {/* Coupon Section */}
                <div className="p-4 border rounded-md shadow-sm">
                    <h4 className="font-medium mb-2">Your Coupon Code:</h4>
                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder="Enter Coupon Code"
                            className="w-full p-2 border rounded-md"
                        />
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
                            Submit
                        </button>
                    </div>
                </div>

                {/* Subtotal and Grand Total */}
                <div className="p-4 border rounded-md shadow-sm">
                    <div className="flex justify-between mb-2">
                        <h4 className="font-medium">Subtotal:</h4>
                        <h4 className="text-gray-600 font-semibold">${subtotal.toFixed(2)}</h4>
                    </div>
                    <div className="flex justify-between mb-2">
                        <h4 className="font-medium">Discount:</h4>
                        <h4 className="text-gray-600 font-semibold">$0.00</h4>
                    </div>
                    <div className="flex justify-between mb-2">
                        <h4 className="font-medium">Shipping:</h4>
                        <h4 className="text-gray-600 font-semibold">Free</h4>
                    </div>
                    <hr />
                    <div className="flex justify-between mt-2 font-bold text-lg">
                        <h4>Total:</h4>
                        <h4 className="text-green-600">${grandTotal.toFixed(2)}</h4>
                    </div>
                </div>
            </div>

            {/* Checkout Button */}
            <div className="text-right mt-6">
                <button className="bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 text-lg">
                    Proceed to Checkout
                </button>
            </div>
        </section>
    );
};

export default CartItems;
