import { Router, Request, Response } from 'express';

export default async (router: Router): Promise<void> => {
  router.get('/health', (request: Request, response: Response) => {
    return response.status(200).json({
      message: 'OK'
    });
  });
};
