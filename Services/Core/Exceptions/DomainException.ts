export default class DomainException extends Error {
  constructor(message: string, code: number = 0) {
    super(message);

    this.code = code;
  }

  public get code(): number {
    return this.code;
  }

  private set code(value : number) {
    this.code = value;
  };
}