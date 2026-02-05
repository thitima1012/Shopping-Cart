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
        <div className="border rounded-lg p-4 shadow flex flex-col">
            <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-40 object-cover rounded mb-3"
            />

            <h2 className="font-semibold text-lg">{product.title}</h2>
            <p className="text-sm text-gray-500">{product.category}</p>

            <div className="mt-2 flex items-center justify-between">
                <div>
                    <p>
                        ราคา: <span className="font-bold">${product.price}</span>
                    </p>
                    <p className="text-sm text-gray-600">คงเหลือ: {product.quantity}</p>
                </div>

                <button
                    className="btn btn-primary btn-sm"
                    onClick={handleAddToCart}
                    disabled={product.quantity <= 0}
                >
                    Add
                </button>
            </div>
        </div>
    );
};

export default ProductItem;