import { Request, Response } from "express";
import IController from "./IController";
import IMediator from '../../Services/Core/Interfaces/IMediator';
import AddOrderItemCommand, { IAddOrderItemCommand } from "../../Services/Sellings/Application/Commands/AddOrderItemCommand";

class AddOrderItemController implements IController {

  constructor(private readonly mediator: IMediator) {}

  public async handle(req: Request<IAddOrderItemCommand>, res: Response): Promise<Response> {
    const command = new AddOrderItemCommand({
      clientId: req.body.clientId,
      productId: req.body.productId,
      productName: req.body.productName,
      quantity: req.body.quantity,
      unityValue: req.body.unityValue
    });

    this.mediator.sendCommand(command);
    return res.status(200).send("OK");
  }
}

export default AddOrderItemController;