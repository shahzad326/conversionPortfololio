import React from "react";
import imae from "../../../images/weclean.JPG";
import featre from "../../../images/feature_1.svg";
import featre1 from "../../../images/feature_2.svg";
import featre2 from "../../../images/feature_3.svg";
import featre3 from "../../../images/feature_4.svg";
import featre4 from "../../../images/feature_5.svg";
import featre5 from "../../../images/feature_6.svg";

const Featured = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-3xl font-bold mb-4">Featured in and backed by</h2>
      <p className="text-gray-700 text-center mb-8">
        We are trusted by a mix of large companies, brands, as well as the most
        ambitious startups. Our products have been used by millions and received
        widespread critical acclaim.
      </p>
      <div className="flex justify-center space-x-8">
        {/* Replace the image paths with your actual image paths */}
        <img
          src={featre}
          alt="Company Logo 1"
          className="w-16 h-16 object-contain"
        />
        <img
          src={featre1}
          alt="Company Logo 2"
          className="w-16 h-16 object-contain"
        />
        <img
          src={featre2}
          alt="Company Logo 3"
          className="w-16 h-16 object-contain"
        />
        <img
          src={featre3}
          alt="Company Logo 4"
          className="w-16 h-16 object-contain"
        />
        <img
          src={featre4}
          alt="Company Logo 5"
          className="w-16 h-16 object-contain"
        />
        <img
          src={featre5}
          alt="Company Logo 6"
          className="w-16 h-16 object-contain"
        />
      </div>
    </div>
  );
};

export default Featured;
