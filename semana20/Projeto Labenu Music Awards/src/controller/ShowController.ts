import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { BandInputDTO } from "../model/Band";
import { ShowBusiness } from "../business/ShowBusiness";
import { ShowDatabase } from "../data/ShowDatabase";
import { ShowInputDTO } from "../model/Show";

export class ShowController {
    private static showBusiness = new ShowBusiness(
        new ShowDatabase(),
        new IdGenerator(),
        new Authenticator()
    );

    async registerShow(req: Request, res: Response) {
        try {
            const input: ShowInputDTO = {
                week_day: req.body.week_day as string,
                start_time: Number(req.body.start_time),
                end_time: Number(req.body.end_time),
                band_id: req.body.band_id as string
            }
            const token = req.headers.authorization as string

            await ShowController.showBusiness.registerShow(input, token);

            res.status(200).send({ message: "Show registred sucessfully!" });

        } catch (error) {
            if(error.message.includes("Duplicate entry")){
                res.status(400).send({message: "Show is already registred!"})
            } else {
                res.status(400).send({ message: error.message });
            }
        }

        await BaseDatabase.destroyConnection();
    }

    // async searchBand(req: Request, res: Response) {
    //     try {
    //         const name = req.query.name as string
    //         const id = req.query.id as string
    //         const token = req.headers.authorization as string

    //         const result = await BandController.bandBusiness.searchBand(token, name, id)

    //         res.status(200).send({Band: result})
    //     } catch (error) {
    //         res.status(400).send({message: error.message})
    //     } finally {
    //         await BaseDatabase.destroyConnection()
    //     }
    // }
}