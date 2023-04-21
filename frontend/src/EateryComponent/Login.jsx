import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { loginRedux } from "../redux/userSlice";
const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const userData = useSelector((state) => state);
  console.log(userData.user);

  const dispatch = useDispatch();

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  console.log("http://localhost:4000/login");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = data;
    if (email && password) {
      const fetchData = await fetch(`http://localhost:4000/login`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const dataRes = await fetchData.json();
      console.log(dataRes);

      toast(dataRes.message);

      if (dataRes.alert) {
        dispatch(loginRedux(dataRes));
        setTimeout(() => {
          navigate("/eatery");
        }, 1000);
      }

      console.log(userData);
    } else {
      alert("Please Enter required fields");
    }
  };

  return (
    <div className="p-3 md:p-4">
      <Navbar />

      <div className="w-full max-w-sm bg-white  m-auto flex  flex-col p-4 mt-10">
        <h1 className="text-center text-2xl font-bold ">Login</h1>
        <form
          action=""
          className="w-full py-3 flex flex-col"
          onSubmit={handleSubmit}
        >
          <label htmlFor="email">Email</label>
          <input
            type={"email"}
            id="email"
            name="email"
            className="w-full bg-slate-200 px-2 py-1 rounded mt-1 mb-2 outline-none"
            value={data.email}
            onChange={handleOnChange}
          />
          <label htmlFor="password">Password</label>
          <div className="flex px-1 py-1 bg-slate-200 rounded mt-1 mb-2">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              className="w-full bg-slate-200 border-none outline-none"
              value={data.password}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleShowPassword}
            >
              {" "}
              {showPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>

          <button
            type="submit"
            className=" w-full max-w-[150px] m-auto  bg-[#FB320D] text-[] cursor-pointer border-none text-white rounded-full mt-2"
          >
            Login
          </button>
        </form>
        <p className="text-left text-sm mt-4">
          Dont have account ?{" "}
          <Link to={"/signup"} className="text-[#FB320D] hover:text-[#59c8f4]">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
