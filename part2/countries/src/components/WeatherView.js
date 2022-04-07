import React from 'react';

const WeatherView = ({weather}) => {
  const icon = `${weather.weather[0].icon}.png`
    return (
      <div>
        <h2>Weather in {weather.name}</h2>
        <div>temperature {weather.main.temp} Celcuis</div>
        <img alt="icon" src={`http://openweathermap.org/img/w/${icon}`}/>
        <div>wind {weather.wind.speed} m/s</div>
      </div>
    )
}

export default WeatherView