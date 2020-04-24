
import express from 'express';
import cors from 'cors';

import serverRender from "./serverRender";
import routes from "./routes";

const server = express();
server.use(cors({ origin: process.env.RAZZLE_ORIGIN }));

// APIs
server.use("/api", routes);

// SERVER RENDERING
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', serverRender);

export default server;
