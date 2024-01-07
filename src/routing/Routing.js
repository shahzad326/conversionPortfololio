import React from "react";
import Navbar from "../component/header/Navbar";
import Container from "../component/home/Container";
import Footer from "../component/footer/Footer";
import { Route, Routes } from "react-router-dom";
import ContactUs from "../component/contactus/ContactUs";

const Routing = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/contactUs/*" element={<ContactUs />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default Routing;
