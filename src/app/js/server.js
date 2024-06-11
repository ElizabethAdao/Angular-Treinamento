const jsonServer = require('json-server');
const bodyParser = require('body-parser');

const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();

// Aumente o limite de tamanho para JSON e URL encoded
server.use(bodyParser.json({ limit: '50mb' }));
server.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));

server.use(middlewares);
server.use(router);

server.listen(4000, () => {
  console.log('JSON Server is running on port 4000');
});
