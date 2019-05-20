import React from 'react';
import {fetchUrl} from 'fetch';

import {config} from '../config';

export default class InstantPiCamera extends React.Component {

    constructor(props) {
        super(props);
        console.log(config.baseURL);
        this.state = {
            pictureURL: null
        }
    }

    componentWillMount() {
        const self = this;
        console.log(config.baseURL + ":"+config.basePort+"/instantPiCamera");
        fetchUrl("http://" + config.baseURL + ":"+config.basePort+"/instantPiCamera", function(error, meta, body){
            console.log(error);
            if (error) return;
            console.log(meta);
            console.log(body);
            setTimeout(()=>{
                self.setState({pictureURL: 'static/piPicture.jpg'})
            }, 5000);
            // if (body.data === true) 
            //     self.setState({pictureURL: 'static/piPicture.jpg'})
        });
    }

    render() {
      return this.state.pictureURL ? 
        <img src={this.state.pictureURL} alt="green closet"/> 
        :
        <p>Loading.....</p>
    }
  }