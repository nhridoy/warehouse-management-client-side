import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import BlogItem from "../../components/BlogItem/BlogItem";

const Blogs = () => {
  const navigate = useNavigate();
  return (
    <div className="container mx-auto mt-20">
      <div className="flex flex-col items-center justify-center my-2">
        <h1 className="text-4xl font-bold">Blogs</h1>
      </div>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mb-4"
        type="button"
        onClick={() => navigate("/create-blog")}
      >
        Add New
      </button>
      <>
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </>
      <Outlet />
    </div>
  );
};

export default Blogs;
