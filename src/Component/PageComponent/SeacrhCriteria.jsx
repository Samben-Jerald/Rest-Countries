import React from "react";
import "../../Style/dropdown.css";
import Input from "../Input";
import CountryDropdown from "../CountryDropdown";

const SeacrhCriteria = ({sendFocusStatus,SearchedData,sendRegionData,value}) => {
  const SearchRef = React.useRef();
  const [onFocusState,setOnFocusState] = React.useState(false)
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

  React.useEffect(() => {
    sendFocusStatus(onFocusState)
  },[onFocusState,sendFocusStatus])

  const onFocusHandler = () => {
    setOnFocusState(true);
  }
 
  const onSearchBlurHandler = () => {
    setOnFocusState(false);
    SearchedData(SearchRef.current.value);
  };

  const dropDownValueHandler = (event) => {
    sendRegionData(event.target.value);
  };

  return (
    <div className="search-container">
      <Input
        placeholder="Search for the country"
        onBlur={onSearchBlurHandler}
        ref={SearchRef}
        onFocus={onFocusHandler}
      />
      <CountryDropdown
        country={countryList}
        onChange={dropDownValueHandler}
        value={value}
      />
    </div>
  );
};

export default SeacrhCriteria;
