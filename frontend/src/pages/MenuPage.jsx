import React from "react";
import Navbar from "../components/Navbar";
import HeroSlider from "../LoungeComponent/HeroSlider";
import MenuFooter from "../LoungeComponent/MenuFooter";

const MenuPage = () => {
  return (
    <div className="">
      <Navbar />
      <HeroSlider />
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center my-8 py-8">
          <h1 className="text-3xl font-bold mb-4 text-[#FB320D]">
            MAIN DISHES
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-8">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">
                Grilled/Spicy chicken lap
              </h2>
              <p className="text-gray-700">₦4,384</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">Grilled/Spicy Turkey</h2>
              <p className="text-gray-700">₦4,384</p>
            </div>
            <div className="bg-[#FB320D] rounded-lg shadow-lg p-4">
              <h2 className="text-xl text-white font-bold mb-2">
                Grilled/Spicy chicken wing
              </h2>
              <p className="text-white">₦3,763</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">Creamy Crispy Wings</h2>
              <p className="text-gray-700 text-xs">
                Crispy chicken wings with sweet sour cream dip
              </p>
              <p className="text-gray-700">₦4,384</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">GIZZDODO</h2>
              <p className="text-gray-700 text-xs">
                Gizzard, plantain laced with vegetable sauce
              </p>
              <p className="text-gray-700">₦4,384</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">
                Asun/Goatmeat Peppersoup
              </h2>
              <p className="text-gray-700 text-xs">
                Available only on weekends
              </p>
              <p className="text-gray-700">₦3,763</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center my-8 py-8">
          <h1 className="text-3xl font-bold mb-4 text-[#FB320D] font-quicksand">
            SIDES
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-8">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">Special jollof rice.</h2>
              <p className="text-gray-700">₦1,935</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">Special fried rice.</h2>
              <p className="text-gray-700">₦1500</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">
                Snow white (white rice)
              </h2>
              <p className="text-gray-700">₦1,935</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">French Fries</h2>
              <p className="text-gray-700">₦1,935</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">Spaghetti Napolitano:</h2>
              <p className="text-gray-700">₦1,935</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">Spaghetti Stir fry</h2>
              <p className="text-gray-700">₦1,935</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">Plantain</h2>
              <p className="text-gray-700">₦1,935</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-8 py-8">
          <h1 className="text-3xl font-bold mb-4 text-[#FB320D]">
            CLASSIC COCKTAILS
          </h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-8">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">Mojito</h2>
              <p className="text-gray-700 text-xs">
                White rum/simple syrup/club syrup/fresh lime juice/mint leaves
              </p>
              <p className="text-gray-700">₦4,384</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">White Russian</h2>
              <p className="text-gray-700 text-xs">Vodka/Kahlua/cream</p>
              <p className="text-gray-700">₦4,384</p>
            </div>
            <div className="bg-[#03032B] rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2 text-white">
                Sex on the Beach
              </h2>
              <p className="text-white text-xs">
                Citrus vodka/peach schnapp/peach sirop/orange juice/cranberry
                juice/simple sirop/lime juice
              </p>
              <p className="text-white">₦4,384</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">
                The Nest Island Ice Tea
              </h2>
              <p className="text-gray-700 text-xs">
                Gin/white rum/silver tequila/vodka/triple sec/simple syrup/fresh
                lemon juice/coke
              </p>
              <p className="text-gray-700">₦4,384</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">Peter The Rock</h2>
              <p className="text-gray-700 text-xs">
                Gin/vodka/triple sec/egg white/fresh lemon juice/raspberry
                sirop/orgeat sirop
              </p>
              <p className="text-gray-700">₦4,384</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">JSL</h2>
              <p className="text-gray-700 text-xs">
                Jameson and lime and top with sprite
              </p>
              <p className="text-gray-700">₦4,384</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">Old Fashioned</h2>
              <p className="text-gray-700 text-xs">
                Bourbon whiskey/sugar/A.bitters/orange slice and twist(optional){" "}
              </p>
              <p className="text-gray-700 mt-2 text-sm">4,384</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center my-8 py-8">
          <h1 className="text-3xl font-bold mb-4 text-[#FB320D]">SMOOTHIES</h1>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 py-6">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">Dragon Green</h2>
              <p className="text-gray-700 text-xs">
                Pineapple/green minthe syrup/banana/mango/pawpaw/apple
              </p>
              <p className="text-gray-700 mt-2">₦4,384</p>
            </div>
            <div className="bg-[#03032B] rounded-lg shadow-lg p-4">
              <h2 className="text-xl text-white font-bold mb-2">
                Strawberry Peach
              </h2>
              <p className="text-white  text-xs">Apple/Banana/Strawberry</p>
              <p className="text-white mt-2">₦4,384</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">Mango Papaya</h2>
              <p className="text-gray-700 text-xs">Mango/pawpaw/pineapple</p>
              <p className="text-gray-700 mt-2">₦4,384</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">Acai Cherry</h2>
              <p className="text-gray-700 text-xs">
                Blueberry/pineapple/mango/banana
              </p>
              <p className="text-gray-700 mt-2">₦4,384</p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <h2 className="text-xl font-bold mb-2">Fruit Lush</h2>
              <p className="text-gray-700 text-xs">
                Fresh apple, pineapple, berries, orange, banana
              </p>
              <p className="text-gray-700 mt-2">₦4,384</p>
            </div>
          </div>
        </div>
      </div>
      <MenuFooter />
    </div>
  );
};
export default MenuPage;
