import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import line from "../../images/line.svg";
import styled from "styled-components";

const RainbowText = styled.div`
  font-size: 2rem;
  font-weight: bold;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-image: linear-gradient(
    45deg,
    #ff0000,
    #ffa500,
    #ffff00,
    #008000,
    #0000ff,
    #4b0082,
    #9400d3
  );
`;

const FloatingLabel = styled.label`
  position: absolute;
  top: ${({ isFocused, hasValue }) =>
    isFocused || hasValue ? "-10px" : "50%"};
  left: 15px;
  background-color: white;
  padding: 0 5px;
  font-size: ${({ isFocused, hasValue }) =>
    isFocused || hasValue ? "12px" : "16px"};
  color: ${({ isFocused, hasValue }) =>
    isFocused || hasValue ? "#666" : "#999"};
  pointer-events: none;
  transition: 0.3s ease-out;
  transform: translateY(
    ${({ isFocused, hasValue }) => (isFocused || hasValue ? "0" : "-50%")}
  );
  cursor: text;
`;

const ContactUs = () => {
  const initialName = "Name";
  const initialEmail = "Email Address";
  const initialPhone = "Phone Number";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);

  const navigate = useNavigate();

  const handleStart = () => {
    // Handle your form submission logic here
    console.log("Form submitted:", { name, email, phone });
    // You can add your form submission logic or API call here

    // For simplicity, let's redirect to the home page after submission
    navigate("/");
  };

  const handleExit = () => {
    // Redirect to the home page
    navigate("/");
  };

  return (
    <div className="bg-gray-300 flex flex-col justify-center items-center">
      <div className="mb-4 items-center">
        <div className="flex mt-24">
          <span className="text-3xl font-semibold mr-2 mt-2">Get</span>
          <RainbowText>Started</RainbowText>
        </div>
        <RainbowText>
          <img src={line} alt="" className="ml-2" />
        </RainbowText>
      </div>
      <div className="w-2/3 p-8 bg-white rounded-3xl shadow-lg relative mt-8">
        <h1 className="text-4xl font-bold mb-4 mt-12">
          Let's find the perfect solution for your needs
        </h1>
        <p className="text-gray-600 mb-4 mt-8">
          Thank you for taking our mini survey. This will only take a few
          minutes, and will help our team come back to you with a tailored
          solution. You can leave the survey at any time.
        </p>
        <div className="flex mt-12">
          <div className="flex flex-col mb-4 relative mr-4">
            <input
              type="text"
              placeholder={nameFocused ? "" : initialName}
              className="w-96 px-4 py-2 border border-gray-300 focus:outline-none"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
            />
            <FloatingLabel isFocused={nameFocused} hasValue={name.length > 0}>
              {initialName}
            </FloatingLabel>
          </div>

          <div className="flex flex-col mb-4 relative">
            <input
              type="email"
              placeholder={emailFocused ? "" : initialEmail}
              className="w-96 px-4 py-2 border border-gray-300 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocused(true)}
              onBlur={() => setEmailFocused(false)}
            />
            <FloatingLabel isFocused={emailFocused} hasValue={email.length > 0}>
              {initialEmail}
            </FloatingLabel>
          </div>
        </div>

        <div className="flex flex-col relative mt-4">
          <input
            type="tel"
            placeholder={phoneFocused ? "" : initialPhone}
            className="w-96 px-4 py-2 border border-gray-300 focus:outline-none"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onFocus={() => setPhoneFocused(true)}
            onBlur={() => setPhoneFocused(false)}
          />
          <FloatingLabel isFocused={phoneFocused} hasValue={phone.length > 0}>
            {initialPhone}
          </FloatingLabel>
        </div>

        <div className="flex justify-between mt-24">
          <button className=" text-black px-4 py-2" onClick={handleExit}>
            Exit
          </button>
          <button
            className="bg-gray-100 text-black px-4 py-2 font-semibold text-lg w-32"
            onClick={handleStart}
          >
            Start
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
