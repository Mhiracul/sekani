import React from "react";
//import truckImage from "../images/truck.png";

const YokaServices = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-6/12 px-4 py-8 ">
            <h2 className="text-4xl font-semibold">Our Services</h2>
            <p className="text-lg leading-relaxed mt-4 mb-6 text-gray-600">
              We offer a variety of logistics services to meet your needs.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap gap-8 mt-12 justify-center">
          <div className="w-full md:w-3/12 px-4 text-center py-14">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-full h-12 mb-5 shadow-lg ">
                  <img
                    src="https://media.istockphoto.com/id/1206265332/photo/motorcycle-delivery-box-isolated.jpg?b=1&s=170667a&w=0&k=20&c=suP4PL1nDtPHk4pkB2ijN94PdRH7rkgERO3puWfObSk="
                    alt="Truck"
                    className="w-full  object-cover"
                  />
                </div>
                <h6 className="text-xl font-semibold">Domestic Shipping</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  We provide domestic shipping services to any location within
                  the country.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/12 px-4 text-center py-14">
            <div className="relative flex flex-col  min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-full h-12 mb-5 shadow-lg ">
                  <img
                    src="https://media.istockphoto.com/id/1206265332/photo/motorcycle-delivery-box-isolated.jpg?b=1&s=170667a&w=0&k=20&c=suP4PL1nDtPHk4pkB2ijN94PdRH7rkgERO3puWfObSk="
                    alt="Truck"
                    className="w-full  object-cover"
                  />
                </div>
                <h6 className="text-xl font-semibold">
                  Food & Laundry Dispatch
                </h6>
                <p className="mt-2 mb-4 text-gray-600">
                  We provide Food & Laundry delivery services to any location
                  around the world.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-3/12 px-4 text-center py-14">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
              <div className="px-4 py-5 flex-auto">
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-full h-12 mb-5 shadow-lg  ">
                  <img
                    src="https://media.istockphoto.com/id/1206265332/photo/motorcycle-delivery-box-isolated.jpg?b=1&s=170667a&w=0&k=20&c=suP4PL1nDtPHk4pkB2ijN94PdRH7rkgERO3puWfObSk="
                    alt="Truck"
                    className="w-full  object-cover"
                  />
                </div>
                <h6 className="text-xl font-semibold">Waybill</h6>
                <p className="mt-2 mb-4 text-gray-600">
                  We offer waybill and waybill pickup solutions for your
                  logistics needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default YokaServices;
