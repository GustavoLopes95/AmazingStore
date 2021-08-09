import IAggregateRoot from "../DomainObject/IAggregateRoot";
import IUnitOfWork from "./IUnitOfWork";

export default interface IRepository<T = IAggregateRoot> {
  get unitOfWork(): IUnitOfWork;
}
