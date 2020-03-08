import React from 'react'
import WeatherIcons from 'react-weathericons'
import PropTypes from 'prop-types'
import { CLOUD,  SUN,  RAIN,  SNOW, THUNDER, DRIZZLE } from './../../../constants/weathers'
import './styles.css'

const icons =  {
  [CLOUD]: 'cloud',
  [SUN]: 'day-sunny',
  [RAIN]: 'rain',
  [SNOW]: 'snow',
  [THUNDER]: 'day-thunderstorm',
  [DRIZZLE]: 'day-showers'
}

const getWeatherIcon = (weatherState) => {
  const icon = weatherState ? icons[weatherState] : 'day-sunny'
  const sizeIcon = '4x'
  return (
    <WeatherIcons className='wicon' name={icon} size={sizeIcon}/>
  )
}

const WeatherTemperature = ({ temperature, weatherState}) => (
  <div className='weatherTemperatureCont'>
    { getWeatherIcon(weatherState) }
    <span className='temperature'>{temperature}</span>
    <span className='temperatureType'>Cº</span>
  </div>
)

WeatherTemperature.propTypes = {
  temperature: PropTypes.number.isRequired,
  weatherState: PropTypes.string.isRequired
}

export default WeatherTemperature