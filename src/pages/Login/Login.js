import React from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import Social from "../../components/Social/Social";
import auth from "../../firebase.init";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  user && navigate("/");
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

        {error && (
          <span className="text-red-600">Email or Password Does not Match</span>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg text-center flex justify-center items-center"
        >
          {loading ? (
            <AiOutlineLoading3Quarters className="animate-spin m-1" />
          ) : (
            "Login"
          )}
        </button>
      </form>
      <p className="text-center mt-4">
        Forgot Password?{" "}
        <Link to="/reset-password" className="text-blue-500">
          Reset Password
        </Link>
      </p>
      <p className="text-center mt-4">
        Don't have an account?{" "}
        <Link to="/register">
          <span className="text-blue-500">Register</span>
        </Link>
      </p>
      <Social />
    </div>
  );
};

export default Login;
