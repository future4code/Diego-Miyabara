# Exercício 1

a) Eu acredito que id's que sejam strings ao invés de numbers possuem uma combinação muito maior de ids, desta maneira acredito que seja mais seguro.

b) Criado o arquivo IdGenerator.ts com a classe.

# Exerício 2

a) A função createUser está recebendo 3 parâmetros, id, email e password e enviando a query para o banco de dados na tabela userTableName.

b) CREATE TABLE User (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

c) Criado o arquivo na pasta data/UserDatabase.ts

d)
const idGenerator = new IdGenerator()
const newId = idGenerator.generate()
const newUser = new UserDatabase();
newUser.createUser(newId, "diego@gmail.com", "12312312312")

# Exercício 3

a) Ela transforma a informação que estamos recebendo do arquivo .env em string, precisamos dela pois obrigatoriamente a chave secreta tem que ser string, e no arquivo externo não é especificado qual tipo essa chave é.

b) Criado o arquivo na pasta services/Authenticator.ts

# Exercício 4

a)
b)
c)
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

# Exercício 5

a) Alteração feita com a criação de um novo metodo getUserByEmail no arquivo data/UserDatabase.ts.
b)
// const newUser = new UserDatabase()
// newUser.getUserByEmail("diego@gmail.com")
retorno foi 
RowDataPacket {
  id: '19b32549-0cba-4a8a-abd3-2af077e90eac',
  email: 'diego@gmail.com',
  password: '12312312312'
}

# Exercício 6

a) e b)

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

# Exercício 7

a) é a tipagem do retorno da verificação do jwt, precisamos usá-la pois o retorno da verificação pode ser um objeto diferente dependendo das informações que passamos para o gerar o token.
b) Alteração feita no arquivo services/Authenticator.ts

# Exercício 8

a) Adicionado o método que pega o usuário pelo Id no arquivo UserDatabase.ts

b) app.get("/user/profile", async (req: Request, res: Response) => {
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