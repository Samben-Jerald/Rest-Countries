import React from "react";
import "../../Style/Header.css";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import {useSelector} from 'react-redux'


const Header = (props) => {
  const darkMode = useSelector(state=> state.darkmode.darstateMode)
  const setDarkMode = darkMode ? "header-shadow" : "";

  return (
    <header className={`header-container ${setDarkMode}`}>
      <div onClick={()=> window.location.reload() }>
        <h2 className="heading">Where in the world?</h2>
      </div>
      <div className="darkmode-button" onClick={props.onClick}>
        <DarkModeOutlinedIcon fontSize="small"/>
        <span>Dark mode</span>
      </div>
    </header>
  );
};

export default Header;
