import { Guid } from "guid-typescript";
abstract class Entity {
  protected constructor() {
    this.id = Guid.create();
  }

  get id(): Guid {
    return this.id;
  }

  set id(value: Guid) {
    this.id = value;
  }

  public equals(obj: object): boolean {
    const compareTo = obj as Entity;

    return this.id.equals(compareTo.id);
  }
}

export default Entity;
