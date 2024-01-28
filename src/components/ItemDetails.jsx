import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ItemContext } from '../context/ItemContext';

const ItemDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { items, addToCart } = useContext(ItemContext);
    const [item, setItem] = useState(null);

    useEffect(() => {
        const foundItem = items.find(item => item._id === id);
        setItem(foundItem);
    }, [id, items]);

    if (!item) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto mt-10">
            <div key={item._id} className="border p-4 rounded shadow hover:shadow-lg transition">
                <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/2 max-w-lg mx-auto">
                        <img src={item.photo} alt={item.name} className="w-full h-auto object-cover rounded-lg mx-auto" />
                    </div>
                    <div className="md:ml-10">
                        <h1 className="text-3xl font-bold">{item.name}</h1>
                        <p className="text-gray-600 mt-2">{item.description}</p>
                        <p className="price font-bold mt-2">Price: {item.price}</p>
                        <p className="text-gray-500 mt-1">Available Quantity: {item.availableQuantity}</p>
                        <button onClick={() => addToCart(item)} disabled={item.availableQuantity <= 0} className="mt-4 bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">
                            Add to Cart
                        </button>
                        <button onClick={() => navigate('/')} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Back to Items
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemDetail;
