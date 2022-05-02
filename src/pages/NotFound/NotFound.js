import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container p-4 mx-auto mt-40 md:mt-20">
      <h2 className="text-3xl text-center my-4">Not Found</h2>

      <div className="w-1/2 mx-auto flex flex-col gap-4 items-center">
        <p>Sorry, the page you are looking for does not exist.</p>

        <p>
          Please check the URL or go back to the{" "}
          <Link className="text-blue-600" to="/">
            home page
          </Link>
          .
        </p>

        <p>If you think this is a mistake, please contact us.</p>

        <p>Thank you.</p>
      </div>
    </div>
  );
};

export default NotFound;
