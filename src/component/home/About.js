import React, { useRef, useEffect, useState } from "react";

const About = () => {
  const aboutRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          observer.unobserve(entry.target);
        }
      });
    }, options);

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="h-screen">
      <div
        className={`w-3/4 text-4xl font-bold ml-24 mt-12 ${
          isIntersecting ? "unblur" : "blur"
        }`}
        ref={aboutRef}
      >
        We have a rich history in this industry and are in a unique position to
        not only design and develop your product but also input our own ideas
        and experience.
      </div>

      <br />

      <span
        className={`w-3/4 text-4xl font-bold ml-auto flex items-center ${
          isIntersecting ? "unblur" : "blur"
        }`}
      >
        Whether you're a startup, an enterprise, or an organization looking to
        transform your operations, our comprehensive range of blockchain
        services can help you drive efficiency, security, and transparency in
        your processes.
      </span>
    </div>
  );
};

export default About;
