import React, { useState } from "react";
import "./Country.css";
import "./Countries.css";

const Country = ({ country, handleVisitedCountries }) => {
  const [visited, setVisited] = useState(false);
  //   console.log(country);
  //   console.log(handleVisitedCountries);
  const handleVisited = () => {
    setVisited(visited ? false : true);
    handleVisitedCountries(country);
  };

  return (
    <div className={`country ${visited && "country-visited"}`}>
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2>Name : {country.name.common}</h2>
      <h2>Capital : {country.capital.capital}</h2>
      <h3>population : {country.population.population}</h3>
      <p>
        Area : {country.area.area}{" "}
        {country.area.area > 30000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited}>
        {visited ? "Visited" : "Not Visited"}
      </button>
    </div>
  );
};

export default Country;
