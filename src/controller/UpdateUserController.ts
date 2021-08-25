import { Request, Response } from 'express';
import { UpdateUserService } from '../services/UpdateUserService';


class UpdateUserController {
    async handle(request: Request, response: Response) {
        const { id, name, email, password } = request.body;

        const updateUserService = new UpdateUserService();

        const updateUserID = await updateUserService.execute({ id, name, email, password });

        return response.status(200).send();
    }
}

export {
    UpdateUserController
}