import React from "react";
import "../Style/loader.css";
import { useSelector } from "react-redux";
const Loader = () => {
  const darkModeState = useSelector((state) => state.darkmode.darstateMode);

  return <div className={darkModeState ? "loader" : "loader extra"}>Loading...</div>;
};

export default Loader;
