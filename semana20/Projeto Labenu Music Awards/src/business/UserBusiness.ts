import { UserInputDTO, LoginInputDTO, User, UserRole } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";

export class UserBusiness {

    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager ,
        private authenticator: Authenticator
    ){}

    async createUser(user: UserInputDTO) {        
        if(!user.name || !user.email || !user.password ) {
            throw new Error("All inputs must be filled!")
        }

        if (user.email.indexOf("@") === -1) {
            throw new Error("Invalid email");
        }

        if(!user.password.match('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$')) {
            throw new Error ("Password must have at least 8 characters, have one caps and one lower case!")
        }

        if(!user.role) {
            user.role = UserRole.NORMAL
        }

        if(User.stringToUserRole(user.role) !== UserRole.ADMIN && User.stringToUserRole(user.role) !== UserRole.NORMAL) {
            throw new Error("Roles can only be assigned as NORMAL or ADMIN")
        }

        const id = this.idGenerator.generate();

        const hashPassword = await this.hashManager.hash(user.password);

        await this.userDatabase.createUser(id, user.name, user.email, hashPassword, user.role);

        const accessToken = this.authenticator.generateToken({ id, role: user.role });

        return accessToken;
    }

    async login(user: LoginInputDTO) {
        if(!user.email || !user.password) {
            throw new Error("Please inform your email and your password.")
        }

        const userFromDB = await this.userDatabase.getUserByEmail(user.email);

        if (!userFromDB) {
            throw new Error("User not found.")
        }

        const hashCompare = await this.hashManager.compare(user.password, userFromDB.getPassword());

        const accessToken = this.authenticator.generateToken({ id: userFromDB.getId(), role: userFromDB.getRole() });

        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        return accessToken;
    }
}