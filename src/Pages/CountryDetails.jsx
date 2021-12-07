import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import { countryData } from "../Pages/HomePage";
import "../Style/CountryPage.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { formatNums } from "../Resuablefunctions/RegEx";
import DetailsSpan from "../Component/detailsSpan";

const CountryDetails = () => {
  const darkMode = useSelector((state) => state.darkmode.darstateMode);
  const country = Object.assign({}, ...countryData.flat());
  const currencyNames = country.currencyName ? country.currencyName : ["None"];
  const Languages = country.languages ? country.languages : ["None"];
  const countryBorders = country.borders ? country.borders : ["None"];
  const TopLevelDomain = country.topLevelDomain
    ? country.topLevelDomain
    : ["None"];
  const setDarkMode = darkMode ? "add-shadow" : "";
  const navigate = useNavigate();
  if (Object.keys(country).length > 0) {
    return (
      <div className="countrydetails-main-container">
        <span
          className={`back-Button  ${setDarkMode}`}
          onClick={() => navigate(-1)}
        >
          <span className="back-text">
            <ArrowBackIcon
              fontSize="12px"
              className="back-icon"
              viewBox="5 0 24 18"
            />
            Go Back
          </span>
        </span>
        <div className="details-container">
          <div className="flag-image">
            <img
              src={country.flags.svg}
              alt="country-flag"
              className="one-country-flag"
            />
          </div>
          <div className="country-data">
            <div className="country-Name">
              <h2>{country.countryName}</h2>
            </div>
            <div className="data-division">
              <DetailsSpan className="country-title" title="Native Name: ">
                {country.nativeName}
              </DetailsSpan>
              <DetailsSpan className="country-title" title="Population: ">
                {formatNums(country.population)}
              </DetailsSpan>
              <DetailsSpan className="country-title" title="Region: ">
                {country.region}
              </DetailsSpan>
              <DetailsSpan className="country-title" title="Sub region: ">
                {country.subRegion}
              </DetailsSpan>
              <DetailsSpan className="country-title" title="Capital: ">
                {country.capital}
              </DetailsSpan>
            </div>
            <div className="data-division-2">
              <span>
                <span className="country-title">Top Level Domain: </span>
                {TopLevelDomain.map((Item, Index) => {
                  return <span key={Index}>{Item} </span>;
                })}
              </span>
              <span>
                <span className="country-title">Currency: </span>
                {currencyNames.map((Item, Index) => {
                  return <span key={Index}>{Item.name} </span>;
                })}
              </span>
              <span>
                <span className="country-title">Languages: </span>
                {Languages.map((Item, Index) => {
                  return <span key={Index}>{Item.name} </span>;
                })}
              </span>
            </div>
            <div className="data-division-3">
              <span>
                <span className="country-title">Border Countries: </span>
                {countryBorders.map((Item, Index) => {
                  return <span key={Index}>{Item} </span>;
                })}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/homepage" />;
  }
};

export default CountryDetails;
