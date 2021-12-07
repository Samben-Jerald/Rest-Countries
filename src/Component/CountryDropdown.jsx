import React from "react";
import '../Style/dropdown.css'
import {useSelector} from 'react-redux'

const CountryDropdown = (props) => {
  const darkMode = useSelector(state=> state.darkmode.darstateMode)
  const Validation = darkMode ? "add-shadow" : "";

  return (
    <select className={`drop-down ${Validation}`} style={{borderRadius: darkMode && "5px",color:darkMode && "#FFF"}}
    onChange={props.onChange}>
      <option defaultValue>{props.defaultValue}</option>
      {props.country.map((value, index) => (
        <option key={index} value={value}>{value}</option>
      ))}
    </select>
  );
};

export default CountryDropdown;
