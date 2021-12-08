import React from "react";

const Footer = () => {
  return (
    <h4
      style={{
        color: "white",
        textAlign: "center",
        fontWeight: "normal",
      }}
    >
      @CopyRight {new Date().getUTCFullYear()} Samben Jerald
    </h4>
  );
};

export default Footer;
