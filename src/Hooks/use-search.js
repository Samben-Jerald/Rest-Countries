import React from "react";

const useSearch = () => {
  const [searchCriteria, setSearchCriteria] = React.useState([]);
  const [error, setErrorState] = React.useState(false);

  function SearchFilter(SearchData, details) {
    if (SearchData !== "") {
        const silingSearchData= SearchData.slice(0,1).toUpperCase()+SearchData.slice(1,SearchData.length);
        const search = details.filter((data) => data.countryName === silingSearchData);
        if (search.length > 0) {
          setErrorState(false);
        } else {
          setErrorState(true);
        }
        setSearchCriteria(search.flat());
    }  
  }

  return {
    searchCriteria,
    error,
    SearchFilter,
  };
};

export default useSearch;
