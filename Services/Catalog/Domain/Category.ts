import { Guid } from "guid-typescript";
import { Entity } from "../Core";

interface ICategory {
  id: Guid;
  name: string;
  code: number;
}

class Category extends Entity {
  constructor(properties: ICategory) {
    super();
    Object.assign(this, properties);
  }

  get name(): string {
    return this.name;
  }

  private set name(name: string) {
    this.name = name;
  }

  get code(): number {
    return this.code;
  }

  private set code(code: number) {
    this.code = code;
  }
}
export default Category;
