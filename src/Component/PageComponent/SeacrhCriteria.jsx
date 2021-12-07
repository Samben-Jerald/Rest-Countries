import React from "react";
import "../../Style/dropdown.css";
import Input from "../Input";
import CountryDropdown from "../CountryDropdown";

const SeacrhCriteria = (props) => {
  const SearchRef = React.useRef();
  const countryList = [
    "Africa",
    "Americas",
    "Antarctic",
    "Antarctic Ocean",
    "Asia",
    "Europe",
    "Oceania",
    "polar",
  ];
  const onSearchBlurHandler = () => {
    props.SearchedData(SearchRef.current.value);
  };

  const dropDownValueHandler = (event) => {
    props.sendRegionData(event.target.value)
  };
  return (
    <div className="search-container">
      <Input
        placeholder="Search for the country"
        onBlur={onSearchBlurHandler}
        ref={SearchRef}
      />
      <CountryDropdown
        country={countryList}
        defaultValue="Filter by country"
        onChange={dropDownValueHandler}
      />
    </div>
  );
};

export default SeacrhCriteria;
