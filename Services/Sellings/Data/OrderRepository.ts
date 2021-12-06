import { Guid } from "guid-typescript";
import { IDatabaseManager } from "../../Core/Data/DatabaseManager";
import PrismaDatabaseManager from "../../Core/Data/PrismaDatabaseManager";
import IOrderRepository from "../Domain/Interfaces/IOrderRepository";
import Order from "../Domain/Order";
import OrderItem from "../Domain/OrderItem";


class OrderRepository implements IOrderRepository {
  public readonly unitOfWork;

  public constructor(private readonly manager: PrismaDatabaseManager) {
    this.unitOfWork = manager.getConnection().$transaction;
  }

  public async findById(id: Guid): Promise<Order> {
    const order: Order = this.manager.getConnection().order.findUnique({
      where: {
        id
      }
    });

    return order;
  }

  public async findOrderDraftByClient(clientId: Guid): Promise<Order> {
    const order = this.manager.getConnection().order.findUnique({
      where: {
        clientId
      }
    });

    return order;
  }

  public async add(order: Order): Promise<void> {
    return Promise.resolve();
  }

  public async updateOrderItem(orderItem: OrderItem): Promise<void> {
    return Promise.resolve();
  }

}
export default OrderRepository;