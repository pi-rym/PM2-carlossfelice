const express = require("express");
const router = require("../routes/index");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(cors());
server.use(express.json());

server.use((req, res, next) => {
  console.log("mi primer Middleware");
  next();
});

const miMiddleware = (req, res, next) => {
  console.log(
    `He recibido una request del tipo ${req.method} a la ruta ${req.url}`
  );
  next();
};

server.use(miMiddleware);
server.use(router);

server.use((err, req, res, next) => {
  res.status(err.statusCode || 500).json({ message: err.message });
  next();
});

module.exports = server;
