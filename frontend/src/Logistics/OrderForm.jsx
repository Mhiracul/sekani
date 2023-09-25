import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
const OrderForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");
  const [trackingId, setTrackingId] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/order", {
        name,
        address,
        message,
        contact,
        trackingId,
      });
      toast(response.data.message);
      // code to handle successful order submission
    } catch (error) {
      console.error(error);
      // code to handle error
    }
  };

  const handleStatusUpdate = async (trackingId, status) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/order/${trackingId}`,
        { status }
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // Generate random tracking ID
  const generateTrackingId = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyz";
    let result = "";
    for (let i = 0; i < 6; i++) {
      result += chars[Math.floor(Math.random() * chars.length)];
    }
    return result;
  };

  // Set tracking ID on component mount
  useEffect(() => {
    setTrackingId(generateTrackingId());
  }, []);

  return (
    <div className="bg-[#2976be] h-[80vh]">
      <div className="flex flex-wrap gap-0 items-center justify-center">
        <div className="w-full md:w-1/2 px-4  shadow-md ">
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto py-8">
            <div className="mb-4">
              <h1 className="text-2xl font-bold text-white text-center py-6">
                Input Your Order
              </h1>
              <p className="text-sm text-gray-200 py-2">
                Kindly input your orders below at the order input
              </p>
              <label className="block text-white font-bold mb-2" htmlFor="name">
                Name:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white font-bold mb-2"
                htmlFor="address"
              >
                Address:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="address"
                type="text"
                placeholder="Enter your address"
                value={address}
                onChange={(event) => setAddress(event.target.value)}
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-white font-bold mb-2"
                htmlFor="message"
              >
                Message:
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Enter your message"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              ></textarea>
            </div>
            <div className="mb-4">
              <label
                className="block text-white font-bold mb-2"
                htmlFor="contact"
              >
                Contact:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="contact"
                type="text"
                placeholder="Enter your contact"
                value={contact}
                onChange={(event) => setContact(event.target.value)}
              />
            </div>
            <Link to="/orderstatus">
              <button
                type="submit"
                className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
              >
                Submit
              </button>
            </Link>
          </form>
        </div>
        <div className="w-full md:w-1/2 px-4">
          <div className="max-w-sm mx-auto py-8">
            <h1 className="text-2xl font-bold text-white text-center py-6">
              Track Your Order
            </h1>
            <div className="mb-4">
              <label
                className="block text-white font-bold mb-2"
                htmlFor="trackingId"
              >
                Enter your tracking ID:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="trackingId"
                type="text"
                placeholder="Enter your tracking ID"
                value={trackingId}
                onChange={(event) => setTrackingId(event.target.value)}
              />
            </div>
            <button
              onClick={() => handleStatusUpdate(trackingId, "shipped")}
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Shipped
            </button>
            <button
              onClick={() => handleStatusUpdate(trackingId, "delivered")}
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-4"
            >
              Delivered
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
