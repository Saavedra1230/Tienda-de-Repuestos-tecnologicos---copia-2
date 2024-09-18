import e, { Request, Response } from "express";
import dotenv from "dotenv";
import Login_Dto from "../Dto/Login_U_Dto";
import UserService from "../Services/User_Services"
import GenerateToken from "../Helpers/Generate_Token";
dotenv.config();

/* let Login = async (req: Request, res: Response) => {
    try {
        const { phoneNumber, password, email } = req.body;
        const login = await UserService.login(new Login_Dto(phoneNumber, password, email));
        if (login.logged) {
            return res.status(200).json({
                status: login.status,
                token: GenerateToken({ id: login.id }, process.env.KEY_TOKEN, 5)
            });
        }
        return res.status(401).json({
            status: login.status
        });
    } catch (error) {
        console.log(error);
    }
} */

/* export default Login; */