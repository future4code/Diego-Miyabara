import { UserInputDTO, LoginInputDTO, User, UserRole } from "../model/User";
import { UserDatabase } from "../data/UserDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { HashManager } from "../services/HashManager";
import { Authenticator } from "../services/Authenticator";
import { InvalidParameterError } from "../error/InvalidParameterError";
import { NotFoundError } from "../error/NotFoundError";

export class UserBusiness {

    constructor(
        private userDatabase: UserDatabase,
        private idGenerator: IdGenerator,
        private hashManager: HashManager ,
        private authenticator: Authenticator
    ){}

    async createUser(user: UserInputDTO) {        
        if(!user.name || !user.email || !user.password ) {
            throw new InvalidParameterError("All inputs must be filled!")
        }

        if (user.email.indexOf("@") === -1) {
            throw new InvalidParameterError("Invalid email");
        }

        if(!user.password.match('(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])([a-zA-Z0-9]{8,})$')) {
            throw new InvalidParameterError ("Password must have at least 8 characters, have one caps and one lower case!")
        }

        if(!user.role) {
            user.role = UserRole.NORMAL
        }

        if(user.role !== "ADMIN" && user.role !== "NORMAL") {
            throw new InvalidParameterError("Roles can only be assigned as NORMAL or ADMIN")
        }

        const id = this.idGenerator.generate();

        const hashPassword = await this.hashManager.hash(user.password);

        await this.userDatabase.createUser(id, user.name, user.email, hashPassword, user.role);

        const accessToken = this.authenticator.generateToken({ id, role: user.role });

        return accessToken;
    }

    async login(user: LoginInputDTO) {
        if(!user.email || !user.password) {
            throw new InvalidParameterError("Please inform your email and your password.")
        }

        const userDb = await this.userDatabase.getUserByEmail(user.email);

        if (!userDb) {
            throw new NotFoundError("User not found.")
        }

        const hashCompare = await this.hashManager.compare(user.password, userDb && userDb.getPassword());

        const accessToken = this.authenticator.generateToken({ id: userDb && userDb.getId(), role: userDb && userDb.getRole() });

        if (!hashCompare) {
            throw new Error("Invalid Password!");
        }

        return accessToken;
    }
}