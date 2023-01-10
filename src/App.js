import React, { useState, useEffect } from "react";

import currenciesJSON from "./data/currencies.json";
import CountrySelector from "./components/CountrySelector";

const App = () => {
  const [currencies, setCurrencies] = useState([]);
  const [country, setCountry] = useState({});

  useEffect(() => {
    setCurrencies(currenciesJSON.currencies);
    setCountry(currenciesJSON.currencies[0]);
  }, []);

  return (
    <div>
      <CountrySelector
        country={country}
        currencies={currencies}
        setCountry={setCountry}
      />
    </div>
  );
};

export default App;
