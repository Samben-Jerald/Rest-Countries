import React from "react";
import {formatNums} from '../Resuablefunctions/RegEx'
import Card from '../Component/Card'

const CardMapping = ({data,clickHandler}) => {
  return data.map((Item, index) => {
    return (
      <Card
        key={Item.id}
        flagImage={Item.flags.svg}
        CountryName={Item.countryName}
        population={formatNums(Item.population)}
        region={Item.region}
        capital={Item.capital}
        onClick={() => clickHandler(index)}
      />
    );
  });
};

export default CardMapping;
