import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'

const Navbar = () => {

  const carts = useSelector((state) => (state.carts || []));
  const cartCount = carts.reduce((total, item) => total + (item.quantity || 0), 0);

  return (
    <div className="navbar bg-base-100 shadow-sm px-4">

      {/* LEFT */}
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          ShoppingCart
        </Link>
      </div>

      {/* RIGHT */}
      <div className="flex-none flex items-center gap-2">

        {/* HOME */}
        <Link to="/" className="btn btn-ghost">
          Home
        </Link>

        {/* CART */}
        <Link to="/cart" className="btn btn-ghost btn-circle">
          <div className="indicator">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>

            <span className="badge badge-sm indicator-item">
              {cartCount}
            </span>
          </div>
        </Link>

        {/* PROFILE */}
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt="profile"
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default Navbar
