import { Router } from 'express';
import Factory from '../../Controllers/Factories';
import ControllerHandlerAdapter from '../../Helpers/ControllerHandlerAdapter';

export default async (router: Router): Promise<void> => {
  router.get(
    '/order/:id/orderItem/:orderItemId',
    ControllerHandlerAdapter(Factory.createSellingControllers),
  );
}