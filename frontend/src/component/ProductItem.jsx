import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/carts/action";
import { removeQuantity } from "../redux/product/action";

const ProductItem = ({ product }) => {
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    dispatch(removeQuantity(product.id));
  };

  return (
    <div className="bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:scale-[1.02] transition duration-300">

      {/* IMAGE */}
      <div className="relative">
        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-56 object-cover"
        />

        {/* CATEGORY BADGE */}
        <span className="absolute top-3 right-3 bg-pink-500 text-white text-xs px-3 py-1 rounded-full shadow">
          {product.category}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-5 text-white flex flex-col gap-2">

        <h2 className="text-lg font-semibold">
          {product.title}
        </h2>

        <p className="text-sm text-gray-300">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        {/* STOCK + PRICE */}
        <div className="flex justify-between items-center mt-2">
          <span className="text-sm text-gray-400">
            Available: {product.quantity}
          </span>

          <span className="font-semibold text-lg">
            ${product.price}
          </span>
        </div>

        {/* BUTTON */}
        <button
          onClick={handleAddToCart}
          disabled={product.quantity <= 0}
          className="btn btn-primary btn-sm mt-3"
        >
          Buy Now
        </button>

      </div>
    </div>
  );
};

export default ProductItem;
