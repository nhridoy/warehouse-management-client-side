import React from "react";
import { useForm } from "react-hook-form";

const Inventory = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container mx-auto mt-20">
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 border rounded-lg">
          <img
            className=""
            src="https://demo.themesuite.com/automotive-wp/wp-content/uploads/2014/09/car1-lrg1.jpg"
          />
        </div>
        <div className="">
          <p className="font-semibold text-gray-900">ID: 654546</p>
          <p className="font-semibold text-gray-900">Name: sdfdf</p>
          <p className="font-semibold text-gray-900">Supplier Name: sdfdf</p>
          <p className="text-gray-900">
            Short Descripttion Short Descripttion Short Descripttion Short
            Descripttion Short Descripttion
          </p>
          <p className="text-gray-900">500.00</p>
          <p className="text-gray-900">50 pc</p>

          <button className="mt-4 text-white bg-gray-900 border-2 border-gray-900 rounded-md px-2 py-1">
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
    </div>
  );
};

export default Inventory;
