import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const OrderForm = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [message, setMessage] = useState("");
  const [contact, setContact] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/order", {
        name,
        address,
        message,
        contact,
      });
      toast(response.data.message);
      // code to handle successful order submission
    } catch (error) {
      console.error(error);
      // code to handle error
    }
  };

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
            <div className="mb-6">
              <label
                className="block text-white font-bold mb-2"
                htmlFor="message"
              >
                Phone Number:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="phone number"
                type="text"
                placeholder="Enter your Phone Number"
                value={contact}
                onChange={(event) => setContact(event.target.value)}
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-white font-bold mb-2"
                htmlFor="message"
              >
                Your Order:
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                type="text"
                placeholder="Enter your order"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Submit Order
              </button>
            </div>
            <p className="text-black text-xs mt-4 bg-gray-200 p-4">
              No Response in 3mins? Call: 09112180828, 07039231439
            </p>
          </form>
        </div>
        <div className="w-full md:w-1/2 px-4 py-8">
          <img
            src="https://images.unsplash.com/photo-1525160354320-d8e92641c563?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8M2QlMjBsb2dpc3RpY3MlMjBtb3RvcmN5Y2xlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=800&q=60"
            alt="image description"
            className="w-full h-[60vh] object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OrderForm;
