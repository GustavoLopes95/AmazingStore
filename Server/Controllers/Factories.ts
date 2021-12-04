import AddOrderItemController from "./AddOrderItemController";
import IController from "./IController";

class Factory {

  public static async createSellingControllers(): Promise<IController> {
    return new AddOrderItemController();
  }
}

export default Factory;