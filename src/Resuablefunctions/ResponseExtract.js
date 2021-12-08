const ResponseExtract = (response) => {
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
      return extractDetails;
}

export default ResponseExtract;