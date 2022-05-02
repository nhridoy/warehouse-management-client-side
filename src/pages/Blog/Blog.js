import axios from "axios";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Blog = () => {
  const { id } = useParams();
  const [blogData, setBlogData] = React.useState([]);
  useEffect(() => {
    axios.get(`http://localhost:5000/blogs/${id}`).then((res) => {
      setBlogData(res.data);
    });
  }, []);

  return (
    <div className="container p-4 mx-auto mt-40 md:mt-20">
      <div className="relative">
        <img
          className="h-72 w-full object-cover"
          src={blogData.image}
          alt={blogData.title}
        />
        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full bg-black/50 ">
          <h2 className="text-white text-2xl font-bold absolute">
            {blogData.title}
          </h2>
        </div>
      </div>
      <span className="text-lg font-bold">{blogData.author}</span> |{" "}
      <span className="text-sm text-gray-600">{blogData.email}</span> |{" "}
      <span className="text-sm text-gray-600">{blogData.date}</span>
      <p
        className="
        my-4
    first-letter:text-4xl
    first-letter:font-bold
    first-letter:text-blue-700
    first-letter:font-serif
  "
      >
        {blogData.content}
      </p>
    </div>
  );
};

export default Blog;
