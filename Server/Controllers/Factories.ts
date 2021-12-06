import IMediator from "../../Services/Core/Interfaces/IMediator";
import Mediator from "../../Services/Core/Messages/Mediator";
import AddOrderItemController from "./AddOrderItemController";
import IController from "./IController";

class Factory {

  public static async createSellingControllers(): Promise<IController> {
    const mediator = new Mediator();
    return new AddOrderItemController(mediator);
  }
}

export default Factory;