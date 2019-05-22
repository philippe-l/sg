const { StillCamera } = require("pi-camera-connect");
import * as fs from "fs";
 
// Take still image and save to disk
exports.getPiPicture  = async () => {
 
    const stillCamera = new StillCamera();
 
    const image = await stillCamera.takeImage();
 
    fs.writeFileSync("../front/build/static/piPicture.jpg", image);
};


/*
exports.getPiPicture = function () {
    const PiCamera = require('pi-camera');
    const myCamera = new PiCamera({
        mode: 'photo',
        output: '../front/build/static/piPicture.jpg',
        width: 640,
        height: 480,
        nopreview: true,
    });

    myCamera.snap()
    .then((result) => {
        console.log('rbPiZero took a picture named static/piPicture.jpg');
        return true;
    })
    .catch((error) => {
        console.error('An error occured while taking picture with rbPiZero cam ' + error);
    });
};
*/