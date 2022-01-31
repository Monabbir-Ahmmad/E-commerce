import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import SignUpPage from "./pages/SignUpPage";
import { Routes, Route, Navigate } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import CartPage from "./pages/CartPage";

function App() {
  const navItems = ["Home", "Cart", "About us", "Sign up", "Sign in"];

  return (
    <>
      <Navbar navItems={navItems} />
      <Routes>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />}>
          <Route path=":productId" element={<CartPage />} />
        </Route>
        <Route path="/sign-up" element={<SignUpPage />} />
        <Route path="/product/id=:productId" element={<ProductPage />} />
      </Routes>
    </>
  );
}

export default App;
