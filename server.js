//add all imports and initializations of constants
const http = require('http');
const app = require('./app');

//create the server and listen to the port 4000
const server = http.createServer(app);
server.listen(process.env.PORT || 4000);
