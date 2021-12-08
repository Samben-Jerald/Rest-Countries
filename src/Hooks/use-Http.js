import axios from "axios";
import React, { useCallback } from "react";
import ResponseExtract from '../Resuablefunctions/ResponseExtract'

function ReducerFunction(state,action){
if(action.type === "LOADER"){
  return {
    ...state,
    status:"PENDING"
  } 
}else if(action.type === "FINISHED"){
  return{
    ...state,
    status:"COMPLETED"
  }
}else if(action.type === "ERROR"){
  return{
    status:"ERROR",
    errorMessage:"Unable to Fetchdata due to some issues"
  }
}
}

const useHttp = () => {
  const [countryDetails, setCountryDetails] = React.useState([]);
  const [isLoading,loadingDispatcher] =  React.useReducer(ReducerFunction,{
    status:"",
    errorMessage:""
  })

  const sendRequest = useCallback(async () => {
    loadingDispatcher({type:"LOADER"})
    try {
      const allCountries = await axios({
        url: "https://restcountries.com/v2/all",
      });
      const response = await allCountries.data;
      setCountryDetails(ResponseExtract(response));
      if(allCountries.status === 200){
        loadingDispatcher({type:"FINISHED"})
      } else{
        throw new Error();
      }
    } catch (err) {
      loadingDispatcher({type:"ERROR"})
    }
  }, []);
  return {
    countryDetails,
    sendRequest,
    status:isLoading.status,
    message:isLoading.errorMessage
  };
};

export default useHttp;
