import React from "react";
import { useForm } from "react-hook-form";
import Social from "../../components/Social/Social";
import auth from "../../firebase.init";
import {
  useAuthState,
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { Link, useLocation, useNavigate } from "react-router-dom";
import jwtToken from "../../utils/jwtToken";

const Registration = () => {
  const [user] = useAuthState(auth);
  const [createUserWithEmailAndPassword, SignUpUser, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
  const [updateProfile, updating] = useUpdateProfile(auth);
  const navigate = useNavigate();
  let location = useLocation();

  const [passwordError, setPasswordError] = React.useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
    jwtToken(user.email);
  }
  const onSubmit = async (data) => {
    setPasswordError(null);
    if (data.password !== data.confirmPassword) {
      setPasswordError("Password and Confirm Password must be same");
    } else {
      await createUserWithEmailAndPassword(data.email, data.password);

      await updateProfile({
        displayName: data.name,
        photoURL: "https://i.pravatar.cc/300",
      });
    }
  };

  return (
    <div className="container p-4 mx-auto my-40 md:my-20">
      <h2 className="text-3xl text-center my-4">Registration</h2>
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
        {SignUpUser && !error && (
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
