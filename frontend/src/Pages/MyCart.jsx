import React from "react";
import { useSelector } from "react-redux";
import CartItem from "../component/CartItem";

const MyCart = () => {

  const cart = useSelector((state) => state.carts || []);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = cart.length > 0 ? 4.99 : 0;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white p-8">

      <h2 className="text-xl font-semibold mb-6">Shopping Cart</h2>

      <div className="grid grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="col-span-2 space-y-4">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        {/* RIGHT SUMMARY */}
        <div className="bg-white text-black rounded-xl shadow-md p-6 h-fit">

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>

          <hr className="mb-4" />

          <div className="flex justify-between font-semibold text-lg mb-2">
            <span>Total</span>
            <span>${total.toFixed(2)} USD</span>
          </div>

          <p className="text-sm text-gray-400 mb-4">
            including VAT
          </p>

          <button className="bg-blue-500 hover:bg-blue-600 text-white w-full py-2 rounded-md">
            Check out
          </button>

        </div>

      </div>

    </div>
  );
};

export default MyCart;
