import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const HomeProducts = () => {
  const [data, setData] = React.useState([]);
  const navigate = useNavigate();
  const onUpdateClick = (id) => {
    navigate(`/inventory/${id}`);
  };

  useEffect(() => {
    axios.get("http://localhost:5000/topitems").then((res) => {
      setData(res.data);
    });
  }, []);

  return (
    <div className="container p-4 mx-auto">
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-2xl inline-block relative">
          Recent Added
        </h2>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-4">
        {data?.map((item) => (
          <div className="p-4 border rounded-lg shadow-md">
            <img className="w-full h-80 object-cover" src={item?.image} />
            <div className="mt-2">
              <div className="">
                <p className="font-semibold text-gray-900">{item?.name}</p>
                <p className="text-gray-900">
                  {item?.description.substring(0, 50)}...
                </p>
                <p className="text-gray-900">{item?.price}</p>
                <p className="text-gray-900">{item?.quantity} pc</p>
              </div>
              <button
                onClick={() => onUpdateClick(item?._id)}
                className="mt-4 text-white bg-gray-900 border-2 border-gray-900 rounded-md px-2 py-1"
              >
                Update
              </button>
            </div>
          </div>
        ))}
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
