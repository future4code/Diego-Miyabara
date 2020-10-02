import { BaseDatabase } from "./BaseDatabase";
import { Show, ShowInputDTO, ShowOutputDTO } from "../model/Show";

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

    public async getAllShows(): Promise<any[]> {
        try {
            const response = await super.getConnection()
            .raw(`SELECT * FROM ${this.tableName}`)

            return response[0]
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getShowByWeekDay(week_day: string): Promise<ShowOutputDTO[]> {
        try {
            const response = await super.getConnection()
            .raw(`
                SELECT LAMA_SHOWS.start_time, LAMA_BANDS.name, LAMA_BANDS.music_genre
                FROM LAMA_BANDS
                JOIN LAMA_SHOWS ON LAMA_BANDS.id = LAMA_SHOWS.band_id
                WHERE LAMA_SHOWS.week_day = "${week_day}"
                ORDER BY LAMA_SHOWS.start_time ASC;
            `)

            return response[0]
        } catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }
}
