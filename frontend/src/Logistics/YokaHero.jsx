import React from "react";

const YokaHero = () => {
  return (
    <div className="relative  h-[70vh]">
      <div className="absolute inset-0">
        <img
          className="w-full h-full object-cover"
          src="https://media.istockphoto.com/id/1206265332/photo/motorcycle-delivery-box-isolated.jpg?b=1&s=170667a&w=0&k=20&c=suP4PL1nDtPHk4pkB2ijN94PdRH7rkgERO3puWfObSk="
          alt=""
        />
        <div
          className="absolute inset-0 bg-gray-600"
          style={{ mixBlendMode: "multiply" }}
        ></div>
      </div>
      <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
          Logistics Made Easy
        </h1>
        <p className="mt-6 max-w-3xl text-xl text-gray-300">
          We provide fast and reliable logistics services to businesses of all
          sizes. Let us handle your delivery needs so you can focus on growing
          your business.
        </p>
        <div className="mt-8">
          <a
            href="#services"
            className="mt-10 bg-[#2976be] border border-transparent rounded-md py-3 px-6 font-medium text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-base"
          >
            Learn more
          </a>
        </div>
      </div>
    </div>
  );
};

export default YokaHero;
