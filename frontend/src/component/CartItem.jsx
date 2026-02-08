import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart, increaseQuantity, decreaseQuantity } from "../redux/carts/action";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseQuantity(item.id));
  };

  const handleDecrease = () => {
    dispatch(decreaseQuantity(item.id));
  };

  const handleRemove = () => {
    dispatch(removeFromCart(item.id));
  };

  if (!item) return null;

  return (
    <div className="flex items-center justify-between gap-4 p-4 border rounded-md">

      {/* LEFT */}
      <div className="flex items-center gap-4">
        <img
          src={item.imageUrl || item.image || "https://via.placeholder.com/80"}
          alt={item.title}
          className="w-20 h-20 object-cover rounded"
        />

        <div>
          <h3 className="font-semibold">{item.title}</h3>
          <p className="text-sm text-gray-500">Price: ${item.price}</p>

          <p className="text-sm text-gray-400">
            Category: {item.category}
          </p>
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-end gap-6">

        <div className="flex flex-col items-center">
          <div className="flex items-center gap-2">
            <button onClick={handleDecrease} className="btn btn-sm">-</button>
            <span className="px-3">{item.quantity}</span>
            <button onClick={handleIncrease} className="btn btn-sm">+</button>
          </div>

          <p className="text-sm text-gray-600 mt-2">
            ${(item.price * item.quantity).toFixed(2)}
          </p>
        </div>

        <button
          onClick={handleRemove}
          className="text-red-500 text-sm"
        >
          Remove
        </button>

      </div>
    </div>
  );
};   // ⭐ ตัวนี้แหละที่หาย

export default CartItem;
