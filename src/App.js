import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart.jsx";
import LoginSignup from "./pages/LoginSignup.jsx";
import Product from "./pages/Product.jsx";
import ShopCategory from "./pages/ShopCategory.jsx";
import Shops from "./pages/Shops.jsx";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shops />} />
          <Route path="/mens" element={<ShopCategory category="men" />} />
          <Route path="/womens" element={<ShopCategory category="womens" />} />
          <Route path="/kids" element={<ShopCategory category="kids" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
