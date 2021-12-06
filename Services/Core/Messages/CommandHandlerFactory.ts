import OrderHandler from "../../Sellings/Application/Handlers/OrderHandler";
import OrderRepository from "../../Sellings/Data/OrderRepository";
import PrismaDatabaseManager from "../Data/PrismaDatabaseManager";

class CommandHandlerFactory {

  static make(handlerName: string) {
    if(handlerName == "OrderHandler") {
      return CommandHandlerFactory.createOrderHandler();
    }
  }

  public static createOrderHandler() {
    return new OrderHandler(new OrderRepository(new PrismaDatabaseManager()));
  }
}
export default CommandHandlerFactory;