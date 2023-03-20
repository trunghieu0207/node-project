import express, { NextFunction } from 'express';
import {
    AddCustomerController,
    DeleteCustomerController,
    GetAllCustomerController,
    GetCustomerController
} from '@http/controllers';
import { UpdateCustomerController } from '@http/controllers/user/UpdateCustomer.controller';

export const User = express.Router();

User.get(
    '/findCustomer',
    async (req: express.Request, res: express.Response, next: NextFunction) => {
        await new GetCustomerController(req, res, next).getUser();
    }
);

User.get(
    '/findAllCustomer',
    async (req: express.Request, res: express.Response, next: NextFunction) => {
        await new GetAllCustomerController(req, res, next).getUser();
    }
);

User.post(
    '/addCustomer/',
    async (req: express.Request, res: express.Response, next: NextFunction) => {
        await new AddCustomerController(req, res, next).addCustomer();
    }
);

User.put(
    '/updateCustomer/',
    async (req: express.Request, res: express.Response, next: NextFunction) => {
        await new UpdateCustomerController(req, res, next).updateCustomer();
    }
);
User.delete(
    '/deleteCustomer/:id',
    async (req: express.Request, res: express.Response, next: NextFunction) => {
        await new DeleteCustomerController(req, res, next).deleteCustomer();
    }
);
