import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiFillTag } from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserAlt, FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp, MdFoodBank } from "react-icons/md";
import { Logo } from "../assets/Sekani/index";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutRedux } from "../redux/userSlice";
import { toast } from "react-hot-toast";

//import { Logo } from "../Sekani/index";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  //const [isDelivery, setIsDelivery] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const userData = useSelector((state) => state.user);
  console.log(userData.email);
  const dispatch = useDispatch();
  const handleShowMenu = () => {
    setShowMenu((preve) => !preve);
  };
  const REACT_APP_ADMIN_EMAIL = "mokeke185@gmail.com";
  const handleLogout = () => {
    dispatch(logoutRedux());
    toast("Logout successfully");
  };
  console.log("mokeke185@gmail.com");

  //const handleToggle = () => {
  //setIsDelivery(!isDelivery);
  // };
  const cartItemNumber = useSelector((state) => state.product.cartItem);

  return (
    <div className="max-w-[1640px] mx-auto h-20 shadow w-[100%]">
      <div className=" flex justify-between items-center  px-4 h-20 ">
        {/* Left side */}

        <div className="flex items-center ">
          <div onClick={() => setNav(!nav)} className="cursor-pointer">
            <AiOutlineMenu size={30} />
          </div>
          <div>
            <img src={Logo} alt="" className="h-48 w-30" />
          </div>
        </div>

        {/* Search Input */}

        {/* Cart button */}
        <div className="flex gap-6">
          <div className=" text-white hidden text-2xl md:flex  relative">
            <Link to={"/cart"}>
              <BsFillCartFill size={20} className="" />
              <div className="absolute -top-1 -right-1 bg-red-500 rounded-full h-4 w-4 m-0 p-0 text-xs text-center">
                {cartItemNumber.length}
              </div>
            </Link>
          </div>
          <div
            className="text-[#FB320D] hidden text-xs md:flex"
            onClick={handleShowMenu}
          >
            <div className="cursor-pointer">
              {" "}
              <FaUserAlt size={20} />
            </div>
            {showMenu && (
              <div className="absolute right-2 mt-6  bg-white  py-2 px-2 shadow drop-shadow-md flex flex-col">
                {userData.email === REACT_APP_ADMIN_EMAIL && (
                  <div className="flex flex-col">
                    <Link
                      to="/newproduct"
                      className="whitespace-nowrap cursor-pointer"
                    >
                      New Product
                    </Link>
                    <Link to="/users">Payment</Link>
                  </div>
                )}

                {userData.email ? (
                  <p
                    className="cursor-pointer text-white px-2 bg-red-500"
                    onClick={handleLogout}
                  >
                    Logout ({userData.firstName}){" "}
                  </p>
                ) : (
                  <Link
                    to={"/login"}
                    className="whitespace-nowrap cursor-pointer px-2"
                  >
                    Login
                  </Link>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      {nav ? (
        <div className="bg-black/80 fixed w-full h-screen z-10 top-0 left-0"></div>
      ) : (
        ""
      )}

      {/* Side drawer menu */}
      <div
        className={
          nav
            ? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-300"
            : "fixed top-0 left-[-160%] w-[300px] h-screen bg-white z-10 duration-300"
        }
      >
        <AiOutlineClose
          onClick={() => setNav(!nav)}
          size={30}
          className="absolute right-4 top-4 cursor-pointer"
        />

        <img src={Logo} alt="" className="w-48 h-40 " />

        <nav>
          <ul className="flex flex-col p-4 text-gray-800">
            <li className="text-xl py-4 flex">
              <TbTruckDelivery size={25} className="mr-4" /> Orders
            </li>
            <li className="text-xl py-4 flex">
              <MdFavorite size={25} className="mr-4" /> Favorites
            </li>
            <li className="text-xl py-4 flex">
              <FaWallet size={25} className="mr-4" /> Wallet
            </li>
            <li className="text-xl py-4 flex">
              <MdHelp size={25} className="mr-4" /> Help
            </li>
            <li className="text-xl py-4 flex">
              <AiFillTag size={25} className="mr-4" /> Promotions
            </li>
            <li className="text-xl py-4 flex">
              <BsFillSaveFill size={25} className="mr-4" /> Best Ones
            </li>
            <li className="text-xl py-4 flex">
              <FaUserFriends size={25} className="mr-4" /> Invite Friends
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
