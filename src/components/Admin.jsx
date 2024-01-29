import React, { useContext } from 'react';
import { ItemContext } from '../context/ItemContext';
import AddItemForm from './AddItemForm';

const AdminPanel = () => {
    const { items, deleteItem } = useContext(ItemContext);

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h1 className="text-2xl font-bold text-center mb-8">Admin Panel</h1>
            <AddItemForm />
            <ul className="mt-8 space-y-2">
                {items.map(item => (
                    <li key={item._id} className="flex justify-between items-center bg-gray-100 p-4 rounded-lg shadow">
                        <span className="text-lg">{item.name}</span>
                        <button 
                            onClick={() => deleteItem(item._id)}
                            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300"
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminPanel;
