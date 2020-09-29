import { Character, performAttack2, recoverCharacters, validateCharacter } from "../src/ex1"

describe("Validade Character", () => {
    //Exercício 2a
    test("Validation false for empty name", () => {
        const char: Character = {
            name: "",
            life: 500,
            strength: 350,
            defense: 400
        }

        const validate = validateCharacter(char)

        expect(validate).toBe(false)
    })
    //Exercício 2b
    test("Validation false for life 0", () => {
        const char: Character = {
            name: "Sub zero",
            life: 0,
            strength: 350,
            defense: 400
        }
        const validate = validateCharacter(char)

        expect(validate).toBe(false)
    })
    //Exercício 2c
    test("Validation false for strength 0", () => {
        const char: Character = {
            name: "Sub zero",
            life: 500,
            strength: 0,
            defense: 400
        }
        const validate = validateCharacter(char)

        expect(validate).toBe(false)
    })
    //Exercício 2d
    test("Validation false for defense 0", () => {
        const char: Character = {
            name: "Sub zero",
            life: 500,
            strength: 350,
            defense: 0
        }
        const validate = validateCharacter(char)

        expect(validate).toBe(false)
    })
    //Exercício 2e
    test("Validation false for negative life", () => {
        const char: Character = {
            name: "Sub zero",
            life: -500,
            strength: 350,
            defense: 150
        }
        const validate = validateCharacter(char)

        expect(validate).toBe(false)
    })
    //Exercício 2f
    test("Validation true for all valid informations", () => {
        const char: Character = {
            name: "Sub zero",
            life: 500,
            strength: 350,
            defense: 150
        }
        const validate = validateCharacter(char)

        expect(validate).toBe(true)
    })
})

describe("Testing Mocks", () => {
    //Exercício 4b
    test("Creating validator mock result true", () => {
        const validatorMock = jest.fn(() => {
            return true
        })
    })
    //Exercício 4c
    test("Creating validator mock result false", () => {
        const validatorMock = jest.fn(() => {
            return false
        })
    })
})

describe("Testing perform attack", () => {
    //Exercício 5a
    test("Successfull attack", () => {
        const validatorMock = jest.fn(() => {
            return true
        })

        const attacker: Character = {
            name: "Pikeman",
            life: 1000,
            defense: 200,
            strength: 800
        }

        const defender: Character = {
            name: "Mechanic",
            life: 1200,
            defense: 600,
            strength: 400
        }

        performAttack2(attacker, defender, validatorMock as any)

        expect(defender.life).toBe(1000)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })
    //Exercício 5b
    test("Mock function returning false for invalid character", () => {
        expect.assertions(4)
        const validatorMock = jest.fn(() => {
            return false
        })

        const attacker: Character = {
            name: "Pikeman",
            life: 1000,
            defense: 200,
            strength: 800
        }

        const defender: Character = {
            name: "Mechanic",
            life: 1200,
            defense: 600,
            strength: 400
        }

        try {
            performAttack2(attacker, defender, validatorMock)
        } catch (error) {
            expect(error.message).toBe("Invalid Character!")
            expect(validatorMock).toHaveBeenCalled()
            expect(validatorMock).toHaveBeenCalledTimes(1)
            expect(validatorMock).toHaveReturnedTimes(1)
        }
    })
    //Exercício 6 - 1
    test("Attacker's attack inferior to Defender's defense", () => {
        expect.assertions(4)
        const validatorMock = jest.fn(() => {
            return true
        })

        const attacker: Character = {
            name: "Mechanic",
            life: 1200,
            defense: 600,
            strength: 400
        }

        const defender: Character = {
            name: "Pikeman",
            life: 1000,
            defense: 450,
            strength: 800
        }

        try {
            performAttack2(attacker, defender, validatorMock)
        } catch (error) {
            expect(error.message).toBe("The attack had no effect!")
            expect(validatorMock).toHaveBeenCalled()
            expect(validatorMock).toHaveBeenCalledTimes(2)
            expect(validatorMock).toHaveReturnedTimes(2)
        }
    })
    //Exercício 6 - 2
    test("Attacker's attack equals to Defender's defense", () => {
        const validatorMock = jest.fn(() => {
            return true
        })

        const attacker: Character = {
            name: "Mechanic",
            life: 1200,
            defense: 600,
            strength: 400
        }

        const defender: Character = {
            name: "Pikeman",
            life: 1000,
            defense: 400,
            strength: 800
        }

        performAttack2(attacker, defender, validatorMock)

        expect(defender.life).toBe(1000)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })
    //Exercício 6 - 3
    test("Defender's life goes to zero", () => {
        const validatorMock = jest.fn(() => {
            return true
        })

        const attacker: Character = {
            name: "Mechanic",
            life: 1200,
            defense: 600,
            strength: 600
        }

        const defender: Character = {
            name: "Pikeman",
            life: 200,
            defense: 400,
            strength: 800
        }

        performAttack2(attacker,defender,validatorMock)

        expect(defender.life).toBe(0)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })
    //Exercício 6 - 4
    test("Defender's life goes less than zero", () => {
        const validatorMock = jest.fn(() => {
            return true
        })

        const attacker: Character = {
            name: "Mechanic",
            life: 1200,
            defense: 600,
            strength: 700
        }

        const defender: Character = {
            name: "Pikeman",
            life: 200,
            defense: 400,
            strength: 800
        }

        performAttack2(attacker,defender,validatorMock)

        expect(defender.life).toBeLessThan(0)
        expect(validatorMock).toHaveBeenCalled()
        expect(validatorMock).toHaveBeenCalledTimes(2)
        expect(validatorMock).toHaveReturnedTimes(2)
    })
})

describe("Recover Character", () => {
    test("Sucessfull healing", () => {
        const chars: Character[] = [
            {
                name: "Pikeman",
                life: 200,
                defense: 400,
                strength: 800
            },
            {
                name: "Mechanic",
                life: 1200,
                defense: 600,
                strength: 700
            }
        ]

        recoverCharacters(chars)

        expect(chars[0].life).toBe(1500)
        expect(chars[1].life).toBe(1500)
    })
})