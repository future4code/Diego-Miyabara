import { User, UserRole } from "../model/User";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator } from "../services/Authenticator";
import { Band, BandInputDTO } from "../model/Band";
import { BandDatabase } from "../data/BandDatabase";

export class BandBusiness {

    constructor(
        private bandDatabase: BandDatabase,
        private idGenerator: IdGenerator,
        private authenticator: Authenticator
    ){}

    async registerBand(band: BandInputDTO, token:string): Promise<void> {        
        if(!band.name || !band.music_genre || !band.responsible ) {
            throw new Error("All inputs must be filled!")
        }

        const user = this.authenticator.getData(token)

        if (User.stringToUserRole(user.role) !== UserRole.ADMIN) {
            throw new Error("Only ADMINS can signup Bands!")
        }

        const id = this.idGenerator.generate();

        return await this.bandDatabase.createBand(id, band.name, band.music_genre, band.responsible)
    }

    async searchBand(token: string, name?: string, id?: string): Promise<Band[]> {
        if(!name && !id) {
            throw new Error("At least one query param must be filled!")
        }

        this.authenticator.getData(token)

        const bands = await this.bandDatabase.getBand(id,name)

        return bands.map((band) => {
            return Band.toBandModel(band)
        })
    }
}