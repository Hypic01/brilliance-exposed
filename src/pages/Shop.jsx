
import React from 'react';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import './Shop.css';

const Shop = () => {
    const { addToCart } = useCart();

    const products = [
        { id: 1, name: "Exhibition Catalog", price: "$45.00", image: "https://images.unsplash.com/photo-1544967082-d9d25d867d66?auto=format&fit=crop&q=80&w=800" },
        { id: 2, name: "Limited Edition Print", price: "$120.00", image: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800" },
        { id: 3, name: "Brilliance Tote Bag", price: "$25.00", image: "https://images.unsplash.com/photo-1597484662317-9bd7bdda2907?auto=format&fit=crop&q=80&w=800" },
        { id: 4, name: "Founder's Book", price: "$35.00", image: "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&q=80&w=800" },
    ];

    return (
        <div className="shop-page">
            <div className="container">
                <header className="shop-header">
                    <motion.h1 
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        The Shop
                    </motion.h1>
                    <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                    >
                        Support our mission with exclusive merchandise and art.
                    </motion.p>
                </header>

                <div className="product-grid">
                    {products.map((product, index) => (
                        <motion.div 
                            key={product.id} 
                            className="product-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.6 }}
                        >
                            <div className="product-image">
                                <img src={product.image} alt={product.name} />
                                <div className="product-overlay">
                                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                                </div>
                            </div>
                            <div className="product-info">
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Shop;
