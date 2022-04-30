import React from "react";
import { useNavigate } from "react-router-dom";

const HomeProducts = () => {
  const navigate = useNavigate();
  const onUpdateClick = (id) => {
    navigate(`/inventory/${id}`);
  };
  return (
    <div className="container p-4 mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl inline-block relative">
          Recent Added
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-4">
        <div className="p-4 border rounded-lg">
          <img
            className=""
            src="https://demo.themesuite.com/automotive-wp/wp-content/uploads/2014/09/car1-lrg1.jpg"
          />
          <div className="mt-2">
            <div className="">
              <p className="font-semibold text-gray-900">Name</p>
              <p className="text-gray-900">
                Short Descripttion Short Descripttion Short Descripttion Short
                Descripttion Short Descripttion
              </p>
              <p className="text-gray-900">500.00</p>
              <p className="text-gray-900">50 pc</p>
            </div>
            <button
              onClick={() => onUpdateClick(5)}
              className="mt-4 text-white bg-gray-900 border-2 border-gray-900 rounded-md px-2 py-1"
            >
              Update
            </button>
          </div>
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={() => navigate("/all")}
          className="mt-4 text-white bg-gray-900 border-2 border-gray-900 rounded-md px-2 py-1"
        >
          Manage Inventories
        </button>
      </div>
    </div>
  );
};

export default HomeProducts;
