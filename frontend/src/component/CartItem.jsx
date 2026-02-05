
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
		<div className="flex items-center gap-4 p-4 border rounded-md">
			<img
				src={item.imageUrl || item.image || "https://via.placeholder.com/80"}
				alt={item.title}
				className="w-20 h-20 object-cover rounded"
			/>
			<div className="flex-1">
				<h3 className="font-semibold">{item.title}</h3>
				<p className="text-sm text-gray-500">Price: ${item.price}</p>
				<p className="text-sm text-gray-600">Subtotal: ${(item.price * item.quantity).toFixed(2)}</p>
			</div>
			<div className="flex items-center gap-2">
				<button onClick={handleDecrease} className="btn btn-sm">-</button>
				<span className="px-3">{item.quantity}</span>
				<button onClick={handleIncrease} className="btn btn-sm">+</button>
			</div>
			<div className="pl-4">
				<button onClick={handleRemove} className="btn btn-ghost btn-sm text-red-500">Remove</button>
			</div>
		</div>
	);
};

export default CartItem;
