import React from "react";
import { useForm } from "react-hook-form";
import Social from "../../components/Social/Social";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="container mx-auto my-20">
      <h2 className="text-3xl text-center my-4">Login</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/2 mx-auto flex flex-col gap-4"
      >
        <input
          placeholder="Email"
          type="email"
          {...register("email", { required: true })}
          className="border border-gray-400 p-2 w-full"
        />
        {errors.email && (
          <span className="text-red-600">This field is required</span>
        )}
        <input
          placeholder="Password"
          type="password"
          {...register("password", { required: true })}
          className="border border-gray-400 p-2 w-full"
        />
        {errors.password && (
          <span className="text-red-600">This field is required</span>
        )}
        <button className="bg-blue-500 text-white p-2 rounded-lg">Login</button>
      </form>
      <Social />
    </div>
  );
};

export default Login;
