import React from "react";
import { Link } from "react-router-dom";

const BlogItem = () => {
  return (
    <div className="flex items-center gap-4 border p-4 rounded-md shadow my-4">
      <img
        className="h-22 w-56 object-cover rounded-full"
        src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
        alt="avatar"
      />
      <div className="">
        <>
          <h3 className="text-lg font-semibold">
            <Link to="5" className="hover:underline">
              Blog Title
            </Link>
          </h3>
          <p className="text-sm text-gray-600">Blog Author</p>
          <p className="text-sm text-gray-600">hridoyboss12@gmail.com</p>

          <p className="text-sm text-gray-600">02/02/2020</p>
        </>
        <p className="mt-2 text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          quibusdam.
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
