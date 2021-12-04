import { Guid } from "guid-typescript";
import IRequestHandler from "../../../Core/Interfaces/IRequestHandler";
import Command from "../../../Core/Messages/Command";
import OrderFactory from "../../Domain/Factories/OrderFactory";
import IOrderRepository from "../../Domain/Interfaces/IOrderRepository";
import Order from "../../Domain/Order";
import OrderItem from "../../Domain/OrderItem";
import AddOrderItemCommand from "../Commands/AddOrderItemCommand";


class OrderHandler implements IRequestHandler<AddOrderItemCommand, Promise<boolean>> {

    constructor(private readonly orderRepository: IOrderRepository) {}
 
    public async handle(message: AddOrderItemCommand): Promise<boolean> {
      if(!this.validateCommand(message)) return false;

      let order = await this.orderRepository.findOrderDraftByClient(message.clientId);
      const orderItem = new OrderItem({ productId: message.productId, productName: message.productName, quantity: message.quantity, unityValue: message.unityValue });
      
      if(!order) {
        this.addOrderItemInCleanOrder(order, orderItem, message.clientId);
        return true;
      }
      
      this.addOrderItemInExistingOrder(order, orderItem)

      return this.orderRepository.unitOfWork.commit();
    }

    private addOrderItemInExistingOrder(order: Order, orderItem: OrderItem): void {
      const itemExists = order.orderItemExists(orderItem);
      order.addItem(orderItem);

      if(!itemExists) {
        order.addItem(orderItem);
        return;  
      }

      const item = order.orderItem.find(item => item.productId === orderItem.productId);
      this.orderRepository.updateOrderItem(item);
    }

    private addOrderItemInCleanOrder(order: Order, orderItem: OrderItem, clientId: Guid): void {
      order = OrderFactory.createDraftOrder(clientId);
      order.addItem(orderItem);
      this.orderRepository.add(order);
    }

    public validateCommand(message: Command<AddOrderItemCommand>): boolean {
      if(message.isValid()) return true;

      Object.keys(message.validationResult).forEach(field => {
        // throw Event error
      });

      return false;
    }
}

export default OrderHandler;