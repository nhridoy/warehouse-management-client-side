import React from "react";

import DataTable from "react-data-table-component";
import { FcFullTrash } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";

const columns = [
  {
    name: "No",
    selector: (row) => row.id,
    sortable: true,
  },
  {
    name: "Name",
    selector: (row) => (
      <Link className="text-blue-600 underline" to={`/inventory/${row.id}`}>
        {row.title}
      </Link>
    ),
    sortable: true,
  },
  {
    name: "Title",
    selector: (row) => row.year,
    sortable: true,
  },
  {
    name: "Price",
    selector: (row) => row.year,
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

const data = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
  },
  {
    id: 2,
    title: "Ghostbusters",
    year: "1984",
  },
];

const AllProduct = () => {
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
