import { UserBusiness } from "../src/business/UserBusiness"
import { UserDatabase } from "../src/data/UserDatabase"
import { User, UserRole } from "../src/model/User"


const userDatabase = {
    createUser: jest.fn( async(user: User) => {return {token:"fake token"}}),
    login: jest.fn(async(email: string, password: string) => {return {token:"fake token"}})
} as any

const idGenerator = {
    generate: jest.fn(() => "id mock")
} as any

const hashManager = {
    hash: jest.fn(async(password: string) => "cypherPassword"),
    compare: jest.fn(async(password: string, cypherPassword: string) => false)
}as any

const authenticator = {
    generateToken: jest.fn((payload: {id: string, role: UserRole}) => "fake token"),
    getData: jest.fn((token: string) => {return {id: "id", role: "ADMIN"}})
} as any

const userBusiness: UserBusiness = new UserBusiness(userDatabase,idGenerator,hashManager,authenticator)

describe("endpoint create user", () => {
    test("Return error when no name is not informed", async () => {
        expect.assertions(2)
        try {
            const id = idGenerator.generate
            const user = {
                name:"",
                email:"diego@gmail.com",
                password: "Labenu123456",
                role: "ADMIN"
            }
            await userBusiness.createUser(user)
        } catch (error) {
            expect(error.message).toBe("All inputs must be filled!")
            expect(error.code).toBe(422)
        }
    })

    test("Return error when no email is not informed", async () => {
        expect.assertions(2)
        try {
            const id = idGenerator.generate
            const user = {
                name:"Diego Miyabara",
                email:"",
                password: "Labenu123456",
                role: "ADMIN"
            }
            await userBusiness.createUser(user)
        } catch (error) {
            expect(error.message).toBe("All inputs must be filled!")
            expect(error.code).toBe(422)
        }
    })

    test("Return error when no password is not informed", async () => {
        expect.assertions(2)
        try {
            const id = idGenerator.generate
            const user = {
                name:"Diego Miyabara",
                email:"diego@gmail.com",
                password: "",
                role: "ADMIN"
            }
            await userBusiness.createUser(user)
        } catch (error) {
            expect(error.message).toBe("All inputs must be filled!")
            expect(error.code).toBe(422)
        }
    })

    test("Return error when email is invalid", async () => {
        expect.assertions(2)
        try {
            const id = idGenerator.generate
            const user = {
                name:"Diego Miyabara",
                email:"diegogmail.com",
                password: "Labenu123456",
                role: "ADMIN"
            }
            await userBusiness.createUser(user)
        } catch (error) {
            expect(error.message).toBe("Invalid email")
            expect(error.code).toBe(422)
        }
    })

    test("Return error when password is invalid", async () => {
        expect.assertions(2)
        try {
            const id = idGenerator.generate
            const user = {
                name:"Diego Miyabara",
                email:"diego@gmail.com",
                password: "labenu123456",
                role: "ADMIN"
            }
            await userBusiness.createUser(user)
        } catch (error) {
            expect(error.message).toBe("Password must have at least 8 characters, have one caps and one lower case!")
            expect(error.code).toBe(422)
        }
    })

    test("Return error when user role is invalid", async () => {
        expect.assertions(2)
        try {
            const user = {
                name:"Diego Miyabara",
                email:"diego@gmail.com",
                password: "Labenu123456",
                role: "REN"
            }
            await userBusiness.createUser(user)
        } catch (error) {
            expect(error.message).toBe("Roles can only be assigned as NORMAL or ADMIN")
            expect(error.code).toBe(422)
        }
    })

    test("Return sucess when all parameters are correct", async () => {
        const user = {
            name:"Diego Miyabara",
            email:"diego@gmail.com",
            password: "Labenu123456",
            role: "ADMIN"
        }
        const token = await userBusiness.createUser(user)

        expect(token).toBe("fake token")        
    })
})