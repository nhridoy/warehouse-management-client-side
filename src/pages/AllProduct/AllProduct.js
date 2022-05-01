import axios from "axios";
import React, { useEffect } from "react";

import DataTable from "react-data-table-component";
import { FcFullTrash } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const AllProduct = () => {
  const [data, setData] = React.useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/items", {
        headers: {
          authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData(res.data);
      });
  }, []);

  const columns = [
    {
      name: "ID",
      selector: (row) => row._id,
      sortable: true,
    },
    {
      name: "Name",
      selector: (row) => (
        <Link className="text-blue-600 underline" to={`/inventory/${row._id}`}>
          {row.name}
        </Link>
      ),
      sortable: true,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Action",
      cell: () => (
        <button>
          <FcFullTrash className="text-xl" />
        </button>
      ),
      // ignoreRowClick: true,
      // allowOverflow: true,
      button: true,
      sortable: false,
    },
  ];

  const navigate = useNavigate();
  return (
    <div className="container mx-auto mt-20">
      <button
        onClick={() => navigate("/addnew")}
        className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mb-4"
      >
        Add New Item
      </button>
      <DataTable columns={columns} data={data} pagination highlightOnHover />
    </div>
  );
};

export default AllProduct;
