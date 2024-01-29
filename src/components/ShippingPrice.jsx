import React from "react";

function ShippingPrice({ price, shipping1 }) {
  const shippingCost = shipping1 ? 10 : 20;
  const totalPrice = price + shippingCost;

  return (
    <div className="flex flex-col md:flex-row justify-between text-md mb-2">
      <div className="price text-gray-700">
        Price: {price.toFixed(2)}
      </div>
      <div className="price text-green-600">
        Shipping: {shippingCost.toFixed(2)}
      </div>
      <div className="price text-blue-600 font-bold">
        Total Price: {totalPrice.toFixed(2)}
      </div>
    </div>
  );
}

export default ShippingPrice;

