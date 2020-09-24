import {Request, Response} from 'express'
import { UserBusiness } from '../Business/UserBusiness'
import { BaseDatabase } from '../data/BaseDatabase'
import { UserDatabase } from '../data/UserDatabase'

export const DeleteUser = async(req: Request, res: Response): Promise<any> => {
    try {
        const id = req.params.id as string
        const token = req.headers.authorization as string

        const userDatabase = new UserDatabase()
        const userBusiness = new UserBusiness()

        await userBusiness.deleteUser(token)

        await userDatabase.deleteUser(id)

        res.status(200).send({message: `Usuário deletado com sucesso!`})
    } catch (error) {
        res.status(400).send({message: error.message})
    } finally {
        BaseDatabase.destroyConnection()
    }
}