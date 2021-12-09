import React, { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "../Style/Homepage.css";
import SearchCriteria from "../Component/PageComponent/SeacrhCriteria";
import useHttp from "../Hooks/use-Http";
import useSearch from "../Hooks/use-search";
import Filter from "../Resuablefunctions/Filter";
import Loader from "../Component/Loader";
import CardMapping from "../Component/CardMapping";

export const countryData = [];
const HomePage = () => {
  const darkModeState = useSelector((state) => state.darkmode.darstateMode);
  const { countryDetails, sendRequest, status, message } = useHttp();
  const [region, setRegion] = React.useState([]);
  const [isSelected, setIsSelected] = React.useState(false);
  const [TypingBlurState, SetTypingBlurState] = React.useState(false);
  const [SearchedValue, setSearchedValue] = React.useState("");
  const navigate = useNavigate();
  const {
    searchCriteria,
    error,
    SearchFilter: Filtering,
  } = useSearch();
  const [dropdown, setdropdown] = React.useState("");

  React.useEffect(() => {
    if (SearchedValue.length === 0) {
      sendRequest();
    }
    if (TypingBlurState) {
      setIsSelected(false);
      setdropdown("Filter by country");
      setRegion([]);
    }
  }, [sendRequest, SearchedValue, TypingBlurState]);

  const onSearchFocusHandler = (focustate) => {
    SetTypingBlurState(focustate);
  };

  const SearchFilter = React.useCallback((SearchData) => {
    setSearchedValue(SearchData);
    Filtering(SearchData, countryDetails);
  },[Filtering,countryDetails]);

  const onSearchHandler = () => {
    if (searchCriteria.length > 1) {
      searchCriteria.pop();
    }
    countryData.push(searchCriteria);
    navigate(`/country/${searchCriteria.flat().at(0).countryName}`);
  };
  const DataHandler = (index) => {
    Filter(countryDetails, index, countryData, navigate);
  };

  const RegionFilter = (index) => {
    Filter(region, index, countryData, navigate);
  };

  const getRegion = React.useCallback((region) => {
    if(region !== ""){
      setIsSelected(true);
      setdropdown(region);
      const regionFilter = countryDetails.filter(
        (value) => value.region === region
      );
      setRegion(regionFilter);
    }
  },[countryDetails])

  function HomePageRender() {
    if (status === "PENDING") {
      return <Loader />;
    } else if (status === "ERROR") {
      return (
        <h1
          style={{
            textAlign: "center",
            fontWeight: "normal",
            marginTop: "5rem",
          }}
        >
          {message}
        </h1>
      );
    } else if (status === "COMPLETED") {
      // Country Filter validation
      const countryValidation =
        countryDetails.length > 0 &&
        SearchedValue.length === 0 &&
        !isSelected &&
        region.length === 0;
        // Search Filter Validation
      const SearchCriteriaValidation =
        searchCriteria.length > 0 &&
        SearchedValue.length > 0 &&
        !isSelected;
        //Region Filter Validation
      const RegionValidation =
        region.length > 0 &&
        isSelected &&
        (SearchedValue.length === 0 || error );
      return (
        <Fragment>
          {countryValidation && (
            <div className="card-main-container">
              <CardMapping clickHandler={DataHandler} data={countryDetails} />
            </div>
          )}
          {SearchCriteriaValidation && (
            <div className="card-main-container">
              <CardMapping
                clickHandler={onSearchHandler}
                data={searchCriteria}
              />
            </div>
          )}
          {error && searchCriteria.length === 0 && !isSelected && (
            <h1
              style={{
                textAlign: "center",
                color: darkModeState ? "#FFF" : "#000000",
              }}
            >
              Searched Country not Found
            </h1>
          )}
          {RegionValidation && (
            <div className="card-main-container">
              <CardMapping clickHandler={RegionFilter} data={region} />
            </div>
          )}
        </Fragment>
      );
    }
    return (
      <h1
        style={{
          textAlign: "center",
          fontWeight: "normal",
          marginTop: "5rem",
          color: darkModeState ? "#FFF" : "#000000",
        }}
      >
        No Country Found
      </h1>
    );
  }

  return (
    <div className="content-container">
      <SearchCriteria
        SearchedData={SearchFilter}
        sendRegionData={getRegion}
        sendFocusStatus={onSearchFocusHandler}
        value={dropdown}
      />
      <HomePageRender />
    </div>
  );
};

export default HomePage;
