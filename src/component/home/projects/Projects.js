import React from "react";
import line from "../../../images/line.svg";
import Legasea20230920T165147107Z562087 from "../../../images/Legasea20230920T165147107Z562087.webp";
import Callhends from "../../../images/Callahan's20230920T164923140Z328306.webp";
import HyperSQ20230920T162801390Z857880 from "../../../images/HyperSQ20230920T162801390Z857880.webp";
import Darabase20230920T161227172Z002058 from "../../../images/Darabase20230920T161227172Z002058.webp";

const ProjectContainer = ({ title, image, description, heading }) => {
  return (
    <div className="max-w-md mx-4 my-12 p-4 bg-white rounded-md shadow-lg">
      <img
        src={image}
        alt={title}
        className="mb-4 w-full h-40 object-cover rounded-md"
      />
      <p className="text-md "> {heading} </p>
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Mobile App Project",
      image: Legasea20230920T165147107Z562087,
      heading: "website",
      description:
        "Legasea approached Tech Alchemy to bring their product vision to life: a place where your memories can live on and be cherished by your loved ones after you're gone. We collaborated closely with Legasea stakeholders to define their MVP, create their brand identity, and craft key user flows into a prototype for",
    },
    {
      title: "Web Development Project",
      image: Callhends,
      heading: "website",
      description:
        "Callahan’s marketplace is an artist-focused, comprehensive platform where whitelisted artists can join and populate their profiles by adding all of their contract information across various collections or blockchains. This platform allows artists to showcase their artwork and enables users to easily buy, sell and bid for these",
    },
    {
      title: "Design Project",
      image: HyperSQ20230920T162801390Z857880,
      heading: "app",
      description:
        "HyperSQ is an exploration app that offers users a unique experience of discovering new places, completing challenges and earning rewards. The app offers personalised recommendations, gamified rewards and allows users to easily share their experiences with friends. ",
    },
    {
      title: "Data Science Project",
      image: Darabase20230920T161227172Z002058,
      heading: "website",
      description:
        "The darabase.io NFT marketplace enables property owners to register their properties onto the Darabase ecosystem and profit from AR advertisement placement. They are also free to trade their property's digital rights in the form of NFTs, with other darabase.io users and establish a steady royalty based income.",
    },
  ];

  return (
    <div>
      <div className="flex justify-center items-center mt-12">
        {" "}
        <div className="">
          <span className="text-3xl font-semibold ">More Projects</span>
          <img src={line} alt="" />
        </div>
      </div>
      <div className="ml-24 mr-24">
        <div className="flex justify-center">
          {projects.map((project, index) => (
            <ProjectContainer key={index} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
