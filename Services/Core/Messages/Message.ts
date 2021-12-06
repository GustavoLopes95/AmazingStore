import { Guid } from "guid-typescript";


abstract class Message {

  private _messageType: string;
  private _aggregateId: Guid;

  protected constructor() {
    this.messageType = this.constructor.name;
  }
  
  public get messageType(): string {
    return this._messageType;
  }

  private set messageType(value: string) {
    this._messageType = value
  }

  public get aggregateId(): Guid {
    return this._aggregateId;
  }

  protected set aggregateId(value: Guid) {
    this._aggregateId = value
  }
}

export default Message;