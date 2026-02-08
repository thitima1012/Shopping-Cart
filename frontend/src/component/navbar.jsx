import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const carts = useSelector((state) => state.carts || []);
  const cartCount = carts.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );

  return (
    <div className="navbar bg-indigo-900 text-white px-6 shadow-lg">

      {/* LEFT */}
      <div className="flex-1">
        <Link to="/" className="text-xl font-semibold">
          ShoppingCart
        </Link>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-6">

        <Link to="/" className="hover:text-indigo-200">
          Home
        </Link>

        {/* CART */}
        <Link to="/cart" className="relative">
          🛒

          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-black text-white text-xs px-2 py-[2px] rounded-full">
              {cartCount}
            </span>
          )}
        </Link>

        {/* PROFILE */}
        <div className="avatar">
          <div className="w-9 rounded-full ring ring-white ring-offset-2">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
