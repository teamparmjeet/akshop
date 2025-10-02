"use client"
import React, { useState, useMemo } from 'react';

// Using lucide-react icons (simulating import for a single-file environment)
const Trash2 = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/><line x1="10" x2="10" y1="11" y2="17"/><line x1="14" x2="14" y1="11" y2="17"/></svg>
);
const Minus = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" x2="19" y1="12" y2="12"/></svg>
);
const Plus = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" x2="12" y1="5" y2="19"/><line x1="5" x2="19" y1="12" y2="12"/></svg>
);
const ShoppingCart = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>
);


// Mock Data for Cart Items
const initialCartItems = [
    {
        id: 1,
        name: 'Gemini Prime Shirt (MultiColor)',
        price: 59.99,
        quantity: 1,
        image: '/images/high-quality-mens-long-sleeve-shirts1-1000x1000.webp',
        size: 'L'
    },
    {
        id: 2,
        name: 'White Shoes',
        price: 24.50,
        quantity: 3,
        image: '/images/feet-1840619_640.jpg',
        size: 'N/A'
    },
    {
        id: 3,
        name: 'Red Shooes',
        price: 12.00,
        quantity: 1,
        image: '/images/photo-1542291026-7eec264c27ff.jpeg',
        size: 'Softcover'
    },
];

const SHIPPING_COST = 15.00;
const TAX_RATE = 0.08; // 8%

// Helper function to format currency
const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    }).format(amount);
};

// Component for a single Cart Item row
const CartItem = ({ item, updateQuantity, removeItem }) => {
    const itemTotal = item.price * item.quantity;

    return (
        <div className="flex items-start py-6 border-b border-gray-200 last:border-b-0">
            {/* Image */}
            <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32 rounded-lg overflow-hidden mr-4 shadow-md">
                <img
                    src={item.image}
                    alt={`Product image for ${item.name}`}
                    className="w-full h-full object-cover object-center"
                    onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "https://placehold.co/100x100/E5E7EB/4B5563?text=N/A";
                    }}
                />
            </div>

            {/* Details */}
            <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-gray-900 truncate">{item.name}</h3>
                <p className="mt-1 text-sm text-gray-500">Size: {item.size}</p>
                <p className="mt-1 text-base font-medium text-indigo-600">{formatCurrency(item.price)}</p>

                {/* Quantity Controls and Remove */}
                <div className="flex items-center mt-3 space-x-4">
                    <div className="flex items-center border border-gray-300 rounded-lg p-1">
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                            aria-label="Decrease quantity"
                            className="p-1 text-gray-500 hover:text-indigo-600 disabled:opacity-50 transition duration-150"
                        >
                            <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium text-gray-700 select-none">
                            {item.quantity}
                        </span>
                        <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            aria-label="Increase quantity"
                            className="p-1 text-gray-500 hover:text-indigo-600 transition duration-150"
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>

                    <p className="text-sm font-medium text-gray-700 hidden sm:block">
                        Total: {formatCurrency(itemTotal)}
                    </p>

                    <button
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name} from cart`}
                        className="p-2 text-red-500 hover:text-red-700 transition duration-150 rounded-full hover:bg-red-50"
                    >
                        <Trash2 className="w-5 h-5" />
                    </button>
                </div>
                <p className="mt-1 text-sm font-medium text-gray-700 sm:hidden">
                    Total: {formatCurrency(itemTotal)}
                </p>
            </div>
        </div>
    );
};

// Main App Component
const App = () => {
    const [cartItems, setCartItems] = useState(initialCartItems);

    // --- Cart Management Functions ---
    const updateQuantity = (id, newQuantity) => {
        if (newQuantity < 1) return;
        setCartItems(prevItems =>
            prevItems.map(item =>
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const removeItem = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    // --- Calculation Hooks ---
    const subtotal = useMemo(() => {
        return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
    }, [cartItems]);

    const taxAmount = useMemo(() => subtotal * TAX_RATE, [subtotal]);

    const total = useMemo(() => subtotal > 0 ? subtotal + SHIPPING_COST + taxAmount : 0, [subtotal, taxAmount]);

    // --- Order Summary Component ---
    const OrderSummary = () => (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl sticky top-8 border border-gray-100">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3 flex items-center">
                <ShoppingCart className="w-6 h-6 mr-2 text-indigo-600" />
                Order Summary
            </h2>

            <div className="space-y-4">
                <div className="flex justify-between text-gray-600">
                    <span>Subtotal ({cartItems.length} items)</span>
                    <span>{formatCurrency(subtotal)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                    <span>Shipping Estimate</span>
                    <span>{subtotal > 0 ? formatCurrency(SHIPPING_COST) : formatCurrency(0)}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                    <span>Taxes (Estimated)</span>
                    <span>{formatCurrency(taxAmount)}</span>
                </div>
            </div>

            <div className="pt-6 mt-6 border-t border-gray-200">
                <div className="flex justify-between font-bold text-xl text-gray-900">
                    <span>Order Total</span>
                    <span>{formatCurrency(total)}</span>
                </div>
            </div>

            <button
                onClick={() => console.log('Proceeding to Checkout with total:', total)}
                disabled={cartItems.length === 0}
                className="w-full mt-8 bg-indigo-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-indigo-700 transition duration-300 shadow-lg shadow-indigo-200 disabled:bg-gray-400 disabled:shadow-none"
            >
                Proceed to Checkout
            </button>

            <p className="mt-4 text-center text-sm text-gray-500">
                Shipping calculated at checkout based on destination.
            </p>
        </div>
    );

    // --- Main Render ---
    return (
        <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-10 font-sans">
            <div className="max-w-7xl mx-auto">
                <h1 className="text-4xl font-extrabold text-gray-900 mb-8 tracking-tight">Your Cart</h1>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Left Column: Cart Items */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-xl shadow-xl p-4 sm:p-6 border border-gray-100">
                            {cartItems.length > 0 ? (
                                cartItems.map(item => (
                                    <CartItem
                                        key={item.id}
                                        item={item}
                                        updateQuantity={updateQuantity}
                                        removeItem={removeItem}
                                    />
                                ))
                            ) : (
                                <div className="text-center py-12 text-gray-500">
                                    <p className="text-xl font-medium">Your cart is empty.</p>
                                    <p className="mt-2 text-sm">Time to find some awesome stuff!</p>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Right Column: Order Summary */}
                    <div className="lg:col-span-1">
                        <OrderSummary />
                    </div>
                </div>

                {/* Continue Shopping / Go Back */}
                <div className="mt-8 flex justify-center lg:justify-start">
                    <a
                        href="#"
                        className="text-indigo-600 font-medium hover:text-indigo-500 transition duration-150 flex items-center space-x-1"
                    >
                        &larr;
                        <span>Continue Shopping</span>
                    </a>
                </div>

            </div>
        </div>
    );
};

export default App;
