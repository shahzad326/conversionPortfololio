import React from "react";
import mainImage from "../../../images/Mercore20221125T155744782Z485574.afd3991a0c00f8003149.png";
import logo from "../../../images/Mercore20221128T102053688Z193555.png";

const Screen3 = () => {
  return (
    <div className="h-screen bg-black">
      <div className=" flex  justify-center ">
        <img src={mainImage} alt="" className="w-2/4 h-1/4 mt-2" />
      </div>

      <div className="mt-12 flex ml-72">
        <div className="">
          {" "}
          <img src={logo} alt="" className="h-8 w-36 " />
          <span class="font-bold text-lg mt-8" style={{ color: "white" }}>
            Defi Property
          </span>
        </div>
        <div className=" w-3/4 ml-20">
          <span class="font-semibold text-md" style={{ color: "white" }}>
            With the future MyBricks platform you’ll be able to use your BRICKS
            tokens to purchase fractional ownership of property portfolios.
            Properties will generate monthly yield that will be distributed to
            all owners of that particular portfolio.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Screen3;
