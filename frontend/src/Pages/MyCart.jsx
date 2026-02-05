import React from 'react'
import { useSelector } from "react-redux";
import CartItem from "../component/CartItem";

const MyCart = () => {

  const cart = useSelector((state) => state.carts || []);

  // ✅ คำนวณราคา
  const subtotal = cart.reduce(
    (sum, item) => sum + (item.price || 0) * (item.quantity || 0),
    0
  );

  const shipping = cart.length > 0 ? 4.99 : 0;
  const total = subtotal + shipping;

  if (!cart.length) {
    return <div className="p-6">Your cart is empty.</div>;
  }

  return (
    <div className="p-6">

      <h2 className="text-2xl font-semibold mb-6">My Cart</h2>

      {/* GRID LAYOUT */}
      <div className="grid grid-cols-3 gap-6">

        {/* LEFT : CART ITEMS */}
        <div className="col-span-2 space-y-3">
          {cart.map((item) => (
            <CartItem key={item.id} item={item} />
          ))}
        </div>

        {/* RIGHT : SUMMARY */}
        <div className="card bg-base-100 shadow-lg p-6 h-fit">

          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between mb-4">
            <span>Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>

          <hr className="mb-4" />

          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total</span>
            <span>${total.toFixed(2)} USD</span>
          </div>

          <p className="text-sm text-gray-400 mb-4">
            including VAT
          </p>

          <button className="btn btn-primary w-full">
            Check out
          </button>

        </div>

      </div>

    </div>
  )
}

export default MyCart
