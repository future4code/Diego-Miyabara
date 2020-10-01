import { UserBusiness } from "../src/business/UserBusiness"
import { stringToUserRole, User, UserRole } from "../src/model/User"
import { TokenGenerator } from '../src/services/tokenGenerator'

const userDatabase = {
   createUser: jest.fn(
      async (user: User) => { }
   ),
   getUserByEmail: jest.fn(
      (email: string) => undefined
   )
} as any
const idGenerator = {
   generate: jest.fn(() => "id mock")
} as any
const hashGenerator = {
   hash: jest.fn((password: string) => "cypher password"),
   compareHash: jest.fn(
      async (s: string, hash: string) => false
   )
} as any
const tokenGenerator = {
   generate: jest.fn(
      (payload: { id: string, role: UserRole }) => "token de mentirinha"
   )
} as any

const userBusiness: UserBusiness = new UserBusiness(
   userDatabase,
   idGenerator,
   hashGenerator,
   tokenGenerator
)

describe("Testa o método de cadastro", () => {

   test("Deve retornar erro quando um nome não for passado", async () => {
      expect.assertions(2)

      try {
         await userBusiness.signup(
            "",
            "astrodev@labenu.com.br",
            "bananinha",
            "ADMIN"
         )
      } catch (error) {
         expect(error.message).toBe("Missing input")
         expect(error.statusCode).toBe(422)
      }
   })

   test("Deve retornar erro quando um email não for passado", async () => {
      expect.assertions(2)

      try {
         await userBusiness.signup(
            "Astrodev",
            "",
            "bananinha",
            "ADMIN"
         )
      } catch (error) {
         expect(error.message).toBe("Missing input")
         expect(error.statusCode).toBe(422)
      }
   })
   test("Deve retornar erro quando uma senha não for passada", async () => {
      expect.assertions(2)

      try {
         await userBusiness.signup(
            "Astrodev",
            "astrodev@labenu.com.br",
            "",
            "ADMIN"
         )
      } catch (error) {
         expect(error.message).toBe("Missing input")
         expect(error.statusCode).toBe(422)
      }
   })

   test("Deve retornar erro quando um role não for passado", async () => {
      expect.assertions(2)

      try {
         await userBusiness.signup(
            "Astrodev",
            "astrodev@labenu.com.br",
            "bananinha",
            null as any
         )
      } catch (error) {
         expect(error.message).toBe("Missing input")
         expect(error.statusCode).toBe(422)
      }
   })

   test("Deve retornar erro quando o email for inválido", async () => {
      expect.assertions(2)

      try {
         await userBusiness.signup(
            "Astrodev",
            "astrodevlabenu.com.br",
            "bananinha",
            "ADMIN"
         )
      } catch (error) {
         expect(error.message).toBe("Invalid email")
         expect(error.statusCode).toBe(422)
      }
   })

   test("Deve retornar erro quando a senha for inválida", async () => {
      expect.assertions(2)

      try {
         await userBusiness.signup(
            "Astrodev",
            "astrodev@labenu.com.br",
            "uva",
            "ADMIN"
         )
      } catch (error) {
         expect(error.message).toBe("Invalid password")
         expect(error.statusCode).toBe(422)
      }
   })

   test("Deve retornar erro quando o role for inválido", async () => {

      // NÃO É UNITÁRIO !!!!!!!!
      expect.assertions(2)

      try {
         await userBusiness.signup(
            "Astrodev",
            "astrodev@labenu.com.br",
            "bananinha",
            "ADMINISTRADOR"
         )
      } catch (error) {
         expect(error.message).toBe("Invalid user role")
         expect(error.statusCode).toBe(422)
      }
   })

   test("Deve retornar um token de acesso", async () => {


      const result = await userBusiness.signup(
         "Astrodev",
         "astrodev@labenu.com.br",
         "bananinha",
         "ADMIN"
      )

      expect(result.accessToken).toBe("token de mentirinha")

   })
})

