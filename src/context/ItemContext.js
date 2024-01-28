import React, { createContext, useState, useEffect } from 'react';

export const ItemContext = createContext();

export const ItemProvider = ({ children }) => {
    const [items, setItems] = useState([]);
    const [cart, setCart] = useState(() => {
        try {
            const localData = localStorage.getItem('cart');
            return localData ? JSON.parse(localData) : [];
        } catch (error) {
            console.error('Error reading cart from localStorage', error);
            return [];
        }
    });


    useEffect(() => {
        const fetchItems = async () => {
            try {
                const response = await fetch('/api/item/all');
                const data = await response.json();
                if (response.ok) {
                    setItems(data.items);
                } else {
                    throw new Error('Failed to fetch items');
                }
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };

        fetchItems();
    }, []);

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (itemToAdd) => {
        setCart((currentCart) => {
            const existingCartItem = currentCart.find(item => item._id === itemToAdd._id);

            if (existingCartItem) {
                if (existingCartItem.quantityInCart + 1 > itemToAdd.quantity) {
                    alert('Cannot add more of this item to the cart. Not enough stock.');
                    return currentCart;
                }
                return currentCart.map(item =>
                    item._id === itemToAdd._id
                        ? { ...item, quantityInCart: item.quantityInCart + 1 }
                        : item
                );
            } else {
                return [...currentCart, { ...itemToAdd, quantityInCart: 1 }];
            }
        });
    };

    const calculateTotalShipping = () => {
        return cart.some(item => item.shipping1) ? 10 : 20;
    };
    
    const calculateTotalPrice = () => {
        const totalPriceExcludingShipping = cart.reduce((total, item) => total + item.price * item.quantityInCart, 0);
        const totalShipping = calculateTotalShipping();
        return totalPriceExcludingShipping + totalShipping;
    };
    return (
        <ItemContext.Provider value={{ items, setItems, cart, setCart, addToCart, calculateTotalPrice}}>
            {children}
        </ItemContext.Provider>
    );
};
