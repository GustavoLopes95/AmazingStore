import { Guid } from "guid-typescript";
import Command from "../../../Core/Messages/Command";

import { Validator } from 'fluentvalidation-ts';

export interface IAddOrderItemCommand {
  clientId: Guid;
  productId: Guid;
  productName: string;
  quantity: number;
  unityValue: number;
}

class AddOrderItemCommand extends Command<AddOrderItemCommand> {

  private _clientId: Guid;
  private _productId: Guid;
  private _productName: string;
  private _quantity: number;
  private _unityValue: number;

  constructor(properties: IAddOrderItemCommand) {
    super();
    Object.assign(this, properties);
  }

  public get clientId(): Guid {
		return this._clientId;
	}

  private set clientId(value: Guid) {
		this._clientId = value;
	}

  public get productId(): Guid {
		return this._productId;
	}

  private set productId(value: Guid) {
		this._productId = value;
	}

  public get productName(): string {
		return this._productName;
	}

  private set productName(value: string) {
		this._productName = value;
	}

  public get quantity(): number {
		return this._quantity;
	}

  private set quantity(value: number) {
		this._quantity = value;
	}

  public get unityValue(): number {
		return this._unityValue;
	}

  private set unityValue(value: number) {
		this._unityValue = value;
	}

  public isValid(): boolean {
    this.validationResult = new AddOrderItemValidation().validate(this);
    return Object.keys(this.validationResult).length === 0;
  }
}

class AddOrderItemValidation extends Validator<IAddOrderItemCommand> {

  constructor() {
    super();

    this.ruleFor('clientId')
      //@ts-ignore
      .notEqual(Guid.EMPTY)
      .withMessage('ClientId is required');

    this.ruleFor('productId')
      //@ts-ignore
      .notEqual(Guid.EMPTY)
      .withMessage('ProductId is required');

    this.ruleFor('productName')
      .notEmpty()
      .withMessage('Product name is required');

    this.ruleFor('quantity')
      .greaterThan(0)
      .withMessage('Product quantity must be greater than zero');

    this.ruleFor('quantity')
      .lessThan(100)
      .withMessage('The max product quantity is 100 units');

    this.ruleFor('unityValue')
      .greaterThan(0)
      .withMessage('Product value must to be greater than zero');

    this.ruleFor('unityValue')
      .greaterThan(0)
      .withMessage('Product value must to be greater than zero');
  }
}

export default AddOrderItemCommand;