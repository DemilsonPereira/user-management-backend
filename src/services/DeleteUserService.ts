import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";


class DeleteUserService {
    async execute(id: string) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        if (!id) {
            throw new Error("Incorrect ID!");
        }

        const getIdUser = await usersRepositories.findOne({
            id,
        });

        if (!getIdUser) {
            throw new Error("ID doesn't exist!");
        }

        const deleteUserId = await usersRepositories.delete(id)

        return deleteUserId;
    }
}

export {
    DeleteUserService
}