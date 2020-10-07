import { BaseDatabase } from "./BaseDatabase";
import { Band } from "../model/Band";

export class BandDatabase extends BaseDatabase {

    protected tableName: string = "LAMA_BANDS";

    private toBandModel(dbModel?: any): Band | undefined {
        return (
        dbModel &&
        new Band(
            dbModel.id,
            dbModel.name,
            dbModel.music_genre,
            dbModel.responsible
        )
        );
    }

    public async createBand(
        id: string,
        name: string,
        music_genre: string,
        responsible: string
    ): Promise<void> {
        try {
        await super.getConnection()
            .insert({
            id,
            name,
            music_genre,
            responsible
            })
            .into(this.tableName);
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getBand(id?: string, name?: string): Promise<Band[]> {
        if(!id){
            id=""
        }else if(!name){
            name=""
        }
        try {
            const response = await super.getConnection()
            .raw(`
                SELECT * FROM ${this.tableName} WHERE id LIKE "%${id}%" AND name LIKE "%${name}%";
            `)

            return response[0]
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}
