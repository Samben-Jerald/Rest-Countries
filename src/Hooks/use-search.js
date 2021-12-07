import React from "react";

const useSearch = () => {
  const [searchCriteria, setSearchCriteria] = React.useState([]);
  const [TypingState, setTypingState] = React.useState(false);
  const [error, setErrorState] = React.useState(false);

  function SearchFilter(SearchData,details){
    if (SearchData !== "") {
      setTypingState(true);
      const search = details.filter(
        (data) => data.countryName === SearchData
      );
      if (search.length > 0) {
        setErrorState(false);
      } else {
        setErrorState(true);
      }
      setSearchCriteria(search.flat());
    } else {
      setTypingState(false);
    }
  }
 
  return {
    searchCriteria,
    TypingState,
    error,
    SearchFilter
  }
};

export default useSearch;
