import React, { useEffect } from "react";
import { Link } from "react-router-dom";
//import reactLogo from "./assets/react.svg";
//import viteLogo from "/vite.svg";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sekani from "./Sekani";
import EateryPage from "./pages/EateryPage";
import Login from "./pages/EateryComponent/accounts/Login";
import SignUp from "./pages/EateryComponent/accounts/SignUp";
import "./pages/EateryComponent/style.css";
import Newproduct from "./pages/Admin/NewProduct";
import toast, { Toaster } from "react-hot-toast";
import { setDataProduct } from "./redux/productSlice";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./pages/EateryComponent/cart/Cart";
import Users from "./pages/Users";
import { setUsers } from "./redux/userSlice";
import PaymentForm from "./pages/PaymentForm";
import PaymentSuccess from "./EateryPage/PaymentSuccess";
import Lounge from "./pages/Lounge";
import MenuPage from "./pages/MenuPage";
import Yoka from "./Logistics/Yoka";
import VR from "./pages/VR";
import { RiMessageFill } from "react-icons/ri";
import { AiTwotoneMessage } from "react-icons/ai";
import MyChatComponent from "./components/MyChatComponent";
import Home from "./SalonPage/Home";
import Hairstyles from "./SalonPage/Hairstyles";
import OrderStatus from "./Logistics/OrderStatus";
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
          <Route path="/eatery" element={<EateryPage />} />
          <Route path="/lounge" element={<Lounge />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
          <Route path="cart" element={<Cart />} />
          <Route path="menupage" element={<MenuPage />} />
          <Route path="users" element={<Users />} />
          <Route path="payment" element={<PaymentForm />} />
          <Route path="yoka" element={<Yoka />} />
          <Route path="vr" element={<VR />} />
          <Route path="orderstatus" element={<OrderStatus />} />

          <Route path="salon" element={<Home />} />

          <Route path="hair" element={<Hairstyles />} />
          <Route path="payment-success" element={<PaymentSuccess />} />
          <Route path="newproduct" element={<Newproduct />} />
        </Routes>
      </Router>

      <div className="message-icon fixed bottom-5 right-5 text-white bg-[#0F6DEE] rounded-full p-4">
        {" "}
        <RiMessageFill size={30} fill="#ffffff" />
      </div>
    </div>
  );
}

export default App;
