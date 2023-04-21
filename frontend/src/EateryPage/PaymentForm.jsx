import React from "react";

const PaymentForm = ({ total }) => {
  return (
    <div className="w-full">
      <div className="flex items-center justify-center  py-20 ">
        <div className="bg-white py-10 px-10">
          <h1 className="text-center font-bold text-2xl ">PAYMENT</h1>
          <div className="">
            <div className="flex flex-col items-center justify-center">
              <p>Account Number : </p>
              <p>Bank: Moniepoint Eatery</p>
              <p>Amount: {total}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
