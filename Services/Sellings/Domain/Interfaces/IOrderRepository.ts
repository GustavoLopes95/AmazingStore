import { Guid } from "guid-typescript";
import IRepository from "../../../Core/Data/IRepository";
import Order from "../Order";
import OrderItem from "../OrderItem";
import Voucher from "../Voucher";

export default interface IOrderRepository extends IRepository<Order> {

  findById(id: Guid): Promise<Order>;
  getOrderByClient(clientId: Guid): Promise<Array<Order>>;
  getOrderDraftByClient(clientId: Guid): Promise<Array<Order>>;
  findOrderDraftByClient(clientId: Guid): Promise<Order>;

  add(order: Order): Promise<void>;
  update(order: Order): Promise<void>;

  findOrderItemById(id: Guid): Promise<OrderItem>;
  getOrderItemProductByOrder(orderId: Guid, productId: Guid): Promise<OrderItem>;

  addOrderItem(orderItem: OrderItem): Promise<void>;
  updateOrderItem(orderItem: OrderItem): Promise<void>;
  removeOrderItem(orderItem: OrderItem): Promise<void>;

  findVoucherByCode(code: string): Promise<Voucher>;
}