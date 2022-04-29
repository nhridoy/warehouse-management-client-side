import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black opacity-80 fixed w-full z-10 top-0">
      <div className=" container p-4 mx-auto  flex justify-between items-center">
        <h1 className="text-4xl text-white">MyVentory</h1>
        <div className="flex gap-4 items-center">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/about" className="text-white">
            About
          </Link>
          <Link to="/contact" className="text-white">
            Contact
          </Link>
          <Link to="/login" className="text-white">
            Login
          </Link>
          <Link to="/register" className="text-white">
            Registration
          </Link>
          <button className="text-white">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
