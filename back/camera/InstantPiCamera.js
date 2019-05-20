exports.getPiPicture = function () {
    const PiCamera = require('pi-camera');
    const timestamp = date.getTime();
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