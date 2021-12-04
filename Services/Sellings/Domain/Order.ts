import { Guid } from "guid-typescript";
import OrderStatusEnum from './enums/OrderStatusEnum';
import Entity from "../../Core/DomainObject/Entity";
import IAggregationRoot from "../../Core/DomainObject/IAggregateRoot";
import OrderItem from "./OrderItem";


interface IOrder {
	code: number;
	clientId: Guid;
	voucherId: Guid;
	hasVoucher: boolean;
	discount: number;
	totalValue: number;
	createdAt: Date;
	orderStatus: OrderStatusEnum;
}
  


class Order extends Entity implements IAggregationRoot {

	private readonly _orderItem: Array<OrderItem> = [];

	public constructor(properties: IOrder) {
		super();
		Object.assign(this, properties);
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

	public get voucherId(): Guid {
		return this.voucherId;
	}

	public set voucherId(value: Guid) {
		this.voucherId = value;
	}

	public get hasVoucher(): boolean {
		return this.hasVoucher;
	}

	public set hasVoucher(value: boolean) {
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
	
}
export default Order;