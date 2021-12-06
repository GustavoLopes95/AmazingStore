import IAggregateRoot from "../DomainObject/IAggregateRoot";
import DatabaseManager, { IDatabaseManager } from "./DatabaseManager";
import IUnitOfWork from "./IUnitOfWork";

export default interface IRepository<T extends IAggregateRoot> {
  get unitOfWork(): IUnitOfWork;
}
