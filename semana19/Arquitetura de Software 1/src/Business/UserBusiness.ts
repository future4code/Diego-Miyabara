import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"


export class UserBusiness {

    public async signUp(name: string, email: string, password: string, role?: string): Promise<string> {
        try {
            if(!name || !email || !password){
                throw new Error("Preencha todos os campos obrigatórios!")
            }
            if(password.length < 6) {
                throw new Error ("A senha deve conter no mínimo 6 caracteres")
            }
    
            if(email.indexOf("@") === -1){
                throw new Error ("Informe um email válido!")
            }
    
            if(!role){
                role = "NORMAL"
            }
    
            const idGenerator = new IdGenerator()
            const id = idGenerator.generate()
    
            const hashManager = new HashManager()
            const cypherPassword = await hashManager.hash(password)
    
            const userDatabase = new UserDatabase()
            await userDatabase.createUser(id, name, email, cypherPassword, role)
    
            const authenticator = new Authenticator()
            const token = authenticator.generateToken({id: id, role: role})
    
            return token
        } catch (error) {
            throw new Error(error.message || "Erro ao criar o usuário, favor entrar em contato com o administrador!")
        }        
    }

    public async login(email: string, password: string): Promise<string> {
        try {
            if(!email || !password){
                throw new Error("Informe todos os campos.")
            }

            const userDatabase = new UserDatabase()
            const user = await userDatabase.getUserByEmail(email)

            const hashManager = new HashManager()
            const validadePassword = await hashManager.compare(password, user.password)

            if(!validadePassword){
                throw new Error("Usuário e/ou senha incorretos!")
            }

            const authenticator = new Authenticator()
            const token = authenticator.generateToken({id: user.id, role: user.role})

            return token
        } catch (error) {
            throw new Error(error.message || "Erro ao fazer login, favor entrar em contato com o administrador!")
        }
    }

    public async getUsers(token: string): Promise<any> {
        const userDatabase = new UserDatabase()
        const authenticator = new Authenticator()
        authenticator.getData(token)

        return await userDatabase.getAllUsers()
    }

    public async deleteUser(token:string): Promise<void> {
        const authenticator = new Authenticator()
        const user = authenticator.getData(token)

        if(user.role !== "ADMIN"){
            throw new Error("Somente ADMINS podem excluir usuários!")
        }
    }
}