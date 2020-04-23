
import express from 'express';

import serverRender from "./serverRender";
import routes from "./routes";

const server = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

// APIs
server.use("/api", routes);

// SERVER RENDERING
server
  .disable('x-powered-by')
  .use(express.static(process.env.RAZZLE_PUBLIC_DIR))
  .get('/*', serverRender);

export default server;