describe("Testa o método de login", () => {

   test("Deve retornar erro quando um email não for passado", async () => {
      expect.assertions(2)

      try {
         await userBusiness.login(
            "",
            "bananinha"
         )
      } catch (error) {
         expect(error.message).toBe("Missing input")
         expect(error.statusCode).toBe(422)
      }
   })

   test("Deve retornar erro quando uma senha não for passada", async () => {
      expect.assertions(2)

      try {
         await userBusiness.login(
            "astrodev@labenu.com.br",
            ""
         )
      } catch (error) {
         expect(error.message).toBe("Missing input")
         expect(error.statusCode).toBe(422)
      }
   })

   test("Deve retornar erro quando o usuário não for encontrado", async () => {
      expect.assertions(2)

      try {
         await userBusiness.login(
            "astrodev@labenu.com.br",
            "bananinha"
         )
      } catch (error) {
         expect(error.message).toBe("User not found")
         expect(error.statusCode).toBe(404)
      }
   })

   test("Deve retornar erro quando a senha estiver incorreta", async () => {
      expect.assertions(2)

      userDatabase.getUserByEmail = (email: string) => {
         return new User(
            "id",
            "Astrodev",
            "astrodev@labenu.com.br",
            "bananinha",
            UserRole.ADMIN
         )
      }

      try {
         await userBusiness.login(
            "astrodev@labenu.com.br",
            "bananinha"
         )
      } catch (error) {
         expect(error.message).toBe("Invalid password")
         expect(error.statusCode).toBe(422)
      }
   })

   test("Deve retornar um token de acesso", async () => {

      hashGenerator.compareHash = jest.fn(
         async (s: string, hash: string) => true
      )

      const result = await userBusiness.login(
         "astrodev@labenu.com.br",
         "bananinha"
      )

      expect(result.accessToken).toBe("token de mentirinha")

   })
})

describe("UserBusiness getUserById test", () => {
   let userDatabase = {}
   let hashGenerator = {}
   let tokenGenerator = {}
   let idGenerator = {}

   test("Return error user not found when user does not exist", async () => {
      expect.assertions(2)
      try {
         const getUserById = jest.fn()
         userDatabase = {getUserById}

         const userBusiness = new UserBusiness(userDatabase as any, idGenerator as any, hashGenerator as any, tokenGenerator as any)

         await userBusiness.getUserById("invalid id")
      } catch (error) {
         expect(error.statusCode).toBe(404)
         expect(error.message).toBe("User not found")
      }
   })

   test("Return sucess when all info are correct", async () => {
      const getUserById = jest.fn((id: string) => 
         new User("id", "Diego", "diego@gmail.com", "cypherPassword", stringToUserRole("ADMIN"))
      )

      userDatabase = {getUserById}

      const userBusiness = new UserBusiness(userDatabase as any, idGenerator as any, hashGenerator as any, tokenGenerator as any)

      const user = await userBusiness.getUserById("id")

      expect(getUserById).toHaveBeenCalledWith("id")
      expect(user).toEqual({
         id: "id",
         name: "Diego",
         email: "diego@gmail.com",
         role: UserRole.ADMIN
      })
   })
})

describe("getAllUsers tests", () => {
   let userDatabase = {}
   let hashGenerator = {}
   let tokenGenerator = {}
   let idGenerator = {}
   test("Fail to authorize request", async () => {
      expect.assertions(2)
      try {
         const userBusiness = new UserBusiness(userDatabase as any,idGenerator as any, hashGenerator as any, tokenGenerator as any)

         await userBusiness.getAllUsers(UserRole.NORMAL)
      } catch (error) {
         expect(error.statusCode).toBe(400)
         expect(error.message).toBe("Only ADMINs are allowed to use this functionality.")
      }
   })

   test("Sucessfull get users", async () => {
      const getAllUsers = jest.fn(() => [
         new User("id", "Diego", "diego@gmail.com", "cypherPassword", stringToUserRole("ADMIN"))
      ])
      userDatabase = {getAllUsers}

      const userBusiness = new UserBusiness(userDatabase as any, idGenerator as any, hashGenerator as any, tokenGenerator as any)

      const result = await userBusiness.getAllUsers(UserRole.ADMIN)

      expect(getAllUsers).toHaveBeenCalled()
      expect(result).toContainEqual({
         id: "id",
         name: "Diego",
         email: "diego@gmail.com",
         role: UserRole.ADMIN
      })
   })
})

describe("test getProfile", () => {
   let userDatabase = {}
   let hashGenerator = {}
   let tokenGenerator = {}
   let idGenerator = {}
   test("Fail to getProfile user undefined", async () => {
      expect.assertions(2)
      try {
         const getProfile = jest.fn()
         userDatabase = {getProfile}
         const userBusiness = new UserBusiness(userDatabase as any, idGenerator as any, hashGenerator as any, tokenGenerator as any)

         await userBusiness.getProfile("invalid Id")
      } catch (error) {
         expect(error.statusCode).toBe(404)
         expect(error.message).toBe("User not found")
      }
   })

   test("getProfile sucessfully", async() => {
      const getProfile = jest.fn((id: string) => 
      new User("id", "Diego", "diego@gmail.com", "cypherPassword", UserRole.ADMIN))
      userDatabase = { getProfile }

      const userBusiness = new UserBusiness(userDatabase as any, idGenerator as any, hashGenerator as any, tokenGenerator as any)

      const response = await userBusiness.getProfile("id")
      expect(getProfile).toHaveBeenCalledTimes(1)
      expect(response.name).toBe("Diego")
   })
})