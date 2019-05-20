exports.getTemperatureAndHumidity = async function () {
    // var sensor = require('node-dht-sensor');
    const sensor = require('node-dht-sensor').promises;
 
    // await sensor.read(22, 4, function(err, temperature, humidity) {
    //     if (!err) {
    //         console.log('temp: ' + temperature.toFixed(1) + '°C, ' +
    //             'humidity: ' + humidity.toFixed(1) + '%'
    //         );
    //         return {
    //             temp: temperature.toFixed(1),
    //             humidity: humidity.toFixed(1)
    //         }
    //     }
    // });

    try {
        const { temperature, humidity } = await sensor.read(22, 4);
        console.log('temp: ' + temperature.toFixed(1) + '°C, ' +
            'humidity: ' + humidity.toFixed(1) + '%'
        );
        return { temperature, humidity } ;
    } catch (err) {
        console.error('Failed to read sensor data:', err);
    }
};