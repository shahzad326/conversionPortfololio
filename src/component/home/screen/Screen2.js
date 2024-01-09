import React from "react";
import mainImage from "../../../images/Mercore20221125T155744782Z485574.png";
import logo from "../../../images/Mercore20221128T102053688Z193555.png";
import { useSpring, animated } from "react-spring";

const Screen2 = () => {
  const props = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });
  return (
    <div className="h-screen bg-gray-800">
      <animated.div style={props} className="">
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
              The Customer platform supports the onboarding and lifecycle
              management of corporates and financiers. The Ops panel provides a
              platform for Mercore analysts to view customer information and
              manage them through identification and due diligence processes.
            </span>
          </div>
        </div>
      </animated.div>
    </div>
  );
};

export default Screen2;
