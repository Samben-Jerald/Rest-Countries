import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const darkModeState = useSelector((state) => state.darkmode.darstateMode);

  return (
    <h4
      style={{
        textAlign: "center",
        fontWeight: "600",
        color: darkModeState ? "#FFF" : "#000000",
      }}
    >
      @CopyRight {new Date().getUTCFullYear()} Samben Jerald
    </h4>
  );
};

export default Footer;
