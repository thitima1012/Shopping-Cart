import React from "react";
import { useSelector } from "react-redux";
import AddProduct from "../component/AddProduct";
import ProductItem from "../component/ProductItem";

const Home = () => {
  const products = useSelector((state) => state.products || []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-10">

      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-10">

        {/* PRODUCT LIST */}
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-8">
          {products.map((item) => (
            <ProductItem key={item.id} product={item} />
          ))}
        </div>

        {/* SIDEBAR */}
        <div className="bg-white rounded-2xl p-6 shadow-xl h-fit">
          <h2 className="text-xl font-semibold mb-4 text-center">
            Add New Product
          </h2>

          <AddProduct />
        </div>

      </div>

    </div>
  );
};

export default Home;
