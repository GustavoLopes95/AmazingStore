import { PrismaClient } from '@prisma/client';
import express, { Application } from 'express';
import expressAdapterRouter from './Helpers/ExpressAdapterRouter';

import './ApplicationContext';

class App {
  public readonly express: Application;

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
