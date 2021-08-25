import { hash } from "bcryptjs";
import { getConnection, getCustomRepository } from "typeorm";
import { User } from "../entities/User";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUpdateUserDTO {
    id: string;
    name: string;
    email: string;
    password: string;
}

class UpdateUserService {
    async execute({ id, name, email, password }: IUpdateUserDTO) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        if (!id) {
            throw new Error("Incorrect ID!");
        }

        const notIdUser = await usersRepositories.findOne({
            id
        });

        if (!notIdUser) {
            throw new Error("ID doesn't exist!");
        }
        
        const passwordHash = await hash(password, 12)

        const updateUserId = await getConnection()
            .createQueryBuilder()
            .update(User)
            .set({ name, email, password: passwordHash })
            .where({ id: id })
            .execute();

        return updateUserId;
    }
}

export {
    UpdateUserService
}
