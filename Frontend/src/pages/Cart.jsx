

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { asyncUpdateUser } from "../store/actions/UserAction";

const Cart = () => {
    const dispatch = useDispatch();
    const user = useSelector((state) => state.userReducer.users);
    const [cartItems, setCartItems] = useState(user?.cart || []);

    useEffect(() => {
        setCartItems(user?.cart || []);
    }, [user]);

    const handleDelete = (id) => {
        const updated = cartItems.filter(item => item.product.id !== id);
        updateCartData(updated);
    };

    const updateCartData = (updated) => {
        setCartItems(updated);
        dispatch(asyncUpdateUser(updated));
        
    };

    const totalPrice = cartItems.reduce((acc, item) => acc + parseFloat(item.product.price) * item.quantity, 0).toFixed(2);

    return (
        <div className="max-w-6xl mx-auto p-4 flex gap-6 text-white min-h-screen flex-wrap pt-32 ">
            <div className="flex-1 gap-4">
                <h2 className="text-2xl font-semibold mb-6">Your Cart</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="border-b border-gray-700">
                                <th className="py-2">Product</th>
                                <th className="py-2">Price</th>
                                <th className="py-2">Quantity</th>
                                <th className="py-2">Total</th>
                                <th className="py-2">Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cartItems.map(item => (
                                <tr key={item.product.id} className="border-b border-gray-800">
                                    <td className="py-4 flex items-center gap-6">
                                        <img src={item.product.image} alt={item.product.title} className="w-16 h-16 rounded-md object-cover" />
                                        <div>
                                            <div className="font-semibold">{item.product.title}</div>
                                            <div className="text-gray-400 text-sm">{item.product.category}</div>
                                        </div>
                                    </td>
                                    <td className="py-4">${item.product.price}</td>
                                    <td className="py-4">
                                        <div className="flex items-center justify-center">
                                            
                                            <p>{item.quantity}</p>
                                            
                                        </div>
                                    </td>
                                    <td className="py-4">${(parseFloat(item.product.price) * item.quantity).toFixed(2)}</td>
                                    <td className="py-4">
                                        <button
                                            onClick={() => handleDelete(item.product.id)}
                                            className="text-red-500 hover:text-red-400"
                                        >Remove</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="w-full lg:w-1/3 bg-[#121212] p-6 rounded-xl shadow-xl border border-gray-800">
                <h3 className="text-xl font-semibold mb-4">Order Summary</h3>
                <div className="flex justify-between mb-2">
                    <span>Subtotal</span>
                    <span>${totalPrice}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span>Shipping</span>
                    <span className="text-indigo-500">Free</span>
                </div>
                <div className="flex justify-between mb-4 border-t border-gray-700 pt-2">
                    <span className="font-semibold">Total</span>
                    <span className="font-semibold">${totalPrice}</span>
                </div>
                <button className="w-full bg-indigo-600 hover:bg-indigo-500 text-white py-2 rounded-md transition">Checkout</button>
            </div>
        </div>
    );
};

export default Cart;