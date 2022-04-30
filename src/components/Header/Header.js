import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="backdrop-blur-sm bg-black/30 fixed w-full z-10 top-0">
      <div className=" container p-4 mx-auto  flex justify-between items-center">
        <h1 className="text-4xl text-white">MyVentory</h1>
        <div className="flex gap-4 items-center">
          <Link to="/" className="text-white">
            Home
          </Link>
          <Link to="/blogs" className="text-white">
            Blogs
          </Link>
          <Link to="/login" className="text-white">
            Login
          </Link>
          <Link to="/register" className="text-white">
            Registration
          </Link>
          <Link to="/all" className="text-white">
            Manage Items
          </Link>
          <Link to="/addnew" className="text-white">
            Add Item
          </Link>
          <Link to="/myitems" className="text-white">
            My items
          </Link>

          <button className="text-white">Logout</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
