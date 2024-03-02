import "./App.css";
import Footer from "./components/Footer/Footer.jsx";
import Navbar from "./components/Navbar/Navbar";
import Cart from "./pages/Cart.jsx";
import LoginSignup from "./pages/LoginSignup.jsx";
import Product from "./pages/Product.jsx";
import ShopCategory from "./pages/ShopCategory.jsx";
import Shops from "./pages/Shops.jsx";
import men_banner from './Assets/banner_mens.png'
import women_banner from './Assets/banner_women.png'
import kids_banner from './Assets/banner_kids.png'
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from "react-router-dom";

function App() {
  return (
    // <Router>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Shops />} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path="/kids" element={<ShopCategory  banner={kids_banner} category="kid" />} />
          <Route path="/product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>

          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    // </Router>
  );
}

export default App;
