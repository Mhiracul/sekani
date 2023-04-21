import React from "react";
import Header from "./Header";
import OrderForm from "./OrderForm";
import YokaFooter from "./YokaFooter";
import YokaHero from "./YokaHero";
import YokaServices from "./YokaServices";

const Yoka = () => {
  return (
    <div className="bg-white">
      <Header />
      <YokaHero />
      <YokaServices />
      <OrderForm />
      <YokaFooter />
    </div>
  );
};

export default Yoka;
