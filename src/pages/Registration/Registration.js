import React from "react";
import { useForm } from "react-hook-form";
import Social from "../../components/Social/Social";
import auth from "../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link } from "react-router-dom";

const Registration = () => {
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);

  const [passwordError, setPasswordError] = React.useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setPasswordError(null);
    data.password !== data.confirmPassword
      ? setPasswordError("Password and Confirm Password must be same")
      : await createUserWithEmailAndPassword(data.email, data.password);
    if (user && !error) {
      await updateProfile({
        displayName: data.name,
        photoURL: "https://i.pravatar.cc/300",
      });
    }
  };

  return (
    <div className="container mx-auto my-20">
      <h2 className="text-xl text-center my-4">Registration</h2>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-1/2 mx-auto flex flex-col gap-4"
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

        <input
          placeholder="Confirm Password"
          type="password"
          {...register("confirmPassword", { required: true })}
          className="border border-gray-400 p-2 w-full"
        />
        {errors.confirmPassword && (
          <span className="text-red-600">This field is required</span>
        )}
        {error && <span className="text-red-600">{error.message}</span>}
        {passwordError && <span className="text-red-600">{passwordError}</span>}
        {user && !error && (
          <span className="text-green-600">
            User created successfully. Please verify your email.
          </span>
        )}

        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg text-center flex justify-center items-center"
        >
          {loading || updating ? (
            <AiOutlineLoading3Quarters className="animate-spin m-1" />
          ) : (
            "Register"
          )}
        </button>
      </form>

      <p className="text-center mt-4">
        Already have an account?{" "}
        <Link to="/login">
          <span className="text-blue-500">Login</span>
        </Link>
      </p>

      <Social />
    </div>
  );
};

export default Registration;
