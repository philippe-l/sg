var restify = require('restify');
var instantPiCam = require('./camera/InstantPiCamera');
var instantSensor = require('./sensor/InstantSensor');


function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

async function respondInstantPiCamera(req, res, next) {
  // const piCam = new InstantPiCameraManager;
  try {
    // piCam.getPicture();
    const piCamResult = await instantPiCam.getPiPicture();
    // console.log('piCamResult = ' +piCamResult);
    res.send(true);
    next();
  }
  catch (error) {
    console.error('Probleme with Cam ' + error);
  }
}

async function respondInstantPiTempAndHumidity(req, res, next) {
  try {
    const instantSensorResult = await instantSensor.getTemperatureAndHumidity();
    console.log(instantSensorResult); 
    res.send(instantSensorResult);
    next();
  }
  catch(error) {
    console.error('Probleme with sensor ' + error);
  }
}

var server = restify.createServer();
// server.get('/hello/:name', respond);
// server.head('/hello/:name', respond);


/* static files = index and js */

server.get('/*', restify.plugins.serveStatic({
  directory: '../front/build',
  default: 'index.html'
}));

server.get('/static/*', // don't forget the `/*`
     restify.plugins.serveStaticFiles('../front/build/static')
);

/* REST API */

server.get('/instantPiCamera', respondInstantPiCamera);
server.get('/instantPiTempAndHumidity', respondInstantPiTempAndHumidity);


server.listen(3333, function() {
  console.log('Super green api back end listening at ', server.name, server.url);
});