import React from "react";
import mainImage from "../../../images/My Bricks20221128T145529692Z599599.png";
import logo from "../../../images/My Bricks20221128T102043079Z064186.png";

const Screen = () => {
  return (
    <div className="h-screen bg-red-300">
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

export default Screen;
