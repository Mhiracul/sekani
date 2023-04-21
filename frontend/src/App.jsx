import React, { useEffect } from "react";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sekani from "./Sekani";
import Eatery from "./pages/Eatery";
import Login from "./EateryComponent/Login";
import SignUp from "./EateryComponent/SignUp";
import "../src/EateryComponent/style.css";
import Newproduct from "./pages/NewProduct";
import toast, { Toaster } from "react-hot-toast";
import { setDataProduct } from "./redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./EateryPage/Cart";
import Users from "./pages/Users";
import { setUsers } from "./redux/userSlice";
import PaymentForm from "./EateryPage/PaymentForm";
import PaymentSuccess from "./EateryPage/PaymentSuccess";
import Lounge from "./pages/Lounge";
import MenuPage from "./pages/MenuPage";
import Yoka from "./Logistics/Yoka";
//import { adminUser } from "./redux/usersSlice";

function App() {
  const dispatch = useDispatch();
  const productData = useSelector((state) => state.product);
  useEffect(() => {
    (async () => {
      const res = await fetch("http://localhost:4000/products");
      const resData = await res.json();

      console.log(resData);
      dispatch(setDataProduct(resData));
    })();
  }, []);
  console.log(productData);

  return (
    <div className="App">
      <Toaster />

      <Router>
        <Routes>
          <Route path="/" element={<Sekani />} />
          <Route path="/eatery" element={<Eatery />} />
          <Route path="/lounge" element={<Lounge />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="cart" element={<Cart />} />
          <Route path="menupage" element={<MenuPage />} />
          <Route path="users" element={<Users />} />
          <Route path="payment" element={<PaymentForm />} />
          <Route path="yoka" element={<Yoka />} />
          <Route path="payment-success" element={<PaymentSuccess />} />
          <Route path="newproduct" element={<Newproduct />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
