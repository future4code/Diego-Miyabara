import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { IdGenerator } from "./services/IdGenerator";
import { UserDatabase } from "./data/UserDatabase";
import { Authenticator, ROLE_TYPE } from "./services/Authenticator";
import { HashManager } from "./services/HashManager";
import { BaseDatabase } from "./data/BaseDatabase";

dotenv.config();

const app = express();

app.use(express.json());

app.post("/signup", async (req: Request, res: Response) => {
  try {
    // Item b. Validação do email
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    // Item c. Validação da senha
    if (!req.body.password || req.body.password.length < 6) {
      throw new Error("Invalid password");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
      role: req.body.role
    };

    if (userData.role !== ROLE_TYPE.ADMIN && userData.role !== ROLE_TYPE.NORMAL) {
        throw new Error ("Parâmetro ROLE precisa ser NORMAL ou ADMIN!")
    }

    const idGenerator = new IdGenerator();
    const id = idGenerator.generate();

    const hashManager = new HashManager()
    const cypherPassword = await hashManager.hash(userData.password)

    const userDb = new UserDatabase();
    await userDb.createUser(id, userData.email, cypherPassword, userData.role);

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id,
      role: userData.role
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  } finally {
    BaseDatabase.destroyConnection()
  }
});

app.post("/login", async (req: Request, res: Response) => {
  try {
    // Item b. Validação do email
    if (!req.body.email || req.body.email.indexOf("@") === -1) {
      throw new Error("Invalid email");
    }

    const userData = {
      email: req.body.email,
      password: req.body.password,
    };

    const userDatabase = new UserDatabase();
    const user = await userDatabase.getUserByEmail(userData.email);

    const hashManager = new HashManager()
    const checkPassword = await hashManager.compare(userData.password, user.password)

    if (!checkPassword) {
      throw new Error("Invalid password");
    }

    const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.id,
      role: user.role
    });

    res.status(200).send({
      token,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  } finally {
    BaseDatabase.destroyConnection()
  }
});

app.get("/user/profile", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string;

    const authenticator = new Authenticator();
    const authenticationData = authenticator.getData(token);

    if (authenticationData.role !== ROLE_TYPE.NORMAL){
      throw new Error ("Somente usuários com a role NORMAL pode acessar esta funcionalidade!")
    }

    const userDb = new UserDatabase();
    const user = await userDb.getUserById(authenticationData.id);

    res.status(200).send({
      id: user.id,
      email: user.email,
    });
  } catch (err) {
    res.status(400).send({
      message: err.message,
    });
  } finally {
    BaseDatabase.destroyConnection()
  }
});

const server = app.listen(process.env.DB_PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});

app.delete("/user/:id", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string

    const authenticator = new Authenticator()
    const authData = authenticator.getData(token)

    if (authData.role !== ROLE_TYPE.ADMIN) {
      throw new Error ("Somente ADMINS possuem acesso à esta funcionalidade!")
    }

    const id = req.params.id

    const userDatabase = new UserDatabase()
    await userDatabase.deleteUserById(id)

    res.status(200).send({message: "Usuário deletado com sucesso!"})
  } catch (error) {
    res.status(400).send({message: error.message})
  } finally {
    BaseDatabase.destroyConnection()
  }
})

app.get("/user/:id", async (req: Request, res: Response) => {
  try {
    const token = req.headers.authorization as string

    const authenticator = new Authenticator();
    authenticator.getData(token)

    const id = req.params.id as string

    const userDatabase = new UserDatabase()
    const user = await userDatabase.getUserById(id)

    res.status(200).send({
      id: user.id,
      email: user.email
    })
  } catch (error) {
    res.status(400).send({message: error.message})
  } finally {
    BaseDatabase.destroyConnection()
  }
})