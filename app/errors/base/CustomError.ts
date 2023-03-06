export interface CustomErrorParams {
    name: string | null;
    code: string | null;
}
export class CustomError extends Error {
    public code: string | null;
    constructor({ name = null, code = null }: CustomErrorParams) {
        super(name ?? '');
        this.code = code;
    }

    public getErrorMessageObject() {
        return {
            code: this.code,
            message: this.message
        };
    }
}
