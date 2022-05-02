import axios from "axios";
import React, { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const Inventory = () => {
  const { id } = useParams();
  const [item, setItem] = React.useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    handleQuantity(parseInt(data.number));
    reset();
  };

  useEffect(() => {
    axios
      .get(`http://localhost:5000/items/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setItem(res.data);
      });
  }, []);

  const handleQuantity = (number) => {
    axios.patch(
      `http://localhost:5000/items/${id}`,
      {
        quantity: item.quantity + number,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    const newItem = { ...item, quantity: item.quantity + number };
    setItem(newItem);
  };

  return (
    <div className="container p-4 mx-auto mt-40 md:mt-20">
      <div className="grid grid-cols-2 items-center gap-4">
        <div className="p-4 border rounded-lg">
          <img className=" h-96 w-full object-cover" src={item.image} />
        </div>
        <div className="">
          <p className="font-semibold text-gray-900">ID: {item._id}</p>
          <p className="font-semibold text-gray-900">Name: {item.name}</p>
          <p className="font-semibold text-gray-900">
            Supplier Name: {item.supplier}
          </p>
          <p className="text-gray-900">Description: {item.description}</p>
          <p className="text-gray-900">{item.price}</p>
          <p className="text-gray-900">{item.quantity} pc</p>

          <button
            onClick={() => handleQuantity(-1)}
            className="mt-4 text-white bg-gray-900 border-2 border-gray-900 rounded-md px-2 py-1"
          >
            Delivered
          </button>
        </div>
      </div>
      <div className="">
        <h2 className="font-bold text-2xl inline-block relative">
          Restock the item
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            className="border border-gray-900 rounded-lg p-2"
            type="number"
            placeholder="Number"
            min="1"
            {...register("number", { required: true, min: 1 })}
          />
          {errors.number && <p className="text-red-500">This is required</p>}

          <br />
          <button
            className="mt-4 text-white bg-gray-900 border-2 border-gray-900 rounded-md px-2 py-1"
            type="submit"
          >
            Add
          </button>
        </form>
      </div>
      <div className="text-center my-4">
        <button
          onClick={() => navigate("/all")}
          className="mt-4 text-white bg-gray-900 border-2 border-gray-900 rounded-md px-2 py-1"
        >
          Manage Inventories
        </button>
      </div>
    </div>
  );
};

export default Inventory;
