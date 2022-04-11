import { React } from "react";

const Main = ({ data, handleFormSubmit, inputValue, value }) => {
  return (
    <>
      <section className="wrapper">
        <form onSubmit={handleFormSubmit}>
          <input type="text" value={value} onChange={inputValue}></input>{" "}
          <button>Wyszukaj</button>
        </form>
        {data.name ? (
          <Section
            data={data}
            handleFormSubmit={handleFormSubmit}
            inputValue={inputValue}
            value={value}
          />
        ) : null}
      </section>
    </>
  );
};

export default Main;

const Section = ({ data }) => {
  return (
    <>
      <h2 className="h2">
        {data.name} {data.main.temp} &#176; C{" "}
        <img
          src={`http://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
          alt={data.weather[0].icon}
        ></img>{" "}
      </h2>
      <p>
        Data: <strong>{new Date().toLocaleString()}</strong>
      </p>
      <p>
        Feels like: <strong>{data.main.feels_like}&#176; C </strong>
      </p>
      <p>
        Minimum temp: <strong>{data.main.temp_min}&#176; C </strong>
      </p>
      <p>
        Maximum temp: <strong>{data.main.temp_max}&#176; C </strong>
      </p>
      <p>
        Wind speed: <strong>{data.wind.speed} km/h </strong>
      </p>
    </>
  );
};
