import { Application, Router } from 'express';
import { readdirSync, statSync } from 'fs';
import path from 'path';

function importRoutes(directory, app: Application) {
  readdirSync(directory).map(async file => {
    const fullPath = path.join(directory, file);

    if (statSync(fullPath).isDirectory()) {
      importRoutes(fullPath, app);
    } else {
      const router = Router();

      const fileExtension = path.extname(fullPath);

      const route = fullPath
        .substr(fullPath.indexOf('routes'))
        .replace('routes', '')
        .replace(fileExtension, '')
        .replace('index', '')
        .replace(/\\/g, '/');

      (await import(fullPath)).default(router);

      app.use(route, router);
    }
  });
}

export default (app: Application): void => {
  importRoutes(`${__dirname}/../routes`, app);
};
