import express, { Application } from 'express';

import db from './db/connection';
import routes from './routes';
import { middlewares } from './middlewares';

class Server {
  private app: Application;
  private port: string;

  constructor() {
    this.app = express();
    this.port = process.env.PORT || '3000';

    this.dbConnection();    // -> Defines the connection to the database <-
    this.vulnerabilities(); // -> Defines the fix for the vulnerabilities <-
    middlewares(this.app);  // -> Defines middlewares <-
    routes(this.app);       // -> Defines routes <-
  }

  async dbConnection() {
    try {
      await db().authenticate();
    } catch (err) {
      console.log(err);
    }
  }

  vulnerabilities() {
    this.app.disable('x-powered-by');
  }

  listen() {
    this.app.listen(this.port, () => {
      console.log(`👽 Server Working on ports ${this.port} 👽`);
    });
  }
}

export default Server;
