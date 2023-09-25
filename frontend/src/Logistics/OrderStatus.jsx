import React, { useRef, useState } from "react";
import axios from "axios";
//import { toast } from "react-hot-toast";

const OrderStatus = () => {
  const [trackingId, setTrackingId] = useState("");
  const [order, setOrder] = useState(null);
  const mapRef = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get(
        `http://localhost:4000/order/${trackingId}`
      );
      setOrder(response.data);
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
  const handleMapLoad = () => {
    if (order && order.riderLocation) {
      const script = document.createElement("script");
      script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyAsD1Ig92CbAclz3yzcIBl7mtPSipve1f4`;
      script.onload = () => {
        const map = new google.maps.Map(mapRef.current, {
          center: { lat: 0, lng: 0 },
          zoom: 10,
        });

        const riderLocation = new google.maps.LatLng(
          order.riderLocation.lat,
          order.riderLocation.lng
        );

        const marker = new google.maps.Marker({
          position: riderLocation,
          map: map,
          title: "Rider's Location",
        });
      };
      document.head.appendChild(script);
    }
  };

  return (
    <div className="bg-[#2976be] h-[80vh]">
      <div className="flex flex-wrap gap-0 items-center justify-center">
        <div className="w-full md:w-1/2 px-4  shadow-md ">
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto py-8">
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
              type="submit"
              className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
            >
              Check Status
            </button>
          </form>
        </div>
        {order && (
          <div className="w-full md:w-1/2 px-4">
            <div className="max-w-sm mx-auto py-8">
              <h1 className="text-2xl font-bold text-white text-center py-6">
                Order Status
              </h1>
              <p className="text-sm text-gray-200 py-2">Name: {order.name}</p>
              <p className="text-sm text-gray-200 py-2">
                Address: {order.address}
              </p>
              <p className="text-sm text-gray-200 py-2">
                Message: {order.message}
              </p>
              <p className="text-sm text-gray-200 py-2">
                Contact: {order.contact}
              </p>
              <p className="text-sm text-gray-200 py-2">
                Status: {order.status}
              </p>
              <div className="flex justify-center">
                <button
                  onClick={() => handleStatusUpdate(trackingId, "shipped")}
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mr-2"
                >
                  Mark as Shipped
                </button>
                <button
                  onClick={() => handleStatusUpdate(trackingId, "delivered")}
                  className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
                >
                  Mark as Delivered
                </button>
                <div ref={mapRef} style={{ height: "500px" }} />
                <button onClick={handleMapLoad}>Load Map</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderStatus;
