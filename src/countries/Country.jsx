import React from "react";
import "./Country.css";
import "./Countries.css";

const Country = ({ country }) => {
  console.log(country);
  const handleVisited = () => {
    console.log("Button Clicked");
  };

  return (
    <div className="country">
      <img src={country.flags.flags.png} alt={country.flags.flags.alt} />
      <h2>Name : {country.name.common}</h2>
      <h2>Capital : {country.capital.capital}</h2>
      <h3>population : {country.population.population}</h3>
      <p>
        Area : {country.area.area}{" "}
        {country.area.area > 30000 ? "Big Country" : "Small Country"}
      </p>
      <button onClick={handleVisited}>Not Visited</button>
    </div>
  );
};

export default Country;
