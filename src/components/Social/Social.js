import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useLocation, useNavigate } from "react-router-dom";
import jwtToken from "../../utils/jwtToken";

const Social = () => {
  const [user] = useAuthState(auth);
  const [signInWithGoogle, newUser, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
    jwtToken(user.email);
  }

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
