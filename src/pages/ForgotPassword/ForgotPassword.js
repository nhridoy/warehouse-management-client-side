import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import auth from "../../firebase.init";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [sendPasswordResetEmail, sending, error] =
    useSendPasswordResetEmail(auth);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    await sendPasswordResetEmail(data.email).then(() => {
      !error && toast.success("Email Sent");
    });
  };

  return (
    <div className="container mx-auto my-20">
      <h2 className="text-3xl text-center my-4">Forgot Password</h2>
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
        {error && (
          <span className="text-red-600">
            Email Addess Provided is not Assosiated with any Account
          </span>
        )}
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded-lg text-center flex justify-center items-center"
        >
          {sending ? (
            <AiOutlineLoading3Quarters className="animate-spin m-1" />
          ) : (
            "Send Reset Link"
          )}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
