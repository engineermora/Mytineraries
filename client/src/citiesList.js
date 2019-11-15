import React from "react";
import city from "./../../cities";

const CitiesList = ({ cities }) =>
  cities.map(city => <city key={city.name} city={city} />);

export default CitiesList;