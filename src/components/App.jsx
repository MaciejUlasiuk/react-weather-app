import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./Main";

import Header from "./Header";

const key = process.env.REACT_APP_API_KEY;
const tablica = [0, 1, 2, 3, 4];
const randomNumber = Math.floor(Math.random() * tablica);
const App = () => {
  const [data, setData] = useState({});
  const [value, setValue] = useState("Warsaw");
  const handleInputChange = (e) => {
    setValue(e.target.value);
  };
  const api = `https://api.openweathermap.org/data/2.5/weather?q=${value}&appid=${key}&units=metric`;

  const fetchAPI = async () => {
    const fetchit = await fetch(api);
    const response = await fetchit.json();

    setData(response);
    console.log(response);
    console.log(data.name);
  };
  useEffect(
    () => {
      fetchAPI();
    },
    [],
    [value]
  );
  const handleFormSubmit = (e) => {
    e.preventDefault();
    fetchAPI();
  };

  return (
    <>
      <Header randomImg={randomNumber} />
      <Main
        data={data}
        inputValue={handleInputChange}
        value={value}
        handleFormSubmit={handleFormSubmit}
      />
    </>
  );
};

export default App;
