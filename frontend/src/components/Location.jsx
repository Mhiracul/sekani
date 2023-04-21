import React from "react";
import { cocktail } from "../assets/Sekani";

const Location = () => {
  return (
    <div className="">
      <div>
        <h1 className="py-10 text-center">LOCATE US VIA THE MAP</h1>
        <div className="h-screen mx-auto">
          <div className="mx-auto container h-full ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3972.2738655507346!2d6.998361975274551!3d5.375146194603741!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10425df2c645a82d%3A0x284a1999ec8e450!2sSekani%20Mall!5e0!3m2!1sen!2sng!4v1681517773718!5m2!1sen!2sng"
              width="100%"
              height="80%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
