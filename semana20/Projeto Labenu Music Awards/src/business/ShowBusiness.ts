import { User, UserRole } from "../model/User";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { ShowDatabase } from "../data/ShowDatabase";
import { ShowInputDTO, ShowOutputDTO } from "../model/Show";

export class ShowBusiness {

    constructor(
        private showDatabase: ShowDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ){}

    async registerShow(show: ShowInputDTO, token:string): Promise<void> {        
        if(!show.week_day || !show.start_time || !show.end_time || !show.band_id ) {
            throw new Error("All inputs must be filled!")
        }

        if(show.week_day !== "FRIDAY" && show.week_day !== "SATURDAY" && show.week_day !== "SUNDAY") {
            throw new Error ("Week days must be FRIDAY, SATURDAY or SUNDAY!")
        }

        if(show.start_time < 8 || show.start_time > 22) {
            throw new Error ("Start time must be between 8 to 22")
        }

        if(show.end_time <9 || show.end_time > 23) {
            throw new Error ("End time must be between 9 to 23")
        }

        if(show.start_time >= show.end_time) {
            throw new Error ("Start time cannot be later or the same as end time")
        }

        const showDb = await this.showDatabase.getAllShows()

        showDb && showDb.map((eachShow) => {
            if(show.week_day === eachShow.week_day){
                if(eachShow.start_time <= show.start_time  && show.start_time < eachShow.end_time){
                    if(eachShow.start_time < show.end_time && show.end_time > eachShow.end_time){
                        throw new Error("There is already a show registred at this time!")
                    }
                }
            }
        })

        const user = this.authenticator.getData(token)

        if (User.stringToUserRole(user.role) !== UserRole.ADMIN) {
            throw new Error("Only ADMINS can register Shows!")
        }

        const id = this.idGenerator.generate();

        return await this.showDatabase.createShow(id, show.week_day, show.start_time, show.end_time, show.band_id)
    }

    async getShowsByWeekDay (week_day: string, token: string): Promise<ShowOutputDTO[]> {
        if(!week_day) {
            throw new Error("Week day must be provided on query params")
        }

        if(week_day !== "FRIDAY" && week_day !== "SATURDAY" && week_day !== "SUNDAY") {
            throw new Error ("Week day must be FRIDAY, SATURDAY or SUNDAY")
        }


        this.authenticator.getData(token)

        const shows = this.showDatabase.getShowByWeekDay(week_day)

        return shows
    }
}