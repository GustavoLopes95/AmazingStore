import { ValidationErrors } from "fluentvalidation-ts/dist/ValidationErrors";
import IRequest from "../Interfaces/IRequest";
import Message from "./Message";

interface ValidationResult {
  errors: Array<object>;
}

abstract class Command<T> extends Message implements IRequest<boolean> {

  protected constructor() {
    super();
    this.timeStamp = Date.now();
  }

  public get timeStamp(): number {
    return this.timeStamp;
  }

  public set timeStamp(value: number) {
    this.timeStamp = value;
  }

  public get validationResult(): ValidationErrors<T> {
    return this.validationResult;
  }

  public set validationResult(value: ValidationErrors<T>) {
    this.validationResult = value;
  }

  abstract isValid(): boolean;
}

export default Command;