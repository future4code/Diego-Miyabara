import {Cassino, LOCATION, NACIONALITY, Result, User, verifyAge} from '../src/ex3'

describe("Testes de usuários permitidos", () => {
//Exercício 4a
    test("Usuário brasileiro permitido em um cassino brasileiro", () => {
        const user: User = {
            name: "Diego",
            age: 30,
            nacionality: NACIONALITY.BRAZILLIAN
        }
        const users: User[] = [user]
        const cassino: Cassino = {
            name: "Sorte Brasileira",
            location: LOCATION.BRAZIL
        }

        const resultado:Result = verifyAge(cassino, users)
        expect(resultado.brazillians.allowed).toContain("Diego")
    })
//Exercício 4b
    test("Usuário americano permitido em um cassino brasileiro", () => {
        const user: User = {
            name: "Alvin",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }
        const users: User[] = [user]
        const cassino: Cassino = {
            name: "Sorte Brasileira",
            location: LOCATION.BRAZIL
        }

        const resultado: Result = verifyAge(cassino, users)
        expect(resultado.americans.allowed).toContain("Alvin")
    })
//Exercício 4c
    test("Dois usuários brasileiros e dois americanos, todos com 19 anos em um estabelecimento americano", () => {
        const user1: User = {
            name: "Alvin",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }
        const user2: User = {
            name: "Jhonny",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }
        const user3: User = {
            name: "Diego",
            age: 19,
            nacionality: NACIONALITY.BRAZILLIAN
        }
        const user4: User = {
            name: "Airton",
            age: 19,
            nacionality: NACIONALITY.BRAZILLIAN
        }
        const users: User[] = [user1, user2, user3, user4]
        const cassino: Cassino = {
            name: "Las Vegas Cassino",
            location: LOCATION.EUA
        }

        const resultado: Result = verifyAge(cassino, users)

        expect(resultado.americans.allowed.length).toBe(0)
        expect(resultado.brazillians.allowed.length).toBe(0)
    })
//Exercício 4d
    test("Dois brasileiros com 19 anos e 2 americanos com 21 anos, em um estabelecimento americano", () => {
        const user1: User = {
            name: "Alvin",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }
        const user2: User = {
            name: "Jhonny",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }
        const user3: User = {
            name: "Diego",
            age: 19,
            nacionality: NACIONALITY.BRAZILLIAN
        }
        const user4: User = {
            name: "Airton",
            age: 19,
            nacionality: NACIONALITY.BRAZILLIAN
        }
        const users: User[] = [user1, user2, user3, user4]
        const cassino: Cassino = {
            name: "Las Vegas Cassino",
            location: LOCATION.EUA
        }

        const resultado:Result = verifyAge(cassino, users)

        expect(resultado.americans.allowed).toEqual(["Alvin", "Jhonny"])
        expect(resultado.brazillians.allowed.length).toBe(0)
    })
//Exercício 5a 
    test("Brasileiro permitido em um estabelecimento brasileiro array com quantidade de itens entre 0 e 2", () => {
        const user: User = {
            name: "Diego",
            age: 19,
            nacionality: NACIONALITY.BRAZILLIAN
        }
        const users: User[] = [user]
        const cassino: Cassino = {
            name: "Sorte Brasileira",
            location: LOCATION.BRAZIL
        }

        const resultado: Result = verifyAge(cassino, users)

        expect(resultado.brazillians.allowed.length).toBeLessThan(2)
        expect(resultado.brazillians.allowed.length).toBeGreaterThan(0)
    })
//Exercício 5b
    test("Usuário americano permitido em estabelecimento brasileiro unallowed = 0", () => {
        const user: User = {
            name: "Alvin",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }
        const users: User[] = [user]
        const cassino: Cassino = {
            name: "Sorte Brasileira",
            location: LOCATION.BRAZIL
        }

        const resultado: Result = verifyAge(cassino, users)

        expect(resultado.americans.unallowed.length).toEqual(0)
    })
//Exercício 5c
    test("2 usuários brasileiros e 2 americanos todos com 19 anos, em um estabelecimento nos EUA", () => {
        const user1: User = {
            name: "Alvin",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }
        const user2: User = {
            name: "Jhonny",
            age: 19,
            nacionality: NACIONALITY.AMERICAN
        }
        const user3: User = {
            name: "Diego",
            age: 19,
            nacionality: NACIONALITY.BRAZILLIAN
        }
        const user4: User = {
            name: "Airton",
            age: 19,
            nacionality: NACIONALITY.BRAZILLIAN
        }
        const users: User[] = [user1, user2, user3, user4]
        const cassino: Cassino = {
            name: "Las Vegas Cassino",
            location: LOCATION.EUA
        }

        const resultado: Result = verifyAge(cassino, users)

        expect(resultado.americans.unallowed).toContain("Jhonny")
        expect(resultado.brazillians.unallowed).toContain("Diego")
    })
//Exercício 5d
    test("", () => {
        const user1: User = {
            name: "Alvin",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }
        const user2: User = {
            name: "Jhonny",
            age: 21,
            nacionality: NACIONALITY.AMERICAN
        }
        const user3: User = {
            name: "Diego",
            age: 19,
            nacionality: NACIONALITY.BRAZILLIAN
        }
        const user4: User = {
            name: "Airton",
            age: 19,
            nacionality: NACIONALITY.BRAZILLIAN
        }
        const users: User[] = [user1, user2, user3, user4]
        const cassino: Cassino = {
            name: "Las Vegas Cassino",
            location: LOCATION.EUA
        }

        const resultado:Result = verifyAge(cassino, users)

        expect(resultado.americans.unallowed.length).toBeLessThan(1)
        expect(resultado.americans.allowed.length).toBe(2)
    })
})