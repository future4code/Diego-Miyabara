import { Request, Response } from "express";
import { UserInputDTO, LoginInputDTO} from "../model/User";
import { BaseDatabase } from "../data/BaseDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { BandBusiness } from "../business/BandBusiness";
import { BandDatabase } from "../data/BandDatabase";
import { BandInputDTO } from "../model/Band";

export class BandController {
    private static bandBusiness = new BandBusiness(
        new BandDatabase(),
        new IdGenerator(),
        new Authenticator()
    );

    async registerBand(req: Request, res: Response) {
        try {
            const input: BandInputDTO = {
                name: req.body.name,
                music_genre: req.body.music_genre,
                responsible: req.body.responsible
            }
            const token = req.headers.authorization as string

            await BandController.bandBusiness.registerBand(input, token);

            res.status(200).send({ message: "Band registred sucessfully!" });

        } catch (error) {
            if(error.message.includes("Duplicate entry")){
                res.status(400).send({message: "Band is already registred!"})
            } else {
                res.status(400).send({ message: error.message });
            }
        }

        await BaseDatabase.destroyConnection();
    }

    async searchBand(req: Request, res: Response) {
        try {
            const name = req.query.name as string
            const id = req.query.id as string
            const token = req.headers.authorization as string

            const result = await BandController.bandBusiness.searchBand(token, name, id)

            res.status(200).send({Band: result})
        } catch (error) {
            res.status(400).send({message: error.message})
        } finally {
            await BaseDatabase.destroyConnection()
        }
    }
}