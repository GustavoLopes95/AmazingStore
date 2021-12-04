import IUnitOfWork from "../Core/Data/IUnitOfWork";

export default class CatalogContext implements IUnitOfWork {
  constructor(private readonly connectionContext) {}

  public product();

  commit(): Promise<boolean> {
    return Promise.resolve(true);
  }
}
