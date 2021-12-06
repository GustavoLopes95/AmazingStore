import Command from "../Messages/Command";

export default interface IMediator {
  sendCommand<T>(command: Command<T>): Promise<void>;
  // sendNotify<T>(command: Command<T>): Promise<void>;
}