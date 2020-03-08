import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ForecastExtended from '../components/ForecastExtended';
import { getForecastDataFromCities, getCity} from './../reducers'
import { connect } from 'react-redux'

class ForecastExtendedContainer extends Component {
  render() {
    const {city, forecastData} = this.props
    return (
      <ForecastExtended city={city} forecastData={forecastData}></ForecastExtended>
    );
  }
}

ForecastExtendedContainer.propTypes = {
  city: PropTypes.string.isRequired,
  forecastData: PropTypes.array.isRequired,
};

// const mapStateToProps = (state) => ({city: state.city })
const mapStateToProps = state => ({city: getCity(state), forecastData: getForecastDataFromCities(state) })

export default connect(mapStateToProps, null)(ForecastExtendedContainer);