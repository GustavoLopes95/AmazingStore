import Message from './Message';

abstract class Event extends Message {

  protected constructor(timeStamp: Date) {
    super();
    this.timeStamp = Date.now();
  }

  public get timeStamp(): number {
    return this.timeStamp;
  }

  private set timeStamp(value: number) {
    this.timeStamp = value;
  }
}

export default Event;