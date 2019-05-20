exports.getPiPicture = function () {
    const PiCamera = require('pi-camera');
    const myCamera = new PiCamera({
        mode: 'photo',
        output: '..front/build/static/latestpiPicture.jpg',
        width: 640,
        height: 480,
        nopreview: true,
    });

    myCamera.snap()
    .then((result) => {
        console.log('rbPiZero taking picture....')
        return 'latestpiPicture.jpg';
    })
    .catch((error) => {
        console.error('An error occured while taking picture with rbPiZero cam ' + error);
    });
};