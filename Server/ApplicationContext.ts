import Mediator from "../Services/Core/Messages/Mediator";
import AddOrderItemCommand from "../Services/Sellings/Application/Commands/AddOrderItemCommand";
import OrderHandler from "../Services/Sellings/Application/Handlers/OrderHandler";

Mediator.registerCommandHandler(OrderHandler, AddOrderItemCommand);