import express, { Request, Response } from "express";
import { AddressInfo } from "net";
import dotenv from 'dotenv'
import { CreateUser } from "./controller/CreateUser";
import { Login } from "./controller/Login";
import { GetAllUsers } from "./controller/GetAllUsers";
import { DeleteUser } from "./controller/DeleteUser";

const app = express();
app.use(express.json());

dotenv.config()

app.get("/teste", async (req: Request, res: Response) => {

    try {
        res.status(200).send("Oi, seu server está funcionando!");
    } catch (error) {

        res.status(400).send("ERRO");

    }
});
app.put("/signup", CreateUser)
app.post("/login", Login)
app.get("/all", GetAllUsers)
app.delete("/:id", DeleteUser)

const server = app.listen(3000, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});
