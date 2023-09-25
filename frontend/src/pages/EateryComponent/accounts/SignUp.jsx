import React, { useState } from "react";
import { BiHide, BiShow } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const SignUp = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword((preve) => !preve);
  };
  const handleConfrimPassword = () => {
    setConfirmPassword((preve) => !preve);
  };
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  console.log(data);
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };
  console.log("http://localhost:4000/signup");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { firstName, email, password, confirmPassword } = data;
    if (firstName && email && password && confirmPassword) {
      if (password === confirmPassword) {
        console.log(data);
        const fetchData = await fetch(`http://localhost:4000/signup`, {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(data),
        });

        const dataRes = await fetchData.json();
        console.log(dataRes);

        // alert(dataRes.message);
        toast(dataRes.message);
        if (dataRes.alert) {
          navigate("/login");
        }
      } else {
        alert("password and confirm password not equal");
      }
    } else {
      alert("Please Enter required fields");
    }
  };

  return (
    <div className="p-3 md:p-4 ">
      <div className="w-full max-w-sm bg-white  m-auto flex  flex-col p-4 mt-10">
        <h1 className="text-center text-2xl font-bold ">Sign Up</h1>
        <form
          action=""
          className="w-full py-3 flex flex-col"
          onSubmit={handleSubmit}
        >
          <label htmlFor="firstName">First Name</label>
          <input
            type={"text"}
            id="firstName"
            name="firstName"
            className="w-full bg-slate-200 px-2 py-1 rounded mt-1 mb-2 outline-none"
            value={data.firstName}
            onChange={handleOnChange}
          />
          <label htmlFor="lastName">Last Name</label>
          <input
            type={"text"}
            id="lastName"
            name="lastName"
            className="w-full bg-slate-200 px-2 py-1 rounded mt-1 mb-2 outline-none"
            value={data.lastName}
            onChange={handleOnChange}
          />
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
          <label htmlFor="confirmPassword">Confirm Password</label>
          <div className="flex px-1 py-1 bg-slate-200 rounded mt-1 mb-2">
            <input
              type={confirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              className="w-full bg-slate-200 border-none outline-none"
              value={data.confirmPassword}
              onChange={handleOnChange}
            />
            <span
              className="flex text-xl cursor-pointer"
              onClick={handleConfrimPassword}
            >
              {" "}
              {confirmPassword ? <BiShow /> : <BiHide />}
            </span>
          </div>
          <button
            type="submit"
            className=" w-full max-w-[150px] m-auto  bg-[#FB320D] text-[] cursor-pointer border-none text-white rounded-full mt-2"
          >
            Sign Up
          </button>
        </form>
        <p className="text-left text-sm mt-4">
          Already have account ?{" "}
          <Link to={"/login"} className="text-[#FB320D] hover:text-[#59c8f4]">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
