var restify = require('restify');
var InstantPiCameraManager = require('./camera/InstantPiCamera';)


function respond(req, res, next) {
  res.send('hello ' + req.params.name);
  next();
}

function respondInstantPiCamera(req, res, next) {
  const piCam = new InstantPiCameraManager;
  try {
    piCam.getPicture();
  }
  catch (error) {
    console.error('Probleme with Cam ' + error);
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


server.listen(3333, function() {
  console.log('Super green api back end listening at ', server.name, server.url);
});