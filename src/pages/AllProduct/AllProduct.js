import React, { useEffect } from "react";

import DataTable from "react-data-table-component";
import { FcFullTrash } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import interceptors from "../../utils/interceptors";

const AllProduct = () => {
  const [data, setData] = React.useState([]);

  const path = useLocation().pathname;

  useEffect(() => {
    if (path === "/all") {
      interceptors.get("/items").then((res) => {
        setData(res.data);
      });
    } else if (path === "/myitems") {
      interceptors.get("/myitems").then((res) => {
        setData(res.data);
      });
    }
  }, [path]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.value) {
        interceptors.delete(`/items/${id}`).then((res) => {
          toast.success("Item deleted successfully");
          setData(data.filter((item) => item._id !== id));
        });
      }
    });
  };

  const columns = [
    {
      name: "ID",
      selector: (row) => row._id,
      sortable: true,
    },
    {
      name: "Image",
      selector: (row) => (
        <img
          className="h-16 w-16 rounded-full border-4 object-cover"
          src={row.image}
          alt="product"
        />
      ),
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
      name: "Supplier",
      selector: (row) => row?.supplier,
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
      cell: (row) => (
        <button onClick={() => handleDelete(row._id)}>
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
    <div className="container p-4 mx-auto mt-40 md:mt-20">
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
