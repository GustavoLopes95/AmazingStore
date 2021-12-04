import Entity from "../../Core/DomainObject/Entity";
import DiscountTypeEnum from "./enums/DiscountTypeEnum";

interface IVoucher {
  code: string;
  percent: number;
  discountValue: number;
  quantity: number;
  discountType: DiscountTypeEnum;
  createdAt: Date;
  usedAt: Date;
  validUntil: Date;
  isActive: boolean;
  wasUsed: boolean;
}

class Voucher extends Entity {

  constructor(properties: IVoucher) {
    super();
    Object.assign(this, properties);
  }

  public get code(): string {
    return this.code;
  }

  private set code(value: string) {
    this.code = value;
  }

  public get percent(): number {
    return this.percent;
  }

  private set percent(value: number) {
    this.percent = value;
  }

  public get discountValue(): number {
    return this.percent;
  }  

  private set discountValue(value: number) {
    this.percent = value;
  }

  public get quantity(): number {
    return this.quantity;
  }

  private set quantity(value: number) {
    this.percent = value;
  }

  public get discountType(): DiscountTypeEnum {
    return this.discountType;
  }

  private set discountType(value: DiscountTypeEnum) {
    this.discountType = value;
  }

  public get createdAt(): Date {
    return this.createdAt;
  }

  private set createdAt(value: Date) {
    this.createdAt = value;
  }

  public get usedAt(): Date {
    return this.usedAt;
  }

  private set usedAt(value: Date) {
    this.createdAt = value;
  }

  public get validUntil(): Date {
    return this.validUntil;
  }

  private set validUntil(value: Date) {
    this.validUntil = value;
  }

  public get isActive(): boolean {
    return this.isActive;
  }

  private set isActive(value: boolean) {
    this.isActive = value;
  }

  public get wasUsed(): boolean {
    return this.wasUsed;
  }

  private set wasUsed(value: boolean) {
    this.wasUsed = value;
  }
}

export default Voucher;