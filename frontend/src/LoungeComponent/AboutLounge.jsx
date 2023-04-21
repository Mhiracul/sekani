import React from "react";
import loungepic2 from "../assets/Sekani/loungepic2.jpg";

const AboutLounge = () => {
  return (
    <section className=" py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4 shadow-md">
          <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
            <h2 className="text-3xl font-bold mb-4 text-[#FB320D]">
              Our Story
            </h2>
            <p className="mb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis et
              sapien ac velit sodales fringilla sed eget magna. Suspendisse
              potenti. Fusce scelerisque lectus elit, sed consequat elit aliquam
              eget. Vestibulum eu bibendum ipsum, a commodo nulla. Quisque
              condimentum odio sed massa maximus, in faucibus velit suscipit.
              Integer lacinia consequat enim, sed convallis enim venenatis ac.
              Donec eu imperdiet nunc, eget molestie eros. Ut gravida consequat
              massa eu ullamcorper.
            </p>
            <p className="mb-8">
              Etiam vel urna in felis ultricies auctor sed vel lacus. Nulla id
              risus vel tortor faucibus convallis. Nulla in sem et nunc
              vestibulum ultrices. Duis imperdiet rutrum nibh, at lacinia ex
              tempus vel. Aliquam id ante in ante euismod efficitur vel nec
              elit. Praesent interdum, enim ac suscipit sodales, libero eros
              porttitor elit, vel consectetur lectus dolor eu magna.
            </p>
          </div>
          <div className="w-full lg:w-1/2 px-4 h-1/2">
            <img
              src={loungepic2}
              alt="About Us"
              className="rounded-lg shadow-lg h-[50vh] w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLounge;
