export class User {
    private _username: string;
    private _password: string;
    private _role: number;

    constructor(username: string, password: string, role: number) {
        this._username = username;
        this._password = password;
        this._role = role;
    }

    get username(): string {
        return this._username;
    }

    set username(value: string) {
        this._username = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password = value;
    }

    get role(): number {
        return this._role;
    }

    set role(value: number) {
        this._role = value;
    }
}
