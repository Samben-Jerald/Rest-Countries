import React from "react";
import "../Style/Card.css";
import {useSelector} from 'react-redux'

const Card = (props) => {
  const darkMode = useSelector(state=> state.darkmode.darstateMode)
  const cardValidation = darkMode ? "add-shadow" : "";
  return (
    <div className={`card-container ${cardValidation}`} onClick={props.onClick}>
      <img
        src={props.flagImage}
        alt="country-flag"
        className="country-flag"
      />
      <div className="country-details">
        <h4 className="countryText">{props.CountryName}</h4>
        <span className="country-population">
          <span className="heading">Population: </span>{props.population}
        </span>
        <span className="country-region">
          <span className="heading">Region: </span>{props.region}
        </span>
        <span className="country-capital">
          <span className="heading">Capital: </span>{props.capital}
        </span>
      </div>
    </div>
  );
};

export default Card;
