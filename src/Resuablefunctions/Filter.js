function Filter(Details,index,countryData,navigate) {
  const findCountry = Details.find(
    (element, indexValue) => indexValue === index
  );
  if (countryData.length === 1) {
    countryData.pop();
  }
  countryData.push(findCountry);
  navigate(`/country/${findCountry.countryName}`);
}

export default Filter;
