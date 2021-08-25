import { Router } from 'express';
import { CreateUserController } from './controller/CreateUserController';
import { DeleteUserController } from './controller/DeleteUserController';
import { ListUserController } from './controller/ListUserController';
import { ListUserIdController } from './controller/ListUserIdController';
import { UpdateUserController } from './controller/UpdateUserController';
const router = Router();

router.get('/production', (req, res) => {
    return res.json({ msg: 'server running, Docker' })
});


const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const updateUserController =  new UpdateUserController()
const deleteUserController = new DeleteUserController()
const listUserIdController = new ListUserIdController()


router.post('/user', createUserController.handle);
router.get('/user', listUserController.handle);
router.get('/user/:id', listUserIdController.handle);
router.put('/user/:id', updateUserController.handle);
router.delete('/user/:id', deleteUserController.handle);

export {
    router
}
