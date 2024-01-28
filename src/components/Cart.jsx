import React, { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';
import ShippingPrice from './ShippingPrice';

const Cart = () => {
  const { cart, setCart, calculateTotalPrice } = useContext(ItemContext);
  const totalPriceExcludingShipping = cart.reduce((total, item) => total + item.price * item.quantityInCart, 0);
  const useShipping1 = cart.some(item => item.shipping1);

  const removeFromCart = (itemId) => {
      setCart(currentCart => currentCart.filter(item => item._id !== itemId));
  };

  return (
    <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-4">Cart</h1>
        <div className="grid grid-cols-1 gap-4">
            {cart.map((item, index) => (
                <div key={index} className="border p-4 rounded shadow">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-gray-600">{item.description}</p>
                    <ShippingPrice price={totalPriceExcludingShipping} shipping1={useShipping1} />
                    <p className="text-gray-600">Quantity in Cart: {item.quantityInCart}</p>
                    <button className="mt-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => removeFromCart(item._id)}>Remove from Cart</button>
                </div>
            ))}
        </div>
        <h2 className="text-xl font-bold mt-4">Total Price: ${calculateTotalPrice()}</h2>
        <button className="mt-4 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => {}}>Proceed to Shipping</button>
    </div>
);
};

export default Cart;

