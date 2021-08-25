import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";


class ListUserIdService {
    async execute(id: string){
        const usersRepositories = getCustomRepository(UsersRepositories);

        const userId = await usersRepositories.find({
            where: {
                id: id
            }
        });

        return userId;
    }
}

export {
    ListUserIdService
}