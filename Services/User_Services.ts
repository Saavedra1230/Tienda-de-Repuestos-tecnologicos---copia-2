import User from '../Dto/Register_U_Dto';
import GenerateHash from '../Helpers/Generate_Hash';
import UserRepository from '../Repositories/User_Repository';



class UserService{
    static async register(user: User){
        user.password = await GenerateHash(user.password);
        return await UserRepository.add(user);
    }
}

export default UserService;