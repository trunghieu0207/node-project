import mysql, { Connection } from 'mysql2/promise';

export class DatabaseConnection {
    private readonly connection: Promise<Connection>;

    constructor() {
        this.connection = this.createConnection();
    }

    private async createConnection(): Promise<Connection> {
        const connection = await mysql.createConnection({
            host: process.env.DB_HOST,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME
        });
        await connection.connect();

        return connection;
    }

    public getConnection(): Promise<Connection> {
        return this.connection;
    }
}
