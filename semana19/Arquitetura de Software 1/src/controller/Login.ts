import {Request, Response} from 'express'
import { UserBusiness } from '../Business/UserBusiness'
import { BaseDatabase } from '../data/BaseDatabase'

export const Login = async (req: Request, res: Response): Promise<any> => {
    try {
        const email = req.body.email
        const password = req.body.password

        const userBusiness = new UserBusiness()
        const token = await userBusiness.login(email, password)

        res.status(200).send({
            message: "Login efetuado com sucesso!",
            token
        })
    } catch (error) {
        res.status(400).send({
            message: error.message
        })
    } finally{
        BaseDatabase.destroyConnection()
    }
}