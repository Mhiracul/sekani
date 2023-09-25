import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

function Feedback() {
  return (
    <>
      <div
        className="container-fluid flex justify-center items-center bg-cover bg-gradient bg-gradient-to-br from-gray-300 to-transparent  
        bg-opacity-20 rounded-md shadow-md card bg-no-repeat bg-center "
        style={{
          height: "100vh",
        }}
      >
        <div
          className=" mx-auto me-auto pt-5 mt-3  bg-white  p-5  w-1/2 
          
        "
        >
          <h4
            className="text-center font-bold"
            style={{ color: "#2cbeef", fontFamily: "Segoe UI Symbol" }}
          >
            Feedback <i className="fa-solid fa-paper-plane"></i>
          </h4>
          <p
            className="text-center mb-0 font-semibold"
            style={{
              color: "#2cbeef",
              fontFamily: "Segoe UI Symbol",
              fontSize: "14px",
            }}
          >
            Feel free to drop us your feedback
          </p>
          <form action="" className="mt-5 ">
            <div className="mb-4 ">
              <label htmlFor="">Full Name</label>
              <input
                id="standard-basic1"
                type="text"
                className="col-sm-12 w-full bg-gradient bg-gradient-to-br from-gray-300 to-transparent  
                bg-opacity-20 rounded-md shadow-md text-black outline-none"
                label="Full Name"
                variant="standard"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="">Email Address</label>
              <input
                id="standard-basic2"
                type="email"
                className="col-sm-12 w-full bg-gradient bg-gradient-to-br from-gray-300 to-transparent  
                bg-opacity-20 rounded-md shadow-md text-black outline-none"
                label="Email Address"
                variant="standard"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="">Subject</label>
              <input
                id="standard-basic3"
                type="text"
                className="col-sm-12 w-full bg-gradient bg-gradient-to-br from-gray-300 to-transparent  
                bg-opacity-20 rounded-md shadow-md text-black outline-none"
                label="Subject"
                variant="standard"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="">Message</label>
              <input
                id="standard-basic4"
                className="col-sm-12 w-full bg-gradient bg-gradient-to-br from-gray-300 to-transparent  
                bg-opacity-20 rounded-md shadow-md text-black outline-none"
                label="Message"
                variant="standard"
                required
              />
            </div>
            <button
              variant="contained"
              type="submit"
              className="w-full mt-3 p-3 text-white flex items-center justify-center"
              style={{ backgroundColor: "#2cbeef" }}
            >
              Send Message &nbsp;
              <i className="">
                <FaTelegramPlane />{" "}
              </i>
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Feedback;
