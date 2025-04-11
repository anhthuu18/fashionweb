import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    //localStorage.clear();
    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find(
                (item) => item.id === product.id && item.size === product.size
            );
            if (existingProduct) {
                return prevCart.map((item) =>
                    item.id === product.id && item.size === product.size
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const getCartCount = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };
    const removeFromCart = (id, size) => {
        setCart((prevCart) =>
            prevCart.filter((item) => !(item.id === id && item.size === size))
        );
    };
    return (
        <CartContext.Provider value={{ cart, addToCart, getCartCount, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);