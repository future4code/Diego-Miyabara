import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {

  private static TABLE_NAME = "User_Arq";

  public async createUser(id: string, name: string, email: string, password: string, role?: string): Promise<void> {
    await this.getConnection()
    .insert({
      id,
      name, 
      email,
      password,
      role
    })
    .into(UserDatabase.TABLE_NAME)
  }

  public async getUserByEmail(email: string): Promise<any> {
    const response = await this.getConnection()
    .select("*")
    .from(UserDatabase.TABLE_NAME)
    .where("email", email)

    return response[0]
  }

  public async getAllUsers(): Promise<any> {
    const response = await this.getConnection()
    .select("*")
    .from(UserDatabase.TABLE_NAME)

    return response
  }

  public async deleteUser(id: string): Promise<void> {
    await this.getConnection()
    .delete("*")
    .from(UserDatabase.TABLE_NAME)
    .where("id", id)
  }
}
