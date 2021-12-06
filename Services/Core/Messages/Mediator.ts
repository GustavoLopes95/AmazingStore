import IMediator from "../Interfaces/IMediator";
import Command from "./Command";
import CommandHandlerFactory from "./CommandHandlerFactory";

class Mediator implements IMediator {
  static commandMap: Map<string, string> = new Map();

  public async sendComand(command: Command): Promise<void> {
    const handlerName = Mediator.commandMap.get(command.messageType);
    const commandHandler = CommandHandlerFactory.make(handlerName);
    commandHandler.handle(command);
  }

  public static registerCommandHandler = (handler: any, command: any) => {
    Mediator.commandMap.set(command.name, handler.name);
  }
}

export default Mediator;