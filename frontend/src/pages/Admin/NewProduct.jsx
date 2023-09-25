import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { BsCloudUpload } from "react-icons/bs";
import Navbar from "../../components/Navbar";
//import { ImagetoBase64 } from "./ImagetoBase64";

const Newproduct = () => {
  const [data, setData] = useState({
    name: "",
    category: "",
    image: "",
    price: "",
    description: "",
  });
  console.log(data);

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setData((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const uploadImage = async (e) => {
    const data = await ImagetoBase64(e.target.files[0]);

    // console.log(data)

    setData((preve) => {
      return {
        ...preve,
        image: data,
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, image, category, price, description } = data;

    if (name && image && category && price && description) {
      const fetchData = await fetch(`http://localhost:4000/uploadProduct`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const fetchRes = await fetchData.json();

      console.log(fetchRes);
      toast(fetchRes.message);

      setData(() => {
        return {
          name: "",
          category: "",
          image: "",
          price: "",
          description: "",
        };
      });
    } else {
      toast("Enter required Fields");
    }
  };
  return (
    <div className="p-4">
      <Navbar />
      <div className="py-32">
        <form
          className="m-auto w-full max-w-md  shadow flex flex-col p-3 bg-white "
          onSubmit={handleSubmit}
        >
          <label htmlFor="name">Name</label>
          <input
            type={"text"}
            name="name"
            className="bg-slate-200 p-1 my-1"
            onChange={handleOnChange}
            value={data.name}
          />

          <label htmlFor="category">Category</label>
          <select
            className="bg-slate-200 p-1 my-1 outline-none"
            id="category"
            name="category"
            onChange={handleOnChange}
            value={data.category}
          >
            <option value={"other"}>select category</option>
            <option value={"fruits"}>Fruits</option>
            <option value={"vegetable"}>Vegetable</option>
            <option value={"icream"}>Icream</option>
            <option value={"dosa"}>Dosa</option>
            <option value={"pizza"}>Pizza</option>
            <option value={"rice"}>rice</option>
            <option value={"cake"}>Cake</option>
            <option value={"burger"}>Burger</option>
            <option value={"panner"}>Pizza Bread</option>
            <option value={"sandwich"}>Sandwich</option>
          </select>

          <label htmlFor="image">
            Image
            <div className="h-40 w-full  bg-slate-200  rounded flex items-center justify-center cursor-pointer">
              {data.image ? (
                <img
                  src={data.image}
                  className="h-full w-full object-cover bg-center"
                />
              ) : (
                <span className="text-5xl">
                  <BsCloudUpload />
                </span>
              )}

              <input
                type={"file"}
                accept="image/*"
                id="image"
                onChange={uploadImage}
                className="hidden"
              />
            </div>
          </label>

          <label htmlFor="price" className="my-1">
            Price
          </label>
          <input
            type={"text"}
            className="bg-slate-200 p-1 my-1"
            name="price"
            onChange={handleOnChange}
            value={data.price}
          />

          <label htmlFor="description">Description</label>
          <textarea
            rows={2}
            value={data.description}
            className="bg-slate-200 p-1 my-1 resize-none"
            name="description"
            onChange={handleOnChange}
          ></textarea>

          <button
            type="submit"
            className="bg-[#FB320D] hover:bg-red-600 text-white text-lg font-medium my-2 drop-shadow border-none outline-none"
          >
            Save
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newproduct;
