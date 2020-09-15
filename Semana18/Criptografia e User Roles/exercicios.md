# Exercício 1

a) Round é a quantidade de vezes em que o código irá passar pelo processo de criptografia, quanto maior, maior a segurança porém também maior o tempo de resposta. Salt é a string gerada a partir da quantidade de rounds solicitados.

b) export class HashManager {
    public async hash(password: string): Promise<string> {
        const rounds = Number(process.env.BCRYPT_COST)
        const salt = await bcryptjs.genSalt(rounds)

        const result = await bcryptjs.hash(password, salt)

        return result
    }
}

c) public async compare(password: string, cypherPassword: string): Promise<boolean> {
        return bcryptjs.compare(password, cypherPassword)
    }

# Exercício 2

a) O cadastro deve ser atualizado primeiro caso contrário o login nunca será bem sucedido.

b)  const hashManager = new HashManager()
    const cypherPassword = await hashManager.hash(userData.password)

    const userDb = new UserDatabase();
    await userDb.createUser(id, userData.email, cypherPassword);

c)  const hashManager = new HashManager()
    const checkPassword = await hashManager.compare(userData.password, user.password)

    if (!checkPassword) {
      throw new Error("Invalid password");
    }

d) Neste ponto ainda não seria necessário fazer mudanças pois não adicionamos mais parâmetros no token criado, quando for o caso teremos que alterar também.

# Exercício 3

a) ALTER TABLE User
ADD role ENUM("NORMAL", "ADMIN") DEFAULT "NORMAL";

b) Alteração feita no arquivo Authenticator.ts

c)    const userData = {
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

d)  const authenticator = new Authenticator();
    const token = authenticator.generateToken({
      id: user.id,
      role: user.role
    });

# Exercício 4

a)  if (authenticationData.role !== ROLE_TYPE.NORMAL){
      throw new Error ("Somente usuários com a role NORMAL pode acessar esta funcionalidade!")
    }

# Exercício 5

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
  }
})

# Exercício 6

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
  }
})

# Exercício 7

a) Classe criada em arquivo na pasta data/BaseDatabase.ts

b) O método destroyConnection foi implementado em todos os endpoints.