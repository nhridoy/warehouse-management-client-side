import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  return (
    <div className="backdrop-blur-lg bg-black/30 fixed w-full z-10 top-0">
      <div className=" container p-4 mx-auto  flex justify-between items-center">
        <h1 className="text-4xl text-white">MyVentory</h1>
        <div className="flex gap-4 items-center">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/blogs" className="text-white">
            Blogs
          </Link>
          {user ? (
            <>
              <Link to="/all" className="text-white">
                Manage Items
              </Link>
              <Link to="/addnew" className="text-white">
                Add Item
              </Link>
              <Link to="/myitems" className="text-white">
                My items
              </Link>

              <button onClick={() => signOut(auth)} className="text-white">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="text-white">
                Login
              </Link>
              <Link to="/register" className="text-white">
                Registration
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
