import axios from "axios";
import React, { useCallback } from "react";
import ResponseExtract from '../Resuablefunctions/ResponseExtract'

const useHttp = () => {
  const [countryDetails, setCountryDetails] = React.useState([]);
  const [isLoading,setIsLoading]  = React.useState(false);

  const sendRequest = useCallback(async () => {
    setIsLoading(true);
    try {
      const allCountries = await axios({
        url: "https://restcountries.com/v2/all",
      });
      const response = await allCountries.data;
      setCountryDetails(ResponseExtract(response));
      setIsLoading(false);
    } catch (err) {
      throw new Error("Something Went Wrong" + err, { cause: err });
    }
  }, []);
  return {
    countryDetails,
    sendRequest,
    isLoading
  };
};

export default useHttp;
