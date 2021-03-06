import knex from "knex";
import { ROLE_TYPE } from "../services/Authenticator";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase{

  private static TABLE_NAME = "User";

  public async createUser(
    id: string,
    email: string,
    password: string,
    role: ROLE_TYPE
  ): Promise<void> {
    await this.getConnection()
      .insert({
        id: id,
        email: email,
        password: password,
        role: role
      })
      .into(UserDatabase.TABLE_NAME);
  }

  public async getUserByEmail(email: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ email });

    return result[0];
  }

  public async getUserById(id: string): Promise<any> {
    const result = await this.getConnection()
      .select("*")
      .from(UserDatabase.TABLE_NAME)
      .where({ id });

    return result[0];
  }

  public async deleteUserById(id: string): Promise<void> {
    await this.getConnection()
    .delete("*")
    .from(UserDatabase.TABLE_NAME)
    .where('id', id)
  }
}
