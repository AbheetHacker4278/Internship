import React, { useState } from 'react'
import { createContext } from 'react'
import all_products from '../assets/all_products'
import Item from '../components/Item'
export const ShopContext = createContext(null)
const getdefaultcart = () => {
    let cart = {}
    for (let index = 0; index < all_products.length + 1; index++) {
        cart[index] = 0;
    }
    return cart;
}

const ShopContextProvider = (props) => {
    
    const [cartItems,setcartItems] = useState(getdefaultcart());
    
    const addtocart = (itemId) => {
        setcartItems((prev) => ({...prev,[itemId]: prev[itemId] + 1}))
        console.log(cartItems)
    }
    const removefromcart = (itemId) => {
        setcartItems((prev) => ({...prev,[itemId]: prev[itemId] - 1}))
    }
    const gettotalcartItem = () => {
        let totalItem = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItem += cartItems[item];
            }
        }
        return totalItem; // Move the return statement outside of the loop
    }
    
    const contextvalue =  {gettotalcartItem, all_products , cartItems , addtocart , removefromcart };
    
    return (
        <ShopContext.Provider value={contextvalue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider;