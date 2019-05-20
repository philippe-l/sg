import React from 'react';

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
      fetchUrl("http://" + config.baseURL + ":"+config.basePort+"/instantPiTempAndHumidity", function(error, meta, body){
          console.log(error);
          if (error) return;
          console.log(meta);
          console.log(body);
          self.setState({
            temp: body.temperature,
            hum: body.humidity
          });
          // if (body.data === true) 
          // });
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