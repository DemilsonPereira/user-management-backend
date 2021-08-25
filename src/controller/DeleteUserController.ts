import { Request, Response } from 'express';
import { DeleteUserService } from '../services/DeleteUserService';

class DeleteUserController {
    async handle(request: Request, response: Response) {
        const { id: idUser } = request.body;

        const deleteUserService = new DeleteUserService();

        const deleteUser = await deleteUserService.execute(idUser)

        return response.status(200).send();
    }
}

export {
    DeleteUserController
}