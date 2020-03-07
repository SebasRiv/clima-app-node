const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

//argv direccion

/* lugar.getLugarLaLng( argv.direccion)
    .then( console.log ); */

/*  clima.getClima(40.750000, -74.000000)
        .then(console.log)
        .catch(console.log); */

const getClima = async (direccion) => {

    try {
        const coords = await lugar.getLugarLaLng(direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);

        return `El clima de ${coords.direccion} es de ${temp - 273.15}° `
        
    } catch (error) {
        return `No se pudo determinar clima de ${direccion}`;
    }
    //Codigo que funciona pero no es el mejor
/*     lugar.getLugarLaLng(direccion)
        .then(resp => {
            clima.getClima(resp.lat, resp.lng)
                .then(response => {
                    console.log(`El clima de ${resp.direccion} es ${response - 273.15}° Celsius`);
                })
                .catch(console.log);
        })
        .catch(console.log(`No se puedo determinar el clima de ${direccion}`)); */
}

getClima(argv.direccion)
    .then(console.log)
    .catch(console.log);

