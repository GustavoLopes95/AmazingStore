import { Guid } from "guid-typescript";
import { Entity, IAggregationRoot } from "../Core";
import Category from "./Category";

interface IProduct {
  id?: Guid;
  name: string;
  description: string;
  active: boolean;
  value: number;
  createdAt: Date;
  image: string;
  stock?: number;
  category?: Category;
}

class Product extends Entity implements IAggregationRoot {
  constructor(properties: IProduct) {
    super();
    Object.assign(this, properties);
  }

  get name(): string {
    return this.name;
  }

  private set name(name: string) {
    this.name = name;
  }

  get description(): string {
    return this.description;
  }

  private set description(value: string) {
    this.description = value;
  }

  get active(): boolean {
    return this.active;
  }

  private set active(active: boolean) {
    this.active = active;
  }

  get value(): number {
    return this.value;
  }

  private set value(value: number) {
    this.value = value;
  }

  get createdAt(): Date {
    return this.createdAt;
  }

  private set createdAt(createdAt: Date) {
    this.createdAt = createdAt;
  }

  get image(): string {
    return this.image;
  }

  private set image(image: string) {
    this.image = image;
  }

  get stock(): number {
    return this.stock;
  }

  private set stock(stock: number) {
    this.stock = stock;
  }

  get category(): Category {
    return this.category;
  }

  private set category(category: Category) {
    this.category = category;
  }

  public changeDescription(description: string): void {
    this.description = description;
  }

  public changeCategory(category: Category): void {
    this.category = category;
  }

  public activate(): void {
    this.active = true;
  }

  public disable(): void {
    this.active = false;
  }

  public withdraw(quantity: number): void {
    if (quantity < 0) quantity *= -1;
    this.stock -= quantity;
  }

  public addStock(quantity: number): void {
    if (quantity < 0) quantity *= -1;
    this.stock += quantity;
  }

  public hasStock(quantity: number): boolean {
    return this.stock >= quantity;
  }
}
export default Product;
