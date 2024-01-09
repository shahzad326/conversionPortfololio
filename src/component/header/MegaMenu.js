import React from "react";
import "./MegaMenu.css";

const MegaMenu = ({ isOpen, onClose }) => {
  const headings = [
    {
      title: "Blockchain",
      subHeadings: [
        "Fintech & Defi",
        "Data Immutability ",
        "NFTs",
        "Smart Tokens",
        "Metaverse",
        "BlockChain",
      ],
    },
    {
      title: "Product Development",
      subHeadings: [
        "Discovery",
        "Prototyping",
        "Modile Development",
        "Web Development",
      ],
    },
    {
      title: "Software solutions",
      subHeadings: [
        "AI & Automation",
        "Cyber Security",
        "Data Analytics",
        "Digital Transformation",
        "Moderation",
      ],
    },
    {
      title: "Apps",
      subHeadings: ["Gaming", "Mobile App"],
    },
  ];

  return (
    <div
      className={`${
        isOpen
          ? "flex justify-center animate-slideIn"
          : "hidden animate-slideOut"
      } absolute left-0 top-full p-4 ml-2 mr-12 shadow-md w-full`}
      style={{ background: "#2d3748", height: "70vh" }}
    >
      <div
        className={`${
          isOpen ? "mega-menu-open" : "mega-menu-closed"
        } absolute left-0 top-full p-4 ml-2 mr-12 shadow-md w-full`}
        style={{ background: "#2d3748", height: "70vh" }}
      ></div>
      {headings.map((heading, index) => (
        <div key={index} className="w-64 ml-4 mr-2 mt-12">
          {/* Heading with underline */}
          <h3 className="text-white text-lg font-semibold mb-2 border-b-2 border-white pb-2">
            {heading.title}
          </h3>

          {/* Subheadings */}
          <ul>
            {heading.subHeadings.map((subHeading, subIndex) => (
              <li
                key={subIndex}
                className="text-white flex cursor-pointer mt-4 hover:text-xl"
              >
                {subHeading}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default MegaMenu;
