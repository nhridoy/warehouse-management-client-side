import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const Social = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  return (
    <div className="flex justify-center mt-10">
      <button
        onClick={() => signInWithGoogle()}
        className="bg-blue-500 text-white p-2 rounded-lg flex items-center gap-4"
      >
        {loading ? (
          <AiOutlineLoading3Quarters className="animate-spin m-1" />
        ) : (
          <>
            <img
              src="https://img.icons8.com/ios-glyphs/30/000000/google-logo.png"
              alt="Google Sign In"
            />
            Sign in with Google
          </>
        )}
      </button>
    </div>
  );
};

export default Social;
