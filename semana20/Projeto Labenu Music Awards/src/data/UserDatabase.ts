import { BaseDatabase } from "./BaseDatabase";
import { User } from "../model/User";
import { InvalidParameterError } from "../error/InvalidParameterError";

export class UserDatabase extends BaseDatabase {

  protected tableName: string = "LAMA_USERS";

  private toModel(dbModel?: any): User | undefined {
    return (
      dbModel &&
      new User(
        dbModel.id,
        dbModel.name,
        dbModel.email,
        dbModel.password,
        dbModel.role
      )
    );
  }

  public async createUser(
    id: string,
    name: string,
    email: string,
    password: string,
    role: string
  ): Promise<void> {
    try {
      await super.getConnection()
        .insert({
          id,
          name,
          email,
          password,
          role
        })
        .into(this.tableName);
    } catch (error) {
        throw new Error(error.sqlMessage || error.message);
      }
    }


  public async getUserByEmail(email: string): Promise<User | undefined> {
    const result = await super.getConnection()
      .raw(`
        SELECT * FROM ${this.tableName} WHERE email = "${email}";
      `)

    return this.toModel(result[0][0]);
  }
}
