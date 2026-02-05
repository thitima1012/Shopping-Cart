import React from "react";
import { useSelector } from "react-redux";
import AddProduct from "../component/addProduct";
import ProductItem from "../component/ProductItem";

const Home = () => {
  // product reducer is mounted as `products` in the store
  const products = useSelector((state) => state.products || []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Home</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Products */}
        <div className="md:col-span-2">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {products.map((item) => (
              <ProductItem key={item.id} product={item} />
            ))}
          </div>
        </div>

        {/* Sidebar */}
        <aside className="md:col-span-1">
          <div className="sticky top-6">
            <AddProduct />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Home;
