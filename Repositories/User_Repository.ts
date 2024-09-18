import db from '../Config/Config-db';
import User from '../Dto/Register_U_Dto';

class UserRepository {
    static async add(user: User) {
        try {
            const sql = 'INSERT INTO Users (name, email, password, age, phoneNumber, address, CC) VALUES (?, ?, ?, ?, ?, ?, ?)';
            const values = [user.name, user.email, user.password, user.age, user.phoneNumber, user.address, user.CC];
            const [result] = await db.execute(sql, values);
            return result;
        } catch (error) {
            console.error('Error al registrar usuario');
        }
    }
}

export default UserRepository;