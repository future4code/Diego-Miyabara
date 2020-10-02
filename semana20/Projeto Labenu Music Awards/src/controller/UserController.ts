import { Request, Response } from "express";
import { UserInputDTO, LoginInputDTO} from "../model/User";
import { UserBusiness } from "../business/UserBusiness";
import { BaseDatabase } from "../data/BaseDatabase";
import { UserDatabase } from "../data/UserDatabase";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class UserController {
    private static userBusiness = new UserBusiness(
        new UserDatabase(),
        new IdGenerator(),
        new HashManager(),
        new Authenticator()
    );

    async signup(req: Request, res: Response) {
        try {

            const input: UserInputDTO = {
                name: req.body.name,
                email: req.body.email,
                password: req.body.password,
                role: req.body.role
            }

            const token = await UserController.userBusiness.createUser(input);

            res.status(200).send({ message: "User created sucessfully!", token });

        } catch (error) {
            res.status(error.code || 400).send({ message: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

    async login(req: Request, res: Response) {
        try {
            const loginData: LoginInputDTO = {
                email: req.body.email as string,
                password: req.body.password as string
            };

            const token = await UserController.userBusiness.login(loginData);

            res.status(200).send({ message: "User logged sucessfully!", token });
        } catch (error) {
            res.status(error.code || 400).send({ message: error.message });
        }

        await BaseDatabase.destroyConnection();
    }

}