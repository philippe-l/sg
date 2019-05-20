const PiCamera = require('pi-camera');

export default class InstantPiCameraManager {

    getPicture = function() {
        const myCamera = new PiCamera({
            mode: 'photo',
            output: `../../front/build/static/piPicture.jpg`,
            width: 640,
            height: 480,
            nopreview: true,
          });
          
          myCamera.snap()
            .then((result) => {
              // Your picture was captured
              return true;
            })
            .catch((error) => {
               // Handle your error
               console.error("error while capturing rasbpberry image " + error);
            });
    }

} 