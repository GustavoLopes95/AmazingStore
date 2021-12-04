import { Request, Response } from 'express';

import IController from '../Controllers/IController';

export default function ControllerHandlerAdapter(
  factoryMethod: (...args: unknown[]) => Promise<IController>,
) {
  return async (request: Request, response: Response): Promise<Response> => {
    try {
      const controller: IController = await factoryMethod();
      return await controller.handle(request, response);
    } catch (error) {
      return response.status(500).json({
        message: 'Something unexpected happened, pleases await a minute and try again',
      });
    }
  };
}
