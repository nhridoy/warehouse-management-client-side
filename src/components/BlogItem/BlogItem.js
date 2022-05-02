import React from "react";
import { Link } from "react-router-dom";

const BlogItem = ({ blog }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-4 border p-4 rounded-md shadow my-4">
      <img
        className="h-22 w-56 object-cover rounded-full"
        src={blog.image}
        alt={blog.title}
      />
      <div className="">
        <>
          <h3 className="text-lg font-semibold">
            <Link to={blog._id} className="hover:underline">
              {blog.title}
            </Link>
          </h3>
          <p className="text-sm text-gray-600">{blog.author}</p>
          <p className="text-sm text-gray-600">{blog.email}</p>

          <p className="text-sm text-gray-600">{blog.date}</p>
        </>
        <p className="mt-2 text-gray-700">
          {blog.content.substring(0, 100)}...
        </p>
      </div>
    </div>
  );
};

export default BlogItem;
