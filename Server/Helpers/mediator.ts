import IRequest from '../../Services/Core/Interfaces/IRequest';
import IResponse from '../../Services/Core/Interfaces/IResponse';


class Mediator {

  public static relationalMap;

  constructor() {
  }

  public send(request: IRequest) {

  }

  public static addDependencies(request: IRequest, response: IResponse) {
    Mediator.relationalMap[request] = {
      response: new response()
    }
  }
}