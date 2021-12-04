import { Guid } from "guid-typescript";
import Entity from "../../Core/DomainObject/Entity";

interface IOrderItem {
  productId: Guid;
  productName: string;
  quantity: number;
  unityValue: number;
}

class OrderItem extends Entity {

  constructor(properties: IOrderItem) {
    super();
    Object.assign(this, properties);

    this.isValid();
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
		return this.productName;
	}

  private set productName(value: string) {
		this.productName = value;
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

  public attachOrder(id: Guid) {
    this.orderId = id;
  }

  public getTotalValue(): number {
    return this.quantity * this.unityValue;
  }

  public addQuantity(unity: number): void {
    if(unity < 0)unity = unity * -1;
    this.quantity += unity;
  }

  public removeQuantity(unity: number): void {
    if(unity > 0)unity = unity * -1;
    this.quantity -= unity;
  }

  public updateUnity(unity: number): void {
    this.quantity = unity;
  }

  public isValid(): boolean {
    return true;
  }
}

export default OrderItem;