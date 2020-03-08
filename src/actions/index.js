import transformForecast from './../services/transformForecast'
import {api_key, url_base_forecast} from './../constants/api_url'

export const SET_CITY = 'SET_CITY '
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA '

const setCity = (payload) => ({type: SET_CITY, payload})
const setForecastData = (payload) => ({type: SET_FORECAST_DATA, payload})

export const setSelectedCity = (payload) => {
  return dispatch => {

    // Activar en el estado un indicador de busqueda de datos
    dispatch(setCity(payload))

    const url = `${url_base_forecast}?q=${payload}&appid=${api_key}`
    return fetch(url)
      .then( (data) => (data.json()) )
      .then( (weather_data) => {
        const forecastData = transformForecast(weather_data)
        console.log(forecastData)

        // Modificar el estado con el resultado del promise (fetch)
        dispatch(setForecastData({city: payload, forecastData}))
      })
  }
}