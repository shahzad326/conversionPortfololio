// Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex justify-between">
        <div className="w-1/3">
          <h4 className="text-lg font-bold mb-2">Address</h4>
          <p>86-90 Paul Street</p>
          <p>London, EC2A 4NE</p>
          <h4 className="text-lg font-bold mt-4 mb-2">Contact</h4>
          <p>contact@techalchemy.co</p>
          <p>+44 7521 507783</p>
        </div>
        <div className="w-1/3 flex justify-center">
          <a href="/about" className="mx-4 hover:text-gray-400">
            About
          </a>
          <a href="/careers" className="mx-4 hover:text-gray-400">
            Careers
          </a>
          <a href="/blogs" className="mx-4 hover:text-gray-400">
            Blogs
          </a>
        </div>
        <div className="w-1/3 flex justify-end">
          <a
            href="https://www.facebook.com/yourcompany"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <i className="fab fa-facebook-square"></i>
          </a>
          <a
            href="https://www.instagram.com/yourcompany"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/company/yourcompany"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://wa.me/yourphonenumber"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-2"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
