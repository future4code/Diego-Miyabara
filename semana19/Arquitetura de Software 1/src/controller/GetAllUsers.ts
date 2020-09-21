import {Request, Response} from 'express'
import { UserBusiness } from '../Business/UserBusiness'
import { BaseDatabase } from '../data/BaseDatabase'

export const GetAllUsers = async (req: Request, res: Response): Promise<any> => {
    try {
        const userBusiness = new UserBusiness()
        const token = req.headers.authorization as string
        const users = await userBusiness.getUsers(token)

        res.status(200).send({Users: users})
    } catch (error) {
        res.status(400).send({message: error.message})
    }finally{
        BaseDatabase.destroyConnection()
    }
}