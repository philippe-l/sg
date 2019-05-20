exports.getTemperatureAndHumidity = function () {
    var sensor = require('node-dht-sensor');
 
    sensor.read(22, 4, function(err, temperature, humidity) {
        if (!err) {
            console.log('temp: ' + temperature.toFixed(1) + '°C, ' +
                'humidity: ' + humidity.toFixed(1) + '%'
            );
            return {
                temp: temperature.toFixed(1),
                humidity: humidity.toFixed(1)
            }
        }
    });
};