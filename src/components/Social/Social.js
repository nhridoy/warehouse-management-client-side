import React from "react";

const Social = () => {
  return (
    <div className="flex justify-center mt-10">
      <button className="bg-blue-500 text-white p-2 rounded-lg flex items-center gap-4">
        <img
          src="https://img.icons8.com/ios-glyphs/30/000000/google-logo.png"
          alt="Google Sign In"
        />
        Sign in with Google
      </button>
    </div>
  );
};

export default Social;
