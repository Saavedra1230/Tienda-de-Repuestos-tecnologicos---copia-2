import { Request, Response } from "express";
import User from '../Dto/Register_U_Dto';
import UserService from "../Services/User_Services";


let register = async (req: Request, res: Response) => {
    try {
        const {
            name,
            email,
            password,
            age,
            phoneNumber,
            address,
            CC
        } = req.body;
        const registerUser = await UserService.register(new User(name, age, email, password, phoneNumber, address, CC))
        return res.status(201).json(
            { status: 'Usuario registrado correctamente!' }
        );
    } catch (error: any) {
        if (error && error.code == "ER_DUP_ENTRY") {
            return res.status(500).json({ errorInfo: error.sqlMessage }
            );
        }
    }
}


export default register;