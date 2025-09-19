import React, { use, useState } from "react";
import Country from "./Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const [visitedCountries, setVisitedCountries] = useState([]);

  const handleVisitedCountries = (country) => {
    console.log("hvc clicked", country);
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  };

  const countriesDat = use(countriesPromise);
  const countries = countriesDat.countries;
  console.log(countries);
  return (
    <div>
      <h1>In The Countries : {countries.length}</h1>

      <h3>Total Visited Country : {visitedCountries.length}</h3>
      <ol>
        {visitedCountries.map((country) => (
          <li key={country.ccn3.ccn3}>{country.name.common}</li>
        ))}
      </ol>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.ccn3.ccn3}
            country={country}
            handleVisitedCountries={handleVisitedCountries}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
