import React from "react";

// import images
import VR3 from "../assets/Sekani/VR3.jpeg";
import VR5 from "../assets/Sekani/VR5.jpeg";
import VR2 from "../assets/Sekani/VR2.jpeg";
import Headset2 from "../assets/img/headset-2.png";
import Headset3 from "../assets/img/headset-3.png";
import Headset4 from "../assets/img/headset-4.png";

const Headsets = () => {
  return (
    <section
      className="py-12 lg:py-24 bg-gradient-to-br from-gray-800 to-transparent  
    bg-opacity-20 rounded-md shadow-md card "
    >
      <div className="container mx-auto">
        {/* title */}
        <h2
          className="text-3xl font-bold mb-6"
          data-aos="fade-down"
          data-aos-offset="300"
        >
          Mixed Reality Headsets
        </h2>
        {/* grid */}
        <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-9">
          {/* item */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="500"
          >
            <img src={VR2} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">Metaverse</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                aspernatur commodi dolor laborum soluta omnis.
              </p>
            </div>
          </div>
          {/* item */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="600"
          >
            <img src={VR5} alt="" />
            <div className="absolute bottom-8 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">AIoT</h4>
              <p className="text-black">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                aspernatur commodi dolor laborum soluta omnis.
              </p>
            </div>
          </div>
          {/* item */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="800"
          >
            <img src={Headset3} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">HoloLens</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                aspernatur commodi dolor laborum soluta omnis.
              </p>
            </div>
          </div>
          {/* item */}
          <div
            className="relative"
            data-aos="zoom-in"
            data-aos-offset="300"
            data-aos-delay="900"
          >
            <img src={Headset4} alt="" />
            <div className="absolute bottom-0 bg-white/20 backdrop-blur-md max-w-[300px] min-h-[150px] p-6">
              <h4 className="font-semibold text-xl mb-2">TPCASTT</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
                aspernatur commodi dolor laborum soluta omnis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Headsets;
