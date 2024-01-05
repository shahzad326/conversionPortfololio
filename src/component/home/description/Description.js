import React from "react";
import Maccbook from "../../../images/MacBook-Pro.bf22ef17.webp";
import MaccbookPro from "../../../images/MacBook-Pro1.b7870ffd.webp";

import iphone from "../../../images/iphone-12.a04d005b.webp";
import ipadpro from "../../../images/iPad-Pro-12.3bdda35e.png";
import ipadpro2 from "../../../images/iPad-Pro-11.77e555a3.png";

import ipadpro1 from "../../../images/iPad-Pro-13.16362693.png";
import iphone1 from "../../../images/iphone-12pro.ffd9eba7.webp";
import iphone2 from "../../../images/iphone-12pro1.b6f4cec5.webp";
import iphone3 from "../../../images/iphone-12pro2.a8988d85.webp";
import iphone4 from "../../../images/iphone-12pro3.0a028c12.webp";

const Description = () => {
  return (
    <div className="align-center justify-center">
      <div className="flex">
        <img src={Maccbook} alt="" className="w-96 h-96" />
        <img src={iphone} alt="" className="w-96 h-96" />
        <img src={ipadpro} alt="" className="w-96 h-96" />
      </div>
      <div className="flex">
        <img src={ipadpro1} alt="" className="w-96 h-96" />
        <span className="flex align-center items-center">
          {" "}
          We're a team of 200+ Product Managers, Designers and Developers.
          And... we are one of the highest rated Blockchain agencies in the
          world.
        </span>
        <img src={iphone1} alt="" className="w-72 h-96" />
        <img src={iphone2} alt="" className="w-72 h-96" />
      </div>

      <div className="flex">
        <img src={iphone3} alt="" className="w-72 h-96" />
        <img src={iphone4} alt="" className="w-72 h-96" />
        <img src={ipadpro2} alt="" className="w-72 h-96" />
        <img src={MaccbookPro} alt="" className="w-72 h-96" />
      </div>
    </div>
  );
};

export default Description;
