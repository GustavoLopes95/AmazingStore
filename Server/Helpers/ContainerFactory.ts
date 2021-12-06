

class ContainerFactory {

  public static createOrderHandler() {
    const orderRepository = new OrderRepository();
    return new OrderHandler(orderRepository);
  }
}