import React from "react";
import '../Style/dropdown.css'
import {useSelector} from 'react-redux'

const CountryDropdown = (props) => {
  const darkMode = useSelector(state=> state.darkmode.darstateMode)
  const Validation = darkMode ? "add-shadow" : "";

  return (
    <select className={`drop-down ${Validation}`} style={{borderRadius: darkMode && "5px",color:darkMode && "#FFF"}}
    onChange={props.onChange} value={props.value}>
      <option value="Filter by country">Filter by country</option>
      {props.country.map((value, index) => (
        <option key={index} value={value}>{value}</option>
      ))}
    </select>
  );
};

export default CountryDropdown;
