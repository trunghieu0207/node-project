export class UserProfileEntity {
    private _firstName: string;
    private _lastName: string;
    private _phone: string;
    private _email: string;
    private _gender: string;
    private _dateOfBirth: string;
    private _userId?: number;

    constructor(
        firstName: string,
        lastName: string,
        phone: string,
        email: string,
        gender: string,
        dateOfBirth: string,
        userId?: number
    ) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._phone = phone;
        this._email = email;
        this._gender = gender;
        this._dateOfBirth = dateOfBirth;
        this._userId = userId;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    get lastName(): string {
        return this._lastName;
    }

    set lastName(value: string) {
        this._lastName = value;
    }

    get phone(): string {
        return this._phone;
    }

    set phone(value: string) {
        this._phone = value;
    }

    get email(): string {
        return this._email;
    }

    set email(value: string) {
        this._email = value;
    }

    get gender(): string {
        return this._gender;
    }

    set gender(value: string) {
        this._gender = value;
    }

    get dateOfBirth(): string {
        return this._dateOfBirth;
    }

    set dateOfBirth(value: string) {
        this._dateOfBirth = value;
    }

    get userId(): number | undefined {
        return this._userId;
    }

    set userId(value: number | undefined) {
        this._userId = value;
    }
}
