import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';
import Chart from '../components/chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temp = cityData.list.map((el) => el.main.temp);
    const humidity = cityData.list.map((el) => el.main.humidity);
    const pressure = cityData.list.map((el) => el.main.pressure);
    console.log(temp);
    return (
        <tr key = {name}>
          <td> {name}</td>
          <td>
            <Chart data={temp} color="orange" />
          </td>
          <td>
            <Chart data={humidity} color="green" />
          </td>
          <td>
            <Chart data={pressure} color="blue" />
          </td>
        </tr>
    );

  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
        <tr>
          <th>City</th>
          <th>Temperature</th>
          <th>Pressure</th>
          <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
        {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({weather}) {
  return {weather};
}

export default connect(mapStateToProps)(WeatherList);