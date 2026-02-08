import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../redux/product/action";

const AddProduct = () => {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    nameProduct: "",
    Category: "",
    imageURL: "",
    Price: "",
    Quantity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addProduct({
        ...form,
        Price: Number(form.Price) || 0,
        Quantity: Number(form.Quantity) || 0,
        id: Date.now(),
      })
    );

    setForm({
      nameProduct: "",
      Category: "",
      imageURL: "",
      Price: "",
      Quantity: "",
    });
  };

  return (
    <>

      {/* Product Name */}
      <div className="mb-4">
        <label className="text-sm text-gray-600">Product Name</label>
        <input
          name="nameProduct"
          value={form.nameProduct}
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 rounded bg-gray-700 text-white outline-none"
          required
        />
      </div>

      {/* Category */}
      <div className="mb-4">
        <label className="text-sm text-gray-600">Category</label>
        <select
          name="Category"
          value={form.Category}
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 rounded bg-gray-700 text-white outline-none"
        >
          <option value="">Select a category</option>
          <option value="Appliances">Appliances</option>
          <option value="Electronics">Electronics</option>
          <option value="Furniture">Furniture</option>
          <option value="Accessories">Accessories</option>
        </select>
      </div>

      {/* Image URL */}
      <div className="mb-4">
        <label className="text-sm text-gray-600">Image Url</label>
        <input
          name="imageURL"
          value={form.imageURL}
          onChange={handleChange}
          className="w-full mt-1 px-3 py-2 rounded bg-gray-700 text-white outline-none"
        />
      </div>

      {/* Price + Quantity */}
      <div className="flex gap-3 mb-5">
        <div className="flex-1">
          <label className="text-sm text-gray-600">Price</label>
          <input
            name="Price"
            value={form.Price}
            onChange={handleChange}
            type="number"
            className="w-full mt-1 px-3 py-2 rounded bg-gray-700 text-white outline-none"
          />
        </div>

        <div className="flex-1">
          <label className="text-sm text-gray-600">Quantity</label>
          <input
            name="Quantity"
            value={form.Quantity}
            onChange={handleChange}
            type="number"
            className="w-full mt-1 px-3 py-2 rounded bg-gray-700 text-white outline-none"
          />
        </div>
      </div>

      <button
        onClick={handleSubmit}
        className="w-full py-2 rounded bg-indigo-600 hover:bg-indigo-700 text-white font-medium"
      >
        Add Product
      </button>
    </>
  );
};

export default AddProduct;
