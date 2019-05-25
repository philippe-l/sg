import React, {Component} from 'react';
import './App.css';
import InstantPiCamera from './components/InstantPiCamera';
import TempAndHumidity from './components/TempAndHumidity';
import Login from './components/Login';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state={
      jwt: null
    }
  }

  setJwt(jwtToken) {
    this.setState({
      jwt: jwtToken
    });
  }
  
  render() {
    if (this.state.jwt) {
      return (
        <div>
          <h1>My super green monitoring app</h1>
          <InstantPiCamera data-test="InstantPiCamera" jwt={this.state.jwt}/>
          <TempAndHumidity jwt={this.state.jwt}/>
        </div>
      );
    }
    return(<Login setJwt={this.setJwt}/>);
  }
}

export default App;
