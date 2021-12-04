import IController from "./IController";

class AddOrderItemController implements IController {

  public async handle(req: Request, res: Response): Promise<void> {
    // add contorller logic
  }
}

export default AddOrderItemController;