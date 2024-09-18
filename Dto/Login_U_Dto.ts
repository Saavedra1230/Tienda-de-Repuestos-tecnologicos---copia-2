
class Login_Dto {
    private _phoneNumber: string;
    private _password: string;
    private _email: string
    constructor(
        phoneNumber: string,
        password: string,
        email: string
    ) {
        this._phoneNumber = phoneNumber;
        this._password = password;
        this._email = email
    }

    // Getters
    get phoneNumber(): string {
        return this._phoneNumber;
    }

    get password(): string {
        return this._password;
    }

    get email(): string {
        return this._email;
    }

    // Setters
    set phoneNumber(phoneNumber: string) {
        this._phoneNumber = phoneNumber;
    }

    set password(password: string) {
        this._password = password;
    }

    set email(email: string) {
        this._email = email;
    }
}

export default Login_Dto;