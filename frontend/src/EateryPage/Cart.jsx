import React from "react";
import { useSelector } from "react-redux";
import CartProduct from "../EateryComponent/CartProduct";
import emptyCartImage from "../assets/Sekani/empty.gif";
import Navbar from "../EateryComponent/Navbar";
import { TbCurrencyNaira } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
const Cart = () => {
  const productCartItem = useSelector((state) => state.product.cartItem);
  const isAuthenticated = useSelector((state) => state.user.email !== "");

  console.log(productCartItem);

  const totalPrice = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.total),
    0
  );
  const totalQty = productCartItem.reduce(
    (acc, curr) => acc + parseInt(curr.qty),
    0
  );
  const navigate = useNavigate();
  const handleCheckout = () => {
    if (isAuthenticated) {
      navigate("/payment");
    } else {
      navigate("/login", { state: { from: "checkout" } });
    }
  };

  return (
    <>
      <div className="">
        <Navbar />
        <div className="p-2 md:p-4">
          <h2 className="text-lg md:text-2xl font-bold text-slate-600">
            Your Cart Items
          </h2>

          {productCartItem[0] ? (
            <div className="my-4 flex gap-3">
              {/* display cart items  */}
              <div className="w-full max-w-3xl ">
                {productCartItem.map((el) => {
                  return (
                    <CartProduct
                      key={el._id}
                      id={el._id}
                      name={el.name}
                      image={el.image}
                      category={el.category}
                      qty={el.qty}
                      total={el.total}
                      price={el.price}
                    />
                  );
                })}
              </div>

              {/* total cart item  */}
              <div className="w-full max-w-md  ml-auto">
                <h2 className="bg-[#03032B] text-white p-2 text-lg">Summary</h2>
                <div className="flex w-full py-2 text-lg border-b">
                  <p>Total Qty :</p>
                  <p className="ml-auto w-32 font-bold">{totalQty}</p>
                </div>
                <div className="flex w-full py-2 text-lg border-b">
                  <p>Total Price</p>
                  <p className="ml-auto w-32 font-bold flex">
                    <span className="text-red-500">
                      <TbCurrencyNaira size={25} color="#FB320D" />
                    </span>{" "}
                    {totalPrice}
                  </p>
                </div>
                <button
                  className="bg-[#FB320D] w-full text-lg font-bold py-2 text-white"
                  onClick={handleCheckout}
                >
                  {isAuthenticated ? "Checkout" : "Login to Checkout"}
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="flex w-full justify-center items-center flex-col">
                <img src={emptyCartImage} className="w-full max-w-sm" />
                <p className="text-slate-500 text-3xl font-bold">Empty Cart</p>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Cart;
