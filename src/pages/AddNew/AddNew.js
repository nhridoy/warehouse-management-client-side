import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import interceptors from "../../utils/interceptors";

const AddNew = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const onSubmit = (data) => {
    interceptors
      .post("/items", {
        name: data.name,
        description: data.description,
        price: parseFloat(data.price).toFixed(2),
        quantity: parseInt(data.quantity),
        supplier: data.supplier,
        image: data.image,
      })
      .then((res) => {
        if (res.status === 200) {
          reset();
          toast.success("Item added successfully");
        }
      });
  };
  return (
    <div className="container p-4 mx-auto my-40 md:my-20">
      <h2 className="text-xl text-center my-4">Add New Item</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-2/3 md:w-1/2 mx-auto flex flex-col gap-4"
      >
        <input
          placeholder="Name"
          {...register("name", { required: true })}
          className="border border-gray-400 p-2 w-full"
        />
        {errors.name && (
          <span className="text-red-600">This field is required</span>
        )}
        <input
          type="url"
          placeholder="Image URL"
          {...register("image", { required: true })}
          className="border border-gray-400 p-2 w-full"
        />
        {errors.image && (
          <span className="text-red-600">This field is required</span>
        )}
        <input
          type="number"
          placeholder="Price"
          min="1"
          {...register("price", { required: true })}
          className="border border-gray-400 p-2 w-full"
        />
        {errors.price && (
          <span className="text-red-600">This field is required</span>
        )}

        <input
          type="number"
          placeholder="Quantity"
          min="1"
          {...register("quantity", { required: true })}
          className="border border-gray-400 p-2 w-full"
        />
        {errors.quantity && (
          <span className="text-red-600">This field is required</span>
        )}

        <input
          type="text"
          placeholder="Supplier"
          {...register("supplier", { required: true })}
          className="border border-gray-400 p-2 w-full"
        />
        {errors.supplier && (
          <span className="text-red-600">This field is required</span>
        )}
        <textarea
          placeholder="Description"
          min="1"
          {...register("description", { required: true })}
          className="border border-gray-400 p-2 w-full"
        />
        {errors.description && (
          <span className="text-red-600">This field is required</span>
        )}

        <div className="text-center">
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-5 rounded-lg"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNew;
