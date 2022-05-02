import React from "react";

const Blog = () => {
  return (
    <div className="container mx-auto mt-20">
      <div className="relative">
        <img
          className="h-72 w-full object-cover"
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black/50 ">
          <h2 className="text-white text-2xl font-bold absolute">Blog Title</h2>
        </div>
      </div>
      <p
        className="
        my-4
    first-letter:text-4xl
    first-letter:font-bold
    first-letter:text-blue-700
    first-letter:font-serif
  "
      >
        The only way to learn a new programming language is by writing programs
        in it.
      </p>
    </div>
  );
};

export default Blog;
