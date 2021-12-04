import IRequest from "./IRequest";

export default interface IRequestHandler<TRequest extends IRequest<TResponse>, TResponse> {
  handle(request: TRequest): TResponse;
}