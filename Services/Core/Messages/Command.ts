import { ValidationErrors } from "fluentvalidation-ts/dist/ValidationErrors";
import IRequest from "../Interfaces/IRequest";
import Message from "./Message";

interface ValidationResult {
  errors: Array<object>;
}

abstract class Command<T> extends Message implements IRequest<boolean> {

  private _timeStamp: number;
  private _validationResult: ValidationErrors<T>;

  protected constructor() {
    super();
    this.timeStamp = Date.now();
  }

  public get timeStamp(): number {
    return this._timeStamp;
  }

  private set timeStamp(value: number) {
    this._timeStamp = value;
  }

  public get validationResult(): ValidationErrors<T> {
    return this._validationResult;
  }

  public set validationResult(value: ValidationErrors<T>) {
    this._validationResult = value;
  }

  abstract isValid(): boolean;
}

export default Command;