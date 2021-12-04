import { Guid } from "guid-typescript";


abstract class Message {
  
  public get messageType(): string {
    return this.messageType;
  }

  protected set messageType(value: string) {
    this.messageType = value
  }

  public get aggregateId(): Guid {
    return this.aggregateId;
  }

  protected set aggregateId(value: Guid) {
    this.aggregateId = value
  }

  protected constructor() {
    this.messageType = this.constructor.name;
  }
}

export default Message;