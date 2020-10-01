import { BaseDatabase } from "./BaseDatabase";
import { Show } from "../model/Show";

export class ShowDatabase extends BaseDatabase {

    protected tableName: string = "LAMA_SHOWS";

    private toShowModel(dbModel?: any): Show | undefined {
        return (
        dbModel &&
        new Show(
            dbModel.id,
            dbModel.week_day,
            dbModel.start_time,
            dbModel.end_time,
            dbModel.band_id
        )
        );
    }

    public async createShow(
        id: string,
        week_day: string,
        start_time: number,
        end_time: number,
        band_id: string
    ): Promise<void> {
        try {
        await super.getConnection()
            .insert({
            id,
            week_day,
            start_time,
            end_time,
            band_id
            })
            .into(this.tableName);
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}
