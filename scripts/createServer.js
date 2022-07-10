const http = require('http');
const hostname = '127.0.0.1'; //loopback --> nuestra direccion local
const port = 3000;

const server = http.createServer((request , response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');

    const url = request.url;
    if(url === '/about') {
        response.write('Hello World!');
    } else if ( url === '/contact') {
        response.write('Datos contacto');
    } else if ( url === '/date') {
        response.write(`Fecha actual ${myFirstModule.myDate()}`);
    } else {
    response.write('Hello World!');
    response.end();
    }
})

server.listen(port, hostname, () => {
    console.log(`Servidor levantado con éxito en http://${hostname}:${port}/`);
})