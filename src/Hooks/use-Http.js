import axios from "axios";
import React, { useCallback } from "react";

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
      const extractDetails = [];
      response.forEach((value, index) => {
        extractDetails.push({
          ...(value.name && { id: `id-${index}` }),
          ...(value.name && { countryName: value.name }),
          ...(value.region && { region: value.region }),
          ...(value.population && { population: value.population }),
          ...(value.capital && { capital: value.capital }),
          ...(value.subregion && { subRegion: value.subregion }),
          ...(value.nativeName && { nativeName: value.nativeName }),
          ...(value.topLevelDomain && { topLevelDomain: value.topLevelDomain }),
          ...(value.flags && { flags: value.flags }),
          ...(value.currencies && { currencyName: value.currencies }),
          ...(value.languages && { languages: value.languages }),
          ...(value.borders && { borders: value.borders }),
        });
      });
      setCountryDetails(extractDetails);
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
