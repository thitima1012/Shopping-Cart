import "./index.css";
import Navbar from "./component/navbar.jsx";
import Home from "./Pages/page.jsx";
import MyCart from "./Pages/MyCart.jsx";

import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Provider store={store}>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<MyCart />} />
      </Routes>

    </Provider>
  );
}

export default App;
