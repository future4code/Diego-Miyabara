import dotenv from 'dotenv';
import express, {Request, Response} from 'express';
import { AddressInfo } from "net";
import { UserDatabase } from './data/UserDatabase';
import { Authenticator } from './services/Authenticator';
import { IdGenerator } from './services/IdGenerator';

dotenv.config();

const app = express();

app.use(express.json());

const server = app.listen(process.env.DB_PORT || 3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});;

app.post("/signup", async (req: Request, res: Response) => {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password
        }

        if (!req.body.email || req.body.email.indexOf("@") === -1) {
            throw new Error("Email inválido!")
        }

        if(!req.body.password || req.body.password.length < 6) {
            throw new Error("Insira uma senha válida!")
        }

        const idGenerator = new IdGenerator()
        const newId = idGenerator.generate()

        const newUser = new UserDatabase()
        newUser.createUser(newId, userData.email, userData.password)

        const authenticator = new Authenticator()
        const token = authenticator.generateToken({id: newId})

        res.status(200).send({
            message: "Usuário criado com sucesso!",
            token: token
        })
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})

// const newUser = new UserDatabase()
// newUser.getUserByEmail("diego@gmail.com")

app.post("/login", async(req: Request, res: Response) => {
    try {
        const userData = {
            email: req.body.email,
            password: req.body.password
        }

        if(!userData.email || userData.email.indexOf("@") === -1) {
                throw new Error("Informe um email válido")
        }     

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getUserByEmail(userData.email)

        if (user.password !== userData.password){
            throw new Error("Usuário e/ou senha incorretos!")
        }

        const authenticator = new Authenticator();
        const token = authenticator.generateToken({id: user.id})

        res.status(200).send({token: token})
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})

app.get("/user/profile", async (req: Request, res: Response) => {
    try {
        const token = req.headers.authorization as string
        const authenticator = new Authenticator()
        const authData = authenticator.getData(token)

        const userDatabase = new UserDatabase()
        const user = await userDatabase.getUserById(authData.id)

        res.status(200).send({
            id: user.id,
            email: user.email
        })
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})