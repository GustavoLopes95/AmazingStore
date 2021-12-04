import express from 'express';
import expressAdapterRouter from './Helpers/ExpressAdapterRouter';

class App {
  public express: express.Application;

  public constructor() {
    this.express = express();
    this.middleware();
    expressAdapterRouter(this.express);
  }

  private middleware(): void {
    this.express.use(express.json({ limit: '50mb' }));
  }
}

export default new App().express;
