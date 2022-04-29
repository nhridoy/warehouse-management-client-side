import React from "react";

const About = () => {
  return (
    <div className="container p-4 mx-auto">
      <h2 className="text-3xl text-center font-semibold py-4">Why Us</h2>
      <div className="grid items-center grid-cols-2 gap-4">
        <img
          src="https://kinsta.com/wp-content/uploads/2017/10/wordpress-charts-2-1024x512.png"
          alt=""
        />
        <div className="text-xl ml-10">
          <ul className="list-disc">
            <li>Graph View</li>
            <li>Data View</li>
            <li>Data Analysis</li>
            <li>Details Product Management</li>
            <li>Easy to Use</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
