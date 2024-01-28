import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { ItemContext } from '../context/ItemContext';
import ShippingPrice from './ShippingPrice';

const ItemsPage = () => {
    const { items, addToCart } = useContext(ItemContext);
    const navigate = useNavigate();

    const navigateToItemDetail = (id) => {
        navigate(`/item/${id}`);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Items</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {items.map((item) => (
                    <div key={item._id} className="border p-4 rounded shadow hover:shadow-lg transition">
                        <img src={item.photo} alt={item.name} className="w-32 h-32 object-cover mb-3 rounded mx-auto"/>
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <p className="text-gray-600">{item.description}</p>
                        <ShippingPrice price={item.price} shipping1={item.shipping1} />
                        <p className="text-gray-600">Quantity Available: {item.quantity}</p>
                        <div className="flex justify-between items-center mt-2">
                            <button onClick={() => addToCart(item)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Add to Cart
                            </button>
                            <button onClick={() => navigateToItemDetail(item._id)} className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ItemsPage;
