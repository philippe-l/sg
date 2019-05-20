import React from 'react';
import {fetchUrl} from 'fetch';

import {config} from '../config';

export default class TempAndHumidity extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        temp: 0,
        hum: 0
      }
    }

    componentWillMount() {
      const self = this;
      console.log(config.baseURL + ":"+config.basePort+"/instantPiTempAndHumidity");
      fetch("http://" + config.baseURL + ":"+config.basePort+"/instantPiTempAndHumidity")
        .then(response => response.json())
        .then(data => {
          console.log(data);
          self.setState({
            temp: data.temperature,
            hum: data.humidity
          });
        });
    }
    
    render() {
      return (
        <div>
          <h2>TempAndHumidity</h2>
          <ul>
            <li>Temperature : {this.state.temp}</li>
            <li>Humidité : {this.state.hum}</li>
          </ul>
        </div>
      );
    }
  }