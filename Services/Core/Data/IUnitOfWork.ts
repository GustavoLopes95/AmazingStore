export default interface IUnitOfWork {
  commit(): Promise<boolean>;
}
