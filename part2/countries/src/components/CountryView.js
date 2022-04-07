import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import WeatherView from "./WeatherView";

const CountryView = ({country}) => {
  const [weather, setWeather] = useState({})

  const hooks = () => {
  
    const fetchLocation =
      axios
      .get(`http://api.openweathermap.org/geo/1.0/direct?q=${country.capital}
      &limit=1&appid=${process.env.REACT_APP_API_KEY}`)

    const fetchWeather = (location) => {
      axios
      .get(`https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&units=metric&appid=${process.env.REACT_APP_API_KEY}`)
      .then((response)=> {
        setWeather(response.data)
      })
    }

    fetchLocation.then((response) => fetchWeather(response.data[0]))
  }

  useEffect(hooks, [])

  const weatherToShow = Object.values(weather).length === 0
  ?(<div>getting Weather Data</div>)
  : <WeatherView weather={weather}/>

  return (
  <div>
    <h1>{country.name.common}</h1>
    <img alt="" src={country.flags.png}/>
    <div>Captial: {country.capital}</div>
    <div>Area: {country.area} </div>
    <h2>Language</h2>
    <ul>
        {Object
        .values(country.languages)
        .map((language) => (<li key={language}>{language}</li>))}
    </ul>
    {weatherToShow}
  </div>) 

}

export default CountryView