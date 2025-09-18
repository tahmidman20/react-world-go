import React, { use } from "react";
import Country from "./Country";
import "./Countries.css";

const Countries = ({ countriesPromise }) => {
  const countriesDat = use(countriesPromise);
  const countries = countriesDat.countries;
  console.log(countries);
  return (
    <div>
      <h1>In The Countries : {countries.length}</h1>
      <div className="countries">
        {countries.map((country) => (
          <Country key={country.ccn3.ccn3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
