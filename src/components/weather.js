import React from 'react';
import './styles.css';
import moment from 'moment';
import { Button } from 'semantic-ui-react';

const refresh = () => {
    window.location.reload();
}

const CardExampleCard = ({weatherData}) => (

    <div className="main">

          <div className="top">
          <p className="header">{weatherData.name}</p>
          <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
          </div>

          <div className="flex">
          <p className="day">Day: {moment().format('dddd')}</p>
          <p className="date">Date: {moment().format('LL')}</p>
          </div>

          
        <div className="style">
          <div className="flex">
          <p className="temp">Temperature: {weatherData.main.temp} &deg;C</p>
          <p className="desc">Description: {weatherData.weather[0].description}</p>
          </div>

       
          <div className="flex">
          <p className="sunrise">Sunrise: {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString('en-IN')}</p>
          <p className="sunset">Sunset: {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString('en-IN')}</p>
          </div>

          
          <div className="flex">
          <p className="wind-speed">Wind speed: {weatherData.wind.speed} m/s</p>
          <p className="humid">Humidity: {weatherData.main.humidity} %</p>
          </div>
        </div>
        
    </div>
)

export default CardExampleCard;