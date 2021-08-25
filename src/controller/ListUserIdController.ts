import { Request, Response } from 'express';
import { ListUserIdService } from '../services/ListUserIdService';

class ListUserIdController {
    async handle(request: Request, response: Response) {
        const { id: idUser } = request.body;

        const listUserIdService = new ListUserIdService();

        const userId = await listUserIdService.execute(idUser);

        return response.json(userId);

    }
}

export {
    ListUserIdController
}