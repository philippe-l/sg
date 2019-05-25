import React from 'react';
// import {fetchUrl} from 'fetch';
import Image from 'react-bootstrap/Image'
import Spinner from 'react-bootstrap/Spinner'

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
        // fetchUrl("http://" + config.baseURL + ":"+config.basePort+"/instantPiCamera", function(error, meta, body){
        //     console.log(error);
        //     if (error) return;
        //     console.log(meta);
        //     console.log(body);
        //     setTimeout(()=>{
        //         self.setState({pictureURL: 'static/piPicture.jpg'})
        //     }, 5000);
        //     // if (body.data === true) 
        //     //     self.setState({pictureURL: 'static/piPicture.jpg'})
        // });

        fetch("http://" + config.baseURL + ":"+config.basePort+"/instantPiCamera")
        .then(response => response.json())
        .then(data => {
          console.log(data);
          self.setState({pictureURL: 'static/piPicture.jpg'})
        });
    }

    render() {
      return this.state.pictureURL ? 
        <Image src={this.state.pictureURL} alt="green closet" width={800} fluid/> 
        :
        <Spinner animation="border" variant="success" />
    }
  }