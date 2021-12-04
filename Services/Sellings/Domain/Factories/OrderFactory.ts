import { Guid } from "guid-typescript";
import Order from "../Order";


class OrderFactory {

  public static createDraftOrder(clientId: Guid) {
    const order = new Order({ clientId })
    order.updateToDraft();
    return order;
  }
}

export default OrderFactory;