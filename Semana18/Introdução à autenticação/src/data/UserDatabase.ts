import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();

export class UserDatabase {
    private connection = knex({
        client: "mysql",
        connection: {
            host: process.env.DB_HOST,
            port: 3306,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        }
    });

    private static TABLE_NAME = 'User';

    public async createUser(id: string, email: string, password: string): Promise<void> {
        try {
            await this.connection
            .insert({
                id,
                email,
                password
            })
            .into(UserDatabase.TABLE_NAME);
        } catch (error) {
            console.log(error.message);
        }
        
    }

    public async getUserByEmail(email: string): Promise<any> {
        try {
            const response = await this.connection.raw(`
                SELECT * FROM ${UserDatabase.TABLE_NAME}
                WHERE email = "${email}"
            `);

            return response[0][0];
        } catch (error) {
            console.log(error.message);
        }
    }

    public async getUserById(id: string): Promise<any> {
        try {
            const response = await this.connection.raw(`
                SELECT * FROM ${UserDatabase.TABLE_NAME}
                WHERE id = "${id}"
            `)

            return response[0][0]

        } catch (error) {
            console.log(error.message)
        }
    }
}