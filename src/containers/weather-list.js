import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {fetchWeather} from '../actions/index';
import {Sparklines, SparklinesLine} from 'react-sparklines';

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
            <Sparklines data={temp}>
              <SparklinesLine color="orange" />
            </Sparklines>
          </td>
          <td>
            <Sparklines data={humidity}>
              <SparklinesLine color="green" />
            </Sparklines>
          </td>
          <td>
            <Sparklines data={pressure}>
              <SparklinesLine color="blue" />
            </Sparklines>
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