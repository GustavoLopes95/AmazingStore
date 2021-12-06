import { Request, Response } from 'express';

export default interface IController {
  handle(request: Request<any>, response: Response): Promise<Response>;
}
