import { Guid } from "guid-typescript";
import Entity from "../../Core/DomainObject/Entity";

interface IOrderItem {
  orderId: Guid;
  productId: Guid;
  name: string;
  quantity: number;
  unityValue: number;
}

class OrderItem extends Entity {

  constructor(properties: IOrderItem) {
    super();
    Object.assign(this, properties);
  }

	public get orderId(): Guid {
		return this.orderId;
	}

  private set orderId(value: Guid) {
		this.orderId = value;
	}

  public get productId(): Guid {
		return this.productId;
	}

  private set productId(value: Guid) {
		this.productId = value;
	}

  public get productName(): string {
		return this.name;
	}

  private set name(value: string) {
		this.name = value;
	}

  public get quantity(): number {
		return this.quantity;
	}

  private set quantity(value: number) {
		this.quantity = value;
	}

  public get unityValue(): number {
		return this.unityValue;
	}

  private set unityValue(value: number) {
		this.unityValue = value;
	}

}

export default OrderItem;