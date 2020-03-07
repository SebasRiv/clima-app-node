const axios = require('axios');

const getClima = async (lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=aafdfcc24a5cbd6cfade6ed43f098df4`)

    return resp.data.main.temp;
}

module.exports = {
    getClima
}

