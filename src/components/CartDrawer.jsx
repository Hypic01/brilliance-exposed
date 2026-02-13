
import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';
import './CartDrawer.css';

const CartDrawer = () => {
    const { isCartOpen, closeCart, cartItems, removeFromCart, updateQuantity, cartTotal } = useCart();

    return (
        <AnimatePresence>
            {isCartOpen && (
                <>
                    <motion.div 
                        className="cart-overlay"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={closeCart}
                    />
                    <motion.div 
                        className="cart-drawer"
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: "tween", duration: 0.3 }}
                    >
                        <div className="cart-header">
                            <h2>Your Cart ({cartItems.length})</h2>
                            <button className="close-btn" onClick={closeCart}>&times;</button>
                        </div>

                        <div className="cart-items">
                            {cartItems.length === 0 ? (
                                <p className="empty-cart-msg">Your cart is empty.</p>
                            ) : (
                                cartItems.map(item => (
                                    <div key={item.id} className="cart-item">
                                        <div className="item-image">
                                            <img src={item.image} alt={item.name} />
                                        </div>
                                        <div className="item-details">
                                            <h4>{item.name}</h4>
                                            <p className="item-price">{item.price}</p>
                                            <div className="item-quantity">
                                                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                                <span>{item.quantity}</span>
                                                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                            </div>
                                        </div>
                                        <button className="remove-item" onClick={() => removeFromCart(item.id)}>
                                            Remove
                                        </button>
                                    </div>
                                ))
                            )}
                        </div>

                        {cartItems.length > 0 && (
                            <div className="cart-footer">
                                <div className="cart-total">
                                    <span>Total</span>
                                    <span>${cartTotal.toFixed(2)}</span>
                                </div>
                                <button className="checkout-btn">Proceed to Checkout</button>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default CartDrawer;
