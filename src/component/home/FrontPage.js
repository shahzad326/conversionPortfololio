import React from "react";
import RotationPage from "./rotation/RotationPage";

const FrontPage = () => {
  return (
    <div
      style={{
        background: "#2d3748",
      }}
    >
      <div className=" text-white  flex flex-col items-center  min-h-screen">
        <h1 className="text-6xl font-bold p-4 text-center mt-24">
          Award winning <br /> Blockchain development <br /> studio.
        </h1>

        <p className="text-lg mb-8 text-center mt-12">
          We are Tech Alchemy. We are passionate about start-ups. Let us use our
          experience in this industry to <br /> help grow and shape your ideas
          into reality.
        </p>
        <div className="flex space-x-4 mt-8">
          <button className="bg-white text-gray-800 text-md font-semibold px-6 py-3 rounded border-2 transition duration-300 ease-in-out hover:bg-gray-800 hover:text-gray-300">
            Talk to Us
          </button>
          <button className="text-white px-6 py-3 text-md font-semibold rounded border-2 transition duration-300 ease-in-out hover:bg-white  hover:text-gray-800 ">
            Call Now
          </button>
        </div>
        <RotationPage />
      </div>
    </div>
  );
};

export default FrontPage;
