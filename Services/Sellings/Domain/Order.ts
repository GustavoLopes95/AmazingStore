import { Guid } from "guid-typescript";
import OrderStatusEnum from './Enums/OrderStatusEnum';
import Entity from "../../Core/DomainObject/Entity";
import IAggregationRoot from "../../Core/DomainObject/IAggregateRoot";
import OrderItem from "./OrderItem";
import Voucher from "./Voucher";
import DiscountTypeEnum from "./Enums/DiscountTypeEnum";
import DomainException from "../../Core/Exceptions/DomainException";


interface IOrder {
	clientId: Guid;
	hasVoucher?: boolean;
	discount?: number;
	totalValue?: number;
}

class Order extends Entity implements IAggregationRoot {

	private readonly _orderItem: Array<OrderItem>;

	public constructor(properties: IOrder) {
		super();
		Object.assign(this, properties);
    this._orderItem = []
	}

	public get code(): number {
		return this.code;
	}

	public set code(value: number) {
		this.code = value;
	}

	public get clientId(): Guid {
		return this.clientId;
	}

	private set clientId(value: Guid) {
		this.clientId = value;
	}

	public get voucher(): Voucher {
		return this.voucher;
	}

	private set voucher(value: Voucher) {
		this.voucher = value;
	}

	public get hasVoucher(): boolean {
		return this.hasVoucher;
	}

	private set hasVoucher(value: boolean) {
		this.hasVoucher = value;
	}

	public get discount(): number {
		return this.discount;
	}

	private set discount(value: number) {
		this.discount = value;
	}

	public get totalValue(): number {
		return this.totalValue;
	}

	private set totalValue(value: number) {
		this.totalValue = value;
	}

	public get createdAt(): Date {
		return this.createdAt;
	}

	private set createdAt(value: Date) {
		this.createdAt = value;
	}

	public get orderStatus(): OrderStatusEnum {
		return this.orderStatus;
	}

	private set orderStatus(value: OrderStatusEnum) {
		this.orderStatus = value;
	}

	public get orderItem(): ReadonlyArray<OrderItem> {
		return this._orderItem;
	}

  public updateTotalValueWithDiscount(): void {
    if(!this.hasVoucher) return;

    let discount = 0;
    let value = this.totalValue;

    if(this.voucher.discountType === DiscountTypeEnum.PERCENT && this.voucher.percent > 0) {
      discount = (value * this.voucher.percent) / 100;
    } else if(this.voucher.discountValue > 0) {
      discount = this.voucher.discountValue;
    }

    value -= discount;
    this.totalValue = value < 0 ? 0 : value;
    this.discount = discount;
  }

  public updateOrderValue(): void {
    this.totalValue = this.orderItem.reduce((acc, curr) => {
      return acc + curr.getTotalValue();
    }, 0);

    this.updateTotalValueWithDiscount();
  }

  public applyVoucher(voucher: Voucher): void {
    this.voucher = voucher;
    this.hasVoucher = true;
    this.updateOrderValue();
  }

  public orderItemExists(orderItem: OrderItem): boolean {
    return this.orderItem.findIndex(item => item.productId === orderItem.productId) > -1;
  }

  public addItem(orderItem: OrderItem) {
    if(!orderItem.isValid()) return;

    orderItem.attachOrder(this.id);

    if(this.orderItemExists(orderItem)) {
      const oldItem = this._orderItem.find(item => item.productId === orderItem.productId);
      oldItem.addQuantity(orderItem.quantity);
      orderItem = oldItem;

      const index = this._orderItem.indexOf(oldItem);
      this._orderItem.splice(index, 1);
    }

    this._orderItem.push(orderItem);

    this.updateOrderValue();
  }

  public removeItem(orderItem: OrderItem): void {
    if(!orderItem.isValid()) return;

    const index = this._orderItem.indexOf(orderItem);

    if(index === -1) throw new DomainException('The item does not exist');
    this._orderItem.splice(index, 1);

    this.updateOrderValue();
  }

  public updateItem(orderItem: OrderItem): void {
    if(!orderItem.isValid()) return;

    orderItem.attachOrder(this.id);

    const index = this._orderItem.indexOf(orderItem);

    if(index === -1) throw new DomainException('The item does not exist');

    this._orderItem.splice(index, 1);
    this._orderItem.push(orderItem);

    this.updateOrderValue();
  }

  public updateItemQuantity(orderItem: OrderItem, quantity: number): void {
    orderItem.updateUnity(quantity);
    this.updateItem(orderItem);
  }

  public updateToDraft(): void {
    this.orderStatus = OrderStatusEnum.DRAFT;
  }

  public initializeOrder(): void {
    this.orderStatus = OrderStatusEnum.INITIALIZED;
  }

  public updateToPaid(): void {
    this.orderStatus = OrderStatusEnum.PAID;
  }

  public cancelOrder(): void {
    this.orderStatus = OrderStatusEnum.CANCELLED;
  }

  public isValid(): boolean {
    return true;
  }

}
export default Order;