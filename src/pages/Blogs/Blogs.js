import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import BlogItem from "../../components/BlogItem/BlogItem";
import interceptors from "../../utils/interceptors";

const Blogs = () => {
  const navigate = useNavigate();
  const [data, setData] = React.useState([]);

  useEffect(() => {
    interceptors.get("/blogs").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="container p-4 mx-auto mt-40 md:mt-20">
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
        {data.map((blog) => (
          <BlogItem key={blog._id} blog={blog} />
        ))}
      </>
    </div>
  );
};

export default Blogs;
