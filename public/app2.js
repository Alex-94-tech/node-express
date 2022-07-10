const express = require('express');
const app = express();
const config = require('./modules/config');
const hostname = config.HOST;
const port = config.PORT;

app.use('/home', (request, response, next) => {
    console.log('Hemos entrado al home');
});

app.use((request, response) => {
    console.log('ENDPOINT FINAL')
})

app.listen(port, hostname, () => {
    console.log(`Servidor levantado con éxito en http://${hostname}:${port}/`);
    console.log(`Entorno: ${process.env.NODE_ENV}`)
});