export class FormEntity {
    private _id: number;
    private _title: string;
    private _content: object;
    private _userId: number;
    constructor(id: number, title: string, content: object, userId: number) {
        this._id = id;
        this._title = title;
        this._content = content;
        this._userId = userId;
    }

    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get content(): object {
        return this._content;
    }

    set content(value: object) {
        this._content = value;
    }

    get userId(): number {
        return this._userId;
    }

    set userId(value: number) {
        this._userId = value;
    }
}
